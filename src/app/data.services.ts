import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from './personas/persona/persona.model';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
@Injectable()
export class DataServices {
    constructor(private httppClient:HttpClient,
        private loginService: LoginService){}
    eliminarPersona(index:number){
        const token =this.loginService.getIdToken();
        let url:string;
        url='https://listado-personas-de3ee-default-rtdb.firebaseio.com/datos/'+index+'.json?auth='+token;
        this.httppClient.delete(url)
        .subscribe (
            response => console.log("rsultado Eliminar Persona:" + response),
            error => console.log("Error en Eliminar Persona: "+ error)
        )
    }
    modificarPersona(index:number,persona:Persona){
        const token =this.loginService.getIdToken();
        let url:string;
        url='https://listado-personas-de3ee-default-rtdb.firebaseio.com/datos/'+index+'.json?auth='+token;
        this.httppClient.put(url,persona)
        .subscribe (
            response => console.log("rsultado modificar Persona:" + response),
            error => console.log("Error en modificar Persona: "+ error)
        )

    }
    cargarPerosnas():Observable<any>{
        const token =this.loginService.getIdToken();
        return this.httppClient.get('https://listado-personas-de3ee-default-rtdb.firebaseio.com/datos.json?auth='+token)
    
    }
    //Guardar Persona
    guardarPersonas(personas: Persona[]){
        const token =this.loginService.getIdToken();
        this.httppClient.put('https://listado-personas-de3ee-default-rtdb.firebaseio.com/datos.json?auth='+token,personas)
        .subscribe(
            response=>{
                console.log('Resultado guardar Personas: '+ response);
            },
            error => console.log('Erorr al guardar Personas: '+error)
        )
    }


}