import type { Meta, StoryObj } from '@storybook/react-vite';

import Header from './Header';
import { HEADER_CONFIG } from "@/config/Header.config";

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

/* ------ STORIES ------ */
type Story = StoryObj<typeof meta>;

// Default Header Story
export const Default: Story = {
  args: {
    title: HEADER_CONFIG.title,
    links: HEADER_CONFIG.links,
  },
};

/* ------ STORY TESTS ------ */
