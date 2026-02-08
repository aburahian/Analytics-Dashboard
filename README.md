
# Admin Analytics Dashboard

A production-ready Admin Analytics Dashboard built with Next.js 15, TypeScript, and Tailwind CSS. This dashboard provides real-time insights with interactive charts, KPI metrics, and a premium user experience.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Instructions
1. **Clone the repository** (or download the source)
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```
5. **Start production server**:
   ```bash
   npm run start
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Charts**: [Recharts](https://recharts.org/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏛 Architecture Decisions

### 1. Component-Based Architecture
The project follows a modular structure where UI elements are broken down into reusable components (e.g., `Card`, `Button`, `Dropdown`). Layout components like `Sidebar` and `Header` are separated from the main page logic for better maintainability.

### 2. State Management with Zustand
Zustand was chosen for its minimal boilerplate and ease of use in managing global dashboard filters (Date Range, User Type). It provides a clean API that integrates well with React's functional components.

### 3. Data Fetching Simulation
A mock API layer (`lib/api.ts`) simulates asynchronous data fetching with a realistic delay. This allowed us to implement and test loading states (Skeletons) and ensures the UI is ready for integration with a real backend.

### 4. Performance Optimizations
- **Memoization**: Heavy chart components are wrapped in `React.memo` to prevent unnecessary re-renders when other parts of the UI update.
- **Lazy Loading**: Using `next/dynamic` for charts improves the initial "Time to Interactive" by splitting the code and loading heavy visualization libraries only on the client side.

### 5. Tailwind CSS v4 for Styling
We utilized Tailwind CSS v4's new features, including the native dark mode strategy (`@variant dark`) and the streamlined `@theme` block in `globals.css` for consistent design tokens.

## 📝 Assumptions Made
- **Client-Side Rendering for Charts**: Since `recharts` requires the browser's DOM (SVG rendering), all chart components are designated as Client Components.
- **System Theme Preference**: The dashboard defaults to the user's system theme preference but allows explicit overriding via the toggle.
- **Mock Data Scenarios**: We assumed standard business metrics (Revenue, Users, etc.) would be the primary focus and shaped the mock data to reflect realistic growth/decline scenarios.
- **Modern Browsers**: The implementation assumes support for modern CSS features like CSS Grid and Variables.

---
Created by Antigravity for the Admin Analytics Dashboard Assignment.
