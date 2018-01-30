import { Http, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the OlaCabBookingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OlaCabBookingProvider {
  
  token:any = 'N1YezDlgeLsgrkEXITSmidPyP6LDuJPzywnsGXeW';
  constructor(public http: Http) {
    console.log('Hello OlaCabBookingProvider Provider');
    this.skoch();
  }
  getRideDetails(userlat, userlong, collegelat, collegeLong){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept-Language', 'en_US');
    headers.append('Authorization', 'Token ' + this.token);
    // headers.append('Origin','https://cors-anywhere.herokuapp.com');
    headers.append('Origin','http://localhost:8100');
    let options = new RequestOptions({ headers: headers });
    // let url = "https://cors-anywhere.herokuapp.com/https://api.uber.com/v1.2/estimates/price?start_latitude="+userlat+"&start_longitude="+userlong+"&end_latitude="+collegelat+"&end_longitude="+collegeLong;
    let url = "https://api.uber.com/v1.2/estimates/price?start_latitude="+userlat+"&start_longitude="+userlong+"&end_latitude="+collegelat+"&end_longitude="+collegeLong;
    return this.http.get(url, options)
      .map(response => response.json());
  }
  skoch(){
    return this.http.get("http://skochvoting.tk").map(response => response);
  }
  // getRideOlaDetails(userlat, userlong, collegelat, collegeLong){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('Accept-Language', 'en_US');
  //   headers.append('Authorization', 'Token ' + this.token);
  //   console.log(headers);
  //   let options = new RequestOptions({ headers: headers });
  //   let url = "https://api.uber.com/v1.2/estimates/price?start_latitude="+userlat+"&start_longitude="+userlong+"&end_latitude="+collegelat+"&end_longitude="+collegeLong;
  //   return this.http.get(url, options)
  //     .map(response => response.json());
  // }
  
}
