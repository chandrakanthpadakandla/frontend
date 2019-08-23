import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { TracksService } from './services/tracks.service'
import { PlaylistsComponent } from './playlists/playlists.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/user.service';
import { PlaylistService } from './services/playlist.service';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    CardsComponent,
    CardComponent,
    PlaylistsComponent,
    HomeComponent,
    DetailsComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    
  ],
  imports: [
    MatButtonToggleModule,
    BrowserModule,
    MatSlideToggleModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatCardModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [TracksService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
