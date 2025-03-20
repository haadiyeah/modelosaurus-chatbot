import type { Meta, StoryObj } from '@storybook/react';
import ModelosaurusChatbot from './ModelosaurusChatbot';

const meta: Meta<typeof ModelosaurusChatbot> = {
  component: ModelosaurusChatbot,
  title: 'ModelosaurusChatbot',
};

export default meta;

export const Default: StoryObj<typeof ModelosaurusChatbot> = {
  args: {
    modelosaurusKey: "ms_a48f5bdeda2b7336a3f2451aa87d3776",
    chatbotId: "67d550d58aacf8afa4eb3add",
  },
};

export const DarkTheme: StoryObj<typeof ModelosaurusChatbot> = {
  args: {
    modelosaurusKey: "ms_a48f5bdeda2b7336a3f2451aa87d3776",
    chatbotId: "67d550d58aacf8afa4eb3add",
  },
};