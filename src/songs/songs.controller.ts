import { Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) {}

    @Post()
    create() {
        return this.songsService.create('Dung lam trai tim anh dau by Son Tung');
    }

    @Get()
    findAll() {
        return 'This action returns all songs';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Fetch song based on id ${id}`;
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
