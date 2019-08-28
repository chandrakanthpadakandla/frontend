import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  // public tracks=[];
  tracks:any;


  constructor(  private httpClient:HttpClient,private service: PlaylistService) { }
  id= localStorage.getItem('id');
 
  ngOnInit() {

    this.httpClient.get(' http://localhost:9091/track/displayTrack'+'/'+this.id).subscribe(data=>{
    // this.country=data as object[];
    this.tracks = data;
   console.log(this.id);
   })   
  }
  removeFromPlaylist(id){
    console.log(id)
    this.service.removeFromPlaylist(id).subscribe(data =>{
      console.log(data)
    });
  }

}
// this.service.getPlaylist().subscribe(data =>{
    //   this.tracks = data;      
    //   // console.log(this.tracks);
    // });