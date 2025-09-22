import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { TareasModule } from './tareas/tareas.module';
import { TareasDeEstudiantesModule } from './tareas_de_estudiantes/tareas_de_estudiantes.module';

@Module({
  imports: [
    EstudiantesModule,
    TareasModule,
    TareasDeEstudiantesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
