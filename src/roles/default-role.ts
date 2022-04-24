export const defaultRole = {
  statements: [
    {
      Effect: 'Allow',
      Action: ['s3:GetObject', 's3:PutObject'],

      // in real project it is recommended that we should restrict to
      // neccessary resources only
      Resource: ['*'],
    },
  ],
};
