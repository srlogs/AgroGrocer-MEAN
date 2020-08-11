import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Userdata } from '../userdata';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string;
  password : string;
  invalid : boolean = false;
  constructor(private userService : UsersService, private router : Router) { }

  authenticateData()
  {
    const userdata = {
      username: this.username,
      password: this.password
    }
    this.userService.authenticateUser(userdata)
      .subscribe(data => {
        console.log(data);
        if(data.msg === "login successfull")
        {
          this.router.navigate(['/home']);
        }
        else
        {
          this.invalid = true;
        }
      },
      err => console.log("error", err)
    )
  }
  ngOnInit(): void {
  }

}
