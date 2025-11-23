import { Controller, Get, Param, Post, Query, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
// GET /profiles
// GET /profiles/:id
// POST /profiles
// PUT /profiles/:id
// DELETE /profiles/:id
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) { }
    // @Get()
    // // defining that the endpoint can take the query parameter age, query is optional
    // // (baseUrl/profiles?age=25)
    // findAll(@Query("age") age: number): any[] {
    //     // return 'This action returns all profiles';
    //     return [{ age }];
    // }
    @Get()
    findAll() {
        return this.profilesService.findAll();
    }


    @Get("/:id")
    // defining that the endpoint can take the param id, param is required
    // (baseUrl/profiles/1)
    findOne(@Param("id") id: string): any {
        return { id };
    }


    @Post()
    Create(@Body() createProfileDto: CreateProfileDto) {
        return {
            name: createProfileDto.name,
            age: createProfileDto.age,
            description: createProfileDto.description,
            isMarried: createProfileDto.isMarried
        };
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() updateProfileDto: UpdateProfileDto,
    ) {
        return {
            id,
            name: updateProfileDto.name,
            age: updateProfileDto.age,
            description: updateProfileDto.description,
            isMarried: updateProfileDto.isMarried,
            code: HttpStatus.CREATED,
            message: "Profile updated successfully"
            // or
            // id,
            // ...updateProfileDto,
        };
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return { id };
    }
}
