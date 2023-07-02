import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imovies, ImoviesResp, ItraileResp, Itrailer } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl : string = environment.baseurl;
  apiKey : string = environment.apikey;
  constructor(private _http : HttpClient) { }

  getLetTreandingMovies() : Observable<Imovies[]>{
    let TrendingMovies = `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`;

    return this._http.get<ImoviesResp>(TrendingMovies)
      .pipe(
        map(res => res.results)
        
      )
  }

  getMovieDetails(id : string): Observable<Imovies>{
    let deatilsUrl = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
  return  this._http.get<Imovies>(deatilsUrl)


  }

  getMovieTrailer(id : string): Observable<Itrailer[]>{
    let deatilsUrl = `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`;
  return  this._http.get<ItraileResp>(deatilsUrl)
    .pipe(
      map(res => res.results)
    )
  

  }
}
