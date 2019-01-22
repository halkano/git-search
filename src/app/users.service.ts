import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  //  is essential in creating a service because angular uses it to define a service class that might require dependencies
  providedIn: 'root'
  //  reponsible for creating an instance of the service and making it avaiable throughout the application
})

export class UsersService {

  user$
  repo$
  private username: string;
  private apiKey: string = environment.apiKey;
  constructor(public http: HttpClient) {  }

  getUsers(username){
    this.http.get("https://api.github.com/users/"+username).subscribe(
      data =>{
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
