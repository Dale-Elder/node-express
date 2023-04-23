const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    // not required in mongoose 6
    useNewUrlParser: true, // to avoid deprecation warnings
    useCreateIndex: true, // to avoid deprecation warnings
    useFindAndModify: false, // to avoid deprecation warnings
    useUnifiedTopology: true, // to avoid deprecation warnings
  });
};

module.exports = connectDB;
