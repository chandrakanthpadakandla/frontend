import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
const httpOptions={
  headers:new HttpHeaders({
    "Accept":"/"
  })
 };
@Injectable()
export class UserService {  
  constructor(private http:HttpClient) {}  
  private userUrl = 'http://localhost:9091/register/addRegister';
  private userUrl1='http://localhost:9091/register/updatePassword';

  public createUser(user : User) {
    return this.http.post<User>(this.userUrl, user);
  }
  public ChangePassword(user: Object,id :any): Observable<Object> {
    return this.http.put<User>(this.userUrl1+'/'+id, user);

  }
}

// public createUser(user: Object): Observable<Object> {
//   return this.http.post('${this.userUrl}', user);
// }
// }