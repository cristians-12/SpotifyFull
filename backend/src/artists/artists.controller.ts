import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtist } from './dto/create-artist.request';
import { Artist } from './schema/artist.schema';
import { LocalGuard } from 'src/auth/guards/local.guard';

@Controller('artists')
export class ArtistsController {
  constructor(public readonly artistsService: ArtistsService) {}

  @Get()
  async getArtists() {
    return this.artistsService.getAllArtists();
  }

  @UseGuards(LocalGuard)
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

  @Put(':id')
  async updateArtist(@Param('id') id: string, @Body() data: Partial<Artist>) {
    return this.artistsService.updateArtist(id, data);
  }

  @Post(':id/album')
  async addAlbumArtist(@Param('id') id: string, @Body() data: any) {
    return this.artistsService.addAlbumArtist(id, data);
  }
}
