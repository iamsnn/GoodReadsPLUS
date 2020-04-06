import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {data} from "../common/data.model";
import {HttpClient} from "@angular/common/http";
import {myService} from "../common/myService.service";
import {JsonArray} from "@angular/compiler-cli/ngcc/src/packages/entry_point";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})




export class ContentComponent implements OnInit {

  booknumber1:number[];
  booknumber2:number[];

  info:string='';
  content:JsonArray;
  currentPage = 1;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private service:myService) {
    //钩子方法内存泄漏！！！！！
    this.service.unsubscribe();
    this.currentPage = 1;
    this.route.params.subscribe((params:Params) => this.info=params["id"]);
    this.http.get('http://localhost:8004/search?id='+this.info+(1+"")).subscribe(
      (res:JsonArray) => {
        setTimeout(()=>{
          this.content = res;

          if(this.content.length<=4){
            this.booknumber1=[];
            this.booknumber2=[];
            this.booknumber1 = Array.from(new Array(this.content.length),(val,index)=>index);
          }
          else{
            this.booknumber1=[];
            this.booknumber2=[];
            this.booknumber1 = Array.from(new Array(4),(val,index)=>index);
            this.booknumber2 = Array.from(new Array(this.content.length-4),(val,index)=>index+4);
          }


        });

      }
    );

  }


  //store every 8 books, each time a new combi
  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => this.info=params["id"]);
    this.http.get('http://localhost:8004/search?id='+this.info+(this.currentPage+"")).subscribe(
      (res:JsonArray) => {
        setTimeout(()=>{
          this.content = res;

          if(this.content.length<=4){
            this.booknumber1=[];
            this.booknumber2=[];
            this.booknumber1 = Array.from(new Array(this.content.length),(val,index)=>index);
          }
          else{
            this.booknumber1=[];
            this.booknumber2=[];
            this.booknumber1 = Array.from(new Array(4),(val,index)=>index);
            this.booknumber2 = Array.from(new Array(this.content.length-4),(val,index)=>index+4);
          }
          this.currentPage = 1;
        });

      }
    );

    this.service.getNextpage().subscribe((res:number)=>{
      setTimeout(()=>{
        console.log(this.currentPage+"press next");

        if(this.currentPage < 10)
        {
          this.currentPage ++;
          this.http.get('http://localhost:8004/pageChange?id='+(this.currentPage+"")).subscribe(
            (info:JsonArray) => {
              setTimeout(()=>{
                this.content = info;

                if(this.content.length<=4){
                  this.booknumber1=[];
                  this.booknumber2=[];
                  this.booknumber1 = Array.from(new Array(this.content.length),(val,index)=>index);
                }
                else{
                  this.booknumber1=[];
                  this.booknumber2=[];
                  this.booknumber1 = Array.from(new Array(4),(val,index)=>index);
                  this.booknumber2 = Array.from(new Array(this.content.length-4),(val,index)=>index+4);
                }
              })
            }
          );
        }
      }
      );
    });

    this.service.getPrevpage().subscribe((res:number)=>{
      setTimeout(()=>{
        console.log(this.currentPage + "press prevpage");

        if(this.currentPage > 1)
        {
          this.currentPage --;
          this.http.get('http://localhost:8004/pageChange?id='+(this.currentPage+"")).subscribe(
            (info:JsonArray) => {
              setTimeout(()=>{
                this.content = info;
                if(this.content.length<=4){
                  this.booknumber1=[];
                  this.booknumber2=[];
                  this.booknumber1 = Array.from(new Array(this.content.length),(val,index)=>index);
                }
                else{
                  this.booknumber1=[];
                  this.booknumber2=[];
                  this.booknumber1 = Array.from(new Array(4),(val,index)=>index);
                  this.booknumber2 = Array.from(new Array(this.content.length-4),(val,index)=>index+4);
                }
              })
            }
            );
        }
      });


    });


  }


}

