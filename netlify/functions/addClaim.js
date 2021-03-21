exports.handler = async function(event, context) {
  const body = parseBody(event);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({message: `Received this firstName: ${body ? body.firstName : undefined}`})
  };
}

const parseBody = (event) => {
  if (!event.body || event.body.length === 0) {
    return undefined;
  }
  return JSON.parse(event.body);
};