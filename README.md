# contact-us-serverlss
Implemented contact us page for static website using serverless architecture.

Steps followed:
1. Create API resource on Amazon API gateway
2. Create DynamoDB Table
3. Create lambda function to send email and dump message in DynamoDB with required permissions/policy
4. Trigger lambda function for POST API created in step 1
5. Implement Contact us form using Material-UI in React
6. Deploy contact us page on Amazon S3

References:

https://aws.amazon.com/blogs/architecture/create-dynamic-contact-forms-for-s3-static-websites-using-aws-lambda-amazon-api-gateway-and-amazon-ses/
https://aws.amazon.com/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.Python.03.html
https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-using-sdk-python.html
