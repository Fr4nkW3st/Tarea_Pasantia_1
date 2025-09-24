import { Estudiante } from "src/estudiantes/entities/estudiante.entity"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"

@Entity()
export class Tarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;

  @Column()
  fecha_entrega: Date;

  @ManyToOne(() => Estudiante, estudiante => estudiante.tareas)
  @JoinColumn({ name: 'estudianteId', referencedColumnName: 'id' })
  estudiante: Estudiante;

  @Column()
  estudianteId: number;  
}

