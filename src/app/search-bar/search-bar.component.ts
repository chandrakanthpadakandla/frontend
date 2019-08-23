import { Component, OnInit } from '@angular/core';
import { TracksService } from '../services/tracks.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public tracks=[];

  constructor(private service: TracksService) { }

  ngOnInit() {
  }

  submitIt(trackInput){
    console.log(trackInput);
    this.service.getTrackByName(trackInput).subscribe(data =>{
      this.tracks = data.results.trackmatches.track;
      console.log(data);
      console.log(this.tracks)});
  }

}
