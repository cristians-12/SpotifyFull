// artists.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { Artist, ArtistSchema } from './schema/artist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Artist.name, schema: ArtistSchema }]),
  ],
  providers: [ArtistsService],
  controllers: [ArtistsController],
})
export class ArtistsModule {}
