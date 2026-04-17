# Japaventura App - AI Rules

## Tech Stack Overview
- **Framework**: Next.js 16.2.1 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **UI Components**: shadcn/ui library (already installed)
- **Icons**: Lucide React 1.7.0
- **Animations**: Framer Motion 12.38.0
- **State Management**: React hooks (useState, useEffect)
- **Routing**: Next.js App Router (file-based routing)
- **Forms**: Native HTML forms or shadcn/ui form components
- **Images**: Next.js Image component with remote patterns configured

## Library Usage Rules

### shadcn/ui Components
- **Always** use shadcn/ui components when available (Accordion, Badge, Button, Card, etc.)
- **Never** modify the original shadcn/ui component files
- **Create** wrapper components in `app/components/` if customization is needed
- **Import** from `@/components/ui/` for shadcn components

### Styling Guidelines
- **Always** use Tailwind CSS classes for styling
- **Never** use inline styles or CSS modules
- **Follow** the existing color scheme: `#D55753` (primary), `#344054` (dark), `#667085` (muted)
- **Use** responsive prefixes (`sm:`, `md:`, `lg:`) for all components

### Component Structure
- **Place** all components in `app/components/`
- **Use** TypeScript interfaces for props
- **Keep** components focused and under 100 lines when possible
- **Export** components as default exports
- **Use** "use client" directive for client-side components

### Data Handling
- **Use** React hooks for state management
- **Fetch** data using Next.js `fetch` or `server actions`
- **Handle** errors with try/catch blocks when making API calls
- **Use** TypeScript for all data structures

### Navigation & Routing
- **Use** Next.js App Router for all navigation
- **Create** pages in `app/pages/`
- **Use** Link components from Next.js for internal navigation
- **Implement** smooth scrolling for anchor links

### Images & Media
- **Always** use Next.js Image component for images
- **Configure** remote patterns in next.config.ts for external images
- **Use** proper alt text for accessibility
- **Implement** responsive image sizes

### Forms & User Input
- **Use** native HTML form elements or shadcn/ui form components
- **Implement** proper form validation
- **Use** server actions for form submissions
- **Handle** form state with React hooks

### Performance & Optimization
- **Use** Next.js Image optimization for all images
- **Implement** lazy loading for below-fold content
- **Use** React.memo for expensive components
- **Follow** Next.js best practices for performance

### Accessibility
- **Always** include proper ARIA labels
- **Use** semantic HTML elements
- **Implement** keyboard navigation
- **Test** with screen readers

### Code Quality
- **Follow** TypeScript strict mode
- **Use** ESLint for code linting
- **Keep** consistent code formatting
- **Write** descriptive comments for complex logic

## File Organization Rules

### Component Files
- **Create** one component per file
- **Use** PascalCase for component file names
- **Place** components in `app/components/`
- **Create** subdirectories for related components

### Page Files
- **Create** pages in `app/pages/`
- **Use** lowercase for page file names
- **Follow** Next.js App Router conventions
- **Export** pages as default components

### Utility Files
- **Place** utilities in `lib/` directory
- **Create** type definitions in `types/` directory
- **Use** TypeScript for all utility functions
- **Export** utilities as named exports

## Development Workflow

1. **Always** check if a component already exists before creating new ones
2. **Use** existing shadcn/ui components when possible
3. **Follow** the established color scheme and design patterns
4. **Test** components in the live preview
5. **Use** the provided commands for rebuilding and restarting

## Common Patterns

### State Management
```typescript
const [state, setState] = useState(initialValue);
```

### API Calls
```typescript
try {
  const response = await fetch(url);
  const data = await response.json();
  // handle data
} catch (error) {
  // handle error
}
```

### Component Structure
```typescript
"use client";

interface ComponentProps {
  // props definition
}

export default function ComponentName({ prop }: ComponentProps) {
  // component logic
  return <div>...</div>;
}
```

## Breaking Changes

- **Never** modify the Next.js configuration unless absolutely necessary
- **Always** use the latest stable versions of dependencies
- **Test** thoroughly after updating any dependencies
- **Follow** semantic versioning for any custom packages

## Security Guidelines

- **Never** expose API keys in client-side code
- **Use** environment variables for sensitive data
- **Validate** all user inputs
- **Implement** proper error handling