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
  artist: Types.ObjectId;

  @Prop()
  genres: string[];

  @Prop({ required: true })
  image: string;

  @Prop({ type: [Number], default: [] })
  tracks: Track[];
}
export const AlbumSchema = SchemaFactory.createForClass(Album);
AlbumSchema.pre<Album>('save', async function (next) {
  if (!this.artist) {
    // Aquí puedes definir cómo obtener el artista, por ejemplo:
    const artist = await Artist.findOne(); // o cualquier lógica que necesites
    if (artist) {
      this.artist = artist._id;
    }
  }
  next();
});