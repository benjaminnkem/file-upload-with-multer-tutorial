import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { FileInterceptor } from '@nestjs/platform-express';
import multerOptions from 'src/config/multer.config';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  uploadProfileImage(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
