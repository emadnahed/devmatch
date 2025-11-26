import { UUID } from '../../common/types/uuid.type';

export class UpdateProfileDto {
    name?: string;
    age?: number;
    description?: string;
    isMarried?: boolean;
    id?: UUID;
}