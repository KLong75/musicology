const path = require("path");
const express = require("express");
// import ApolloServer
const { ApolloServer } = require("apollo-server-express");
// import typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");
const fileUpload = require("express-fileupload");

const PORT = process.env.PORT || 3001;
// create new Apollo server and pass in schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uplaods/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/upload/${file.name}` });
  });
});
app.listen(5000, () => console.log("server started"));
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
