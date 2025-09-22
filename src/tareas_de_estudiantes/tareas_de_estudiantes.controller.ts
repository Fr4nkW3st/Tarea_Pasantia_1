import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TareasDeEstudiantesService } from './tareas_de_estudiantes.service';
import { CreateTareasDeEstudianteDto } from './dto/create-tareas_de_estudiante.dto';
import { UpdateTareasDeEstudianteDto } from './dto/update-tareas_de_estudiante.dto';

@Controller('tareas-de-estudiantes')
export class TareasDeEstudiantesController {
  constructor(private readonly tareasDeEstudiantesService: TareasDeEstudiantesService) {}

  @Post()
  create(@Body() createTareasDeEstudianteDto: CreateTareasDeEstudianteDto) {
    return this.tareasDeEstudiantesService.create(createTareasDeEstudianteDto);
  }

  @Get()
  findAll() {
    return this.tareasDeEstudiantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tareasDeEstudiantesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTareasDeEstudianteDto: UpdateTareasDeEstudianteDto) {
    return this.tareasDeEstudiantesService.update(+id, updateTareasDeEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tareasDeEstudiantesService.remove(+id);
  }
}
