import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArtist } from './dto/create-artist.request';
import { Artist } from './schema/artist.schema';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectModel(Artist.name) private readonly artistModel: Model<Artist>,
  ) {}

  async createArtist(data: CreateArtist) {
    const existingArtist = await this.artistModel.findOne({ name: data.name });
    if (existingArtist) {
      return { message: 'Artist already exists' };
    }

    const newArtist = new this.artistModel(data);
    return newArtist.save();
  }

  async getAllArtists() {
    return await this.artistModel.find().exec();
  }
}
