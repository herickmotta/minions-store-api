
const IS_OFFLINE = process.env.IS_OFFLINE;
import { DynamoDB } from 'aws-sdk';

let client;
if (IS_OFFLINE === 'true') {
  client = new DynamoDB.DocumentClient({
    region: 'localhost',
    accessKeyId: 'xxxx',
    secretAccessKey: 'xxxx',
    endpoint: 'http://localhost:8000'
  })

} else {
  client = new DynamoDB.DocumentClient();
};

export default client;
