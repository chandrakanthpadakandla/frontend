import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  user: User = new User();
  ngOnInit(): void {
  }  

  constructor(private userService: UserService) { } 
  createUser(): void {
    this.userService.createUser(this.user).
    subscribe( data => {
                 alert("User created successfully.");
        });
         
      }

}
