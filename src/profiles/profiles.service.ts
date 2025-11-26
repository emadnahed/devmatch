import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UUID } from '../common/types/uuid.type';

// the injectable decorator enables us to create an instance of the service created on this file and 
// make it reusable elsewhere. No manual recreation needed as nest manages it for you through the
// injectable decorator.
@Injectable()
export class ProfilesService {

    // since no db interactions intended for now, we're for now hardcoding the profiles
    private profiles = [
    {
      id: randomUUID(),
      name: 'Brianna Watts',
      age: 41,
      description: `Looking for someone to merge with my heart. I’m a full-stack romantic who refactors my feelings until they pass all tests. Bonus points if you can debug my issues while we pair program over coffee. Let’s commit to something beautiful together.`
    },
    {
      id: randomUUID(),
      name: 'Jasper Quinn',
      age: 21,
      description: `Seeking a partner in crime to compile my heart. Must be comfortable with the terminal because I only speak fluent bash. Swipe right if you can appreciate a good kernel panic every now and then.`
    },
    {
      id: randomUUID(),
      name: 'Leo Park',
      age: 12,
      description: `You think you know VIM? Try Neovim. I'll make your modal dreams come true. Want to escape the matrix and explore the perfect keyboard shortcut for love?`
    },
  ];
  findAll(): any[] {
    return this.profiles;
  }
  findOne(id: UUID): any {
    return this.profiles.find(profile => profile.id === id);
  }

  createOne(profile: CreateProfileDto) {
    const newProfile = { ...profile, id: randomUUID() };
    this.profiles.push(newProfile);
    return { success: true, profile: newProfile, message: 'Profile created successfully' };
  }

  updateOne(id: UUID, updates: UpdateProfileDto) {
    const index = this.profiles.findIndex(p => p.id === id);
    if (index === -1) {
        return null;
    }
    
    // Create a new object with the updated fields
    const updatedProfile = {
        ...this.profiles[index],
        ...updates,
        id // Ensure the ID stays the same
    };
    
    // Update the array
    this.profiles[index] = updatedProfile;
    
    return { 
        ...updatedProfile,
        code: 200,
        message: 'Profile updated successfully' 
    };
}
  
}
