# Rulang Primary School Alumni Association Website

A modern, responsive website for the Rulang Primary School Alumni Association (RPSAA), built to reconnect generations of Rulangnites and support the school community.

## 🎯 Project Overview

The RPSAA website serves as a digital hub for alumni to:
- Stay connected with their alma mater and fellow alumni
- Access information about events, membership, and community initiatives
- Learn about the association's history, mission, and leadership
- Support current students through donations and volunteer opportunities

**Mission**: "To Guide, To Bridge, and To Serve"

## 🛠 Tech Stack

### Core Framework
- **Next.js 14.2.30** - React framework with App Router
- **React 18** - Frontend library
- **TypeScript 5** - Type safety and developer experience

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Radix UI** - Headless UI components for accessibility
  - Navigation Menu
  - Dialog
  - Dropdown Menu
  - Slot (composition)
- **Lucide React 0.263.1** - Icon library
- **Class Variance Authority** - Component variant management
- **clsx & tailwind-merge** - Conditional CSS classes

### Design System
- **Custom Color Palette**:
  - Primary: `#861F41` (Maroon)
  - Accent: `#80A1C1` (Blue)
  - Tertiary: `#D9CFC1` (Beige)
- **Typography**:
  - Montserrat (headings)
  - PT Sans (body text)
  - Inter (fallback)

### Development & Testing
- **Playwright 1.54.1** - End-to-end testing
- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage
│   ├── about/             # About us page
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── membership/        # Membership page
│   └── partners/          # Partners page
├── components/
│   ├── navigation.tsx     # Main navigation with mobile menu
│   └── ui/                # Reusable UI components
│       ├── button.tsx     # Button component with variants
│       ├── logo.tsx       # School logo component
│       └── navigation-menu.tsx # Navigation menu primitives
└── lib/
    └── utils.ts           # Utility functions (cn helper)
```

## 🌟 Key Features

### 1. Responsive Design
- **Mobile-first approach** with hamburger navigation
- **Breakpoints**: 
  - Mobile: 375px+ 
  - Tablet: 768px+
  - Desktop: 1024px+
  - Large: 1920px+
- **Touch-friendly** buttons (44px minimum height)
- **Progressive enhancement** for better performance

### 2. Navigation System
- **Desktop**: Horizontal navigation bar with social links
- **Mobile**: Hamburger menu with collapsible navigation
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Social Integration**: Facebook, Instagram, LinkedIn links

### 3. Content Pages

#### Homepage (`/`)
- Hero section with call-to-action buttons
- Statistics showcase (95 years, founding dates, community size)
- Feature cards (Alumni Network, Events, Achievement Gallery)
- Upcoming events with registration buttons
- Footer with contact information

#### About Page (`/about`)
- Association history and mission
- Leadership team and past presidents
- Core values and objectives
- Patron recognition
- Donation information with PayNow QR placeholder

#### Additional Pages
- **Events**: Community gatherings and reunions
- **Membership**: Join the alumni association
- **Partners**: School partnerships and collaborations
- **Contact**: Get in touch with the association

### 4. UI Component System
- **Button variants**: Primary, secondary, outline, ghost, link
- **Consistent spacing** using Tailwind's spacing scale
- **Color-coded sections** for visual hierarchy
- **Interactive elements** with hover states and transitions

### 5. Recent Improvements
- ✅ Mobile hamburger navigation implemented
- ✅ Responsive button layouts and spacing
- ✅ Optimized typography scaling across devices
- ✅ Improved footer organization for mobile
- ✅ Touch-friendly interactive elements
- ✅ Removed Twitter integration (as per user update)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd rulang_alumni
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:3000`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🧪 Testing

The project includes Playwright for end-to-end testing:

```bash
# Run Playwright tests
npx playwright test

# Run tests in UI mode
npx playwright test --ui
```

### Recent Testing
- ✅ Mobile responsiveness across all screen sizes
- ✅ Navigation menu functionality
- ✅ Button interactions and layouts
- ✅ Cross-browser compatibility

## 🎨 Design System

### Colors
```css
--primary: #861F41      /* Maroon - school colors */
--accent: #80A1C1       /* Blue - complementary */
--tertiary: #D9CFC1     /* Beige - warm neutral */
```

### Typography Hierarchy
- **H1**: 3xl → 6xl (responsive scaling)
- **H2**: 2xl → 4xl (section headings)
- **H3**: xl → 2xl (subsection headings)
- **Body**: base → lg (content text)

### Component Variants
- **Buttons**: 6 variants (default, destructive, outline, secondary, ghost, link)
- **Sizes**: 4 sizes (sm, default, lg, icon)
- **States**: hover, focus, disabled

## 📱 Mobile Optimization

### Navigation
- Hamburger menu with smooth animations
- Full-screen mobile menu overlay
- Touch-friendly tap targets (44px minimum)
- Social links integrated in mobile menu

### Layout
- Single-column layouts on mobile
- Stacked buttons with full width
- Responsive image placeholders
- Optimized text sizing and spacing

### Performance
- Next.js automatic code splitting
- Optimized font loading
- Efficient CSS with Tailwind purging
- Fast page transitions

## 🌐 Content Management

### Image Placeholders
The website currently uses styled placeholder divs for:
- Hero images and backgrounds
- Team photos and leadership portraits
- Event photos and historical images
- QR codes for donations

### Content Structure
- Static content in TypeScript/React components
- Easily maintainable through component props
- Structured data for events and team members
- Contact information centralized

## 🔧 Configuration Files

- **`next.config.js`**: Next.js configuration
- **`tailwind.config.js`**: Custom design system settings
- **`tsconfig.json`**: TypeScript compiler options
- **`postcss.config.js`**: CSS processing configuration
- **`CLAUDE.md`**: Development notes and changes

## 🤝 Contributing

### Code Style
- TypeScript for type safety
- Functional components with hooks
- Tailwind classes for styling
- ESLint for code quality

### Development Notes
- Recent change: Twitter button removed from navigation
- Mobile-first responsive design approach
- Accessibility-focused component development
- Performance optimization with Next.js features

## 📞 Contact Information

**Rulang Primary School Alumni Association**
- Address: 123 Rulang Road, Singapore 123456
- Email: info@rulangalumni.sg
- Phone: +65 6123 4567
- Secretary: secretary@rulangalumni.org

## 📄 License

© 2024 Rulang Primary School Alumni Association. All rights reserved.

---

*This website represents the digital presence of RPSAA, connecting generations of Rulangnites and supporting the continued excellence of Rulang Primary School.*