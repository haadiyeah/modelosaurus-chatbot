# Modelosaurus Chatbot

A customizable plug-and-play chatbot component for React applications, designed to work seamlessly with the Modelosaurus API. Easily integrate a powerful AI chatbot into your application with minimal configuration.

## 🌟 Features

* ✨ **Plug-and-Play**: Minimal setup required
* 🎨 **Customizable UI**: Colors, sizing, fonts, and more
* 🤖 **AI-Powered**: Leverages Modelosaurus LLMs like Llama 3.1
* 📚 **RAG Support**: Connect to your knowledge base with vector search
* ⚡ **Streaming Responses**: Real-time streaming for a better user experience
* 📱 **Responsive Design**: Works on all device sizes
* 🔍 **TypeScript Support**: Fully typed for better developer experience

## 📦 Installation

Using npm:
```bash
npm install modelosaurus-chatbot
```

Using yarn:
```bash
yarn add modelosaurus-chatbot
```

## 🚀 Usage

Before integration, visit [modelosaurus.com](https://modelosaurus.com) to:
1. Create an account and get your API key
2. Create a custom chatbot
3. Upload documents for RAG (optional)
4. Configure appearance and behavior
5. Get your chatbot ID

Basic integration in a React application:

```jsx
import React from 'react';
import ModelosaurusChatbot from 'modelosaurus-chatbot';

function App() {
  return (
    <ModelosaurusChatbot 
      modelosaurusKey={process.env.REACT_APP_MODELOSAURUS_API_KEY}
      chatbotId="your-chatbot-id"
    />
  );
}

export default App;
```

## 🛠 Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `modelosaurusKey` | string | Yes | - | Your Modelosaurus API key |
| `chatbotId` | string | Yes | - | Your chatbot ID from Modelosaurus |

> **Note**: Additional customization options (colors, fonts, etc.) are configured through the Modelosaurus dashboard and automatically applied to your component.

## 🎨 Customization

Customize your chatbot's appearance and behavior using the Modelosaurus dashboard.

## 🔒 Security Considerations

**IMPORTANT**: Never hardcode your API key directly in your frontend code in production.
**IMPORTANT**: Never push your .env file containing sensitive information to any source control software.

Recommended approach: (example)
```bash
# Use environment variables
REACT_APP_MODELOSAURUS_API_KEY=your_secret_key
```

## 📝 TypeScript Support

Import types for enhanced type checking:

```typescript
import { 
  ChatbotData, 
  ChatMessage, 
  ModelosaurusChatbotProps 
} from 'modelosaurus-chatbot';
```

Available types:
- `ModelosaurusChatbotProps`: Props for the main component
- `ChatbotData`: Configuration options for the chatbot
- `ChatMessage`: Individual message structure

## 📖 Storybook Development

To explore the component:

```bash
# Clone the repository
git clone https://github.com/haadiyeah/modelosaurus-chatbot.git

# Install dependencies
npm install

# Run Storybook
npm run storybook
```

Storybook will launch at `http://localhost:6006`

## 🛠 Development Setup

```bash
# Install dependencies
npm install

# Start development build
npm run dev

# Build for production
npm run build
```

## 🤖 How It Works

1. Configure your chatbot on modelosaurus.com
2. The component fetches your configuration settings using your `chatbotId`
3. Messages are sent to the Modelosaurus API for processing
4. Responses are streamed back to the component in real-time
5. If RAG is enabled, responses are enhanced with information from your documents

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.