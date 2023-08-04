const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda");
// const casual = require('casual');

async function async_lambda_invoke(payload){
  console.log(payload);
  const config = { 
    region: 'us-east-1'
  };
  const client = new LambdaClient(config);
  const input = { // InvocationRequest
  FunctionName: 'geolocation-dev-coordinates', // required
  InvocationType: 'RequestResponse', // Event : cuando solo quieres ejecutar y no requieres respuesta
  LogType: "None", // Tail
  Payload: JSON.stringify(payload)
};
const command = new InvokeCommand(input);
const response = await client.send(command);
console.log('RESPONSE:', response);
//  console.log('PAYLOAD:', Buffer.from(response.Payload).toString());
//console.log('PAYLOAD:', response.Payload.length);
return JSON.parse(Buffer.from(response.Payload).toString());
}

module.exports.handler = async function(event) {
  // const payload = casual.card_data; 
  const payload = {
      address1: "337 20th St",
      address2: "",
      city: "Miami Beach",
      state: "FL",
      postalCode: "33139"
  }
  const response = await async_lambda_invoke(payload)
  const dbUser = {status:"SUCCESS", response}
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(dbUser)
  };
};
