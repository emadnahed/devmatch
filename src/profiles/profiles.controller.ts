import { Controller, Get, Query } from '@nestjs/common';

@Controller('profiles')
// GET /profiles
// GET /profiles/:id
// POST /profiles
// PUT /profiles/:id
// DELETE /profiles/:id
export class ProfilesController {
    @Get()
    // defining that the endpoint can take the query parameter age (baseUrl/profiles?age=25)
    findAll(@Query("age") age: number): any[] {
        // return 'This action returns all profiles';
        return [{age}];
    }
}
