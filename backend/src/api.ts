import express, { Api } from 'express-custom';

import { ensureDirectories } from '@slekup/utils';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';

import config from '@/config';
import { websiteGroup } from './routes';
import databaseConnection from './utils/databaseConnection';

ensureDirectories([['/tmp'], ['/tmp/logs'], [`/tmp/logs/${config.logFolder}`]]);

// Database connection
databaseConnection();

const api = new Api({
  url: config.API_URL,
  port: parseInt(config.env.PORT, 10) || 5000,
});

api.addMiddleware((req, res, next) => {
  res.header('Access-Control-Allow-Origin', config.WEBSITE_URL);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  next();
});

api.addMiddleware(helmet());
api.addMiddleware(express.json({ limit: '20mb' }));
api.addMiddleware(express.urlencoded({ limit: '20mb', extended: true }));
api.addMiddleware(hpp());

api.addMiddleware(
  cors({
    origin: [config.WEBSITE_URL],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

api.raw.set('trust proxy', 1);

api.setRateLimit({
  windowMs: 60 * 1000, // 60s window
  max: 10, // Limit each IP to x requests per window
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  /**
   * Handler for when the max number of requests per window is exceeded.
   * @param req The request.
   * @param res The response.
   */
  handler: (req, res) => {
    res.status(429).json({
      status: 429,
      message: 'Too many requests, please try again later.',
    });
  },
});

api.addGroup(websiteGroup);

export default api;
