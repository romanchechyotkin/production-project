import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Modal} from "shared/ui/Modal/Modal";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: {control: "color"},
    }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {
    isOpen: true,
    children: "TEXT"
};
ModalLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ModalDark = Template.bind({});
ModalDark.args = {
    isOpen: true,
    children: "TEXT"
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
