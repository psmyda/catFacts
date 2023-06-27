import { environment } from '../../environments/environment';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CatFactsService {

  constructor(private http: HttpClient) {
  }

  getFacts(amount: number){
    return this.http.get(`${environment.catFactsApiUrl}?count=${amount}`);
  }
}
