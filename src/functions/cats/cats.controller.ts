import { handlerPath } from '@libs/handler-resolver';

export const catsController = {
  // Get cat
  // getCat: {
  //   name: "get-cat",
  //   handler: `${handlerPath(__dirname)}/handlers/get.main`,
  //   events: {
  //     httpApi: {
  //       method: "GET",
  //       path: "api/cats/{id}",
  //     },
  //   },
  // package: {
  //   patterns: [
  //     'src/functions/cats/get.js'
  //   ]
  // }
  // },

  // Create cat
  createCat: {
    name: 'create-cat',
    handler: handlerPath(__dirname, 'handlers/create.main'),
    events: [
      {
        httpApi: {
          method: 'POST',
          path: '/cats',
        },
      },
    ],
    package: {
      patterns: ['src/functions/cats/handlers/create.js'],
    },
  },
};
