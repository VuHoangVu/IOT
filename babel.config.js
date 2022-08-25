module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
//Fix error : Requiring module "node_modules\react-native-reanimated\src\Animated.js", which threw an exception: Error: Reanimated 2 failed to create a worklet, maybe you forgot to add Reanimated's babel plugin?
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  }
}