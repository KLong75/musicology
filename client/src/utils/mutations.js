import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }  
`;

export const ADD_USER = gql`
  mutation addUser
    ($username: String!, $email: String!, $password: String!, $location: String, $age: Int, $instruments: String, $description: String, $genres: String, $influences: String, $pastProjects: String, $currentProjects: String, $videoLink: String, $audioLink: String) {  
      addUser(username: $username, email: $email, password: $password, age: $age, location: $location, instruments: $instruments, description: $description, genres: $genres, influences: $influences, currentProjects: $currentProjects, pastProjects: $pastProjects, videoLink: $videoLink, audioLink: $audioLink) {
      token
      user {
        _id
        username
        email
        age
        location
        instruments
        description
        genres
        influences
        currentProjects
        pastProjects
        videoLink
        audioLink
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      postText
      createdAt
      username
      responseCount
      responses {
        _id
      }
    }
  }
`;

export const ADD_RESPONSE = gql`
  mutation addResponse($postId: ID!, $responseText: String!) {
    addResponse(postId: $postId, responseText: $responseText) {
      _id
      responseCount
      responses {
        _id
        responseText
        createdAt
        username
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId) {
      _id
      postText
      createdAt
      username
      responseCount
      responses {
        _id
        responseText
        createdAt
        username
      }
    }
  }
`;