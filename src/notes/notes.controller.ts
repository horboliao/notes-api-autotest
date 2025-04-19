import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { ICreateNoteDto, IUpdateNoteDto } from './dto/note.dto';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Get()
    getAll() {
        return this.notesService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.notesService.getById(id);
    }

    @Post()
    create(@Body() dto: ICreateNoteDto) {
        return this.notesService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: IUpdateNoteDto) {
        return this.notesService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.notesService.delete(id);
    }
}
