import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Track } from '../track';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
 // public track;
  // public id;

  constructor(private http: HttpClient) { }

  public addToPlaylist(track:Track): Observable<Object> {
     return this.http.post<Track>('http://localhost:9091/track/addTrack',track)

  }
  removeFromPlaylist(trackRemove) : Observable<any>{
     console.log(trackRemove);
    // console.log(this.track);
     return this.http.delete<any>('http://localhost:9091/track/deleteTrack'+'/'+trackRemove);
   }
}


// addToPlaylist(trackAdd) : Observable<any>{
  //   var uid = (new Date().getTime()).toString(36);
  //   console.log(uid)
  //   // this.track  = new Track(uid, trackAdd.name, trackAdd.url);
  //   return this.http.post<any>('http://localhost:9091/track/addTrack', this.track)
  // }

  // getPlaylist() : Observable<any>{
 
  //  return this.http.get<any>('http://localhost:9091/track/getTrack');
  // }