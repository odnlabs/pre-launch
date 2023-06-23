declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      DEBUG: string;
      PORT: string;

      API_URL_DEV: string;
      WEBSITE_URL_DEV: string;

      API_URL_PROD: string;
      WEBSITE_URL_PROD: string;

      MONGODB_URI_DEV: string;
      MONGODB_URI_PROD: string;

      D_WEBHOOK: string;
    }
  }
}

export {};
