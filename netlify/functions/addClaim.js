

exports.handler = async function(event, context) {
  console.log(event.body);
  const body = parseBody(event);
  const pipedriveClient = require('pipedrive');
  pipedriveClient.Configuration.apiToken = process.env.PIPEDRIVE_API_TOKEN;
  const name = `${body.firstName} ${body.lastName}`;
  const person = {
    contentType: 'application/json',
    body: {
      name,
      email: body.email ? [body.email] : [],
      phone: body.phone ? [body.phone] : []
    }
  }

  try {
    const personResponse = await pipedriveClient.PersonsController.addAPerson(person);
    console.log(personResponse);

    const deal = {
      contentType: 'application/json',
      body: {
        title: name,
        person_id: personResponse.data.id,
      }
    };
    
    const dealResponse = await pipedriveClient.DealsController.addADeal(deal);
    console.log(dealResponse)
  
    if (body.situation) {
      const noteResponse = await pipedriveClient.NotesController.addANote({
        contentType: 'application/json',
        body: {
          content: `<p>${body.situation}</p>`,
          deal_id: dealResponse.data.id
        }
      });
      console.log(noteResponse)
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
  } catch (e) {
    console.log(e.message);
  }
}

const parseBody = (event) => {
  if (!event.body || event.body.length === 0) {
    return undefined;
  }
  return JSON.parse(event.body);
};