import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Track } from './track.schema';
import { Artist } from './artist.schema';

@Schema()
export class Album {
  @Prop({ required: true })
  title: string;

  //   @Prop({required:true})
  //   artist: string;

  @Prop({ type: Types.ObjectId, ref: 'Artist', required: true })
  artist: Artist;

  @Prop()
  genres: string[];

  @Prop({ required: true })
  image: string;

  @Prop({ type: [Number], default: [] })
  tracks: Track[];
}
export const AlbumSchema = SchemaFactory.createForClass(Album);
