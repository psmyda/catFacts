import {Component, OnInit} from '@angular/core';
import {LoginService} from "../_services/login.service";
import {User} from "../_models/user";
import {CatFactsService} from "../_services/catFacts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  user?: User | null;
  loading: boolean = false;
  catFactsCollection: string[] = [];


  constructor(private loginService: LoginService, private catFactsService: CatFactsService) {
    this.loginService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {


    this.loading = true;
    this.catFactsService.getFacts(10).subscribe(result =>{
        // @ts-ignore
        this.catFactsCollection = [...this.catFactsCollection, ...result['data']]
        this.loading = false;
      }
    );
  }

  logout() {
    this.loginService.logout();
  }

  getAdditionalFacts(){
    this.catFactsService.getFacts(10);
  }

}
