import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TracksService } from '../services/tracks.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public track = null;

  constructor(private route : ActivatedRoute, private service: TracksService) { }

  ngOnInit() {
    const trackName = this.route.snapshot.paramMap.get('trackName');
    const trackArtist = this.route.snapshot.paramMap.get('trackArtist');

    //console.log(trackName);
    //console.log(trackArtist);


    this.service.getDetails(trackName, trackArtist).subscribe(data =>{
      this.track = data.track;
      console.log(data);

      console.log(this.track);
    });
  }

}
