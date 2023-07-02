import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Imovies } from '../../model/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.scss']
})
export class MovieSliderComponent implements OnInit {
  moviesArray : Array<Imovies> = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay : true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      }
    },
    nav: true
  }

  constructor(private _movieservice : MoviesService) {}
  ngOnInit(): void {
    this._movieservice.getLetTreandingMovies()
    .subscribe(res => {
      console.log(res);
      this.moviesArray = res;
    })
  }

}
