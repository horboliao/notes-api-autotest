import { Injectable, NotFoundException } from '@nestjs/common';
import { ICreateNoteDto, IUpdateNoteDto, INoteDto } from './dto/note.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class NotesService {
    private notes: INoteDto[] = [];

    async getAll(): Promise<{ items: INoteDto[] }> {
        return { items: this.notes };
    }

    async getById(id: string): Promise<INoteDto> {
        const note = this.notes.find(n => n.id === id);
        if (!note) throw new NotFoundException('Note not found');
        return note;
    }

    async create(dto: ICreateNoteDto): Promise<INoteDto> {
        const newNote: INoteDto = {
            id: randomUUID(),
            title: dto.title,
            content: dto.content || '',
        };
        this.notes.push(newNote);
        return newNote;
    }

    async update(id: string, dto: IUpdateNoteDto): Promise<INoteDto> {
        const noteIndex = this.notes.findIndex(n => n.id === id);
        if (noteIndex === -1) throw new NotFoundException('Note not found');

        const note = this.notes[noteIndex];
        this.notes[noteIndex] = {
            ...note,
            title: dto.title ?? note.title,
            content: dto.content ?? note.content,
        };

        return this.notes[noteIndex];
    }

    async delete(id: string): Promise<{ success: boolean }> {
        const index = this.notes.findIndex(n => n.id === id);
        if (index === -1) throw new NotFoundException('Note not found');
        this.notes.splice(index, 1);
        return { success: true };
    }
}
