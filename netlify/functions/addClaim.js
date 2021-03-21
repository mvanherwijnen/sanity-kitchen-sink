exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST"
    },
    body: JSON.stringify({message: `Received this firstName: ${JSON.parse(event.body).firstName}`})
  };
}