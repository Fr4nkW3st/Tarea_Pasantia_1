import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { Estudiante } from '../estudiantes/entities/estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private estudiantesRepository: Repository<Estudiante>,
  ) {}

  async create(createEstudianteDto: CreateEstudianteDto): Promise<{ message: string, estudiante: Estudiante }> {
    const nuevoEstudiante = this.estudiantesRepository.create(createEstudianteDto);
    const estudiante = await this.estudiantesRepository.save(nuevoEstudiante);
    return {
      message: 'Estudiante creado exitosamente',
      estudiante,
    };
}

  async findAll(): Promise<Estudiante[]> {
  return this.estudiantesRepository.find();
}

  async findOne(id: number): Promise<{ message: string, estudiante: Estudiante }> {
    const estudiante = await this.estudiantesRepository.findOneBy({ id });
    if (!estudiante) {
      throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
    }
    return {
      message: 'Estudiante encontrado exitosamente',
      estudiante,
    };
  }

    async update(id: number, updateEstudianteDto: UpdateEstudianteDto): Promise<{ message: string, estudiante: Estudiante }> {
    const estudianteExistente = await this.estudiantesRepository.findOneBy({ id });
    if (!estudianteExistente) {
      throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
    }

    await this.estudiantesRepository.update(id, updateEstudianteDto);
    const estudianteActualizado = await this.estudiantesRepository.findOneBy({ id });

    return {
      message: 'Estudiante actualizado exitosamente',
      estudiante: estudianteActualizado!,
    };
  }

  async remove(id: number): Promise<{ message: string }> {
    const estudiante = await this.estudiantesRepository.findOneBy({ id });
    if (!estudiante) {
      throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
    }

    await this.estudiantesRepository.delete(id);
    return {
      message: 'Estudiante eliminado exitosamente',
    };
  }
}
