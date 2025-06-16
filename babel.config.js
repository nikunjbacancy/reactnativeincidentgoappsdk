module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      "alias": {
        "react-native-incident_go_package": "./src/index",
        "components": "./src/components",
        "containers": './src/containers',
        "utils": './src/utils',
        "routes": './src/routes',
        "translations": './src/translations',
        "store": './src/store',
        "types": './src/types',
        "api": './src/api',
        "core": './src/core',
      }
    }]
  ],
};