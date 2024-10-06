import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Album } from './album.schema';

@Schema()
export class Track {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  artist: string;

  @Prop({ type: Types.ObjectId, ref: 'Album', required: true })
  album: Album;

  @Prop({ required: true })
  url: string;
}
export const TrackSchema = SchemaFactory.createForClass(Track);
