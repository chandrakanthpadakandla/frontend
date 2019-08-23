import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  public tracks=[];

  constructor(private service: PlaylistService) { }

  ngOnInit() {
    this.service.getPlaylist().subscribe(data =>{
      this.tracks = data;      
      // console.log(this.tracks);
    });
  }



  removeFromPlaylist(id){
    console.log(id)
    this.service.removeFromPlaylist(id).subscribe(data =>{
      console.log(data)
    });
  }

}
