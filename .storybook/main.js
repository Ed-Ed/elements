module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport"
  ],
  babel: async options => ({ ...options, babelrc: false })
};
