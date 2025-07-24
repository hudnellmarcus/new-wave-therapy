# New Wave Therapy - Claude Project Guide

## Project Overview
- **Project Name**: New Wave Therapy
- **Client**: Hallie (Practice Manager)
- **Business Model**: Team-based therapy practice with multiple therapists
- **Content Focus**: General practice information and team-based approach (no individual featuring of Hallie)
- **Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion
- **Future Integration**: Sanity.io CMS for client content management
- **Design Approach**: Mobile-first responsive design

## Project Scope
This website represents New Wave Therapy as a collaborative practice of therapists managed by Hallie. The content strategy focuses on:
- Team-based messaging and approach
- General practice information and philosophy
- Collective expertise rather than individual spotlights
- Professional, welcoming tone that emphasizes the practice as a whole

## Key Technical Details

### Tailwind CSS v4 Configuration
- **Important**: Tailwind 4 uses `globals.css` for theme configuration, NOT `tailwind.config.js`
- All custom colors and theme variables go in the `@theme inline` block in globals.css
- No separate tailwind.config.js file exists in this project

### Brand Colors (in globals.css)
```css
--color-nwt-dark-teal: #073E5C;
--color-nwt-light-teal: #7CC6BF;
--color-nwt-coral: #D86C44;
--color-nwt-peach: #E9BF83;
--color-nwt-navy: #2c5282;
--color-nwt-cream: #fef5e7;
--color-nwt-mint: #81e6d9;
--color-nwt-salmon: #fc8181;
```

### Background System
- Uses stripe background image: `/striped_background.jpeg`
- Utility classes: `.bg-stripe`, `.bg-stripe-subtle`, `.bg-stripe-overlay`
- Applied throughout app for consistency

## Development Process & Standards

### Component Testing Process
1. Create multiple component options (e.g., AboutOption1, AboutOption2, AboutOption3)
2. Import all options in page.tsx
3. Use commenting system to test one at a time:
   ```tsx
   <AboutOption1 />
   {/* <AboutOption2 /> */}
   {/* <AboutOption3 /> */}
   ```
4. Comment/uncomment to switch between options for testing

### Code Standards
- **No code comments** unless explicitly requested
- **Explicit confirmation required** before writing any code
- **Mobile-first responsive design** approach
- **Use existing libraries and utilities** - check codebase before assuming availability
- **Follow existing patterns** and code conventions
- **Use lorem ipsum** for content layout testing
- **No React.FC syntax** - use regular function declarations instead
- **Algorithm Review Process**: When implementing algorithms or complex logic, review at least twice and consider edge cases (e.g., empty arrays, single items, maximum/minimum values)

### Design Approach
- Focus on typography, spacing, and visual hierarchy
- Use brand colors consistently
- Black backgrounds for testing (before implementing stripe backgrounds)
- Clean, modern layouts with good responsive behavior

## Current Components Status

### Navigation Component
- **Location**: `/src/app/components/Navigation.tsx`
- **Style**: Minimal fixed navigation with semi-transparent background
- **Layout**: Practice name left, nav links right (Home, FAQ, Our Team, Contact)
- **Integration**: Added to main layout.tsx for site-wide display
- **Colors**: White text with light teal hover states
- **Mobile**: Hamburger menu placeholder included

### About Section Options (6 total)
- **AboutOption1**: Split layout with image placeholder and CTA button
- **AboutOption2**: Centered design with quote style and service highlights
- **AboutOption3**: Two-column with statistics and specializations list
- **AboutOption4**: Values-focused with gradient cards and prominent CTA section
- **AboutOption5**: Journey/process design with timeline and step-by-step approach
- **AboutOption6**: Modern asymmetrical layout with overlapping elements
- **Testing**: All options available in page.tsx with descriptive comments for easy switching

### Reusable Components
- **Button Component**: `/src/app/components/Button.tsx`
  - 5 variants: primary, secondary, accent, outline, ghost
  - 4 sizes: sm, md, lg, xl
  - Uses brand colors with hover states
- **Usage**: Imported and used in About options 4, 5, and 6

### Hero Component Updates
- **Fixed spacing issue**: Changed from min-h-screen to h-screen with proper logo positioning
- **Logo placement**: Positioned higher in black space area using pt-32
- **Background**: Uses stripe_bottom_background.jpeg with full coverage

## Current Page Structure
- **Homepage**: Hero + About section (currently showing multiple options for testing)
- **Layout**: Navigation component integrated site-wide
- **Metadata**: Updated with proper New Wave Therapy title and description

## Workflow Notes
- Always create todo lists for multi-step tasks
- Mark todos as completed immediately when finished
- Update this CLAUDE.md file as project evolves
- Keep track of important process decisions and technical details
- User requires explicit confirmation before code changes
- Component testing process: Create multiple options, comment/uncomment to test individually