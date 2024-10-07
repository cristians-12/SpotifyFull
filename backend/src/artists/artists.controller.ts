import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get(':limit')
  async getSomeArtists(@Param('limit') limit: number) {
    return this.artistsService.getSomeArtists(limit);
  }

  @Get('id/:id')
  async getArtistById(@Param('id') id: string) {
    return this.artistsService.getArtistById(id);
  }
}
