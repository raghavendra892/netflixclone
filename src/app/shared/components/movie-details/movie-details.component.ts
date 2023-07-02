import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Imovies, Itrailer } from '../../model/movie';
import { first } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId! : string ;
  movieDeatils ! : Imovies;
  movietrailers! : Array<Itrailer>;

  trailerUrl  !: SafeResourceUrl ;
  constructor(private _route : ActivatedRoute,
    private _movieService: MoviesService,
    private _sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this._route.params
    .pipe(first())
    .subscribe((params : Params) =>{
      this.movieId = params['movieId'];
      console.log(this.movieId);
      if(this.movieId){
          this._movieService.getMovieDetails(this.movieId)
          .subscribe(res =>{
            console.log(res);
            this.movieDeatils = res;
          })

          this._movieService.getMovieTrailer(this.movieId)
            .subscribe(trailers => {
              console.log("Trailers",trailers);
              this.movietrailers = trailers;
              
            })
      }
    })
  }

  runTrailer(key : string){
    //console.log(key);

    let url = `https://www.youtube.com/embed/${key}`;

    this.trailerUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url)
    
  }

}
