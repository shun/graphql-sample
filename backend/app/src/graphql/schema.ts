import {gql} from "apollo-server-express";

export const Schema = gql`
  scalar Date
  scalar DateTime

  type Query {
    user_by_id(id: Int!): User
  }

  type Mutation {
    addUsers(
      users: [UserInput]
    ): Int

  }

  type User {
    id: Int!
    firstname: String!
    lastname: String!
    delflg: Boolean!
  }

  input UserInput {
    id: Int!
    firstname: String!
    lastname: String!
    mail: String!
  }
`;
