import handler from '../utils/handler';
import db from '../utils/db';

const uuid = require('uuid');

export const create = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const userId = event.requestContext.identity.cognitoIdentityId;
  const params = {
    TableName: process.env.MINIONS_TABLE,
    Item: {
      PK: `USER#${userId}`,
      SK: `USER#${userId}#ORDER#${uuid.v1()}`,
      products: data.products,
      createdAt: Date.now(),
    },
  };

  await db.put(params).promise();
  return {};
});

export const getAll = handler(async (event, context) => {
  const params = {
    TableName: process.env.MINIONS_TABLE,
    KeyConditionExpression: '#PK = :PK',
    ExpressionAttributeNames: { '#PK': 'PK' },
    ExpressionAttributeValues: { ':PK': 'USER' },
  };

  const result = await db.query(params).promise();
  return result.Items;
});
