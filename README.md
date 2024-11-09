# Class Planner

A NestJS application that allows students to plan their 4-year academic journey at a university. This application manages users, courses, degrees, and their relationships, enabling students to create personalized class schedules based on degree requirements and course prerequisites.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#3-install-dependencies)
  - [3. Configure Environment Variables](#4-configure-environment-variables)
  - [4. Set Up the Database](#5-set-up-the-database)
  - [5. Run the Application](#6-run-the-application)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Management**: Create, read, update, and delete users.
- **Course Management**: Manage courses with credits and prerequisites.
- **Degree Management**: Define degrees with required courses.
- **Relationship Handling**: Manage relationships between users, courses, and degrees.
- **Exception Handling**: Robust error handling using Prisma exception filters.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14 or higher. [Download Node.js](https://nodejs.org/)
- **pnpm**: Fast, disk space-efficient package manager. [Install pnpm](https://pnpm.io/installation)
- **PostgreSQL**: Install and set up PostgreSQL. [Download PostgreSQL](https://www.postgresql.org/download/)
- **Git**: For version control and cloning the repository. [Download Git](https://git-scm.com/downloads)

## Installation

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

Clone this repository to your local machine using Git.

```bash
git clone git@github.com:ShenyiCui/class-planner-backend.git
cd class-planner-backend
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

Open the .env file in your text editor and add the following line:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/class_planner_db?schema=public
```

Replace the placeholders:

- user: Your PostgreSQL username.
- password: Your PostgreSQL password.
- localhost: Your PostgreSQL host (usually localhost).
- 5432: Your PostgreSQL port (default is 5432).
- class_planner_db: The name of your PostgreSQL database.

Ensure that the specified database (class_planner_db) exists. You can create it using PostgreSQL tools like psql or pgAdmin.

### 4. Set Up the Database

Use Prisma to generate the client and run migrations to set up your database schema.

```bash
pnpm prisma generate
pnpm prisma migrate dev --name init
```

#### OPTIONAL: Seed the Database

add seed data to the database

```bash
pnpm run seed
```

### 5. Run the Application

Start the NestJS application in development mode.

```bash
pnpm run start:dev
```

Import the Postman collection to test the API endpoints.

Run the APIs!

## Managing Prisma Migrations

This project uses Prisma for database migrations and schema management. The following scripts have been added to the `package.json` to help you manage incremental migrations:

### Prisma Scripts

- **`prisma:generate`**: Generates the Prisma Client based on your Prisma schema. Run this whenever you make changes to your `schema.prisma` file.

```bash
pnpm prisma:generate
```

- **`prisma:migrate:dev`**: Creates a new migration and applies it to your development database. Use this when you’re developing and want to keep track of schema changes incrementally.

```bash
pnpm prisma:migrate:dev --name <migration-name>
```

Replace `<migration-name>` with a descriptive name for your migration, such as `add-user-table`.

- **`prisma:migrate:deploy`**: Applies all pending migrations to the production database. Use this command when deploying your application to ensure the database schema is up to date.

```bash
pnpm prisma:migrate:deploy
```

- **`prisma:migrate:status`**: Checks the status of your migrations, showing which migrations have been applied and which are pending.

```bash
pnpm prisma:migrate:status
```
