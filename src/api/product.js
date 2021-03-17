import handler from '../utils/handler';
import db from '../utils/db';
import uuid from 'uuid';

export const create = handler(async (event,context) => {
    const data = JSON.parse(event.body);
    const {name,description,photo,price} = data;

    const params = {
      TableName: process.env.PRODUCTS_TABLE,
      Item: {
        productId: uuid.v1(),
        name,
        description,
        photo,
        price,
        createdAt: Date.now(),
      },
    };

    await db.put(params).promise();
    return params.Item;
})

export const getAll = handler(async (event,context) => {
  const params = {
    TableName: process.env.PRODUCTS_TABLE,
  };

  const result = await db.scan(params).promise();
  return result.Items;
});



