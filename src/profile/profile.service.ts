import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  uploadProfilePicture() {
    return 'This action adds a new profile picture';
  }
}
