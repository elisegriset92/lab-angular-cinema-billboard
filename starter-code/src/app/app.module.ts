import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MovieComponent} from './movie/movie.component';
import {HomeComponent} from './home/home.component';
import {ServiceService} from './service/service.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MovieComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
