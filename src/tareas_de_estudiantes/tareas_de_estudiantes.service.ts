import { Injectable } from '@nestjs/common';
import { CreateTareasDeEstudianteDto } from './dto/create-tareas_de_estudiante.dto';
import { UpdateTareasDeEstudianteDto } from './dto/update-tareas_de_estudiante.dto';

@Injectable()
export class TareasDeEstudiantesService {
  create(createTareasDeEstudianteDto: CreateTareasDeEstudianteDto) {
    return 'This action adds a new tareasDeEstudiante';
  }

  findAll() {
    return `This action returns all tareasDeEstudiantes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tareasDeEstudiante`;
  }

  update(id: number, updateTareasDeEstudianteDto: UpdateTareasDeEstudianteDto) {
    return `This action updates a #${id} tareasDeEstudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} tareasDeEstudiante`;
  }
}
