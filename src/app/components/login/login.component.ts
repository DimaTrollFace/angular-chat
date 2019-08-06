import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public disableLogin = false;

  constructor(public authService: AuthService) {

  }

  ngOnInit() {
  }
  disableLoginBtn() {
    this.disableLogin = true;
  }
  enableLoginBtn() {
    this.disableLogin = false;
  }
  login() {
    this.disableLoginBtn();
    this.authService.doLoginGoogle()
        .then((user) => {
          this.enableLoginBtn();
        });
  }
}
