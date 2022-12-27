const { merge } = require("webpack-merge");
const dev = require("./webpack.dev.js");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(dev, {
  plugins: [new BundleAnalyzerPlugin()],
});