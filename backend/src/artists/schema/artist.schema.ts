import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Artist {
  @Prop({ required: true })
  name: string;

  @Prop()
  genre: string;

  @Prop({ default: Date.now() })
  createdAt: Date;
}
