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
      code: 'CS 1',
      units: 1,
      category: 'lowerdivs',
    },
  });

  const course2 = await prisma.course.create({
    data: {
      code: 'CS 31',
      units: 4,
      category: 'lowerdivs',
    },
  });

  const course3 = await prisma.course.create({
    data: {
      code: 'CS 32',
      units: 4,
      category: 'lowerdivs',
    },
  });

  const course4 = await prisma.course.create({
    data: {
      code: 'CS 33',
      units: 5,
      category: 'lowerdivs',
    },
  });

  const course5 = await prisma.course.create({
    data: {
      code: 'CS 35L',
      units: 4,
      category: 'lowerdivs',
    },
  });

  const course6 = await prisma.course.create({
    data: {
      code: 'ECE 3',
      units: 4,
      category: 'lowerdivs',
    },
  });

  const course7 = await prisma.course.create({
    data: {
      code: 'MATH 31A',
      units: 4,
      category: 'math',
    },
  });

  const course8 = await prisma.course.create({
    data: {
      code: 'MATH 31B',
      units: 4,
      category: 'math',
    },
  });

  const course9 = await prisma.course.create({
    data: {
      code: 'MATH 32A',
      units: 4,
      category: 'math',
    },
  });

  const course10 = await prisma.course.create({
    data: {
      code: 'MATH 32B',
      units: 4,
      category: 'math',
    },
  });

  const course11 = await prisma.course.create({
    data: {
      code: 'MATH 33A',
      units: 4,
      category: 'math',
    },
  });

  const course12 = await prisma.course.create({
    data: {
      code: 'MATH 33B',
      units: 4,
      category: 'math',
    },
  });

  const course13 = await prisma.course.create({
    data: {
      code: 'MATH 61',
      units: 4,
      category: 'math',
    },
  });

  const course14 = await prisma.course.create({
    data: {
      code: 'PHYSICS 1A',
      units: 5,
      category: 'physics',
    },
  });

  const course15 = await prisma.course.create({
    data: {
      code: 'PHYSICS 1B',
      units: 5,
      category: 'physics',
    },
  });

  const course16 = await prisma.course.create({
    data: {
      code: 'PHYSICS 1C',
      units: 5,
      category: 'physics',
    },
  });

  const course17 = await prisma.course.create({
    data: {
      code: 'CS M51A / ECE M116',
      units: 4,
      category: 'lowerdivs',
    },
  });

  const course18 = await prisma.course.create({
    data: {
      code: 'Physics Lab',
      units: 2,
      category: 'physics',
    },
  });

  const course19 = await prisma.course.create({
    data: {
      code: 'CS 111',
      units: 5,
      category: 'upperdivs',
    },
  });

  const course20 = await prisma.course.create({
    data: {
      code: 'CS 118',
      units: 4,
      category: 'upperdivs',
    },
  });

  const course21 = await prisma.course.create({
    data: {
      code: 'CS 131',
      units: 4,
      category: 'upperdivs',
    },
  });

  const course22 = await prisma.course.create({
    data: {
      code: 'CS 180',
      units: 4,
      category: 'upperdivs',
    },
  });

  const course23 = await prisma.course.create({
    data: {
      code: 'CS 181',
      units: 4,
      category: 'upperdivs',
    },
  });

  const course24 = await prisma.course.create({
    data: {
      code: 'ECE 100',
      units: 4,
      category: 'upperdivs',
    },
  });

  const course25 = await prisma.course.create({
    data: {
      code: 'ECE 102',
      units: 4,
      category: 'upperdivs',
    },
  });

  const course26 = await prisma.course.create({
    data: {
      code: 'CS 115C',
      units: 4,
      category: 'upperdivs',
    },
  });

  const course27 = await prisma.course.create({
    data: {
      code: 'CS M151B / ECE M116C',
      units: 4,
      category: 'upperdivs',
    },
  });

  const course28 = await prisma.course.create({
    data: {
      code: 'CS M152A / ECE M116L',
      units: 2,
      category: 'upperdivs',
    },
  });

  const course29 = await prisma.course.create({
    data: {
      code: 'Probability',
      units: 4,
      category: 'math',
    },
  });

  const course30 = await prisma.course.create({
    data: {
      code: 'Capstone SWE/Design',
      units: 4,
      category: 'upperdivs',
    },
  });

  const course31 = await prisma.course.create({
    data: {
      code: 'CS Elective 1',
      units: 4,
      category: 'upperdivs',
    },
  });
  const course32 = await prisma.course.create({
    data: {
      code: 'CS Elective 2',
      units: 4,
      category: 'upperdivs',
    },
  });
  const course33 = await prisma.course.create({
    data: {
      code: 'CS Elective 3',
      units: 4,
      category: 'upperdivs',
    },
  });
  const course34 = await prisma.course.create({
    data: {
      code: 'CS Elective 4',
      units: 4,
      category: 'upperdivs',
    },
  });
  const course35 = await prisma.course.create({
    data: {
      code: 'CS Elective 5',
      units: 4,
      category: 'upperdivs',
    },
  });

  const course36 = await prisma.course.create({
    data: {
      code: 'ECE Elective 1',
      units: 4,
      category: 'upperdivs',
    },
  });

  const course37 = await prisma.course.create({
    data: {
      code: 'SciTech 1',
      units: 4,
      category: 'others',
    },
  });

  const course38 = await prisma.course.create({
    data: {
      code: 'SciTech 2',
      units: 4,
      category: 'others',
    },
  });

  const course39 = await prisma.course.create({
    data: {
      code: 'SciTech 3',
      units: 4,
      category: 'others',
    },
  });

  const course40 = await prisma.course.create({
    data: {
      code: 'Tech Breadth 1',
      units: 4,
      category: 'others',
    },
  });

  const course41 = await prisma.course.create({
    data: {
      code: 'Tech Breadth 2',
      units: 4,
      category: 'others',
    },
  });

  const course42 = await prisma.course.create({
    data: {
      code: 'Tech Breadth 3',
      units: 4,
      category: 'others',
    },
  });

  const course43 = await prisma.course.create({
    data: {
      code: 'Writing 1',
      units: 5,
      category: 'ges',
    },
  });

  const course44 = await prisma.course.create({
    data: {
      code: 'Engr Writing/Ethics',
      units: 5,
      category: 'ges',
    },
  });

  const course45 = await prisma.course.create({
    data: {
      code: 'Literary/Cultural Analysis',
      units: 5,
      category: 'ges',
    },
  });

  const course46 = await prisma.course.create({
    data: {
      code: 'Philos/Ling Analysis',
      units: 5,
      category: 'ges',
    },
  });

  const course47 = await prisma.course.create({
    data: {
      code: 'VAPA',
      units: 5,
      category: 'ges',
    },
  });

  const course48 = await prisma.course.create({
    data: {
      code: 'Historical Analysis',
      units: 5,
      category: 'ges',
    },
  });

  const course49 = await prisma.course.create({
    data: {
      code: 'Social Analysis',
      units: 5,
      category: 'ges',
    },
  });

  const course50 = await prisma.course.create({
    data: {
      code: 'Life Science',
      units: 5,
      category: 'ges',
    },
  });

  // Create Degrees
  const degree1 = await prisma.degree.create({
    data: {
      name: 'Computer Science',
    },
  });

  const degree2 = await prisma.degree.create({
    data: {
      name: 'Computer Science and Engineering',
    },
  });

  // Set up Degree Requirements (Requires)
  await prisma.requires.createMany({
    data: [
      {
        degreeName: degree1.name,
        courseCode: course1.code, // CS 1
      },
      {
        degreeName: degree1.name,
        courseCode: course2.code, // CS 31
      },
      {
        degreeName: degree1.name,
        courseCode: course3.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course4.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course5.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course7.code, // MATH 31A
      },
      {
        degreeName: degree1.name,
        courseCode: course8.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course9.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course10.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course11.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course12.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course13.code, // MATH 61
      },
      {
        degreeName: degree1.name,
        courseCode: course14.code, // PHYSICS 1A
      },
      {
        degreeName: degree1.name,
        courseCode: course15.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course16.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course17.code, // CS M51A / ECE M16
      },
      {
        degreeName: degree1.name,
        courseCode: course18.code, // Phys Lab
      },
      {
        degreeName: degree1.name,
        courseCode: course19.code, // CS 111
      },
      {
        degreeName: degree1.name,
        courseCode: course20.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course21.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course22.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course23.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course27.code, // CS M151B / ECE M116C
      },
      {
        degreeName: degree1.name,
        courseCode: course28.code, // CS M152A / ECE M116L
      },
      {
        degreeName: degree1.name,
        courseCode: course29.code, // prob
      },
      {
        degreeName: degree1.name,
        courseCode: course30.code, // capstone
      },
      {
        degreeName: degree1.name,
        courseCode: course31.code, // cs electives
      },
      {
        degreeName: degree1.name,
        courseCode: course32.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course33.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course34.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course35.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course37.code, // sci techs
      },
      {
        degreeName: degree1.name,
        courseCode: course38.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course39.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course40.code, // tech breadths
      },
      {
        degreeName: degree1.name,
        courseCode: course41.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course42.code,
      },
      {
        degreeName: degree1.name,
        courseCode: course43.code, // writing 1
      },
      {
        degreeName: degree1.name,
        courseCode: course44.code, // engr writing/ethics
      },
      {
        degreeName: degree1.name,
        courseCode: course45.code, // lit/cult
      },
      {
        degreeName: degree1.name,
        courseCode: course46.code, // phil/ling
      },
      {
        degreeName: degree1.name,
        courseCode: course47.code, // vapa
      },
      {
        degreeName: degree1.name,
        courseCode: course48.code, // hist
      },
      {
        degreeName: degree1.name,
        courseCode: course49.code, // soc
      },
      {
        degreeName: degree1.name,
        courseCode: course50.code, // ls
      },

      // ------------ CSE ------------- //
      {
        degreeName: degree2.name,
        courseCode: course1.code, // CS 1
      },
      {
        degreeName: degree2.name,
        courseCode: course2.code, // CS 31
      },
      {
        degreeName: degree2.name,
        courseCode: course3.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course4.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course5.code,
      },
      {
        degreeName: degree2.name, // DIFF
        courseCode: course6.code, // ECE 3
      },
      {
        degreeName: degree2.name,
        courseCode: course7.code, // MATH 31A
      },
      {
        degreeName: degree2.name,
        courseCode: course8.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course9.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course10.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course11.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course12.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course13.code, // MATH 61
      },
      {
        degreeName: degree2.name,
        courseCode: course14.code, // PHYSICS 1A
      },
      {
        degreeName: degree2.name,
        courseCode: course15.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course16.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course17.code, // CS M51A / ECE M16
      },
      {
        degreeName: degree2.name,
        courseCode: course18.code, // Phys Lab
      },
      {
        degreeName: degree2.name,
        courseCode: course19.code, // CS 111
      },
      {
        degreeName: degree2.name,
        courseCode: course20.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course21.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course22.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course23.code,
      },
      {
        degreeName: degree2.name, // DIFF
        courseCode: course24.code, // ECE 100
      },
      {
        degreeName: degree2.name,
        courseCode: course25.code, // ECE 102
      },
      {
        degreeName: degree2.name,
        courseCode: course26.code, // ECE 115C
      },
      {
        degreeName: degree2.name,
        courseCode: course27.code, // CS M151B / ECE M116C
      },
      {
        degreeName: degree2.name,
        courseCode: course28.code, // CS M152A / ECE M116L
      },
      {
        degreeName: degree2.name,
        courseCode: course29.code, // prob
      },
      {
        degreeName: degree2.name,
        courseCode: course30.code, // capstone
      },
      {
        degreeName: degree2.name,
        courseCode: course31.code, // cs electives
      },
      {
        degreeName: degree2.name,
        courseCode: course32.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course33.code,
      },
      {
        degreeName: degree2.name, // DIFF
        courseCode: course36.code, // ece elective
      },
      {
        degreeName: degree2.name,
        courseCode: course40.code, // tech breadths
      },
      {
        degreeName: degree2.name,
        courseCode: course41.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course42.code,
      },
      {
        degreeName: degree2.name,
        courseCode: course43.code, // writing 1
      },
      {
        degreeName: degree2.name,
        courseCode: course44.code, // engr writing/ethics
      },
      {
        degreeName: degree2.name,
        courseCode: course45.code, // lit/cult
      },
      {
        degreeName: degree2.name,
        courseCode: course46.code, // phil/ling
      },
      {
        degreeName: degree2.name,
        courseCode: course47.code, // vapa
      },
      {
        degreeName: degree2.name,
        courseCode: course48.code, // hist
      },
      {
        degreeName: degree2.name,
        courseCode: course49.code, // soc
      },
      {
        degreeName: degree2.name,
        courseCode: course50.code, // ls
      },
    ],
  });

  // Set up Course Prerequisites (PreReq)
  await prisma.preReq.createMany({
    data: [
      {
        courseCode: course3.code, // CS 32
        preReqCode: course2.code, // 31
        enforced: true,
      },
      {
        courseCode: course4.code, // 33
        preReqCode: course3.code, // 32
        enforced: true,
      },
      {
        courseCode: course5.code, // 35l
        preReqCode: course2.code, // 31
        enforced: true,
      },
      {
        courseCode: course8.code, // 31b
        preReqCode: course7.code, // 31a
        enforced: false,
      },
      {
        courseCode: course9.code, // 32a
        preReqCode: course7.code, // 31a
        enforced: false,
      },
      {
        courseCode: course10.code, // 32b
        preReqCode: course8.code, // 31b
        enforced: false,
      },
      {
        courseCode: course10.code, // 32b
        preReqCode: course9.code, // 32a
        enforced: false,
      },
      {
        courseCode: course11.code, // 33a
        preReqCode: course8.code, // 31b
        enforced: false,
      },
      {
        courseCode: course11.code, // 33a
        preReqCode: course9.code, // 32a
        enforced: false,
      },
      {
        courseCode: course12.code, // 33b
        preReqCode: course8.code, // 31b
        enforced: false,
      },
      {
        courseCode: course13.code, // 61
        preReqCode: course7.code, // 31a
        enforced: false,
      },
      {
        courseCode: course13.code, // 61
        preReqCode: course8.code, // 31b
        enforced: false,
      },
      {
        courseCode: course14.code, // 1a
        preReqCode: course7.code, // 31a
        enforced: false,
      },
      {
        courseCode: course14.code, // 1a
        preReqCode: course8.code, // 31b
        enforced: false,
      },
      {
        courseCode: course15.code, // 1b
        preReqCode: course9.code, // 32a
        enforced: false,
      },
      {
        courseCode: course15.code, // 1b
        preReqCode: course14.code, // 1a
        enforced: false,
      },
      {
        courseCode: course16.code, // 1c
        preReqCode: course15.code, // 1b
        enforced: false,
      },
      {
        courseCode: course16.code, // 1c
        preReqCode: course10.code, // 32b
        enforced: false,
      },
      {
        courseCode: course18.code, // 4al
        preReqCode: course14.code, // 1a
        enforced: false,
      },
      {
        courseCode: course19.code, // 111
        preReqCode: course3.code, // cs32
        enforced: true,
      },
      {
        courseCode: course19.code, // 111
        preReqCode: course4.code, // cs33
        enforced: true,
      },
      {
        courseCode: course19.code, // 111
        preReqCode: course5.code, // 35l
        enforced: true,
      },
      {
        courseCode: course20.code, // 118
        preReqCode: course19.code, // 111
        enforced: true,
      },
      {
        courseCode: course21.code, // 131
        preReqCode: course4.code, // 33
        enforced: true,
      },
      {
        courseCode: course21.code, // 131
        preReqCode: course5.code, // 35l
        enforced: true,
      },
      {
        courseCode: course22.code, // 180
        preReqCode: course3.code, // 32
        enforced: true,
      },
      {
        courseCode: course22.code, // 180
        preReqCode: course13.code, // math 61
        enforced: true,
      },
      {
        courseCode: course23.code, // 181
        preReqCode: course21.code, // 180
        enforced: true,
      },
      {
        courseCode: course24.code, // ece100
        preReqCode: course16.code, // 1c
        enforced: false,
      },
      {
        courseCode: course24.code, // ece100
        preReqCode: course11.code, // 33a
        enforced: false,
      },
      {
        courseCode: course24.code, // ece100
        preReqCode: course12.code, // 33b
        enforced: false,
      },
      {
        courseCode: course25.code, // ece102
        preReqCode: course11.code, // 33a
        enforced: false,
      },
      {
        courseCode: course25.code, // ece102
        preReqCode: course12.code, // 33b
        enforced: false,
      },
      {
        courseCode: course26.code, // ece115c
        preReqCode: course24.code, // ece100
        enforced: true,
      },
      {
        courseCode: course26.code, // ece115c
        preReqCode: course17.code, // m51a
        enforced: true,
      },
      {
        courseCode: course27.code, // m151b/116c
        preReqCode: course4.code, // 33
        enforced: true,
      },
      {
        courseCode: course27.code, // m151b/116c
        preReqCode: course17.code, // m51a
        enforced: true,
      },
      {
        courseCode: course28.code, // m152a/116l
        preReqCode: course17.code, // m51a
        enforced: true,
      },
      {
        courseCode: course29.code, // prob
        preReqCode: course10.code, // 32b
        enforced: false,
      },
      {
        courseCode: course30.code, // capstone
        preReqCode: course4.code, // 33
        enforced: true,
      },
      {
        courseCode: course30.code, // capstone
        preReqCode: course17.code, // m51a
        enforced: true,
      },
      {
        courseCode: course30.code, // capstone
        preReqCode: course19.code, // 111
        enforced: false,
      },
      {
        courseCode: course30.code, // capstone
        preReqCode: course21.code, // 131
        enforced: false,
      },
    ],
  });

  // Assign Courses to Users (Has)
  await prisma.has.createMany({
    data: [
      {
        courseCode: course1.code, // CS101
        userId: user1.id,
        yearQuarter: 11,
      },
      {
        courseCode: course3.code, // MATH101
        userId: user1.id,
        yearQuarter: 12,
      },
      {
        courseCode: course2.code, // CS102
        userId: user2.id,
        yearQuarter: 11,
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
