import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Tarea } from "src/tareas/entities/tarea.entity";

@Entity()
export class Estudiante {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    rut: string

    @Column()
    nombre: string

    @Column()
    correo: string

    @OneToMany(() => Tarea, (tarea) => tarea.estudiante)
    tareas: Tarea[]
}
