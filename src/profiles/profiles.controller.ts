import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('profiles')
// GET /profiles
// GET /profiles/:id
// POST /profiles
// PUT /profiles/:id
// DELETE /profiles/:id
export class ProfilesController {
    @Get()
    // defining that the endpoint can take the query parameter age, query is optional
    // (baseUrl/profiles?age=25)
    findAll(@Query("age") age: number): any[] {
        // return 'This action returns all profiles';
        return [{age}];
    }


    @Get("/:id")
    // defining that the endpoint can take the param id, param is required
    // (baseUrl/profiles/1)
    findOne(@Param("id") id: string): any {
        return {id};
    }
}
