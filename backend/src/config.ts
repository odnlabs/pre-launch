/**
 * Constants may also contain files which need configuration for the application to work with a new instance.
 * Some config variables may also depend on environment variables.
 */

import verifyEnvironment from './utils/verifyEnvironment';

const env = verifyEnvironment;

const date = new Date();

/**
 * The Config class, used to store and manage the application's configuration.
 */
class Config {
  public versionNumber = 1;
  public version: string;

  // Client
  public logFolder = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

  // Environment
  public env = env;
  public debug = env.DEBUG === 'true';
  public API_URL = `${
    env.NODE_ENV === 'production' ? env.API_URL_PROD : env.API_URL_DEV
  }`;
  public WEBSITE_URL = `${
    env.NODE_ENV === 'production' ? env.WEBSITE_URL_PROD : env.WEBSITE_URL_DEV
  }`;

  /**
   * The constructor for the main config class.
   */
  public constructor() {
    this.version = `v${this.versionNumber}`;
  }

  /**
   * Check if the bot is in development mode.
   * @returns Whether the bot is in development mode.
   */
  public isDevelopment = (): boolean => this.env.NODE_ENV === 'development';

  /**
   * Check if the bot is in production mode.
   * @returns Whether the bot is in production mode.
   */
  public isProduction = (): boolean => this.env.NODE_ENV === 'production';
}

const config = new Config();

export default config;
