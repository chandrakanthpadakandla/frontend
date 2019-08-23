import { Component, OnInit } from '@angular/core';
import { TracksService } from '../services/tracks.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  
  public tracks=[];

  constructor(private service: TracksService) { }

  ngOnInit() {
    this.service.getAllTracks().subscribe(data =>{
      this.tracks = data.tracks.track;
      console.log(this.tracks);
    });
  }

}
