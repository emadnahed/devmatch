import { Controller, Get } from '@nestjs/common';

@Controller('profiles')
// GET /profiles
// GET /profiles/:id
// POST /profiles
// PUT /profiles/:id
// DELETE /profiles/:id
export class ProfilesController {
    @Get()
    findAll(): any[] {
        // return 'This action returns all profiles';
        return [];
    }
}
