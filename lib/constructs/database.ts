import * as core from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';
import * as dynamodb from '@aws-cdk/aws-dynamodb';

export class SensorsDatabase extends core.Construct {
    private weatherTable: dynamodb.Table;
    constructor(scope: core.Construct, id: string) {
        super(scope, id);

        this.weatherTable = new dynamodb.Table(this, TableNames.Weather, {
            partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
            billingMode: dynamodb.BillingMode.PROVISIONED,
            readCapacity: 1,
            writeCapacity: 1,
            tableName: TableNames.Weather,
            removalPolicy: core.RemovalPolicy.DESTROY,
        });
    }

    allowCrud(grantee: iam.IGrantable) {
        this.weatherTable.grantReadWriteData(grantee);
    }
};

export enum TableNames {
    Weather = 'Weather'
};