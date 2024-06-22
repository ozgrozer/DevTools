module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          views: './src/views',
          contexts: './src/contexts',
          functions: './src/functions'
        }
      }
    ]
  ]
}
