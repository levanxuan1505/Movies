// babel.config.js

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        // root: ['./src'],
        extensions: ['.ios.tsx', '.android.tsx', '.js', '.ts', '.tsx', '.json'],
        alias: {
          // This needs to be mirrored in tsconfig.json
          // components: './src/components',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@css': './src/css',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
