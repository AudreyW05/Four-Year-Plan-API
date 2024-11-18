// testPrismaConnection.ts
import { PrismaClient } from '@prisma/client';

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

async function testConnection() {
  try {
    // Try connecting to the database
    await prisma.$connect();
    console.log('Successfully connected to the database!');

    // Optionally, you can run a simple query to ensure everything is working
    const users = await prisma.user.findMany(); // Assuming 'user' is a table in your schema
    console.log('Users:', users);

    // Disconnect after the test
    await prisma.$disconnect();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

// Call the test function
testConnection();
