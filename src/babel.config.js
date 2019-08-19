module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];
  const plugins = [
    '@babel/plugin-external-helpers',
    'emotions',
  ];

  return {
    presets,
    plugins,
  };
};
