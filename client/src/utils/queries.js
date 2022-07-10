import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postText
      createdAt
      username
      responseCount
      responses {
        _id
        createdAt
        username
        responseText
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      thoughtText
      createdAt
      username
      responseCount
      responses {
        _id
        createdAt
        username
        responseText
      }
    }
   }
  `;

  export const QUERY_USER = gql`
    query user($username: String!) {
      user(username: $username) {
        _id
        username
        email
        age
        location
        instrument
        profileImage
        description
        genres
        influences
        currentProjects
        pastProjects
        videoLink
        audioLink
        }
        posts {
          _id
          postText
          createdAt
          responseCount
        }
      }
    }
  `;

  export const QUERY_USER_BASIC = gql`
    query user($username: String!) {
      user(username: $username) {
        _id
        username
        email
        instrument
        genre
        location
      }
    }
  `;

  export const QUERY_ME = gql`
    {
      me {
        _id
        username
        email
        age
        location
        instrument
        profileImage
        description
        genres
        influences
        currentProjects
        pastProjects
        videoLink
        audioLink
        posts {
          _id
         postText
          createdAt
          responseCount
          responses {
            _id
            createdAt
            responseText
            username
          }
        }
      }
    }
  `;

  export const QUERY_ME_BASIC = gql`
    {
      me {
        _id
        username
        email
        instrument
        genre
        location
      }
    }
  `;