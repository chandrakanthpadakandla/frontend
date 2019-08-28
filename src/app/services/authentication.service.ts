import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable()
export class AuthenticationService {
 constructor(private httpClient: HttpClient) {
 }
 authenticateUser(data) {
   return this.httpClient.post('http://localhost:9091/register/login', data);
 }
 setBearerToken(token) {
   localStorage.setItem('bearerToken', token);
 }
 getBearerToken() {
   return localStorage.getItem('bearerToken');
 }
//  logout() {
//   localStorage.clear();
// }

 }