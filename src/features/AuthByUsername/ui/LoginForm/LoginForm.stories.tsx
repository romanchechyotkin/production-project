import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {LoginForm} from "features/AuthByUsername/ui/LoginForm/LoginForm";

export default {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {
        backgroundColor: {control: "color"},
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormLight = Template.bind({});
LoginFormLight.args = {};
LoginFormLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {
    placeholder: "text",
    value: "123"
};
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)];
