import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();

import config from '@/config';
import logger from './utils/logger';

import api from './api';

// Initialize the http server
const server = api.start(() => {
  logger.info(
    colors.blue(
      `HTTP server running in ${colors.white(
        config.env.NODE_ENV
      )} mode and Listening on port ${colors.white(config.env.PORT)}`
    )
  );
});

// Handle server errors
server.on('error', () => {
  logger.error(
    colors.red(
      `Error starting http server on port ${colors.white(config.env.PORT)}`
    )
  );
});
