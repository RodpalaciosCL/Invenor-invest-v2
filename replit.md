# INVENOR Interactive Pitch Platform

## Overview

This is a sophisticated React-based interactive pitch deck for INVENOR, showcasing their CRUCES AI railway crossing monitoring system. Built with advanced web technologies including React, TypeScript, Framer Motion, TailwindCSS, and includes authentication system, AI chatbot (MarIA), and comprehensive data visualization.

**CRITICAL UPDATE (2025-07-19)**: All financial data corrected to match Excel V5 analysis for investor accuracy.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Cool, innovative, marketero, convincente - focus on visual impact and professional presentation for investors.
Content focus: Maintain all authentic data from intro.md dataset - never lose the detailed financial projections and technical specifications.
Access: Direct entry without login barriers - focus on immediate emotional impact and investment appeal.
Navigation: Professional scroll-to-top buttons, navigation bar, and progress indicators for improved usability.
Content restrictions: NO presentation modes, auto-play features, or gamified elements inappropriate for sophisticated investors.
Color palette: STRICTLY orange, gray, white, black only - NO gradients, blues, purples, greens or other colors.

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

### Advanced Pitch Deck Sections
1. **Direct Access**: Immediate access to pitch deck without barriers
2. **Hero**: Dynamic animated landing with rotating metrics, INVENOR logo, and smooth scroll
3. **StatsSection**: CountUp animations with real financial data and hover effects
4. **NavigationBar**: Professional header with INVENOR logo left, centered menu, CTA button right, integrated currency calculator widget
4. **ProblemSolution**: Enhanced comparison with validation data
5. **Cases**: Use cases with animated icons and detailed descriptions
6. **ChartRanking**: Interactive bar chart of real comuna rankings with increments
7. **Projections**: Multi-year cashflow projections with Recharts visualization
8. **InvestmentOpportunity**: Detailed financial breakdown with modal system and sensitivity analysis
9. **VideoSection**: Validation showcase with interactive demo and tech stats
10. **MapSection**: Interactive Chile map with regional data and expansion strategy
11. **FAQ**: Updated with investor-focused questions and technical details
11. **Contact Integration**: Professional contact forms and investor engagement

### Advanced Interactive Components
- **loadData.ts**: Centralized loading of authentic CRUCES AI dataset
- **Real Financial Data**: Complete Excel V5 dataset with ROI 49%, IRR 20.1%, payback 26 months
- **Direct Access Flow**: Immediate entry to maximize engagement and reduce barriers
- **Framer Motion**: Professional animations throughout all components
- **Interactive Elements**: Hover effects, smooth transitions, modal systems
- **Professional CTAs**: Strategic call-to-action buttons for investor engagement
- **DataRoomDashboard**: Advanced due diligence with cohort analysis, stress testing, unit economics
- **ESGMetrics**: Comprehensive Environmental, Social, Governance impact measurement
- **Professional Navigation**: Smooth scroll navigation bar, progress indicator, scroll-to-top functionality

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

## Recent Changes (2025-07-19)

### **CRITICAL FINANCIAL DATA CORRECTIONS**
✅ **Excel V5 Analysis Implementation Complete**
- **ROI**: 55% → **49%** (corrected across 8+ components)
- **Payback**: 15 meses → **26 meses** (updated throughout)
- **Capital requerido**: $2,067M → **$2,053,200,000 CLP**
- **Retorno total**: $3.1B → **$3,053,200,000 CLP**
- **IRR**: 42% → **20.1% anual**

### **Files Updated**
1. ✅ **loadData.ts** - Central data source corrected
2. ✅ **Hero.tsx** - ROI 49%, payback 26 meses, return $3.053B
3. ✅ **StatsSection.tsx** - ROI 49%, payback 26 meses, return corrected
4. ✅ **InvestmentOpportunity.tsx** - Investment amounts and ROI updated
5. ✅ **ComparisonMatrix.tsx** - ROI 49%, payback 26 meses
6. ✅ **InvestmentSimulator.tsx** - ROI 49%, payback 26 meses
7. ✅ **IntroSection.tsx** - ROI 49%, payback 26 meses, return $3.053B
8. ✅ **DataRoomDashboard.tsx** - Base scenario ROI 49%
9. ✅ **Indicators.tsx** - All sensitivity scenarios adjusted for 49% base
10. ✅ **FAQ.tsx** - ROI guarantees and validation corrected to 49%

### **Data Consistency Achieved**
- All components now reflect accurate Excel V5 financial projections
- Investor presentation maintains credibility with authentic data
- Effectiveness data corrected from unrealistic 22% to accurate 8%
- Proper CLP currency formatting throughout