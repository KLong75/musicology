const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    age: Int
    location: String
    instrument: String
    profileImage: String
    description: String
    genres: String 
    influences: String
    currentProjects: String
    pastProjects: String
    videoLink: String
    audioLink: String
    posts: [Post]
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

  type Auth {
    token: ID!
    user: User
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
   
   addUser(username: String!, email: String!, password:
           String!, location: String, 
           age: Int, instrument: String, description: String, genres: String, 
           influences: String, pastProjects: String currentProjects: String, 
           videoLink: String, audioLink: String): Auth

   addPost(postText: String!): Post

   addResponse(postId: ID!, responseText: String!): Post

   updateUser(username: String, email: String,
              password: String, location: String, 
              age: Int, instrument: String, description: String, genres: String, 
              influences: String, pastProjects: String, currentProjects: String, 
              videoLink: String, audioLink:String): Auth

   deleteUser(_id: ID): Auth

   updatePost(postText: String!): Post

   deletePost(postId: ID): Post

   deleteResponse(postId: ID!, responseId: ID!): Post        
  }
`;   
    
// export typeDefs
module.exports = typeDefs;












// location: String
//     age: Int
//     instrument: [String]
//     image: String
//     description: String
//     genres: [String] 
//     influences: [String]
//     currentProjects: [String]
//     pastProjects: [String]
//     videoLink: String
//     audioLink: String
//  }

//  type Post {
//    _id: ID
//    postText: String
//    createdAt: String
//    username: String
//    responseCount: Int
//    responses: [Response]
//  }

//  type Response {
//    _id: ID
//    responseText: String
//    createdAt: String
//    username: String
//  }

//  
//      location: String!, 
  //      age: Int, 
  //      instrument:[String]!, 
  //      description: String!, 
  //      genres: [String], 
  //      influences: [String], 
  //      pastProjects: [String], 
  //      currentProjects[String], 
  //      videoLink: String, 
  //      audioLink:String
//  

//    addPost(
//      postText: String!
//    ): Post

//    addResponse(
//      postId: ID!, 
//      responseText: String!
//    ): Response

//    updateUser(
//      username: String, 
//      email: String, 
//      password: String, 
//      location: String, 
//      age: Int, 
//      instrument:[String], 
//      description: String, 
//      genres: [String], 
//      influences: [String], 
//      pastProjects: [String], 
//      currentProjects[String], 
//      videoLink: String, 
//      audioLink:String
//    ): Auth

//    deleteUser(
//      _id: ID
//    ): Auth

//    updatePost(
//      postText: String!
//    ): Post

//    deletePost(
//      postId: ID  
//    ) 

//    deleteResponse(
//     postId: ID!, 
//     responseId: ID!
//   ): Response
//  }

//  
