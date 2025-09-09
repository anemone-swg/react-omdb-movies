declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    OMDB_API_KEY: string;
  }
}

declare module "*.scss";

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}
