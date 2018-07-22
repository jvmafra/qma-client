import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { GlobalService } from './services/global.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from './services/alert.service';


const appRoutes: Routes = [
  { path: 'register', component: UserComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    UserService,
    GlobalService,
    AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
