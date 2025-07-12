# INVENOR Pitch Website

## Overview

This is a React-based pitch deck website for INVENOR, showcasing their railway crossing monitoring system. Built with modern web technologies including React, TypeScript, Tailwind CSS, Recharts for data visualization, and CountUp for animated statistics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with dark theme (zinc-900 background)
- **Charts**: Recharts for data visualization
- **Animations**: CountUp for animated statistics
- **Components**: Modular component architecture with data props

### Data Architecture
- **Data Source**: Simulated project data (originally from Excel PROYECTO_CRUCES_AI_V3.xlsx)
- **Structure**: Typed interfaces for CasoUso, RankingComuna, and Indicador
- **Loading**: Centralized data loading function in loadData.ts

### Development Environment
- **Package Manager**: npm
- **TypeScript**: Strict mode enabled across the stack
- **Development Server**: tsx for hot-reloading backend
- **Build Strategy**: Separate builds for client (Vite) and server (esbuild)

## Key Components

### Pitch Deck Sections
1. **Hero**: Main landing with title, subtitle, and CTA
2. **ProblemSolution**: Problem/solution comparison with validation
3. **Cases**: Use cases with icons and descriptions
4. **ChartRanking**: Interactive bar chart of comuna rankings
5. **Indicators**: Animated statistics with CountUp
6. **DemoVideo**: Video placeholder with feature highlights
7. **Map**: Interactive map placeholder with network stats
8. **FAQ**: Expandable accordion with common questions

### Data Components
- **loadData.ts**: Centralized data loading with typed interfaces
- **Real Data**: Casos de uso, ranking comunas, indicadores generales
- **Responsive Design**: Mobile-first approach with grid layouts
- **Interactive Elements**: Hover effects, animations, smooth transitions

## Data Flow

### API Communication
1. Frontend makes requests through `apiRequest` utility function
2. TanStack Query manages caching, loading states, and error handling
3. Backend routes process requests using storage interface
4. Responses flow back through standardized JSON format

### State Management
- **Server State**: Managed by TanStack Query with automatic caching
- **Form State**: React Hook Form handles local form state
- **UI State**: React hooks for component-level state
- **Global State**: Minimal global state, preferring server state and props

### Database Operations
1. Drizzle ORM provides type-safe query building
2. Storage interface abstracts database operations
3. Memory storage provides development/testing fallback
4. PostgreSQL handles production data persistence

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL for production
- **Connection**: `@neondatabase/serverless` driver
- **Fallback**: In-memory storage for development without database

### UI Framework
- **Radix UI**: Accessible primitive components
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first styling framework

### Development Tools
- **Vite**: Frontend development server and build tool
- **ESBuild**: Backend bundling for production
- **TSX**: TypeScript execution for development
- **Drizzle Kit**: Database migration and schema management

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds optimized static assets to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle Kit manages schema migrations

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Development**: Hot-reloading with Vite dev server
- **Production**: Compiled JavaScript with static asset serving

### Replit Integration
- **Development Banner**: Automatic Replit environment detection
- **Error Overlay**: Runtime error display in development
- **File System**: Restricted access for security

The application follows a clean separation of concerns with shared TypeScript types, centralized configuration, and a scalable architecture that supports both development and production environments.