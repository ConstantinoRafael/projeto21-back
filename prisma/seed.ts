import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";

const prisma = new PrismaClient();

async function main() {
    let users = await prisma.user.findMany();
    if(users.length === 0) {
      await prisma.user.createMany({
        data: [{
          email: "larissa@anita.com",
          password: "123456"
        }, {
          email: "sandyjunior@show.com",
          password: "123456"
        },{
          email: "junior@sandy.com",
          password: "123456"
        },{
          email: "ludmilla@caxias.com",
          password: "123456"
        },{
          email: "jojo@toddy.com",
          password: "123456"
        }]
      })
    }

    let enrollments = await prisma.enrollment.findMany();
    if(enrollments.length === 0) {
      users = await prisma.user.findMany();
      await prisma.enrollment.createMany({
        data: [{
          userId: users[0].id,
          urlProfile: "none",
          instruments: ["canto, violão, bateria"],
          instagram: "@anitta",
          urlYoutube: "https://www.youtube.com/watch?v=kDhptBT_-VI",

        }, {
          userId: users[1].id,
          urlProfile: "none",
          instruments: ["canto, violino"],
          instagram: "@sandyoficial",
          urlYoutube: "https://www.youtube.com/watch?v=zBUurckfIiEI",

        }, {
          userId: users[2].id,
          urlProfile: "none",
          instruments: ["canto, violão, guitarra, contrabaixo, bateria"],
          instagram: "@junior_oficial",
          urlYoutube: "https://www.youtube.com/watch?v=bMbUdBxL1W4",

        }, {
          userId: users[3].id,
          urlProfile: "none",
          instruments: ["canto, cavaquinho"],
          instagram: "@ludmilla",
          urlYoutube: "https://www.youtube.com/watch?v=0-mKwNMXETo",

        }, {
          userId: users[4].id,
          urlProfile: "none",
          instruments: ["que tiro foi esse"],
          instagram: "@jojotodynho",
          urlYoutube: "https://www.youtube.com/watch?v=Qw4uBk7DOa8",

        }]
      })
    }
}



main()
  .catch((e) => {
    //eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
