import { handlerPath } from "@libs/handler-resolver";
export const dogController = {
  getDog: {
    name: 'get-dog',
    handler: handlerPath(__dirname, 'handlers/get.main'),
    events: [
      {
        httpApi: {
          method: 'POST',
          path: '/dogs/{id}',
        },
      },
    ],
    package: {
      patterns: ['src/functions/dogs/handlers/create.js'],
    },
  },
}