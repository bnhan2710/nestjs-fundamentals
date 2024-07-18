import { Controller, Delete, Get, Post, Put, Param, Body, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { error } from 'console';
import { types } from 'util';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {}

    @Post()
    create(@Body() createSongDTO:CreateSongDTO) {
        return this.songsService.create(createSongDTO);
    }

    @Get()
    findAll() {
        try{
        return this.songsService.findAll()
        }catch(err){
            throw new HttpException('Internal server error',
                HttpStatus.INTERNAL_SERVER_ERROR,
                {
                    cause :err
                }
            )
        }
    }
    @Get(':id')
    findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number) {
      return `fetch song on based on th id ${typeof(id)}`
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `Update song based on id ${id}`;
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return `Delete song based on id ${id}`;
    }
}
