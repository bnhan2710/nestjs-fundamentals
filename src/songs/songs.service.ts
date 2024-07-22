import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.TRANSIENT,
  
})
export class SongsService {
  // local db
  // local array

  private readonly songs = [];

  create(song) {
    // Save the song in the database
    this.songs.push(song);
    return this.songs; 
  }

  findAll() {
    // fetch the songs from the db
    //Error comes while fetching data from DB
      // throw new Error('Error in DB while fetching record');
    return this.songs;
  }
}