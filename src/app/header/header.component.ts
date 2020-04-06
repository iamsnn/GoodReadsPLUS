import {Component, OnInit, Output} from '@angular/core';
import {myService} from "../common/myService.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

  flag = true;
  content:any;
  constructor(private service :myService) {
  }
  ngOnInit(): void{
    this.service.getNotDisplayManage().subscribe((res)=>{
      setTimeout(()=>{
        this.flag = res;
      });
    });
  }
  fetchData() {
    this.service.send('fetch a trend!');
  }

  customSearch() {
    this.service.sendToDisplay('display customized search')
  }

  toggle() {
    this.flag = true;
  }

  findPrev() {
    this.service.sendPrevpage(-1);
  }

  findNext() {
    this.service.sendNextpage(+1);
  }
}
