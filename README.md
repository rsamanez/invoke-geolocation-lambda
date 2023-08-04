<!--
title: 'Sample to invoke Geolocation lambda Function to get address coordinates'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->


## Sample to invoke Geolocation lambda Function to get address coordinates

### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying l2l to stage dev (us-east-1)

✔ Service deployed to stack l2l-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/invoke
functions:
  invoqueGeolocation: l2l-dev-lambda-three (1.9 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/invoke
```

response:

```json
{
    "status": "SUCCESS",
    "response": {
        "lat": 25.7962812,
        "lng": -80.1307368
    }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function lambda-three
```

Which should result in response similar to the following:

```
{
  address1: '337 20th St',
  address2: '',
  city: 'Miami Beach',
  state: 'FL',
  postalCode: '33139'
}
RESPONSE: {
  '$metadata': {
    httpStatusCode: 200,
    requestId: 'd19e922d-074f-4cd1-a15c-b840b8df7900',
    extendedRequestId: undefined,
    cfId: undefined,
    attempts: 1,
    totalRetryDelay: 0
  },
  ExecutedVersion: '$LATEST',
  Payload: Uint8ArrayBlobAdapter(36) [Uint8Array] [
    123,  34, 108,  97, 116, 34, 58, 50,  53,
     46,  55,  57,  54,  50, 56, 49, 50,  44,
     34, 108, 110, 103,  34, 58, 45, 56,  48,
     46,  49,  51,  48,  55, 51, 54, 56, 125
  ],
  StatusCode: 200
}
{
    "statusCode": 200,
    "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    },
    "body": "{\"status\":\"SUCCESS\",\"response\":{\"lat\":25.7962812,\"lng\":-80.1307368}}"
}
```


Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
