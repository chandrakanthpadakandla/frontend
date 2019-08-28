import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  user: User = new User();
  id: string;


  ngOnInit() {
  }
  // ChangePassword(): void {
  //   this.userService.ChangePassword(this.user).
  //   subscribe( data => {
  //                alert("password changed succefully");
  //       });

  constructor(private service: UserService) { } 

        ChangePassword(): void {
          // localStorage.setItem('userName',this.user.userName);
       this.id=localStorage.getItem('id');  
         this.service.ChangePassword(this.user,this.id)
               .subscribe(data => console.log(data), error => console.log(error));
             // this.user = new User();  
             alert("password changed succefully");
              console.log(this.user.emailId,this.user.password,this.id);        }
    

}
