const withPlugins = require("next-compose-plugins");
const withCSS = require('@zeit/next-css');
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const path = require("path");

module.exports = withPlugins([[withCSS],[withSass], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
});