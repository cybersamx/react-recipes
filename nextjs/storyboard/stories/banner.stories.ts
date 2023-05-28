import type { Meta, StoryObj } from '@storybook/react';
import Banner from './banner';

const meta: Meta<typeof Banner> = {
  title: 'Example/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
