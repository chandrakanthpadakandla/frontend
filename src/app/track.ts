export class Track{
    // id:number;
    trackId : number;
    trackName: string;
    comments: string;

    constructor(trackId, trackName, comments){
        // this.id=id;
        this.trackId = trackId;
        this.trackName = trackName;
        this.comments = comments;
    }
}