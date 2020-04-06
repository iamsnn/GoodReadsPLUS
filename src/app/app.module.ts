import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './search/search.component';
import {DropdownDirective} from "./common/dropdown.directive";
import { IndexContentComponent } from './index-content/index-content.component';
import {myService} from "./common/myService.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SearchComponent,
    DropdownDirective,
    IndexContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [myService],
  bootstrap: [AppComponent]
})
export class AppModule { }
