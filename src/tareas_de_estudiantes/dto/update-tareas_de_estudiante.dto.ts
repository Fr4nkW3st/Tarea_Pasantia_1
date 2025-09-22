import { PartialType } from '@nestjs/mapped-types';
import { CreateTareasDeEstudianteDto } from './create-tareas_de_estudiante.dto';

export class UpdateTareasDeEstudianteDto extends PartialType(CreateTareasDeEstudianteDto) {}
