import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(
    public userService: UserService
  ) { }

  canActivate(): boolean {
    return this.userService.isAuthenticated();
  }
}
