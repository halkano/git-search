import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//fetch data from github
import { environment } from '../environments/environment';//returns all the returns from git inform of observables where we can fetch and subscribe the data


@Injectable({
  // helps  uses it to define a service class that might require dependencies
  providedIn: 'root'
  //  reponsible for creating an instance of the service and making it avaiable throughout the application
})

export class UsersService {

  user$
  repo$
  private username: string;//properties
  private apiKey: string = environment.apiKey;
  //apiKey is a unique code that is passed in to an API to identify the calling application or user. API keys are used to track and control how the API is being used
  constructor(public http: HttpClient) {  }
//gets information or data from github using username
  getUsers(username){
    this.http.get("https://api.github.com/users/"+username).subscribe(
      data =>{            //the result of the data
        console.log(data)
        this.user$ = data

      }
    )

  }
  getUserRepos(username) {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?" +"?access_token=" + this.apiKey)
    .subscribe(
      data =>{
        console.log(data)
        this.repo$ = data

      }
    )
    }

  // constructor() { }


updateProfile(username: string) {
  this.username = username;
}
}
