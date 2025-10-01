# 🏷️ EightyDays ✨
*Travel, explore, and save your adventures — all in one app.*

EightyDays is a modern, responsive travel web application inspired by both iOS and Android native travel apps, built with Next.js 15, React 19, and Tailwind CSS. The app brings the best of mobile app experiences to the web with intuitive navigation, smooth animations, and native-like interactions.



## 🚀 Live Demo
[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://byewind-dashboard-juspay.vercel.app/)

## 📱 Screenshots

Experience **ByeWind** across themes and pages:



## ✅ Features

- **Pixel-Perfect UI**
  - Clean layouts with consistent spacing, typography, and alignment.
  - Beautiful gradients, glassmorphism effects, and smooth animations.

- **Responsive Design**
  - Mobile-first approach using Tailwind CSS.
  - Optimized for desktop, tablet, and mobile devices.

- **Authentication**
  - Sign Up with email, username, and password.
  - Login with email/username and password.
  - Forgot Password functionality.
  - Persistent sessions with localStorage.

- **Interactive Maps**
  - React Leaflet integration with OpenStreetMap.
  - Location markers with custom popups.
  - Responsive, fluid map containers.

- **Search & Discovery**
  - Intelligent search with live suggestions.
  - Recent searches persisted via localStorage.
  - Quick search categories: *Beaches, Mountains, Food, etc.*
  - Real-time filtering of destinations and lists.

- **Interactive Components**
  - Image carousels with swipe gestures and auto-play.
  - Save/Like functionality with instant visual feedback.
  - Smooth hover animations and micro-interactions.
  - Skeleton loaders and graceful loading states.

- **Content Management**
  - Travel lists with cover photos and descriptions.
  - Place cards with ratings, categories, and availability status.
  - User profiles and social features (share, save, like).
  - Structured management of destinations and lists.

## 🛠 Tech Stack

### ⚛️ Frontend Framework
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

### 🎨 Styling & UI
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### 🗺 Maps & 📊 Charts
![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900?style=for-the-badge&logo=leaflet)
![React Leaflet](https://img.shields.io/badge/React_Leaflet-5.0.0-199900?style=for-the-badge)

### 🔧 Icons & Forms
![Lucide React](https://img.shields.io/badge/Lucide_React-0.463.0-FF6B6B?style=for-the-badge)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.63.0-EC5990?style=for-the-badge)

### ⚡ Development Tools
![Turbopack](https://img.shields.io/badge/Turbopack-enabled-blue?style=for-the-badge)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

## 📦 Installation & Setup

### 🔧 Prerequisites
- Node.js **v18+**
- npm or yarn

### 🚀 Quick Start

```bash
# Clone the repository

git clone https://github.com/your-username/eightydays-travel-app.git
cd eightydays-travel-app

# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
http://localhost:3000


**🏗 Build for Production**

# Build the project
npm run build

# Start production server
npm start

# Clone
git clone https://github.com/yourusername/byewind-dashboard-justpay.git

cd byewind-dashboard-justpay

# Install
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview



```
## 📁  Folder Structure
  ```bash
eightydays/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Landing page (authentication)
│   ├── home/              # Home page (authenticated user)
│   ├── lists/[id]/        # Dynamic list detail pages
│   └── places/[id]/       # Dynamic place detail pages
├── components/
│   ├── auth/              # Authentication components
│   │   ├── AuthForm.tsx
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── home/              # Home page components
│   │   ├── ListsCarousel.tsx
│   │   └── FeaturedDestinations.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── places/            # Place-related components
│   │   └── PlaceCard.tsx
│   ├── gallery/           # Media components
│   │   └── ImageCarousel.tsx
│   └── map/               # Map components
│       └── MapSection.tsx
├── hooks/                 # Custom React hooks
│   └── useAuth.ts         # Authentication hook
├── data/                  # Mock data and types
│   ├── mockData.ts        # Sample travel data
│   └── types.ts           # TypeScript interfaces
├── public/               # Static assets
│   └── eightydaysai_logo.jpeg
└── globals.css           # Global styles and animations

```
## 🔐 Authentication System

### 🧪 Demo Credentials
- Email: demo@example.com
- Password: password



### ✨ Features
- **Secure Login** – Email/username with password authentication.
- **User Registration** – Full signup flow with form validation.
- **Password Recovery** – Forgot Password functionality (UI implemented).
- **Session Persistence** – Maintains login state across page refreshes via localStorage.
- **Protected Routes** – Auto-redirect for unauthenticated users.

## 🎯 Key Pages & Components

### 🏠 Landing Page (`/`)
- Rotating background images with smooth transitions.
- Geometric pattern animations with blob effects.
- Responsive authentication forms with real-time validation.
- Beautiful gradient overlays and backdrop blur effects.

### 🏡 Home Page (`/home`)
- **Interactive Search**: Smart search with suggestions + recent searches.
- **Travel Lists Carousel**: Horizontal scroll with save/like functionality.
- **Featured Destinations**: Grid layout with place cards.
- **Quick Search Categories**: Beach, Mountains, Food, Art, etc.
- **Statistics Overview**: Destination count + user metrics.
- **Call-to-Action Sections**: Encouraging user engagement.

### 📋 List Detail Page (`/lists/[id]`)
- **Image Gallery**: Swipeable carousel with auto-play and indicators.
- **Interactive Maps**: Location markers with custom popups.
- **Place Cards**: Detailed info with ratings and actions.
- **Social Features**: Share, save, and comment functionality.
- **Category Filtering**: Filter places by type (Culture, Outdoors, Food, etc.).

### 🗺 Place Detail Page (`/places/[id]`)
- High-quality cover images with gradient overlays.
- Detailed descriptions, ratings, and reviews.
- Operating hours and live status.
- Action buttons (Directions, Add to List).
- Category tags for quick discovery.

### 🗺 Map Integration Features
- **React Leaflet + OpenStreetMap** for interactive maps.
- Custom **location markers** for destinations.
- Optimized for both mobile and desktop.
- Smooth marker interactions with popups.
- Cost-effective: Uses free OSM tiles.

---
## 📱 Responsive Design

### Mobile-First Approach
- **Breakpoints**: `sm (640px)`, `md (768px)`, `lg (1024px)`, `xl (1280px)`
- **Touch Optimization**: Larger tap targets + swipe gestures.
- **Performance**: Optimized images, lazy loading for speed.
- **Accessibility**: WCAG-compliant contrast ratios, keyboard navigation.

### Responsive Patterns
- **Flexible Grids**: CSS Grid + Flexbox layouts.
- **Adaptive Typography**: Scales text sizes and spacing with breakpoints.
- **Mobile Navigation**: Collapsible menus + bottom navigation.
- **Touch-Friendly**: Swipeable carousels and gesture-based interactions.

---

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (`#3B82F6 → #6366F1`)
- **Background**: Clean whites + subtle grays.
- **Accent**: Carefully applied colors for CTAs and highlights.
- **Dark Mode Ready**: Extendable for theme switching.

### Typography
- **Font**: *Inter* – modern, clean, highly readable.
- **Hierarchy**: Clear heading levels, well-structured body text.
- **Consistency**: Uniform spacing + line heights across pages.

### Components
- **Reusable UI**: Buttons, cards, modals, and forms.
- **Consistent Styling**: Border radii, shadows, transitions.
- **Interactive States**: Hover, focus, and active feedback.

---

## 🔧 Implementation Details

### State Management
- **React Hooks**: `useState`, `useEffect`, `useContext` for local state.
- **Custom Hooks**: `useAuth` to encapsulate authentication logic.
- **Forms**: Managed with **React Hook Form** for efficient validation.

### Performance Optimizations
- **Next.js 15 + Turbopack** for blazing-fast development.
- **Image Optimization**: Next.js `<Image />` with lazy loading.
- **Code Splitting**: Automatic via Next.js App Router.
- **Efficient Re-renders**: Memoization + correct dependency arrays.

### Animation & Interactions
- **CSS Transitions**: Smooth hover and state changes.
- **Micro-Interactions**: Button presses, card hovers, loading states.
- **Page Transitions**: Seamless navigation between views.
- **Visual Feedback**: Immediate responses to user actions.


---

## 📝 Assumptions & Decisions

### Technical Assumptions
- **No Backend Required**: All data is mocked with static JSON files.
- **Authentication Simulation**: Auth state managed locally for demo purposes.
- **Image Hosting**: Uses Unsplash URLs for high-quality demo images.
- **Map Service**: OpenStreetMap for cost-effective, reliable mapping.

### Design Decisions
- **Mobile-First**: Prioritized mobile experience with progressive enhancement.
- **Performance Focus**: Leveraged Next.js latest features for optimal performance.
- **Accessibility**: Semantic HTML + keyboard navigation implemented.
- **User Experience**: Thoughtful animations and loading states included.

### Feature Enhancements
- **Smart Search**: Suggestions + search history.
- **Social Features**: Save, share, and engagement interactions.
- **Interactive Maps**: Full map integration beyond basic requirements.
- **Responsive Carousels**: Touch-friendly with smooth animations.

---

## 🔮 Future Enhancements

### Immediate Improvements
- Real backend API integration.
- User-generated content and reviews.
- Advanced search filters and sorting.
- Real-time notifications.

### Advanced Features
- Payment processing for bookings.
- Social media integration.
- Progressive Web App (PWA) features.
- Offline functionality.

### Scalability
- Database integration for persistent data.
- User authentication with real backend.
- Image upload and management.
- Advanced analytics and insights.

---

## 🤝 Contributing
1. Fork the repository.  
2. Create a feature branch:
3. Commit your changes:
4. Push to the branch:
5. Open a Pull Request. 
```bash
git checkout -b feature/amazing-feature

git commit -m "Add amazing feature"

git push origin feature/amazing-feature

```
---

## 📞 Author

**Suraj Gupta**  

- ✉️ Email: [guptasurajm07@gmail.com](mailto:guptasurajm07@gmail.com)  
- 💻 GitHub: [https://github.com/surajm7](https://github.com/surajm7)  
- 🔗 LinkedIn: [https://www.linkedin.com/in/suraj-gupta](https://www.linkedin.com/in/suraj-gupta-868a3219a/)  
- 🌐 Portfolio: [https://portfoliosuraj-one.vercel.app/](https://portfoliosuraj-one.vercel.app/)

---
## 📄 License
This project is licensed under the **MIT License**. See the `LICENSE` file for details.
