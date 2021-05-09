const path = require("path")

module.exports = {
  entry: ['@babel/polyfill','./js/script.js', 'whatwg-fetch'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: './main/main.js'
  }
}