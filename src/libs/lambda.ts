import middy from '@middy/core';
import httpEventNormalizer from '@middy/http-event-normalizer';
import middyJsonBodyParser from '@middy/http-json-body-parser';
// import validator from '@middy/validator';

export const middyfy = (handler) => {
  return middy(handler).use(middyJsonBodyParser()).use(httpEventNormalizer());
};
