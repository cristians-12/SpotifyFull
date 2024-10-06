import { IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Album } from '../schema/album.schema';

export class CreateArtist {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsArray()
  @ValidateNested({ each: true }) 
  @Type(() => Album) 
  albums: Album[];

  @IsString()
  @IsNotEmpty()
  image: string;
}
