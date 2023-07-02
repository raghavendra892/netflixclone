import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDashboardComponent } from './shared/components/movie-dashboard/movie-dashboard.component';
import { MovieDetailsComponent } from './shared/components/movie-details/movie-details.component';

const routes: Routes = [
  {path : '' ,component: MovieDashboardComponent },
  {path : 'movieDetails/:movieId',component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
