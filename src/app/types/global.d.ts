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

// для того чтобы убрать ошибки при переносе stylelint конфига на TS
// но смысла переносить stylelint на TS нет, т.к. он написан на JS
declare module "stylelint-config-recess-order";
declare module "stylelint-config-standard-scss";
