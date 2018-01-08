const path = require('path')
// const DashboardPlugin = require('webpack-dashboard/plugin')

// plugins: [new DashboardPlugin()]

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  }
}
