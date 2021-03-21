import uuid from 'uuid';
import handler from '../utils/handler';
import db from '../utils/db';

export const create = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const {
    name, phone_number: phone, gender, address,
  } = data.attributes;
  const { username: email, sub } = data;

  const params = {
    TableName: process.env.MINIONS_TABLE,
    Item: {
      PK: `USER#${sub}`,
      SK: `USER#${sub}`,
      name,
      email,
      address,
      gender,
      phone,
      createdAt: Date.now(),
    },
  };

  await db.put(params).promise();
  return params.Item;
});

export const getById = handler(async (event, context) => {
  const { sub } = event.pathParameters;
  const params = {
    TableName: process.env.MINIONS_TABLE,
    Key: {
      PK: `USER#${sub}`,
      SK: `USER#${sub}`,
    },
  };

  const result = await db.get(params).promise();
  result.Item.address = JSON.parse(result.Item.address);
  return result.Item;
});
