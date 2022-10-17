import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button, ButtonSize, ButtonTheme} from './Button';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    children: 'Text'
};

export const Clean = Template.bind({});
Clean.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND
};

export const InvertedBackgroundTheme = Template.bind({});
InvertedBackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.INVERTED_BACKGROUND
};

export const SquareButton = Template.bind({});
SquareButton.args = {
    children: '>',
    theme: ButtonTheme.INVERTED_BACKGROUND,
    square: true
};

export const SquareButtonSizeM = Template.bind({});
SquareButtonSizeM.args = {
    children: '>',
    theme: ButtonTheme.INVERTED_BACKGROUND,
    square: true,
    size: ButtonSize.M
};

export const SquareButtonSizeL = Template.bind({});
SquareButtonSizeL.args = {
    children: '>',
    theme: ButtonTheme.INVERTED_BACKGROUND,
    square: true,
    size: ButtonSize.L
};

export const SquareButtonSizeXL = Template.bind({});
SquareButtonSizeXL.args = {
    children: '>',
    theme: ButtonTheme.INVERTED_BACKGROUND,
    square: true,
    size: ButtonSize.XL
};

