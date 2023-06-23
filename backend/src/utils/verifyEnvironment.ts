import dotenv from 'dotenv';

dotenv.config();

import { verifyEnvironment } from '@slekup/utils';

const newEnv = verifyEnvironment([
  'NODE_ENV',
  'DEBUG',
  'PORT',

  'API_URL_DEV',
  'WEBSITE_URL_DEV',

  'API_URL_PROD',
  'WEBSITE_URL_PROD',

  'MONGODB_URI_DEV',
  'MONGODB_URI_PROD',

  'D_WEBHOOK',
]);

export default newEnv;
