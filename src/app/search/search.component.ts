import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {data} from "../common/data.model";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import { BehaviorSubject } from 'rxjs';
import {myService} from "../common/myService.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchString: string;
  value: string = '';
  flag = false;
  checked='';
  author='';
  year='';

  onlyTitle = true;

  constructor(private http: HttpClient,
              private r: Router,
              private service:myService) {
  }

  ngOnInit(): void {
    this.service.getToDisplay().subscribe((res)=>{
      setTimeout(()=>{
        this.flag = !this.flag;
        this.onlyTitle = !this.onlyTitle;
        if(this.flag == false){
          this.checked='';
          this.author='';
          this.year='';
        }
      })});
  }

  pressSearch() {

    this.service.sendNotDisplayManage(false);

    let pass = this.searchString+":"+this.checked+":"+this.author+":"+this.year+":"+(this.onlyTitle==true?"withTitle":"noTitle");

    this.r.navigate(['/result',pass])

    console.log(pass+"from search page")
  }

  onItemChange(value){
    this.checked = value;
  }
}
