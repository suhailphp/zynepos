# API Documentation (Swagger)

This document outlines how API documentation is implemented in this project.

## Overview

We use the **Swagger (OpenAPI)** specification to document our REST API. The `@nestjs/swagger` package is used to automatically generate an interactive API documentation page from our source code.

This provides a user-friendly web interface to browse, understand, and test the API endpoints.

## Accessing the Documentation

Once the application is running, the interactive documentation is available at the following endpoint:

- **URL:** `http://localhost:3000/api`

## How it Works

The documentation is generated automatically by NestJS based on the code and special **decorators** we add to our controllers and DTOs.

- **`main.ts`**: This is where the main Swagger module is initialized and configured. It sets the title, description, version, and the `/api` endpoint.
- **`@ApiTags('Users')`**: Used on controllers to group related endpoints together in the UI.
- **`@ApiOperation({ summary: '...' })`**: Used on controller methods to provide a clear, human-readable summary of what the endpoint does.
- **`@ApiBody({ type: ... })`**: Used on controller methods to specify the shape and type of the request body, linking it to a DTO.
- **`@ApiResponse({ ... })`**: Used on controller methods to describe the possible HTTP responses (e.g., 201 Created, 401 Unauthorized).
- **`@ApiProperty({ ... })`**: Used inside DTOs to provide descriptions, examples, and validation rules for each individual field.
- **`@ApiBearerAuth()`**: Used on protected endpoints to indicate in the UI that a JWT Bearer token is required for authentication.
