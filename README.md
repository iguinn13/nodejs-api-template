# 🧩 Node.js API Template

A clean, scalable and ready-to-go Node.js + TypeScript API template — powered by Express, Prisma and PostgreSQL. This project is designed to help you **build modern REST APIs quickly** without starting from scratch.

---

## 🚀 Tech Stack

- **Node.js** + **TypeScript**
- **Express** — lightweight and flexible web framework
- **Prisma ORM** — type-safe database access
- **PostgreSQL** — robust relational database
- **Jest** — delightful JavaScript testing
- **ESLint** — code quality and linting
- **Docker** (optional) — containerized development

---

## 📁 Project Structure

```bash
.
├── prisma/               # Prisma schema and migrations
├── src/
│   ├── config/           # Configurations
│   ├── core/             # Application domain
│   ├── infrastructure/   # Infra implementations like logger
│   ├── main/             # Objects compositions
│   ├── presentation/     # Middlewares, Controllers, etc.
│   ├── validation/       # Validation schemas
│   └── main.ts           # Entry point
```
---

## 🛠️ Setup Instructions

1. Clone this repository
```bash
git clone https://github.com/iguinn13/nodejs-api-template.git
cd nodejs-api-template
```
2. Install dependencies
```bash
npm install
```

3. Set up your .env file
Copy the example and replace with your PostgreSQL credentials:
```bash
cp .env.example .env

SQL_DATABASE_URL=postgresql://username:password@localhost:5432/database
```
4. (Optional) Start PostgreSQL using Docker

```bash
docker-compose up -d
```

This will spin up a local PostgreSQL instance using Docker.

5. Run Prisma migrations
```bash
npx prisma migrate dev
```
This will create the database tables based on the Prisma schema.

6. Generate the Prisma Client
```bash
npx prisma generate
```
---

## 🔧 Running the API
```bash
npm run start:dev
```
---

## ✅ Running tests
```bash
npm test
```
Runs your test suite with Jest.

---

## 📜 Useful Scripts

```bash
npm run start:dev	   # Start dev server with hot reload
npm test	           # Run tests with Jest
npx prisma migrate dev     # Run Prisma migrations
npx prisma generate	   # Generate Prisma client
```

Built with ❤️ by @iguinn13