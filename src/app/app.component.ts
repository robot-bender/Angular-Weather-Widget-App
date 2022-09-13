import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-weather-widget';

  weather : any;

  readonly ROOT_URL = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'f012cd10fe3acdda27ce99c5da54eb48';


  posts: Observable<any> | undefined;
  newPost: Observable<any> | undefined;

  constructor(private http: HttpClient) {}

  getWeatherDataByCityName() {
    let params = new HttpParams()
    .set('q', 'London,uk')
    .set('appid', this.apiKey)

    return this.http.get(this.ROOT_URL, { params });
  }

  getLocation() {
    this.getWeatherDataByCityName().subscribe(data=>{
      this.weather = data;
    })
  }


  // getPosts() {
  //   // let params = new HttpParams().set('userId', '1');
  //   let headers = new HttpHeaders().set('Authorization',  'f012cd10fe3acdda27ce99c5da54eb48');
  //   this.posts = this.http.get(this.ROOT_URL + '/posts', {headers});
  // }

//   createPost() {
//     const data: Post = {
//       q: "London,uk"
//     }

// //    this.newPost = this.http.post(this.ROOT_URL, data + '&APPID=f012cd10fe3acdda27ce99c5da54eb48');
//     this.newPost = this.http.post(this.ROOT_URL, data + 'APPID=f012cd10fe3acdda27ce99c5da54eb48');
//   }
}
