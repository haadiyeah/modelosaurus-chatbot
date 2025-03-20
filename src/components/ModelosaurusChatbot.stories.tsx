import type { Meta, StoryObj } from '@storybook/react';
import ModelosaurusChatbot from './ModelosaurusChatbot';

const meta: Meta<typeof ModelosaurusChatbot> = {
  component: ModelosaurusChatbot,
  title: 'ModelosaurusChatbot',
};

export default meta;

export const Default: StoryObj<typeof ModelosaurusChatbot> = {
  args: {
    modelosaurusKey: 'your-key-here',
    chatbotId: 'your-chatbot-id',
    headerColor: '#6419E6',
    chatBubbleUserColor: '#F000B8',
    chatBubbleBotColor: '#6419E6',
  },
};

export const DarkTheme: StoryObj<typeof ModelosaurusChatbot> = {
  args: {
    modelosaurusKey: "ms_a48f5bdeda2b7336a3f2451aa87d3776",
    chatbotId: "67d550d58aacf8afa4eb3add",
    headerColor: '#1b3f71',
    chatBubbleUserColor: '#4696d8',
    chatBubbleBotColor: '#267eae',
  },
};