import webpack from "webpack";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "./.env") });

export default (env = {}) => {
  const isDev = env.mode === "development";
  const isProd = env.mode === "production";

  return {
    entry: "./src/app/main.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.[contenthash:8].js",
      chunkFilename: "bundle.[contenthash:8].chunk.js",
      clean: true,
      publicPath: "/",
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    module: {
      rules: [
        // {
        //   test: /\.(ts|tsx)$/,
        //   exclude: /node_modules/,
        //   use: [
        //     {
        //       loader: "ts-loader",
        //       options: {
        //         transpileOnly: true,
        //         getCustomTransformers: () => ({
        //           before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        //         }),
        //       },
        //     },
        //   ],
        // },
        // ts-loader закомментирован, т.к. добавлен babel ниже
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              // можно вынести в отдельный babel.config
              presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
                [
                  "@babel/preset-react",
                  {
                    runtime: isDev ? "automatic" : "classic",
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                esModule: false,
                modules: {
                  namedExport: false,
                  auto: (resourcePath) => resourcePath.includes(".module."),
                  localIdentName: isDev
                    ? "[path][name]__[local]--[hash:base64:5]"
                    : "[hash:base64:8]",
                  exportLocalsConvention: "asIs",
                },
              },
            },
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
        favicon: path.resolve(__dirname, "public", "favicon.ico"),
      }),
      isDev && new ForkTsCheckerWebpackPlugin(),
      new webpack.ProgressPlugin(),
      isProd
        ? new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
          })
        : undefined,
      isProd && new BundleAnalyzerPlugin({}),
      isProd
        ? new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, "public"),
                to: path.resolve(__dirname, "dist"),
              },
            ],
          })
        : undefined,
      isDev && new ReactRefreshPlugin({}),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ].filter(Boolean),
    devtool: isDev && "inline-source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    mode: env.mode,
  };
};
