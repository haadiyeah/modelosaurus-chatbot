import type { Preview } from '@storybook/react';
import { fn } from '@storybook/test';
import '../src/styles/index.css';
import '../src/styles/fonts.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'mouse entered' },
    onMouseLeave: { action: 'mouse left' },
    onSubmit: { action: 'submitted' },
    onMessageSent: { action: 'message sent' },
    onMessageReceived: { action: 'message received' },
  },
};

export default preview;