export type TechCategory = { title: string; items: string[] };
export type Feature = { title: string; description: string };
export type ProcessSection = {
  title: string;
  body: string;
  highlight?: { title: string; points: string[] };
};
export type Challenge = { title: string; challenge: string; solution: string };
export type FutureItem = { title: string; description: string };

export type Project = {
  slug: string;
  title: string;
  type: string;
  date: string;
  summary: string;
  tags: string[];
  image: string;
  imageCaption: string;
  live?: string;
  github?: string;
  privateNote?: string;
  tech: TechCategory[];
  features: Feature[];
  process: ProcessSection[];
  challenges: Challenge[];
  future: FutureItem[];
  prev: { slug: string; title: string };
  next: { slug: string; title: string };
};

export const projects: Project[] = [
  {
    slug: "hypro-light",
    title: "Hypro Light",
    type: "Client Work — Next.js 16 + React 19",
    date: "2026",
    summary:
      "A free workout website built as the top-of-funnel acquisition layer for the Hypro app. Users can browse real trainer workouts, run interactive sessions, log sets, and track personal records — all without signing up. Developed in close collaboration with Maciej, the founder, starting from a Figma prototype he guided and gave continuous feedback on.",
    tags: ["Client Work", "Top-of-Funnel Product", "Full-Stack"],
    image: "/images/hypro-light.png",
    imageCaption: "Hypro Light — free workout browser and interactive session tracker at workouts.hypro.app.",
    live: "https://workouts.hypro.app",
    tech: [
      {
        title: "Frontend",
        items: [
          "Next.js 16 with App Router",
          "React 19 with Server Components",
          "TypeScript in strict mode",
          "Tailwind CSS v4",
          "shadcn/ui + Radix UI primitives",
          "Framer Motion for animations",
        ],
      },
      {
        title: "Data Layer",
        items: [
          "GraphQL Yoga API route",
          "GraphQL Code Generator for typed hooks",
          "TanStack Query v5 for server state",
          "Static TypeScript data files",
          "localStorage for session & history",
        ],
      },
      {
        title: "Tooling & Features",
        items: [
          "PWA support via Serwist",
          "PostHog analytics",
          "Recharts for data visualisation",
          "Lucide React icons",
          "React Hook Form",
          "pnpm + Node 22",
        ],
      },
    ],
    features: [
      {
        title: "Workout Browser",
        description: "Browse and filter real workouts from Hypro trainers, with full exercise details including sets, reps, and muscle group targeting.",
      },
      {
        title: "Interactive Session Wizard",
        description: "Step through exercises one at a time in a guided wizard UI — designed to feel like an actual training session.",
      },
      {
        title: "Set Logging",
        description: "Log weight and reps per set with stepper inputs. Supports both Advanced (weight/reps) and Basic (checkbox) modes.",
      },
      {
        title: "Personal Records & History",
        description: "Tracks completed workouts and calculates personal records using the Epley 1RM formula. All stored locally — no account needed.",
      },
      {
        title: "Muscle Heatmap Visualisation",
        description: "SVG body map that highlights muscle groups targeted by each workout or exercise, helping users understand training balance.",
      },
      {
        title: "Post-Workout Summary",
        description: "Celebration screen after finishing a workout — shows stats, PRs hit, and a shareable card. The highest-value conversion moment.",
      },
    ],
    process: [
      {
        title: "Starting from a Figma Prototype",
        body: "The project began with a Figma prototype I built to establish the visual direction and user flow. Maciej reviewed each screen, gave detailed feedback on layout and UX decisions, and we iterated before writing a single line of code. This collaborative approach helped avoid costly rework later.",
        highlight: {
          title: "Prototype → Feedback → Build",
          points: [
            "Designed key screens in Figma: workout listing, detail page, active session wizard, and post-workout summary.",
            "Maciej guided decisions around conversion touchpoints and product positioning.",
            "Prototype sign-off gave us a clear shared vision before development started.",
          ],
        },
      },
      {
        title: "Architecture & Data Strategy",
        body: "The app uses a clean server-only data pipeline: Next.js Server Components fetch from a GraphQL Yoga API route, which resolves against static TypeScript data files exported from the Hypro platform. This keeps the client bundle small while enabling full type safety end to end.",
        highlight: {
          title: "No Database, No Auth — by Design",
          points: [
            "All workout data is static — no database means zero latency and no running costs.",
            "User session data (history, PRs, set logs) lives in localStorage — removing any sign-up friction.",
            "GraphQL Code Generator produces typed TanStack Query hooks automatically from the schema.",
          ],
        },
      },
      {
        title: "Conversion-Focused UX",
        body: "Every major UX decision was made with conversion in mind. The site gives away complete value for free, using psychology-driven soft CTAs at the moments users are most engaged — after finishing a workout, after building history, or when viewing locked analytics.",
        highlight: {
          title: "Key Conversion Touchpoints",
          points: [
            "Post-workout summary: highest engagement moment — CTA to sign up for full platform.",
            "History page: after 2+ workouts, loss aversion kicks in (don't lose your progress).",
            "Blurred analytics card: creates curiosity and scarcity without being aggressive.",
          ],
        },
      },
    ],
    challenges: [
      {
        title: "Keeping Sessions Smooth Without a Backend",
        challenge: "Active workout sessions need to persist across page reloads and feel responsive, without any server storage.",
        solution: "Designed a localStorage data structure for session state, set logs, and history. Used TanStack Query with optimistic updates so the UI never waits for anything.",
      },
      {
        title: "Type Safety Across the Full Stack",
        challenge: "With static data files, GraphQL resolvers, and client query hooks all needing to stay in sync, any drift causes runtime errors.",
        solution: "GraphQL Code Generator watches the schema and auto-generates typed hooks on every change, making the entire data layer compile-time safe.",
      },
      {
        title: "Balancing Free Value with Conversion",
        challenge: "Too aggressive with CTAs and it feels spammy; too passive and users never convert.",
        solution: "Worked with Maciej to place soft CTAs only at peak engagement moments, using copy that emphasises what users gain rather than what they're missing.",
      },
      {
        title: "Performance with Large Static Data",
        challenge: "The exercises data file alone is ~680KB — importing it naively would bloat the client bundle.",
        solution: "All data access is server-only (enforced with import 'server-only'), so static data never reaches the client. Only the serialised query results are sent.",
      },
    ],
    future: [
      {
        title: "More Workout Programs",
        description: "Expand the workout library with structured multi-week programs from additional Hypro trainers.",
      },
      {
        title: "Advanced Analytics",
        description: "Unlock detailed progress charts and volume tracking as a conversion incentive for signing up.",
      },
      {
        title: "Social Share Cards",
        description: "Polished shareable post-workout cards for Instagram and other platforms to drive organic growth.",
      },
      {
        title: "Deeper Hypro Integration",
        description: "Allow users to import their Hypro account data into the light site as a onboarding bridge.",
      },
    ],
    prev: { slug: "holidaze", title: "Holidaze Booking Platform" },
    next: { slug: "bonita-receipt", title: "Bonita Receipt View" },
  },
  {
    slug: "bonita-receipt",
    title: "Bonita Receipt View",
    type: "Client Work — Next.js + React",
    date: "2025",
    summary:
      "A production receipt viewing application built for Bonita Cafe, giving customers a clean and accessible way to view their digital receipts. Built with Next.js and React, the project demonstrates expertise in component architecture, scalable application structure, and professional UI design through real collaborative development.",
    tags: ["Production App", "Collaborative Development", "Next.js + React"],
    image: "/images/receipt-view.png",
    imageCaption:
      "Bonita Receipt View — clean, modern receipt display with professional UI design.",
    live: "https://receipts.bonitahandel.no/",
    github: "https://github.com/lacostej/bonita-receipt-view",
    tech: [
      {
        title: "Frontend Framework",
        items: [
          "Next.js for full-stack development",
          "React with functional components",
          "React Hooks for state management",
          "Component-based architecture",
          "Modern React patterns and best practices",
        ],
      },
      {
        title: "Styling & Design",
        items: [
          "Clean, minimalist UI design",
          "Responsive layout",
          "Professional styling approach",
          "User-friendly interface",
          "Optimised for all device sizes",
        ],
      },
      {
        title: "Development & Deployment",
        items: [
          "Version control with Git",
          "Next.js deployment best practices",
          "Collaborative development",
          "Component modularity",
          "Professional code standards",
        ],
      },
    ],
    features: [
      {
        title: "Clean UI Design",
        description:
          "Minimalist and professional interface focused on user experience and readability.",
      },
      {
        title: "Component Architecture",
        description:
          "Well-structured reusable components following React best practices and design patterns.",
      },
      {
        title: "Responsive Design",
        description:
          "Fully responsive layout that works seamlessly across all device sizes and orientations.",
      },
      {
        title: "Performance Optimised",
        description:
          "Efficient code and optimised rendering for smooth user experience with Next.js.",
      },
      {
        title: "State Management",
        description:
          "Proper state management implementation for handling application data flow.",
      },
      {
        title: "Code Quality",
        description:
          "Clean, maintainable code following professional development standards.",
      },
    ],
    process: [
      {
        title: "Project Goals & Architecture",
        body: "This project focused on demonstrating professional React and Next.js development practices through clean code, component reusability, and modern UI design principles. The goal was to create a well-structured application that showcases understanding of React architecture, Next.js capabilities, and best practices.",
        highlight: {
          title: "Component Design & Next.js Integration",
          points: [
            "Built with modular, reusable components using Next.js for full-stack capabilities following single responsibility principle.",
            "Result: maintainable, scalable code that demonstrates professional React and Next.js development standards.",
          ],
        },
      },
      {
        title: "React & Next.js Best Practices",
        body: "Implemented modern React patterns including functional components with hooks, proper state management, and efficient rendering. Leveraged Next.js features for improved performance and developer experience. Focused on creating clean, readable code that follows industry best practices.",
        highlight: {
          title: "Professional Standards with Modern Tech Stack",
          points: [
            "Applied consistent code formatting, proper naming conventions, comprehensive component documentation, and Next.js optimisation techniques.",
            "Result: production-ready code that demonstrates commitment to code quality and modern full-stack development.",
          ],
        },
      },
      {
        title: "Collaborative Development",
        body: "Contributing to a private repository provided experience with collaborative development, code review practices, and working within existing project structures. Gained valuable experience in working with team codebases and following established development patterns.",
        highlight: {
          title: "Team Collaboration Skills",
          points: [
            "Worked with existing code, understood project structure, and contributed professionally to the codebase using Next.js and React.",
            "Developed ability to adapt to existing code patterns and contribute effectively to team projects.",
          ],
        },
      },
    ],
    challenges: [
      {
        title: "UI/UX Design Implementation",
        challenge:
          "Creating a clean, professional interface that prioritises user experience and readability.",
        solution:
          "Implemented minimalist design principles with clear visual hierarchy and intuitive navigation.",
      },
      {
        title: "Component Architecture",
        challenge:
          "Building scalable component structure for complex receipt data display using Next.js capabilities.",
        solution:
          "Created reusable components with proper prop drilling, state management patterns, and Next.js optimisation.",
      },
      {
        title: "Responsive Layout",
        challenge: "Ensuring receipt display looks professional on all device sizes.",
        solution:
          "Implemented flexible layouts using CSS Grid and Flexbox with a mobile-first approach.",
      },
    ],
    future: [
      { title: "Export Functionality", description: "Add receipt export and filtering options." },
      {
        title: "User Authentication",
        description: "Implement user accounts for personalised receipt management.",
      },
      {
        title: "Data Persistence",
        description: "Add backend integration for receipt storage and retrieval.",
      },
      {
        title: "Mobile Optimisation",
        description: "Further optimise for mobile with touch-friendly interactions.",
      },
    ],
    prev: { slug: "hypro-light", title: "Hypro Light" },
    next: { slug: "reconciliation", title: "Daily Reconciliation Dashboard" },
  },

  {
    slug: "reconciliation",
    title: "Daily Reconciliation Dashboard",
    type: "Client Work — React + TypeScript",
    date: "November 2025 – Present",
    summary:
      "An internal financial dashboard that transforms complex POS data into clear, actionable insights for restaurant managers and accountants. Compares point-of-sale transactions with actual payment tenders across multiple payment methods, highlighting discrepancies in real time. This ongoing project demonstrates expertise in data visualisation, business logic implementation, and building practical tools that solve real operational challenges.",
    tags: ["Real Business Impact", "Financial Data", "Active Development"],
    image: "/images/Screenshot-closing-portfolio.png",
    imageCaption:
      "Payment reconciliation interface with colour-coded status indicators and difference calculations (sample data).",
    privateNote: "Private client project",
    tech: [
      {
        title: "Frontend Framework",
        items: [
          "React with functional components",
          "TypeScript for type safety",
          "React Hooks (useState, useEffect, useCallback)",
          "Component-based architecture",
          "Modern React patterns",
        ],
      },
      {
        title: "Business Logic",
        items: [
          "Complex payment method routing",
          "Multi-source data comparison",
          "Real-time difference calculations",
          "Conditional rendering logic",
          "Status-based visual feedback",
        ],
      },
      {
        title: "Data & Integration",
        items: [
          "RESTful API integration",
          "Backend collaboration",
          "POS system data processing",
          "Payment tender verification",
          "Multi-location support",
        ],
      },
    ],
    features: [
      {
        title: "Multi-Payment Tracking",
        description:
          "Handles iZettle, Vipps, Cash, Gift Cards, and multiple payment methods with separate tip tracking.",
      },
      {
        title: "Visual Status Indicators",
        description:
          "Colour-coded differences (green for matched, yellow for minor, red for significant) with clear icons.",
      },
      {
        title: "Multi-Location Support",
        description: "Tracks three locations (DLC, Cafe, Odins) with location-specific colour schemes.",
      },
      {
        title: "Date Navigation",
        description:
          "Easy navigation between days with period status tracking and validation checks.",
      },
      {
        title: "Smart Alerts",
        description:
          "Automatic warnings for open tables, unclosed periods, and open food items.",
      },
      {
        title: "Cash Counter Integration",
        description: "Built-in cash counting modal with API submission to payment system.",
      },
    ],
    process: [
      {
        title: "The Business Challenge",
        body: "Before this dashboard, managers had to manually scroll through raw POS data to reconcile daily transactions. The process was time-consuming, error-prone, and required mental math to spot discrepancies across multiple payment methods and tip categories.",
        highlight: {
          title: "Transform Raw Data into Clear Tables",
          points: [
            "Before: raw numbers requiring scrolling and manual calculations.",
            "After: clean, organised table showing POS vs Tenders with automatic difference calculations and visual status indicators.",
            "Impact: saves several minutes per closing and reduces accounting errors.",
          ],
        },
      },
      {
        title: "Complex Payment Logic",
        body: "The most technically challenging aspect was implementing the payment method routing logic. Different payment methods appear in different columns (POS-only, Tenders-only, or both), and tips are tracked separately for specific methods. This required careful conditional rendering and business rule implementation.",
        highlight: {
          title: "Implementation Highlights",
          points: [
            "shouldShowInPOS(): determines which methods display in POS column (excludes delivery types).",
            "shouldShowInTenders(): filters POS-only methods like faktura, offline, brekk.",
            "Tip Tracking: separate logic for POS tips vs Tender tips per payment method.",
          ],
        },
      },
      {
        title: "Ongoing Development & Iteration",
        body: "This project is actively developed and improved based on real user feedback from managers and accountants. Working in test mode allows safe development while the backend team builds out remaining features.",
        highlight: {
          title: "Current Status",
          points: [
            "Completed: core reconciliation UI, payment routing, visual indicators, date navigation.",
            "In Progress: cash counter backend integration, testing with staff.",
            "Next: production rollout to all locations.",
          ],
        },
      },
    ],
    challenges: [
      {
        title: "Payment Method Routing Logic",
        challenge:
          "Different payment methods need to appear in different table columns with specific tip handling rules.",
        solution:
          "Created helper functions (shouldShowInPOS, shouldShowInTenders, shouldShowPOSTips) that encapsulate business rules and keep components clean.",
      },
      {
        title: "Data Visualisation for Complex Financial Data",
        challenge:
          "Making 6+ payment methods with separate amounts, tips, and differences immediately understandable.",
        solution:
          "Colour-coded status system, clear icons, and organised table layout with distinct POS vs Tenders columns.",
      },
      {
        title: "State Management for Multi-Source Data",
        challenge:
          "Managing period status, open tables, open items, payment data, and location state efficiently.",
        solution:
          "React hooks (useState, useEffect, useCallback) with proper dependency arrays and memoisation for optimal performance.",
      },
      {
        title: "Backend Collaboration",
        challenge:
          "Coordinating frontend development with backend API development by Jerome.",
        solution:
          "Test mode flag for safe frontend development, clear API contract definition, and iterative integration testing.",
      },
    ],
    future: [
      {
        title: "Cash Tender Backend",
        description: "Complete cash counter API integration for direct submission to payment system.",
      },
      {
        title: "Mobile Optimisation",
        description: "Enhanced mobile layout for managers doing closing on tablets or phones.",
      },
      {
        title: "Historical Trends",
        description:
          "Add charts showing reconciliation patterns over time to identify recurring issues.",
      },
      {
        title: "Export Functionality",
        description: "Export reconciliation data to CSV for accounting software integration.",
      },
    ],
    prev: { slug: "bonita-receipt", title: "Bonita Receipt View" },
    next: { slug: "numa-booking", title: "Numa Booking System" },
  },

  {
    slug: "numa-booking",
    title: "Numa Booking System",
    type: "Client Work — Next.js + TypeScript Full-Stack",
    date: "December 2025 – Present",
    summary:
      "A breakfast service tracking system for hotel guests ordering at Bonita Cafe. Staff can verify authorised rooms, check off arrivals, and view upcoming bookings to streamline operations and prevent unauthorised access. This full-stack application demonstrates expertise in both frontend UI development and backend API implementation, built with Next.js and TypeScript.",
    tags: ["Full-Stack", "Staff Operations Tool", "In Development"],
    image: "/images/numa-screenshot.png",
    imageCaption:
      "Clean breakfast tracking interface with card-based layout, visual status indicators, and intuitive check-off system.",
    privateNote: "Private client project — In development",
    tech: [
      {
        title: "Frontend Framework",
        items: [
          "Next.js for full-stack development",
          "React with TypeScript",
          "Client-side state management",
          "Modern React patterns and hooks",
          "Responsive UI design",
        ],
      },
      {
        title: "Backend & Database",
        items: [
          "Next.js API routes",
          "RESTful API design",
          "Database integration",
          "Authentication middleware",
          "Data persistence layer",
        ],
      },
      {
        title: "Features & Functionality",
        items: [
          "Room authorisation verification",
          "Visual booking cards",
          "Interactive check-off system",
          "Tab-based date navigation",
          "Real-time status updates",
        ],
      },
    ],
    features: [
      {
        title: "Room Verification",
        description:
          "Verify which hotel rooms are authorised for breakfast service to prevent unauthorised access.",
      },
      {
        title: "Interactive Check-off",
        description:
          "Visual circle system for tracking individual guests as they arrive for breakfast service.",
      },
      {
        title: "Multi-Day View",
        description:
          "Tab navigation for today and tomorrow's bookings with automatic date management.",
      },
      {
        title: "Menu Display",
        description:
          "Shows menu selections and guest count for each booking to help kitchen preparation.",
      },
      {
        title: "Visual Status",
        description:
          "Colour-coded cards (green for complete, yellow for partial, gray for pending) for quick status recognition.",
      },
      {
        title: "Time Tracking",
        description:
          "Records and displays last service time for each booking to monitor flow.",
      },
    ],
    process: [
      {
        title: "The Business Need",
        body: "Numa hotel guests order breakfast at Bonita Cafe, but staff needed a way to verify authorised rooms and prevent duplicate or unauthorised service. The system also needed to help staff prepare for upcoming bookings and track which guests had already been served.",
        highlight: {
          title: "Digital Booking Tracker",
          points: [
            "Before: manual verification and tracking prone to errors.",
            "After: digital system showing authorised rooms with visual check-off and menu information.",
            "Impact: prevents unauthorised access, reduces service errors, helps kitchen preparation.",
          ],
        },
      },
      {
        title: "Full-Stack Development",
        body: "This project showcases full-stack capabilities — building both the frontend React UI and the backend API routes with Next.js. Leveraged AI assistance to accelerate development while maintaining code quality and learning new patterns.",
        highlight: {
          title: "Technical Approach",
          points: [
            "Frontend: TypeScript interfaces, React state management, responsive card layout.",
            "Backend: API routes, database queries, authentication, data validation.",
            "AI Collaboration: used AI to accelerate development and learn best practices.",
          ],
        },
      },
      {
        title: "UI/UX Design Decisions",
        body: "Designed the interface to be simple and intuitive for cafe staff during busy breakfast service. Used a card-based layout with visual indicators that don't require reading. The check-off circles provide satisfying visual feedback as guests are served.",
        highlight: {
          title: "Design Highlights",
          points: [
            "Visual Hierarchy: large room numbers, menu info, and clear status colours.",
            "Touch-Friendly: large click targets (28px circles) work well on tablets.",
            "Confirmation Dialog: prevents accidental early service of tomorrow's bookings.",
          ],
        },
      },
    ],
    challenges: [
      {
        title: "State Management Across Components",
        challenge: "Managing bookings, service status, and date filtering efficiently.",
        solution:
          "React hooks (useState, useEffect) with proper dependency management and optimistic updates for responsive UI.",
      },
      {
        title: "Data Aggregation Logic",
        challenge:
          "Grouping bookings by date, calculating service progress, handling edge cases.",
        solution:
          "Created helper functions for date grouping, service summary calculations, and status determination with clear business logic.",
      },
      {
        title: "Preventing Service Errors",
        challenge: "Staff might accidentally serve tomorrow's breakfast early.",
        solution:
          "Implemented a confirmation dialog specifically for tomorrow's bookings with a clear warning message.",
      },
      {
        title: "Authentication & Security",
        challenge: "Protecting booking data while keeping login simple for staff.",
        solution:
          "Password-based session storage with API middleware validation for secure yet user-friendly access.",
      },
    ],
    future: [
      { title: "Production Rollout", description: "Complete testing and deploy for daily staff use." },
      {
        title: "Service Analytics",
        description: "Track peak times, popular menu items, and service patterns for better planning.",
      },
      {
        title: "Hotel Integration",
        description: "Sync with Numa's booking system for automatic updates and guest information.",
      },
      {
        title: "Reporting",
        description: "Generate daily and weekly reports for accounting and operational insights.",
      },
    ],
    prev: { slug: "reconciliation", title: "Daily Reconciliation Dashboard" },
    next: { slug: "holidaze", title: "Holidaze Booking Platform" },
  },

  {
    slug: "holidaze",
    title: "Holidaze Booking Platform",
    type: "Academic — Exam Project 2",
    date: "December 2024",
    summary:
      "A comprehensive accommodation booking platform built with React and TypeScript, featuring dual-role functionality for both customers seeking vacation rentals and venue managers wanting to list their properties. This project demonstrates advanced frontend development skills with modern technologies and best practices.",
    tags: ["Dual User Roles", "API Integration", "Exam Project"],
    image: "/images/holidaze.png",
    imageCaption:
      "Holidaze main interface showcasing the modern booking experience with search filters and venue listings.",
    live: "https://rosarioba.github.io/holidaze-booking-app/",
    github: "https://github.com/RosarioBA/holidaze-booking-app",
    tech: [
      {
        title: "Frontend",
        items: [
          "React 18 with modern hooks",
          "TypeScript for type safety",
          "Tailwind CSS for styling",
          "React Router 6 for navigation",
        ],
      },
      {
        title: "Development Tools",
        items: [
          "Vite for fast development",
          "Git & GitHub for version control",
          "GitHub Pages deployment",
          "Responsive design principles",
        ],
      },
      {
        title: "API Integration",
        items: [
          "Noroff API v2 integration",
          "JWT authentication",
          "CRUD operations",
          "Real-time data updates",
        ],
      },
    ],
    features: [
      {
        title: "Advanced Search & Filtering",
        description:
          "Comprehensive search functionality with filters for location, price, amenities, and availability dates.",
      },
      {
        title: "Dual User Roles",
        description:
          "Separate interfaces for customers (booking venues) and venue managers (listing properties).",
      },
      {
        title: "Interactive Booking System",
        description:
          "Calendar integration for date selection, availability checking, and booking confirmation.",
      },
      {
        title: "Responsive Design",
        description:
          "Mobile-first approach ensuring seamless experience across all devices and screen sizes.",
      },
    ],
    process: [
      {
        title: "Planning & Design Phase",
        body: "Started with comprehensive user story mapping and wireframing using Figma. Created detailed user personas for both customer and venue manager roles, which helped guide the dual-interface design decisions.",
        highlight: {
          title: "Key Improvement: Enhanced User Flow",
          points: [
            "Original approach: initially designed a single interface trying to accommodate both user types.",
            "Improvement: after user feedback, redesigned with role-specific dashboards and navigation, resulting in better task completion rates.",
          ],
        },
      },
      {
        title: "Technical Implementation",
        body: "Built with React and TypeScript, focusing on component reusability and type safety. Implemented custom hooks for API calls and state management, and used Context API for global state like authentication and favourites.",
        highlight: {
          title: "Key Improvement: Performance Optimisation",
          points: [
            "Challenge: initial version had slow loading times due to large image files and excessive API calls.",
            "Solution: added image optimisation, lazy loading, and smart caching strategies, reducing load time significantly.",
          ],
        },
      },
      {
        title: "Post-Development Enhancements",
        body: "After receiving instructor feedback, I implemented several key improvements to enhance both functionality and user experience.",
        highlight: {
          title: "Improvements Made",
          points: [
            "Accessibility: added proper ARIA labels, keyboard navigation, and high contrast mode support.",
            "Error Handling: implemented comprehensive error boundaries and user-friendly error messages.",
            "Loading States: added skeleton screens and loading indicators for better perceived performance.",
            "Mobile Optimisation: enhanced touch interactions and improved mobile navigation patterns.",
          ],
        },
      },
    ],
    challenges: [
      {
        title: "Complex State Management",
        challenge: "Managing complex state across multiple user roles and booking flows.",
        solution:
          "Implemented React Context for global state and custom hooks for component-specific logic, creating a clean separation of concerns.",
      },
      {
        title: "API Integration Complexity",
        challenge:
          "Working with multiple endpoints and handling authentication across different user roles.",
        solution:
          "Created a centralised API service layer with automatic token refresh and error handling, improving reliability and maintainability.",
      },
      {
        title: "Design Consistency",
        challenge:
          "Maintaining design consistency across different user interfaces while keeping them distinct.",
        solution:
          "Developed a comprehensive design system with reusable components and consistent styling patterns using Tailwind CSS.",
      },
    ],
    future: [
      {
        title: "Real-time Notifications",
        description:
          "Implement WebSocket connections for instant booking confirmations and venue updates.",
      },
      {
        title: "Messaging System",
        description: "Add direct communication between guests and hosts for better customer service.",
      },
      {
        title: "Review System",
        description: "Implement comprehensive rating and review functionality for venues and hosts.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Advanced analytics for venue managers to track performance and optimise listings.",
      },
    ],
    prev: { slug: "numa-booking", title: "Numa Booking System" },
    next: { slug: "hypro-light", title: "Hypro Light" },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
