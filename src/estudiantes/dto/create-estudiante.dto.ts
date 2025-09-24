import { IsEmail, IsNotEmpty, IsString, Length} from "class-validator";

export class CreateEstudianteDto {
    @IsNotEmpty({ message: "Complete El Rut Por Favor" })
    @IsString()
    @Length(8, 9, { message: "Complete El Rut Por Favor" }) 
    rut: string;

    @IsNotEmpty({ message: "Complete El Nombre Por Favor" })
    @IsString()
    @Length(3, 60, { message: "El Nombre Tiene Que Contener Entre 3 Y 60 Caracteres " })
    nombre: string;

    @IsNotEmpty({ message: "Complete El Correo Por Favor" })
    @IsString()
    @IsEmail()
    correo: string;
}