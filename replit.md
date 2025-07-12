# Rest Express Application

## Overview

This is a full-stack TypeScript application built with React frontend and Express backend, featuring a modern tech stack including Drizzle ORM for database operations, shadcn/ui components, and TanStack Query for state management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple

### Development Environment
- **Package Manager**: npm
- **TypeScript**: Strict mode enabled across the stack
- **Development Server**: tsx for hot-reloading backend
- **Build Strategy**: Separate builds for client (Vite) and server (esbuild)

## Key Components

### Database Layer
- **Schema Location**: `shared/schema.ts` - centralizes database models
- **User Model**: Basic user table with id, username, and password fields
- **Validation**: Drizzle-Zod integration for schema validation
- **Migrations**: Managed through Drizzle Kit with PostgreSQL dialect

### API Layer
- **Routes**: Centralized in `server/routes.ts` with `/api` prefix
- **Storage Interface**: Abstracted storage layer with memory implementation fallback
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Logging**: Request/response logging with performance metrics

### Frontend Components
- **Component Library**: Comprehensive shadcn/ui component set
- **Theme System**: CSS variables with light/dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind utilities
- **Type Safety**: Full TypeScript coverage with proper type inference

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