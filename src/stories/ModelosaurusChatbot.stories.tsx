import type { Meta, StoryObj } from '@storybook/react';
import ModelosaurusChatbot from '../components/ModelosaurusChatbot';

const meta: Meta<typeof ModelosaurusChatbot> = {
  component: ModelosaurusChatbot,
  title: 'ModelosaurusChatbot',
};

export default meta;

export const Default: StoryObj<typeof ModelosaurusChatbot> = {
  args: {
    modelosaurusKey: "your-modelosaurus-key-here",
    chatbotId: "your-chatbot-id-here",
  },
};

export const DarkTheme: StoryObj<typeof ModelosaurusChatbot> = {
  args: {
    modelosaurusKey: "your-modelosaurus-key-here",
    chatbotId: "your-chatbot-id-here",
  },
};