-- CreateTable
CREATE TABLE "tb_users" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_users_email_key" ON "tb_users"("email");
