import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
  {path: 'playlists', component: PlaylistsComponent,canActivate:[AuthGuard]},
  {path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'details/:trackName/:trackArtist', component: DetailsComponent,canActivate:[AuthGuard]},
  {path: 'changepassword', component: ChangepasswordComponent,canActivate:[AuthGuard]},
  {path: 'navbar', component: NavBarComponent,canActivate:[AuthGuard]},
  { path: 'register', component: RegisterComponent }
];
  54


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
