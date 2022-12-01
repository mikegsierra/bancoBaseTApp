module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            config: './src/config',
            domain: './src/domain',
            data: './src/data',
            ui: './src/ui',
          },
        },
      ],
      ['@babel/plugin-proposal-decorators', {legacy: true}],
      'nativewind/babel',
      'react-native-reanimated/plugin',
    ],
  };
};
