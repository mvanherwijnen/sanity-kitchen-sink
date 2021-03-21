

exports.handler = async function(event, context) {
  const body = parseBody(event);
  const pipedriveClient = require('pipedrive');
  pipedriveClient.Configuration.apiToken = process.env.PIPEDRIVE_API_TOKEN;
  const name = `${body.firstName} ${body.lastName}`;
  let person = [];
  person['name'] = name;
  person['email'] = body.email ? [body.email] : []
  person['phone'] = body.phone ? [body.phone] : []

  const person = await pipedriveClient.PersonsController.addAPerson(person);

  let deal = [];
  deal['title'] = name;
  deal['person_id'] = person.id;

  const response = await pipedriveClient.DealsController.addADeal(deal);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({message: `Received this response`, response})
  };
}

const parseBody = (event) => {
  if (!event.body || event.body.length === 0) {
    return undefined;
  }
  return JSON.parse(event.body);
};