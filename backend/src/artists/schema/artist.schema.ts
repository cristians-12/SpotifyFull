import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Album } from './album.schema';

@Schema()
export class Artist {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  genre: string;

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop()
  albums: Album[];

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  poster: string;
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);
