import { IsOptional, IsString } from 'class-validator';
export interface INoteDto {
    id: string;
    title: string;
    content: string;
}

export interface INoteListDto {
    items: INoteDto[];
}

export class ICreateNoteDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    content?: string;
}

export class IUpdateNoteDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    content?: string;
}
