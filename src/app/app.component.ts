import { Component } from '@angular/core';
import { Contacto } from 'app/contacto';
import { FormularioService } from 'app/formulario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormularioService]
})
export class AppComponent {
  title = 'Formulario de Registro';// FORMULARIO DE REGISTRO
  contacto = new Contacto(1,'Felix De Jesus','Marrugo Palomino','1047408315',
    'Zaragocilla Kra 55 # 25 - 100','femape22x@hotmail.com','3135944542');

  constructor(private contact:FormularioService){}

  guardar(contacto : Contacto){
    this.contact.save(contacto);
    //window.alert(this.contacto.nombre+" "+this.contacto.apellido);
    //console.log(this.contacto);
  }
}
