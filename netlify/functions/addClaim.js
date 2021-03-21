const pipedriveClient = require('pipedrive');
const multipartParser = require('aws-lambda-multipart-parser');

exports.handler = async function(event, context) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({message: `options ok`})
    };
  }
  console.log(event.body);
  if (event.isBase64Encoded) {         
    event.body = Buffer.from(event.body, 'base64').toString();     
  }
  const data = multipartParser.parse(event, true)
  console.log(data);

  /*pipedriveClient.Configuration.apiToken = process.env.PIPEDRIVE_API_TOKEN;
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
      const noteResponse = await pipedriveClient.NotesController.addANote(
        {
          content: `<p>${body.situation}</p>`,
          dealId: dealResponse.data.id
        }
      );
      console.log(noteResponse)
    }

    const fileResponse = await pipedriveClient.FilesController.addFile()

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({message: `Received this response`, dealId: dealResponse.data.id})
    };
  } catch (e) {
    console.log(e.message);
  }*/
}