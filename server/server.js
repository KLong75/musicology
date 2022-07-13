const express = require("express");
// import ApolloServer
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
// import typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");
const fileUpload = require("express-fileupload");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false })); //true or false?
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
// app.listen(PORT, () => console.log("server started"));

// create new instance of Apollo server with GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate Apollo server with Express application as middleware
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      // log where we can go to test GQL API
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// call the async function to start server
startApolloServer(typeDefs, resolvers);
