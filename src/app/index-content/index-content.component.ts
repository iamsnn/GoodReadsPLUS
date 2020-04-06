import { Component, OnInit } from '@angular/core';
import {data} from "../common/data.model";
import {HttpClient} from "@angular/common/http";
import {myService} from "../common/myService.service";

@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.scss']
})
export class IndexContentComponent implements OnInit {

  list:number[];
  flag = false;
  constructor(private http: HttpClient,
              private service:myService) {
  }

  ngOnInit(): void {
    this.service.get().subscribe((res)=>{
      setTimeout(()=>{
        this.flag = true;
        if(this.flag){
          this.http.get('http://localhost:8004/get').subscribe(
            (res: number[]) => {
              this.list = res;
            }
          );
        }
      });
    }


      );

  }

}
