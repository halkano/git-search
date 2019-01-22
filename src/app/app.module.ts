import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import {RoutingModule} from './routing/routing.module'



import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {UsersService   }   from './users.service';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    LandingpageComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
