import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MoviesComponent } from './components/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
  	LayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
