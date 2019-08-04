import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public disableLogin = false;
  public name: string;
  public password: string;

  constructor(public authService: AuthService) {

  }

  ngOnInit() {
  }
  disableLoginBtn() {
    this.disableLogin = true;
  }
  login() {
    this.disableLoginBtn();
    this.authService.loginUser(this.name, this.password);
  }
}
