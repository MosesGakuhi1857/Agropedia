import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agro }  from '../agro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgroService {

  agro : Agro ;

  constructor(private http: HttpClient) {
    this.agro = new Agro ("","",0,0);
   }
   //empty plant



getData():Observable<any> {

  const url = "https://agropedia.herokuapp.com/api/plants/"



  return this.http.get<any>(url)

  
}
getResults(n:any,p:any,k:any,t:any,h:any,ph:any,r:any):Observable<any>{

const url = `https://agropedia.herokuapp.com/api/ai/${n}-${p}-${k}-${t}-${h}-${ph}-${r}`

return this.http.get<any>(url)

}



}
