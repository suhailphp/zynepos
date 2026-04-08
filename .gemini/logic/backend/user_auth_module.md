# User & Authentication Module Logic

This document outlines the architecture and logic for the user and authentication modules in the Zyne POS backend.

## User Module (`/src/users`)

### Entity (`user.entity.ts`)

The `User` entity defines the schema for the `users` table in the PostgreSQL database. It includes the following key fields:

- `id`: Primary Key (auto-incrementing integer).
- `username`: Unique string for login.
- `password`: Hashed password string.
- `fullName`: The user's full name.
- `email`: Optional unique email address.
- `mobile`: Optional phone number.
- `pin`: Optional 4-digit PIN for quick POS access.
- `isActive`: Boolean to enable/disable the user.
- `hourlyRate`: Optional decimal for payroll calculation.
- `outletId`: Optional integer to link the user to a specific store location.
- `permissions`: A flexible array of text strings to control user actions (e.g., `"CAN_ISSUE_REFUND"`).
- `createdAt`, `updatedAt`, `deletedAt`: Automatic timestamps for record management.

### Service (`users.service.ts`)

- **`create(userDto)`**: Hashes the user's password with `bcrypt` and saves the new user to the database.
- **`findOne(username)`**: Finds a single user by their username, used primarily for the login process.

### Controller (`users.controller.ts`)

- **`POST /users`**: A protected endpoint for creating new users. It uses the `CreateUserDto` to validate the incoming request body. The `creatorId` is automatically populated from the JWT of the user making the request.

---

## Authentication Module (`/src/auth`)

### Logic Flow

1.  **Login Request**: A user sends a `POST` request to `/auth/login` with their `username` and `password`.
2.  **`LocalAuthGuard`**: The request is first handled by the `LocalAuthGuard`, which triggers the `LocalStrategy`.
3.  **`LocalStrategy`**: This strategy validates the credentials by calling `authService.validateUser()`.
4.  **`AuthService.validateUser()`**: The service finds the user by username and compares the provided password with the hashed password in the database using `bcrypt.compare()`.
5.  **Token Generation**: If validation is successful, the `AuthController` calls `authService.login()`.
6.  **`AuthService.login()`**: This method creates a JWT (JSON Web Token) containing the user's ID and username (`payload`). The token is signed using a secret key and has a 60-minute expiration.
7.  **Response**: The JWT is returned to the user as an `access_token`.

### Protected Routes

- To protect an endpoint, the `JwtAuthGuard` is used.
- This guard triggers the `JwtStrategy`, which validates the JWT from the `Authorization: Bearer <token>` header against the secret key.
- If the token is valid, the user payload is attached to the request object, and the request is allowed to proceed.
