import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
import { TrackType } from "../../types/track.type";
import { TrackSchema } from 'src/artists/schema/track.schema';

@Schema()
export class User {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: Types.ObjectId;
  @Prop({ unique: true })
  email: string;
  @Prop()
  password: string;
  @Prop({ type: [Number], default: [] })
  favorites: number[];
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
  @Prop({type:TrackSchema })
  currentPlaying: string;
  
}

export const UserSchema = SchemaFactory.createForClass(User);
