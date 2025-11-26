import { Controller, Get, Param, Body, Put, Delete, HttpCode, HttpStatus, Post } from '@nestjs/common';
import type { UUID } from '../common/types/uuid.type';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';
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
    findOne(@Param("id") id: UUID): any {
        return this.profilesService.findOne(id);
    }


    @Post()
    Create(@Body() createProfileDto: CreateProfileDto) {
        return this.profilesService.createOne(createProfileDto);
    }

    @Put(':id')
    update(
        @Param('id') id: UUID,
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
    remove(@Param('id') id: UUID) {
        return { id };
    }
}
