const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = [
  {
    name: "main",
    entry: "./src/index.ts",
    target: "node",
    devtool: "inline-source-map",
    mode: "development",
    watch: true,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new WebpackShellPlugin({ onBuildEnd: ["yarn start:dev"] }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
    },
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
    },
    externals: [nodeExternals()],
  },
  {
    name: "quiz",
    entry: "./_build_quiz/src/index.ts",
    target: "node",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [new CleanWebpackPlugin()],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      plugins: [
        new TsconfigPathsPlugin({ configFile: "./_build_quiz/tsconfig.json" }),
      ],
    },
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "_build_quiz/build"),
    },
    externals: [nodeExternals()],
  },
];
