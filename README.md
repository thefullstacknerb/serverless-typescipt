# TheFullStackNerb - Serverless framework typescript
This project is used to support the topic here
https://thefullstacknerb.com/how-to-create-serverless-api-using-serverless-framework--typescript/(opens in a new tab)

## Installation/deployment instructions
### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

## Test your service
This service contains 2 Lambda functions triggered by API Gateway HTTP API

### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `name` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.

```
curl --location --request POST 'https://myApiEndpoint/cats' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Frederic",
    "age": 5,
    "type": "King Cat"
}'
```

## Template features

### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

```
.
src
 ┣ functions                # Contains modules by domain
 ┃ ┣ cats                   # Cats module
 ┃ ┃ ┣ handlers             # Store all Cats module's handlers   
 ┃ ┃ ┃ ┗ create.ts          # Handler function
 ┃ ┃ ┣ cats.controller.ts   # summarize all functions in Cats module
 ┃ ┃ ┗ index.ts
 ┃ ┣ dogs                   
 ┃ ┃ ┣ handlers
 ┃ ┃ ┃ ┗ get.ts
 ┃ ┃ ┣ dogs.controller.ts
 ┃ ┃ ┗ index.ts
 ┃ ┗ index.ts
 ┣ libs                     # Some shared stuffs generated by Serverless
 ┃ ┣ api-gateway.ts
 ┃ ┣ handler-resolver.ts
 ┃ ┗ lambda.ts
 ┣ roles                    # Contains roles that are used in the service
 ┃ ┣ default-role.ts        # Defaut role for all lambda functions
 ┃ ┗ index.ts
 ┗ shared                   # in case you want to share some utilities across modules
```

### 3rd party libraries

- [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts) - uses JSON-Schema definitions used by API Gateway for HTTP request validation to statically generate TypeScript types in your lambda's handler code base
- [middy](https://github.com/middyjs/middy) - middleware engine for Node.Js lambda. This template uses [http-json-body-parser](https://github.com/middyjs/middy/tree/master/packages/http-json-body-parser) to convert API Gateway `event.body` property, originally passed as a stringified JSON, to its corresponding parsed object
- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file

### Advanced usage

Any tsconfig.json can be used, but if you do, set the environment variable `TS_NODE_CONFIG` for building the application, eg `TS_NODE_CONFIG=./tsconfig.app.json npx serverless webpack`
