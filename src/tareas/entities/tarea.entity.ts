import { Estudiante } from "src/estudiantes/entities/estudiante.entity"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"

@Entity()
export class Tarea {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titulo: string

    @Column()
    descripcion: string

    @Column()
    fecha_entrega: Date

    @ManyToOne(() => Estudiante, (estudiante) => estudiante.tareas)
    estudiante: Estudiante
}
