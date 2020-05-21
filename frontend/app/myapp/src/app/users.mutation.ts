import {Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

export interface UserInput {
  id: number;
  firstname: string;
  lastname: string;
  mail: string;
}

@Injectable({
  providedIn: 'root',
})
export class AddUsersPostGQL extends Mutation {
  document = gql`
    mutation addUsers($users: [UserInput]) {
      addUsers(users: $users) {
      }
    }
    `;
}
