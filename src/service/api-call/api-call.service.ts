import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  baseUrl: string = 'http://localhost:8888/';

  constructor(private httpService: HttpClient) { }

callServer(url: any,valueArray: any){
  // console.log(this.baseUrl + url + valueArray);
  return this.httpService.post(this.baseUrl + url, valueArray);
}

}
