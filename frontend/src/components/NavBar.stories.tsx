import type { Meta, StoryObj } from '@storybook/react-vite';

import Navbar from './NavBar';

const meta = {
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "NextUP",
    links: ["Home", "About", "Contact"]
  }
};