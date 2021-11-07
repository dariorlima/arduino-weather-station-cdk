
import { APIGatewayProxyEvent } from 'aws-lambda';
import weather from './weather';
import { failure } from './responses';

exports.main = async (event: APIGatewayProxyEvent) => {
    const notFound = () => failure(JSON.stringify({ message: 'not found' }), 404);
    switch (event.path) {
        case '/weather':
            if (event.httpMethod === 'POST') return weather(event);
            return notFound();
        default:
            return notFound();
    }
};