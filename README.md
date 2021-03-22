# Serverless Framework Node REST API on AWS

Stack:
- Serverless using Serverless Framework
- SignIn/SignUp using AWS Cognito
- API using AWS API Gateways
- Functions using AWS Lambda
- Data store using AWS DynamoDB
- Email service using SendGrid

Features:
- Add products to a cart
- Buy products, receiving a confirmation email
- Access user profile, with user data and orders history
- SignUp and SignIn with authentication.

## Usage

### Deployment

This example is made to work with the Serverless Framework dashboard which includes advanced features like CI/CD, monitoring, metrics, etc.

```
$ serverless login
$ serverless deploy
```
.env vars:
- EMAIL_TO: a alternative email to send confirmation order - REQUIRED
- SENDGRID_API_KEY: a api key for sendgrid - REQUIRED


### Local development

```
serverless dynamodb install
serverless offline start
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
