import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';

@Injectable()
export class myService {

  constructor() {
  }

  private subject :ReplaySubject<any>=new ReplaySubject<any>();
// 需要发送的信息
  private change :ReplaySubject<any>=new ReplaySubject<any>();
  private notDisplay:ReplaySubject<boolean>=new ReplaySubject<boolean>();
  private findPrev:ReplaySubject<any>=new ReplaySubject<any>();
  private findNext:ReplaySubject<any>=new ReplaySubject<any>();

  public send(message:any):void{
    this.subject.next(message)
  }
//需要接收的信息
  public get():Observable<any>{
    return this.subject.asObservable();
  }

  public sendToDisplay(message:any):void{
    this.change.next(message);
  }
  public getToDisplay():Observable<any>{
    return this.change.asObservable();
  }

  public sendNotDisplayManage(message:boolean){
    this.notDisplay.next(message);
  }
  public getNotDisplayManage():Observable<boolean>{
    return this.notDisplay.asObservable();
  }

  public sendNextpage(message:number){
    this.findNext.next(message);
  }
  public getNextpage():Observable<number>{
    return this.findNext.asObservable();
  }

  public sendPrevpage(message:number){
    this.findPrev.next(message);
  }
  public getPrevpage():Observable<number>{
    return this.findPrev.asObservable();
  }

  public unsubscribe(){
    this.findPrev = new ReplaySubject<any>();
    this.findNext = new ReplaySubject<any>();
  }
}
