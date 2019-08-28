import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class RouterService {
  // routeToHome() {
  //   throw new Error("Method not implemented.");
  // }
 constructor(private router: Router) { }
 routeToHome() {
   this.router.navigate(['home']);
 }
 routeToLogin() {
   this.router.navigate(['login']);
 }
}







