import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Text, TextTheme} from "./Text";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: {control: "color"},
    }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextLight = Template.bind({});
TextLight.args = {
    title: "title",
    text: "text"
};
TextLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TextDark = Template.bind({});
TextDark.args = {
    title: "title",
    text: "text"
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedTextLight = Template.bind({});
RedTextLight.args = {
    title: "title",
    text: "text",
    theme: TextTheme.ERROR
};
RedTextLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const RedTextDark = Template.bind({});
RedTextDark.args = {
    title: "title",
    text: "text",
    theme: TextTheme.ERROR
};
RedTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: "title",
};
OnlyTitle.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: "text"
};
OnlyText.decorators = [ThemeDecorator(Theme.DARK)];
