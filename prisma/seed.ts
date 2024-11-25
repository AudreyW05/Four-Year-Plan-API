// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Delete existing data (optional, use with caution)
  await prisma.preReq.deleteMany({});
  await prisma.requires.deleteMany({});
  await prisma.has.deleteMany({});
  await prisma.degree.deleteMany({});
  await prisma.course.deleteMany({});
  await prisma.user.deleteMany({});

  // Create Users
  const user1 = await prisma.user.create({
    data: {
      email: 'alicejohnson@gmail.com',
      password: 'abc123',
      units: 0,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'bobsmith@gmail.com',
      password: 'def456',
      units: 0,
    },
  });

  const user3 = await prisma.user.create({
    data: {
      email: 'charliebrown@gmail.com',
      password: 'ghi789',
      units: 0,
    },
  });

  // Create Courses
  const course1 = await prisma.course.create({
    data: {
      code: 'CS101',
      units: 3,
      category: 'Computer Science',
    },
  });

  const course2 = await prisma.course.create({
    data: {
      code: 'CS102',
      units: 4,
      category: 'Computer Science',
    },
  });

  const course3 = await prisma.course.create({
    data: {
      code: 'MATH101',
      units: 3,
      category: 'Computer Science',
    },
  });

  const course6 = await prisma.course.create({
    data: {
      code: 'CS 180',
      units: 4,
      category: 'Computer Science'
    }
  })

  // Create Degrees
  const degree1 = await prisma.degree.create({
    data: {
      name: 'Computer Science',
    },
  });

  const degree2 = await prisma.degree.create({
    data: {
      name: 'Mathematics',
    },
  });

  // Assign Courses to Users (Has)
  await prisma.has.createMany({
    data: [
      {
        courseCode: course1.code, // CS101
        userId: user1.id,
        yearQuarter: 11
      },
      {
        courseCode: course3.code, // MATH101
        userId: user1.id,
        yearQuarter: 12
      },
      {
        courseCode: course2.code, // CS102
        userId: user2.id,
        yearQuarter: 11
      },
    ],
  });

  console.log('✅ Seed data has been inserted successfully.');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
