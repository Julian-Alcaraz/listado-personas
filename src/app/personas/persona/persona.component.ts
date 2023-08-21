import { Component,  Input } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './Personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {
  // recibo los elementos que me paso el componente padre
  
  
  constructor (private personaService:PersonasService){}
  @Input() persona: Persona; 
  @Input() indice: number;
  
  emitirSaludo(){
    this.personaService.saludar.emit(this.indice)
  }
  
}
