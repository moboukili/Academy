import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  today: number = Date.now();

  
  userIP = ''
  City = '';
  Country ='';
 
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.loadIp();
  }
 
  loadIp() {
    this.httpClient.get('https://jsonip.com')
    .pipe(
      switchMap((value:any) => {
      this.userIP = value.ip;
      
      let url = `http://api.ipstack.com/${value.ip}?access_key=8432ff3d3c79507348879441c65400a4`
      return this.httpClient.get(url);
      })
    ).subscribe(
      (value:any) => {
      this.City = value.city;
      this.Country = value.country_name;
      console.log(value);
      },
      err => {
      console.log(err);
      }
    );
    }

}
