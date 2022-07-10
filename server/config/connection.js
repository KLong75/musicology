const mongoose = require("mongoose");
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/musician-networking-app",
  {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  }
);

const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket-url>",
};
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

module.exports = mongoose.connection;
