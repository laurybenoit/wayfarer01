import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CityComponent } from './city/city.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideComponent } from './slide/slide.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopicsComponent } from './topics/topics.component';
import { FormsModule } from '@angular/forms';
import { ValidationsComponent } from './validations/validations.component';
import { AddpostComponent } from './addpost/addpost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CityComponent,
    HomepageComponent,
    PostComponent,
    PostDetailsComponent,
    SearchComponent,
    SlideComponent,
    SideBarComponent,
    PageNotFoundComponent,
    TopicsComponent,
    ValidationsComponent,
    AddpostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
