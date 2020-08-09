import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users : any;
  user : Userdata;
  first_name : string;
  password : string;
  username : string;
  phone : string;

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe( users => {
        this.users = users;
      })
  }

}
