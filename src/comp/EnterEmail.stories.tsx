import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EnterEmail } from "./EnterEmail";
import { UltraTheme } from "../theme";

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
const Template: ComponentStory<typeof EnterEmail> = (args) => <EnterEmail />; // {...args}

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Default",
};

export const Ultra = Template.bind({});
Ultra.args = {
  themes: {
    default: "twitter",
    list: [
      { name: "twitter", class: "theme-twt", color: "#00aced" },
      { name: "facebook", class: "theme-fb", color: "#3b5998" },
    ],
  },
  primary: true,
  label: "Button",
};
