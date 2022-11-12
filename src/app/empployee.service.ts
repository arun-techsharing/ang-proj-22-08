import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employee } from './model/employee';
import { IProduct } from './model/IProduct';
import { login } from './model/login';
import { post } from './model/post'
@Injectable({
  providedIn: 'root'
})
export class EmpployeeService {

  constructor(private http: HttpClient) { }
  apiURL = environment.apiURL;

  public userId = "101";
  public userType = localStorage.getItem('userType');
  empData: employee[] = [
    {
      empID: 501,
      fullName: 'Ramesh',
      address: 'Chennai',
      cnt: 917812121,
      doj: '21-08-2017'
    },
    {
      empID: 502,
      fullName: 'Priya',
      address: 'Bangalore',
      cnt: 917812121,
      doj: '21-08-2022'
    },
    {
      empID: 503,
      fullName: 'Merlin',
      address: 'CBC',
      cnt: 917812121,
      doj: '21-08-2019'
    },
    {
      empID: 504,
      fullName: 'Pavithra',
      address: 'MDU',
      cnt: 917812121,
      doj: '21-08-2021'
    },
    {
      empID: 505,
      fullName: 'Vishnu',
      address: 'TN',
      cnt: 917812121,
      doj: '21-08-2015'
    }
  ];


  getAllEmployees(): employee[] {

    return this.empData;

  }

  isUserAdmin(): boolean {

    if (this.userType == 'admin') {
      return true;
    }
    else {
      return false;
    }

  }

  getAllUsers(): Observable<any> {
    //adding value to header --> Http headers
    //const custHeaders = { 'content-type': 'application/json' }

    //adding value to http url --> http paramerters
    const prms = { 'userID': '2' };
    // return this.http.get(this.apiURL, { headers: custHeaders, observe:'body'});
    return this.http.post(this.apiURL, 'test')
  }

  getAllproducts(): Observable<IProduct[]> {

    return this.http.get<IProduct[]>(this.apiURL + "/listproducts");
  }

  getProdbyCtgry(ctryId): Observable<IProduct[]> {
    let resp = this.http.get<IProduct[]>(this.apiURL + '/getpdtcatwise/' + ctryId);
    return resp;
  }


  addNewPost(nwpst: post): Observable<any> {

    //const custHeaders = { 'content-type': 'application/json;charset=UTF-8' }
    return this.http.post(this.apiURL + "/posts", { nwpst });
  }

  lgnUser(lgDtl: login): Observable<any> {
    return this.http.post(this.apiURL + "/login", { "Username": lgDtl.Username, "Password": lgDtl.Password })

  }

}
