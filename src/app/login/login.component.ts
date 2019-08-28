import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { User } from '../user';
import { UserService } from '../services/user.service';


@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: string;
constructor(private service:UserService,private authService: AuthenticationService,
  private routerService:RouterService) { }
user: User = new User();
ngOnInit() {
}
emailId:any
password:any
public bearerToken: any;
  public submitMessage: string;
userlogin(): void {

localStorage.setItem('id',this.user.emailId);
this.id=localStorage.getItem('id');  
console.log(this.user.emailId,this.id);
  
    this.authService.authenticateUser(this.user)
      .subscribe( data => {
        alert("successfully Logged in.");
        this.bearerToken =data["token"];
        console.log(data);
        this.authService.setBearerToken(this.bearerToken);
        console.log(this.bearerToken);
        this.routerService.routeToHome();
      },
      err => {
        console.log("notfound");
                  if (err.status === 404) {
          this.submitMessage = err.message;
        } else {
          this.submitMessage = err.error.message;
        }
        } );

}
}














