import * as cdk from '@aws-cdk/core';
import { SensorsApi } from './constructs/api';
import { SensorsDatabase } from './constructs/database';

export class InfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const sensorsDatabase = new SensorsDatabase(this, 'SensorsDatabase');
    const sensorsApi = new SensorsApi(this, 'SensorsApi');

    sensorsDatabase.allowCrud(sensorsApi.getHandler());
  }
}
