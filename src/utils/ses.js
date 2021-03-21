import { SES } from 'aws-sdk';

const ses = new SES({
  region: 'us-east-1',
  accessKeyId: 'AKIAQV2YIDSPBK642MQX',
  secretAccessKey: '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',
});

export default ses;
