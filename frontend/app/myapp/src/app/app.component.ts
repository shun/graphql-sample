import { Component, OnInit } from '@angular/core';
//import { UserInput, AddUsersPostGQL } from './users.mutation';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

export interface UserInput {
  id: number;
  firstname: string;
  lastname: string;
  mail: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent implements OnInit {
  title = 'myapp';
  value: Date;
  registerData: UserInput[];

  constructor(private apollo: Apollo) {
    console.log('AppComponent');
    console.log(apollo);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }


  onBtnFileAttached(evt) {
    console.log('onBtnFileAttached');
    console.log(this.registerData);
    const file = evt.target.files[0];

    const reader = new FileReader();
    reader.readAsText(file);

    let self = this;
    this.registerData = [];
    reader.onload = () => {
      let lines = (reader.result as string).split("\n");
      lines.forEach (line => {
        if (line.length !== 0) {
          let items = line.split(",");
          let user: UserInput = {
                      id: parseInt(items[0]),
                      firstname: items[2],
                      lastname: items[1],
                      mail: items[3]};

          self.registerData.push(user);
          console.log(self.registerData);
        }

      });
    }
  }

  onBtnRegister(evt) {
    console.log('onBtnRegister');

    const mutation_addUsers = gql`
      mutation addUsers($users: [UserInput]) {
        addUsers(users: $users)
      }
    `;
    this.apollo.mutate({
      mutation: mutation_addUsers,
      variables: {
        users: this.registerData
      }
    })
    .subscribe(() => {
      this.apollo.getClient().cache.reset();
    }, (error) => {
      console.log('error: ', error);
    });
  }
}
