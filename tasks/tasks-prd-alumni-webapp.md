# Tasks: Rulang Primary School Alumni Webapp - Phase 1 (Static Mockups)

Based on the PRD for the Rulang Primary School Alumni Webapp, these tasks focus on creating comprehensive static mockups for all new member-only features and authentication flows while maintaining consistency with the existing design system.

## Relevant Files

*Note: These files will be created during Phase 1 for static mockups in the `/mockups` folder*

- `mockups/auth/login/page.tsx` - Login page mockup with form components
- `mockups/auth/register/page.tsx` - Registration page mockup (admin invitation flow)
- `mockups/auth/forgot-password/page.tsx` - Password reset page mockup
- `mockups/member/dashboard/page.tsx` - Member dashboard homepage with navigation to all member features
- `mockups/member/profile/page.tsx` - Profile management page with privacy controls mockup
- `mockups/member/membership/page.tsx` - Digital membership card display mockup
- `mockups/member/network/page.tsx` - Connected members listing mockup
- `mockups/member/discover/page.tsx` - Member discovery and recommendations mockup
- `mockups/member/benefits/page.tsx` - Partner benefits listing mockup
- `mockups/admin/dashboard/page.tsx` - Admin dashboard mockup
- `mockups/admin/events/page.tsx` - Events management CRUD mockup
- `mockups/admin/partners/page.tsx` - Partners management CRUD mockup
- `mockups/admin/updates/page.tsx` - Updates/News management CRUD mockup
- `mockups/admin/blog/page.tsx` - Blog management interface mockup
- `mockups/blog/page.tsx` - Public blog listing page mockup
- `mockups/blog/[slug]/page.tsx` - Individual blog post page mockup
- `mockups/components/ui/membership-card.tsx` - Digital membership card component
- `mockups/components/ui/member-card.tsx` - Member profile card component for network/discovery
- `mockups/components/ui/blog-card.tsx` - Blog post card component
- `mockups/components/ui/form-components.tsx` - Enhanced form components for member features
- `mockups/components/ui/privacy-controls.tsx` - Privacy settings component mockup
- `mockups/components/auth/login-form.tsx` - Login form component mockup
- `mockups/components/member/profile-editor.tsx` - Profile editing form mockup
- `mockups/components/member/connection-card.tsx` - Connection request/member card mockup
- `mockups/components/admin/content-editor.tsx` - Rich text editor mockup for admin content
- `mockups/lib/mock-data.ts` - Mock data for all member features and blog content

### Notes

- All files in Phase 1 will contain static mockups with placeholder functionality
- Focus on visual design, responsive layouts, and component architecture
- Use existing UI components and design system from current codebase
- Mock data will simulate realistic content for all features

## Tasks

- [ ] 1.0 Create Authentication Flow Mockups
  - [ ] 1.1 Design login page with email/password form, "Forgot Password" link, and responsive layout
  - [ ] 1.2 Create registration page mockup showing admin invitation workflow with disabled public registration
  - [ ] 1.3 Build forgot password page with email input and reset instructions
  - [ ] 1.4 Design login form component with validation states and error messaging
  - [ ] 1.5 Create authentication layout component consistent with main site design
  - [ ] 1.6 Add loading states and success/error feedback mockups for all auth flows

- [ ] 2.0 Build Member Dashboard and Profile Management Mockups
  - [ ] 2.1 Create member dashboard homepage with navigation cards to all member features
  - [ ] 2.2 Design comprehensive profile editing form with all required fields (name, graduation year, classes, profession, interests, expertise, contact info, location, bio)
  - [ ] 2.3 Build field-level privacy controls component with options (public, members only, admins only, private)
  - [ ] 2.4 Create profile photo upload mockup with image preview and optimization placeholder
  - [ ] 2.5 Design digital membership card component with QR code, member details, and "Member Since" date
  - [ ] 2.6 Build profile preview component showing how profile appears to different user types
  - [ ] 2.7 Create member benefits page listing partner offers with redemption instructions
  - [ ] 2.8 Design responsive layouts for all member pages across mobile, tablet, and desktop

- [ ] 3.0 Design Member Networking and Discovery Interface Mockups
  - [ ] 3.1 Create "My Network" page showing approved connections with search and filter options
  - [ ] 3.2 Design "Discover" page with member recommendations and explanation labels
  - [ ] 3.3 Build member card component for network listings with connection status indicators
  - [ ] 3.4 Create connection request flow mockups (send request, approve/decline, notifications)
  - [ ] 3.5 Design discovery filters for graduation year, profession, interests, and classmate connections
  - [ ] 3.6 Build connection recommendation algorithm mockup with priority explanations
  - [ ] 3.7 Create empty states for network pages (no connections, no recommendations)
  - [ ] 3.8 Design member profile preview modal for quick connection decisions

- [ ] 4.0 Create Admin Management Interface Mockups
  - [ ] 4.1 Design admin dashboard with content statistics and quick action buttons
  - [ ] 4.2 Create Events CRUD interface with rich text editor mockup and image upload areas
  - [ ] 4.3 Build event creation form with RSVP settings, ticket limits, and pricing placeholders
  - [ ] 4.4 Design Partners CRUD interface for managing benefit providers and offer details
  - [ ] 4.5 Create Updates/News CRUD interface with rich text editing and publishing workflow
  - [ ] 4.6 Build member management interface for admin invitation and account management
  - [ ] 4.7 Design content moderation workflow with draft/published states
  - [ ] 4.8 Create admin navigation and role-based access control mockups

- [ ] 5.0 Build Blog Platform Interface Mockups
  - [ ] 5.1 Design public blog listing page with category filters, search, and pagination
  - [ ] 5.2 Create individual blog post page with responsive design and social sharing buttons
  - [ ] 5.3 Build blog post editor mockup with Tiptap-style toolbar and formatting options
  - [ ] 5.4 Design three-tier visibility system UI (public, members only, preview with CTA)
  - [ ] 5.5 Create blog preview functionality showing first paragraph with membership CTA
  - [ ] 5.6 Build blog categories and tags management interface for admins
  - [ ] 5.7 Design blog post creation form with title, excerpt, featured image, and publishing options
  - [ ] 5.8 Create blog post cards for listing pages with different visibility state indicators
  - [ ] 5.9 Build related posts recommendation section mockup
  - [ ] 5.10 Design SEO optimization interface for meta tags and social sharing previews
  - [ ] 5.11 Create blog analytics dashboard mockup with views and engagement metrics