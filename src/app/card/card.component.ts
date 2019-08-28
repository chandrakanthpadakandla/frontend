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
  user: any;

  constructor(private service : PlaylistService, private route : Router) { }

  ngOnInit() {
  }
  
      addSong(trackAdd) {
     // this.track.=data["pid"];
    //  this.track.mbid=trackAdd["mbid"];
      this.track.trackName=trackAdd["name"];
      this.track.comments=trackAdd["url"];
       this.track.emailId= localStorage.getItem('id');
       console.log(this.track.trackName);
       this.service.addToPlaylist(this.track).subscribe(data => {
        alert("successfully added to playList");
     // this.service.addToPlaylist(trackAdd).subscribe(data =>{
    //  console.log(data)
    console.log(this.track.comments);
    console.log(this.track.trackId);
    // this.track.emailId= localStorage.getItem('id');
    // this.service.addToPlaylist(trackAdd).subscribe(data =>{
    // //console.log(data)   
    })

  }

  viewDetails(viewTrack){
    //console.log(viewTrack);
    this.route.navigateByUrl("/details/"+viewTrack.name+"/"+viewTrack.artist.name);
  }
}
