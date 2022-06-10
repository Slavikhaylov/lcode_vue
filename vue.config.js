const { defineConfig } = require('@vue/cli-service')
const setPublicPath = require("/lcode_vue/");
module.exports = defineConfig({
  transpileDependencies: true
}),
setPublicPath
