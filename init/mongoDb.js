const mongoose = require("mongoose");

const connectmongoDb = async () => {
  try {
    await mongoose.connect(process.env.CON_URL);
    console.log("database connection established");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectmongoDb;
