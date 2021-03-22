import handler from '../utils/handler';
import db from '../utils/db';
import sendConfirmationEmail from '../utils/emailService/sendConfirmationEmail';

const uuid = require('uuid');

async function getUserBySub(sub) {
  const params = {
    TableName: process.env.MINIONS_TABLE,
    Key: {
      PK: `USER#${sub}`,
      SK: `USER#${sub}`,
    },
  };

  const result = await db.get(params).promise();
  return result.Item;
}

export const create = handler(async (event, context) => {
  const { sub } = event.pathParameters;
  const cart = JSON.parse(event.body);
  const products = JSON.stringify(cart.products);
  const params = {
    TableName: process.env.MINIONS_TABLE,
    Item: {
      PK: `USER#${sub}`,
      SK: `USER#${sub}#ORDER#${uuid.v1()}`,
      products,
      total: cart.total,
      subtotal: cart.subTotal,
      shipping: cart.shipping,
      discount: cart.discount,
      createdAt: Date.now(),
    },
  };
  await db.put(params).promise();

  const user = await getUserBySub(sub);
  await sendConfirmationEmail(cart, user);
  params.Item.products = JSON.parse(params.Item.products);
  return params.Item;
});

export const getByUserId = handler(async (event, context) => {
  const { sub } = event.pathParameters;
  const params = {
    TableName: process.env.MINIONS_TABLE,
    KeyConditionExpression: '#PK = :PK and begins_with(#SK, :SK)',
    ExpressionAttributeNames: { '#PK': 'PK', '#SK': 'SK' },
    ExpressionAttributeValues: { ':PK': `USER#${sub}`, ':SK': `USER#${sub}#ORDER#` },
  };

  const result = await db.query(params).promise();
  result.Items.forEach((i) => { i.products = JSON.parse(i.products); });
  return result.Items;
});
