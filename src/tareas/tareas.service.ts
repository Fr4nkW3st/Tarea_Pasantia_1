import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { Tarea } from './entities/tarea.entity';

@Injectable()
export class TareasService {
  constructor(
      @InjectRepository(Tarea)
      private tareasRepository: Repository<Tarea>,
    ) {}

    async create(createTareaDto: CreateTareaDto): Promise<{ message: string, tarea: Tarea }> {
    const nuevaTarea = this.tareasRepository.create(createTareaDto);
    const tarea = await this.tareasRepository.save(nuevaTarea);
    return {
      message: 'Tarea creada exitosamente',
      tarea,
    };
  }

  async findAll(): Promise<Tarea[]> {
    return this.tareasRepository.find();
  }

  async findOne(id: number): Promise<{ message: string, tarea: Tarea }> {
    const tarea = await this.tareasRepository.findOneBy({ id });
    if (!tarea) {
      throw new NotFoundException(`Tarea con ID ${id} no encontrada`);
    }
    return {
      message: 'Tarea encontrada exitosamente',
      tarea,
    };
  }

   async update(id: number, updateTareaDto: UpdateTareaDto): Promise<{ message: string, tarea: Tarea }> {
    const tareaExistente = await this.tareasRepository.findOneBy({ id });
    if (!tareaExistente) {
      throw new NotFoundException(`Tarea con ID ${id} no encontrada`);
    }

    await this.tareasRepository.update(id, updateTareaDto);
    const tareaActualizada = await this.tareasRepository.findOneBy({ id });

    return {
      message: 'Tarea actualizada exitosamente',
      tarea: tareaActualizada!,
    };
  }

  async remove(id: number): Promise<{ message: string }> {
    const tarea = await this.tareasRepository.findOneBy({ id });
    if (!tarea) {
      throw new NotFoundException(`Tarea con ID ${id} no encontrada`);
    }

    await this.tareasRepository.delete(id);
    return {
      message: 'Tarea eliminada exitosamente',
    };
  }
}
