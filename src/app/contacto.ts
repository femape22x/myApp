export class Contacto {

    id: number;
    nombre: string;
    apellido: string;
    identificacion: string;
    direccion: string;
    correo: string;
    celular: string;

    

    constructor(Id: number, name: string, lastName: string, ident: string, address: string, email: string,
     cellphone: string){
        this.id = Id;
        this.nombre = name;
        this.apellido = lastName;
        this.identificacion = ident;
        this.direccion = address;
        this.correo = email;
        this.celular = cellphone;
    }

    
}
 //let contacto = new Contacto("F3L1X");
