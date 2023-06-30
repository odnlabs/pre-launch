class Config {
  public API_URL: string;
  public PUBLIC_API_URL: string;

  public constructor() {
    this.API_URL = (
      process.env.NODE_ENV === 'production'
        ? process.env.API_URL_PROD
        : process.env.API_URL_DEV
    ) as string;

    this.PUBLIC_API_URL = (
      process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_API_URL_PROD
        : process.env.NEXT_PUBLIC_API_URL_DEV
    ) as string;
  }
}

const config = new Config();

export default config;
