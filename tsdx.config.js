// eslint-disable-next-line @typescript-eslint/no-var-requires
const svgr = require('@svgr/rollup').default;

module.exports = {
  rollup(config, options) {
    config.plugins.push([svgr()]);

    return config;
  },
};
