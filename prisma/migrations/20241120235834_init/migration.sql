-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "code" TEXT NOT NULL,
    "credits" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Has" (
    "courseCode" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Has_pkey" PRIMARY KEY ("courseCode","userId")
);

-- CreateTable
CREATE TABLE "Degree" (
    "name" TEXT NOT NULL,

    CONSTRAINT "Degree_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Requires" (
    "degreeName" TEXT NOT NULL,
    "courseCode" TEXT NOT NULL,

    CONSTRAINT "Requires_pkey" PRIMARY KEY ("degreeName","courseCode")
);

-- CreateTable
CREATE TABLE "PreReq" (
    "courseCode" TEXT NOT NULL,
    "preReqCode" TEXT NOT NULL,

    CONSTRAINT "PreReq_pkey" PRIMARY KEY ("courseCode","preReqCode")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- AddForeignKey
ALTER TABLE "Has" ADD CONSTRAINT "Has_courseCode_fkey" FOREIGN KEY ("courseCode") REFERENCES "Course"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Has" ADD CONSTRAINT "Has_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requires" ADD CONSTRAINT "Requires_courseCode_fkey" FOREIGN KEY ("courseCode") REFERENCES "Course"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requires" ADD CONSTRAINT "Requires_degreeName_fkey" FOREIGN KEY ("degreeName") REFERENCES "Degree"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PreReq" ADD CONSTRAINT "PreReq_courseCode_fkey" FOREIGN KEY ("courseCode") REFERENCES "Course"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PreReq" ADD CONSTRAINT "PreReq_preReqCode_fkey" FOREIGN KEY ("preReqCode") REFERENCES "Course"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
