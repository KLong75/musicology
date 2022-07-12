const path = require("path");
const express = require("express");

const { ApolloServer } = require("apollo-server-express");

const fileUpload = require("express-fileupload");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get(`*`, (req, res) => {
  console.log("hi");

  const file = req.url;

  res.sendFile(path.join(__dirname, `${file}`));
});

app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;

  file.mv(`${__dirname}/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    res.sendFile(`${__dirname}/uploads/${file.name}`);
  });
});
app.listen(PORT, () => console.log("server started"));
