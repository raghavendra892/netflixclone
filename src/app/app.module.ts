import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MovieDetailsComponent } from './shared/components/movie-details/movie-details.component';
import { MovieDashboardComponent } from './shared/components/movie-dashboard/movie-dashboard.component';
import { MovieSliderComponent } from './shared/components/movie-slider/movie-slider.component'
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieDetailsComponent,
    MovieDashboardComponent,
    MovieSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
