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
      credits: 3,
    },
  });

  const course2 = await prisma.course.create({
    data: {
      code: 'CS102',
      credits: 4,
    },
  });

  const course3 = await prisma.course.create({
    data: {
      code: 'MATH101',
      credits: 3,
    },
  });

  const course4 = await prisma.course.create({
    data: {
      code: 'ENG101',
      credits: 2,
    },
  });

  const course5 = await prisma.course.create({
    data: {
      code: 'PHYS101',
      credits: 4,
    },
  });

  const course6 = await prisma.course.create({
    data: {
      code: 'CS 180',
      credits: 4,
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

  // Set up Degree Requirements (Requires)
  await prisma.requires.createMany({
    data: [
      {
        degreeName: degree1.name,
        courseCode: course1.code, // CS101
      },
      {
        degreeName: degree1.name,
        courseCode: course2.code, // CS102
      },
      {
        degreeName: degree1.name,
        courseCode: course3.code, // MATH101
      },
      {
        degreeName: degree2.name,
        courseCode: course3.code, // MATH101
      },
      {
        degreeName: degree2.name,
        courseCode: course5.code, // PHYS101
      },
    ],
  });

  // Set up Course Prerequisites (PreReq)
  await prisma.preReq.createMany({
    data: [
      {
        courseCode: course2.code, // CS102
        preReqCode: course1.code, // CS101
      },
      {
        courseCode: course5.code, // PHYS101
        preReqCode: course3.code, // MATH101
      },
    ],
  });

  // Assign Courses to Users (Has)
  await prisma.has.createMany({
    data: [
      {
        courseCode: course1.code, // CS101
        userId: user1.id,
      },
      {
        courseCode: course3.code, // MATH101
        userId: user1.id,
      },
      {
        courseCode: course2.code, // CS102
        userId: user2.id,
      },
      {
        courseCode: course4.code, // ENG101
        userId: user3.id,
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
