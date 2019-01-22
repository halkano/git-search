import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { Repositories } from '../repositories'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UsersService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 users: any=[];
 username='halkano'

constructor(public us:  UsersService) {
  // repositories:us.user$.repo$;
  //calling a function and when it returns it becomes observables

}
findUser($name) {
  console.log($name.target.value);
  this.us.getUsers($name.target.value)
  console.log($name.target.value);
  this.us.getUserRepos($name.target.value)
 }
  //    this.usersService.getUserRepos().subscribe(reposi => {
  //     console.log(reposi);
  //     this.repositories = reposi;
  //  });

  // }
  ngOnInit() {
    this.us.getUsers(this.username)
    this.us.getUserRepos(this.username)
}


}
