import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
  	LayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
