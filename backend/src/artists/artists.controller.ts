import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtist } from './dto/create-artist.request';

@Controller('artists')
export class ArtistsController {
  constructor(public readonly artistsService: ArtistsService) {}

  @Get()
  async getArtists() {
    return this.artistsService.getAllArtists();
  }

  @Post()
  async createArtist(@Body() createArtistDto: CreateArtist) {
    return this.artistsService.createArtist(createArtistDto);
  }
}
