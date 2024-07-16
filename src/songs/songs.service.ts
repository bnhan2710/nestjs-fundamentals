import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    //local db array 
    private readonly songs = [];
    create(song){
        //push song to db
        this.songs.push(song)
        return this.songs
    }

    findAll(){
        
        return this.songs
    }
}
