

exports.handler = async function(event, context) {
  console.log('requestBody', event.body);
  const body = parseBody(event);
  const pipedriveClient = require('pipedrive');
  pipedriveClient.Configuration.apiToken = process.env.PIPEDRIVE_API_TOKEN;
  const name = `${body.firstName} ${body.lastName}`;
  const person = {
    name,
    email: body.email ? [body.email] : [],
    phone: body.phone ? [body.phone] : []
  }

  const personResponse = await pipedriveClient.PersonsController.addAPerson(person);
  console.log('person', personResponse)

  const deal = {
    title: name,
    person_id: personResponse.id,
  };
  
  const dealResponse = await pipedriveClient.DealsController.addADeal(deal);
  console.log('deal', dealResponse)

  if (body.situation) {
    const noteResponse = await pipedriveClient.NotesController.addANote({
      content: `<p>${body.situation}</p>`,
      deal_id: dealResponse.id
    });
    console.log('note', noteResponse)
  }
  
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({message: `Received this response`, dealResponse})
  };
}

const parseBody = (event) => {
  if (!event.body || event.body.length === 0) {
    return undefined;
  }
  return JSON.parse(event.body);
};