import { Component, OnInit, Input } from '@angular/core';
import { PlaylistService } from '../services/playlist.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() track;

  constructor(private service : PlaylistService, private route : Router) { }

  ngOnInit() {
  }

  addSong(trackAdd){
    //console.log("trackAdd");
    this.service.addToPlaylist(trackAdd).subscribe(data =>{
    //console.log(data)
    });
  }

  viewDetails(viewTrack){
    //console.log(viewTrack);
    this.route.navigateByUrl("/details/"+viewTrack.name+"/"+viewTrack.artist.name);
  }
}
