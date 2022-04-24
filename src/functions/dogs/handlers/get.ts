import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { Handler } from 'aws-lambda';

const getDog: Handler = async (event: any) => {
  // In real world project, you may need to save it to database
  // and return result to user
  return formatJSONResponse({
    id: event.pathParameters?.id,
    name: 'My very-old dog',
    age: 100,
    type: 'Alaska',
  });
};

export const main = middyfy(getDog);
