import { Cors, LambdaRestApi } from '@aws-cdk/aws-apigateway';
import * as core from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class SensorsApi extends core.Construct {
    private _handler: lambda.Function;
    constructor(scope: core.Construct, id: string) {
        super(scope, id);

        this._handler = new lambda.Function(this, 'SensorsHandler', {
            runtime: lambda.Runtime.NODEJS_14_X,
            code: lambda.Code.fromAsset('./lib/functions'),
            handler: 'index.main',
        });

        new LambdaRestApi(this, 'sensors-api', {
            restApiName: 'SensorsApi',
            handler: this._handler,
            defaultCorsPreflightOptions: {
                allowMethods: Cors.ALL_METHODS,
                allowOrigins: Cors.ALL_ORIGINS,
            }
        });
    }


    getHandler() {
        return this._handler;
    }
}