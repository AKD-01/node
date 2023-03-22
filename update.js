//Update Single Record
const dbConnect = require("./mongodb");

const updateData = async () => {
  const db = await dbConnect();
  const result = await db.updateOne(
    { name: "Redmi 6" },
    { $set: { brand: "Redmi" } }
  );
  if (result.acknowledged) {
    console.warn("Data Updated.");
  }
};

updateData();
