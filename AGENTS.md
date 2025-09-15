# AGENTS.md - New Wave Therapy Project Guide

## Build/Lint/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- No test framework currently configured

## Code Style Guidelines
- **No React.FC syntax** - Use regular function declarations
- **No code comments** unless explicitly requested  
- **TypeScript**: Strict mode enabled, use proper typing with interfaces
- **Imports**: Use absolute imports with `@/*` aliases for src paths
- **Component Structure**: Export default at bottom, define interfaces at top
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Tailwind v4**: Use `globals.css` for theme config, NOT tailwind.config.js
- **Brand Colors**: Use predefined `nwt-*` color classes (dark-teal, light-teal, coral, peach, etc.)
- **Mobile-First**: Always design responsive with mobile-first approach
- **Error Handling**: Use proper TypeScript error types, no generic catches

## Project-Specific Rules
- **Component Testing**: Create multiple options (e.g., Option1, Option2) and comment/uncomment for testing
- **Background System**: Use `.bg-stripe` utility classes with `/striped_background.jpeg`
- **Content Strategy**: Team-based messaging, avoid individual spotlights
- **Button Component**: Use existing variants (primary, secondary, accent, outline, ghost)
- **Framer Motion**: Use for animations, follow existing motion patterns in Navigation.tsx