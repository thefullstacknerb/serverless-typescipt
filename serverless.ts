import { catsController } from '@functions/cats';
import { dogController } from '@functions/dogs';
import type { AWS } from '@serverless/typescript';
import { defaultRole } from 'src/roles';

const functions = {
  // Cats module functions
  ...catsController,
  // Dogs module funcions
  ...dogController,
};
const serverlessConfiguration: AWS = {
  // Service name
  service: 'thefullstacknerb-sls-typescript',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    /** deployment stage (ex: dev, staging, prod,...) */
    stage: 'dev',

    /** Deploy target region */
    region: 'ap-northeast-1',

    /** Name the stack that used to provisioning serverless framework */
    stackName: 'thefullstacknerb-sls',

    /**
     * Artifact bucket name
     * sls will create a new S3 bucket to upload required packages for deployment
     * unless you define a bucket here
     */
    // deploymentBucket: {
    //   name: 'your-bucket-name',
    // },

    /**
     * VPC configuration
     * contains list of securityGroupIds and subnetIds in case of using
     * existing vpc
     */
    // vpc: yourVpc,

    /** memory size */
    memorySize: 128,

    /** timeout in secs */
    timeout: 15,

    iam: {
      role: defaultRole,
    },
  },
  // import the function via paths
  functions: functions,
  package: {
    individually: true,
    excludeDevDependencies: true,
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      packager: 'yarn',
    },
  },
};

module.exports = serverlessConfiguration;
