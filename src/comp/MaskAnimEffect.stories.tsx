import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MaskAnimeEffect } from "./MaskAnimEffect";

export default {
  title: "Animations/Mask",
  component: MaskAnimeEffect,
} as ComponentMeta<typeof MaskAnimeEffect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MaskAnimeEffect> = (args: any) => (
  <MaskAnimeEffect {...args} />
); // {...args}

export const Primary = Template.bind({});
Primary.args = {};

export const Multiple = () => (
  <>
    <span>
      <b>Subject:</b> Here is your OTP:
      <MaskAnimeEffect fontSize="12pt" />
      <MaskAnimeEffect fontSize="12pt" />
      000
    </span>
  </>
);

export const MultipleBigFont = () => (
  <>
    <span style={{ fontSize: "18pt" }}>
      <b>Subject:</b> Here is your OTP:
      <MaskAnimeEffect fontSize="18pt" />
      <MaskAnimeEffect fontSize="18pt" />
      000
    </span>
  </>
);
