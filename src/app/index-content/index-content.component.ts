import { Component, OnInit } from '@angular/core';
import {data} from "../common/data.model";
import {HttpClient} from "@angular/common/http";
import {myService} from "../common/myService.service";
import {JsonArray} from "@angular/compiler-cli/ngcc/src/packages/entry_point";

@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.scss']
})
export class IndexContentComponent implements OnInit {

  list:JsonArray;
  flag = false;
  constructor(private http: HttpClient,
              private service:myService) {
  }

  ngOnInit(): void {
    this.service.get().subscribe((res)=>{
      setTimeout(()=>{
        this.flag = true;
        if(this.flag){
          this.http.get('http://localhost:8004/trend?id=1').subscribe(

            (res: JsonArray) => {
              this.list = res;

            }
          );
        }
      });
    }


      );

  }

}
