import json
import os
import boto3
from datetime import datetime
from botocore.exceptions import ClientError
def lambda_handler(event, context):
    dynamodb = boto3.resource("dynamodb",region_name="us-east-1")
    table = dynamodb.Table("contact_us")
    table.put_item(Item = {
        'record_id': str(datetime.now()),
        'name': event['name'],
        'desc': event['desc'],
        'phone':event['phone'],
        'email': event['email']
    })
    SENDER = "Aniket Chandak <aniket.chandak@sjsu.edu>"
    RECIPIENT = event['email']
    AWS_REGION = "us-east-1"
    SUBJECT = event['name']
    BODY_TEXT = event['desc']
    CHARSET = "UTF-8"
    client = boto3.client('ses',region_name=AWS_REGION)
    
    try:
        response = client.send_email(
            Destination={
                'ToAddresses': [
                    RECIPIENT,
                ],
            },
            Message={
                'Body': {
                    'Text': {
                        'Charset': CHARSET,
                        'Data': BODY_TEXT,
                    },
                },
                'Subject': {
                    'Charset': CHARSET,
                    'Data': SUBJECT,
                },
            },
            Source=SENDER,
        )
    except ClientError as e:
        return {
            'statusCode': 500,
            'error': json.dumps(e.response['Error']['Message'])
        }
    else:
        return {
            'statusCode': 200,
            'body': 'Email and database dump successful'
        }
