const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    { name: "max1", brand: "redmi", price: 220, category: "mobile" },
    { name: "max2", brand: "redmi", price: 320, category: "mobile" },
    { name: "max3", brand: "redmi", price: 420, category: "mobile" },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
