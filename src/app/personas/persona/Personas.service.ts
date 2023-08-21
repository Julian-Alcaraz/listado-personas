import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from '../../LoggingSerivice.service';
import { Persona } from './persona.model';
import { DataServices } from '../../data.services';
@Injectable()
export class PersonasService {
  personas: Persona[] = [];
  constructor(
    private loggingService: LoggingService,
    private dataServices: DataServices
  ) {}
  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }
  obtenerPersonas() {
    return this.dataServices.cargarPerosnas();
  }
  saludar = new EventEmitter<number>();

  agregarPersona(persona: Persona) {
    this.loggingService.enviarMensajeAconsola(
      'Persona agregada :' + persona.nombre
      );
    if(this.personas== null){
      this.personas=[];
    }    
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);
  }
  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }
  modificarPersona(index: number, persona1: Persona) {
    let persona: Persona = this.personas[index];
    persona.nombre = persona1.nombre;
    persona.apellido = persona1.apellido;
    this.dataServices.modificarPersona(index,persona);
  }
  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    //vuelvo a cargar el arreglo para regenerar inidices en la bd
    this.modificarPersonas()
  }
  modificarPersonas(){
    if(this.personas!=null){
      this.dataServices.guardarPersonas(this.personas)
    }
  }
}
