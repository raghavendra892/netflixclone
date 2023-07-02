import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {
  
  constructor(
    ) { }

  ngOnInit(): void {
   
  }

}
