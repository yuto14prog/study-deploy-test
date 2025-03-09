import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function seed() {
    await prisma.user.createMany({
        data: [
            { firstName: "John", lastName: "Doe" },
            { firstName: "Jane", lastName: "Smith" },
            { firstName: "Alice", lastName: "Johnson" },
            { firstName: "Bob", lastName: "Brown" },
            { firstName: "Charlie", lastName: "Davis" },
        ]
    })
}

seed()
    .then(() => {
        console.log("Seed data inserted successfully")
    })
    .catch((error) => {
        console.error("Error inserting seed data", error)
    })
