# Dashboard Page Logic

This document describes the functionality of the Dashboard Page (`src/pages/Dashboard/index.tsx`).

## Current Functionality

As of the initial implementation, this is a simple placeholder component that displays:

- A title: "Dashboard"
- A welcome message.

## Future Enhancements

As discussed, this page will be expanded to conditionally render different dashboard layouts or widgets based on the logged-in user's role and permissions.

- The component will use the `useAuth` hook to access the user's data (including the `permissions` array from the JWT).
- It will then use this data to decide which components to display (e.g., `<AdminDashboard />` or `<CashierDashboard />`).
