const { gql } = require("apollo-server-express");

// create typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    location: String
    age: Int
    instrument: [String]
    image: String
    description: String
    genres: [String]
    influences: [String]
    currentProjects: [String]
    pastProjects: [String]
    videoLink: String
    audioLink: String
  }

  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    responseCount: Int
    responses: [Response]
  }

  type Response {
    _id: ID
    responseText: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addResponse(postId: ID!, responseText: String!): Thought
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export typeDefs
module.exports = typeDefs;
