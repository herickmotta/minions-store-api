import uuid from 'uuid';
import handler from '../utils/handler';
import db from '../utils/db';

export const create = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const {
    name, email, address, gender,
  } = data;

  const params = {
    TableName: process.env.MINION_TABLE,
    Item: {
      PK: `USER#${email}`,
      SK: `USER#${email}`,
      name,
      email,
      address,
      gender,
      createdAt: Date.now(),
    },
  };

  await db.put(params).promise();
  return params.Item;
});

export const getByEmail = handler(async (event, context) => {
  const { email } = event.pathParameters;
  const params = {
    TableName: process.env.MINIONS_TABLE,
    Key: {
      PK: `USER#${email}`,
    },
  };

  const result = await db.query(params).promise();
  return result.Items;
});
