import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';
import { Tarea } from '../tareas/entities/tarea.entity';
import { Estudiante } from 'src/estudiantes/entities/estudiante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tarea, Estudiante])],
  controllers: [TareasController],
  providers: [TareasService],
})
export class TareasModule {}
