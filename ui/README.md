# FiveM Vue UI Template

Modern FiveM UI template using Vue 3, TypeScript, Vite, and SCSS.

## Features

- Vue 3 with Composition API
- TypeScript support
- Vite for fast development
- SCSS styling
- Pinia for state management
- Pre-configured NUI utilities
- Notification system
- Modern component structure

## Project Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Directory Structure

```
src/
├── assets/         # Static assets (images, fonts, etc.)
│   └── scss/      # SCSS styles
├── components/     # Vue components
├── stores/        # Pinia stores
├── utils/         # Utility functions
├── App.vue        # Root component
└── main.ts        # Entry point
```

## NUI Usage

```typescript
import { sendNuiMessage, nuiCallback, onNuiEvent } from '@/utils/nui'

// Send message to client
sendNuiMessage('eventName', { data: 'example' })

// Register event listener
onNuiEvent<{ message: string }>('serverEvent', (data) => {
  console.log(data.message)
})
```

## Styling

The template uses SCSS with CSS variables for theming. Main styles are in `src/assets/scss/main.scss`. 