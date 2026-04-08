# Frontend: Routing & Authentication Flow

This document outlines the architecture for the frontend routing and authentication state management.

## 1. Routing

- **Library:** We use `react-router-dom`, the standard for React applications.
- **Configuration:** The main router is configured in `App.tsx`.
- **Structure:**
  - All page-level components are organized by feature inside `src/pages/`.
  - The main component for each page is named `index.tsx` (e.g., `src/pages/Login/index.tsx`).

## 2. Authentication Flow

Authentication state is managed globally using React Context.

- **`src/context/AuthContext.tsx`**: This file defines the `AuthProvider`.
  - It stores the JWT `access_token` in the browser's `localStorage`.
  - It provides a global `isAuthenticated` flag.
  - It provides `login(token)` and `logout()` functions to manage the token in both React state and `localStorage`.
- **`src/index.tsx`**: The entire application is wrapped in the `AuthProvider` here, making the auth state available to all components.
- **`LoginPage`**: Upon a successful API call, the `login()` function from the context is called with the new token, and the user is redirected to the dashboard using the `useNavigate` hook from `react-router-dom`.

## 3. Protected Routes

- **`src/components/ProtectedRoute.tsx`**: This component is used to protect pages that require a user to be logged in.
  - It uses the `useAuth` hook to check the `isAuthenticated` flag.
  - If the user is authenticated, it renders the requested page (its `children`).
  - If the user is **not** authenticated, it automatically redirects them to the `/login` page using the `<Navigate />` component from `react-router-dom`.
