import { IsDate, IsInt, IsNotEmpty, IsString, Length, MaxLength } from "class-validator";
import { Type } from 'class-transformer';


export class CreateTareaDto {
    @IsNotEmpty({ message: "Complete El Espacio Por Favor" })
    @IsString()
    @Length(3, 60, { message: "El Titulo Tiene Que Contener Entre 3 Y 60 Caracteres " })
    titulo: string;

    @IsString()
    @MaxLength(150, { message: "Maximo De 150 Caracteres" })
    descripcion: string;

    @IsDate({ message: "Fecha Invalida" })
    @Type(() => Date)
    fecha_entrega: Date;

    @IsNotEmpty({ message: "Asigna La Tarea A Un Estudiante" })
    @IsInt()
    estudianteId: number;
}
