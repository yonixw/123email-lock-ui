import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EnterEmail } from "./EnterEmail";
import { UltraTheme } from "../theme";
import { ChakraProvider, theme } from "@chakra-ui/react";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Screens/Enter Email",
  component: EnterEmail,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof EnterEmail>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EnterEmail> = (args: any) => (
  <EnterEmail />
); // {...args}

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Default",
};

export const Ultra = Template.bind({});
Ultra.args = {
  chakra: { theme: UltraTheme },
  primary: true,
  label: "Button",
};
