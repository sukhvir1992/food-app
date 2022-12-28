import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  loginUser(credentials: { email: string; password: string }): Observable<any> {
		return this.http.post(`http://192.168.1.50:8001/userservice/`, credentials);
	}
}
