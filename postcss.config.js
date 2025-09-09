import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import tailwindcss from "@tailwindcss/postcss";

const isProduction = process.env.NODE_ENV === "production";

export default {
  plugins: [
    tailwindcss(),
    autoprefixer({}),
    ...(isProduction ? [cssnano({ preset: "default" })] : []),
  ],
};
