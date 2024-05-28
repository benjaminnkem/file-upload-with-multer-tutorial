import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { FileInterceptor } from '@nestjs/platform-express';
import multerOptions from 'src/middlewares/multer.middleware';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  uploadProfilePicture(@UploadedFile() image: Express.Multer.File) {
    // save the image path to a database
  }
}
