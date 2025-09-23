import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './estudiantes/entities/estudiante.entity';
import { Tarea } from './tareas/entities/tarea.entity';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { TareasModule } from './tareas/tareas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'Tareas',
      entities: [ Estudiante, Tarea ],
      synchronize: true,
    }),
    EstudiantesModule,
    TareasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
