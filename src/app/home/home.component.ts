import { Component } from '@angular/core';
import {LoginService} from "../_services/login.service";
import {User} from "../_models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user?: User | null;

  constructor(private loginService: LoginService) {
    this.loginService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.loginService.logout();
  }

}
