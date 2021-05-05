/** @format */

const path = require("path");

module.exports = {
  server: {
    staticDir: path.resolve(__dirname, "./dist"),
    port: 8989
  },
  routes: [
    {
      path: "/index.html",
      captureAfterElementExists: '.app'
    }
  ],
  cdnMappings: [
    {
      regExp: /other.domain.com/g,
      targetPath: "/"
    }
  ],
  injectConfig: {
    propertyName: "isPreRender",
    value: true
  }
};
