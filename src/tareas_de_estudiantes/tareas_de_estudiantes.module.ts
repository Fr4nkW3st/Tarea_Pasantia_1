import { Module } from '@nestjs/common';
import { TareasDeEstudiantesService } from './tareas_de_estudiantes.service';
import { TareasDeEstudiantesController } from './tareas_de_estudiantes.controller';

@Module({
  controllers: [TareasDeEstudiantesController],
  providers: [TareasDeEstudiantesService],
})
export class TareasDeEstudiantesModule {}
