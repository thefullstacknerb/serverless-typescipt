import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { Handler } from 'aws-lambda';

const createCat: Handler = async (event: any) => {
  const { name, age, type } = event.body;
  // In real world project, you may need to save it to database
  // and return result to user
  return formatJSONResponse({
    id: 1,
    name,
    age,
    type,
  });
};

export const main = middyfy(createCat);
