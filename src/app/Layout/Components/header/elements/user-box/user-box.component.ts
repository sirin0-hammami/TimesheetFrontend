import { AuthService } from 'src/app/Services/Auth-service/auth.service';
import {Component, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent  {

  faPowerOff = faPowerOff

  constructor(public globals: ThemeOptions , private loginservice: AuthService, private router: Router) {
  }

  Logout(){
    this.loginservice.logOut();
    this.router.navigate([''])
  }
}
