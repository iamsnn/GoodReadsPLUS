import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {data} from "./common/data.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }
  loadedFeature = 'search';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  //
  // init() {
  //   this.http.get('http://localhost:8004/get').subscribe((res:number[]) =>
  //     {
  //       console.log(res)
  //       this.list = res;
  //     }
  //   );
  // }


}
