# NodeJS API Template

This is a Node.js API template built following Clean Architecture principles. It provides a robust structure for developing scalable APIs by separating concerns into domain, application, infrastructure, and presentation layers.

## Technologies Used

- **Express**: HTTP framework for routes and middleware.
- **Knex**: SQL query builder for database management.
- **Bcrypt**: Password hashing.
- **JWT**: Token-based authentication and authorization.
- **Zod**: Data validation library.
- **ESLint**: Linting tool for code quality.

## Project Structure

```bash
src/
├── config/           # Project configurations (e.g., environment variables)
├── data/             # Repository implementations, contracts, and use cases
├── domain/           # Domain entities and interfaces
├── infrastructure/   # Cryptography, database services, and adapters
├── main/             # Factories, route adapters, and middlewares
├── presentation/     # HTTP controllers and helpers
├── validation/       # Validation schemas
```

## How to Use

### Prerequisites

- Node.js installed
- Docker (optional, for Docker Compose)

### Installation

1. Create a repository from this template.
2. Clone your repository:

   ```bash
   git clone <repository-url>
   ```

3. Navigate to your project directory:

   ```bash
   cd <project-name>
   ```

4. Install the dependencies:

   ```bash
   npm install
   ```

5. Configure the environment variables in the `.env` file.

6. (Optional) Start the database using Docker Compose:

   ```bash
   docker-compose up
   ```

### Running the Project

To start the server in development mode:

```bash
npm run start:dev
```

## Conclusion

Feel free to use this template in your projects. You can adapt and customize it according to your needs. The template was created to optimize and accelerate the process of setting up new projects. Contributions are welcome, so feel free to make pull requests!

Thank you for using this template!