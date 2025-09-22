import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { TareasModule } from './tareas/tareas.module';
import { TareasDeEstudiantesModule } from './tareas_de_estudiantes/tareas_de_estudiantes.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    }),
    EstudiantesModule,
    TareasModule,
    TareasDeEstudiantesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
