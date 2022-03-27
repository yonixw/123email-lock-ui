module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "storybook-color-picker",
    '@chakra-ui/storybook-addon',
    '@storybook/addon-viewport'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}