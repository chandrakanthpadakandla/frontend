export class Track{
     id:number;
    emailId: string;
    trackId : number;
    trackName: string;
    comments: string;

    constructor(emailId,trackId, trackName, comments){
        // this.id=id;
        this.trackId = trackId;
        this.trackName = trackName;
        this.comments = comments;
        this.emailId = emailId;
    }
}