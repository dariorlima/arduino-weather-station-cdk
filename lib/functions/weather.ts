import { APIGatewayProxyEvent } from 'aws-lambda';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { success, failure } from './responses';

export default async (event: APIGatewayProxyEvent) => {

    if(!event.body) return failure('No body provided');

    const ddb = new AWS.DynamoDB.DocumentClient();
    const newData = {
        id: uuidv4(),
        ...JSON.parse(event.body),
        createdAt: new Date().toISOString()
    };

    try {
        await ddb.put({
            TableName: 'Weather',
            Item: newData
        }).promise();

        const body = JSON.stringify(newData);

        return success(body);

    } catch (error) {
        const body =  JSON.stringify(error, null, 2);
        return failure(body);
    }
};