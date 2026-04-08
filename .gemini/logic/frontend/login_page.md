# Login Page Logic

This document describes the functionality of the Login Page (`src/pages/Login/index.tsx`).

## Components Used

- **Ant Design:** `Form`, `Input`, `Button`, `message`, `Layout`.
- **React Router:** `useNavigate` hook.
- **Context:** `useAuth` hook.

## Logic Flow

1.  The component renders a centered form with "Username" and "Password" fields.
2.  The Ant Design `Form` component handles local state management for the input fields.
3.  When the user clicks the "Log In" button, the form's `onFinish` handler is triggered.
4.  The `onFinish` handler is an `async` function that performs the following:
    a. It calls the backend API endpoint (`/auth/login`) using `axios.post`.
    b. The API URL is retrieved from the `REACT_APP_API_URL` environment variable.
    c. **On Success:**
    i. It displays a "Login successful!" message using Ant Design's `message` component.
    ii. It calls the `login()` function from our `AuthContext`, passing the received JWT `access_token`.
    iii. It uses the `useNavigate` hook to redirect the user to the `/dashboard` page.
    d. **On Failure:**
    i. It displays a "Login failed" message.
    ii. It logs the error to the console for debugging.
