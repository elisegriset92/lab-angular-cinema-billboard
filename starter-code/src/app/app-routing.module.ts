import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {MovieComponent} from './movie/movie.component';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies/:id', component: MovieComponent},

  // Must be the last route
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
