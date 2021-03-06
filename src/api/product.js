import handler from '../utils/handler';
import db from '../utils/db';

const uuid = require('uuid');

export const create = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const {
    name, description, photo, price, available,
  } = data;

  const params = {
    TableName: process.env.MINIONS_TABLE,
    Item: {
      PK: 'PROD',
      SK: `PROD#${uuid.v1()}`,
      name,
      description,
      available,
      photo,
      price,
      createdAt: Date.now(),
    },
  };

  await db.put(params).promise();
  return params.Item;
});

export const getAll = handler(async (event, context) => {
  const params = {
    TableName: process.env.MINIONS_TABLE,
    KeyConditionExpression: '#PK = :PK',
    ExpressionAttributeNames: { '#PK': 'PK' },
    ExpressionAttributeValues: { ':PK': 'PROD' },
  };

  const result = await db.query(params).promise();
  return { products: result.Items };
});
