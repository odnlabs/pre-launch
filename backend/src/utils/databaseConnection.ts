import colors from 'colors';
import { connect } from 'mongoose';

import config from '@/config';
import logger from './logger';

/**
 * Connect to the MongoDB database.
 */
const databaseConnection = async (): Promise<void> => {
  try {
    // Initialize the connection
    const { connection } = await connect(
      config.isProduction()
        ? config.env.MONGODB_URI_PROD
        : config.env.MONGODB_URI_DEV,
      {
        serverSelectionTimeoutMS: 5000,
      }
    );

    logger.info(
      colors.yellow(`Connected to MongoDB database ${connection.name}`)
    );
  } catch (error) {
    logger.error(error as string);
    process.exit(1);
  }
};

export default databaseConnection;
