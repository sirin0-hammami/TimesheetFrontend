import { Router } from '@angular/router';
import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from 'src/app/Services/Auth-service/auth.service';

@Component({
  selector: 'app-login-boxed',
  templateUrl: './login-boxed.component.html',
  styles: []
})
export class LoginBoxedComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

@Input() error: string | null;

  constructor(private router: Router,
    private loginservice: AuthService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/dashboard'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.error = error.message;

      }
    )
    );

  }


}
