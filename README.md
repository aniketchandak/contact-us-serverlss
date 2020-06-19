# contact-us-serverlss
Implemented contact us page for static website using serverless architecture.

Steps followed:
1. Create API resource on Amazon API gateway
2. Create DynamoDB and Amazon SES services
3. Create lambda function to send email and dump contact us form in DynamoDB with proper permissions
4. Trigger lambda function for POST API created in step 1
5. Implement Contact us form using Material-UI in React
6. Deploy contact us page on Amazon S3
