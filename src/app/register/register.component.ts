import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Userdata } from '../userdata';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: Userdata[];
  user: Userdata;
  email: string;
  password: string;
  username: string;
  constructor(private userService: UsersService) { }
  // email = new FormControl('', [Validators.required, Validators.email]);
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }



  addUserData() {
    const newUser = {
      username: this.username,
      email: this.email,
      password: this.password
    }
    console.log(newUser);
    this.userService.addUser(newUser)
      .subscribe(data => {
        this.users.push(data);
        console.log(data);
      })
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      })
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      })
      console.log(this.username);
  }

}
