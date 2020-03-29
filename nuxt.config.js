require("dotenv").config();
module.exports = {
  srcDir: "client/",
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy", "@nuxtjs/dotenv"],
  axios: {
    proxy: true,
    credentials: true,
  },
  proxy: {
    "/api": process.env.NUXT_ENV_PROXY_TARGET || "http://localhost:9000"
  }
};
