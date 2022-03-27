import {  UltraTheme } from '../src/theme';

export const parameters = {
  chakra:{theme: UltraTheme},
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}