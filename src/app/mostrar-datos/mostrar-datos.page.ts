import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {RestService} from '../services/rest.service';

interface Dato {
  userId: string;
  id: string;
  title: string;
  body: string;
}




@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.page.html',
  styleUrls: ['./mostrar-datos.page.scss'],
})

export class MostrarDatosPage implements OnInit {
  public datoObservable: Observable<any>;
  dato :Dato;
  constructor(private activateRoute: ActivatedRoute,private restService: RestService) 
   {  
     
    }


  ngOnInit() {
    this.activateRoute.paramMap.subscribe(
      paramMap=>{
        const idDato=paramMap.get('datoId');
       
      this.restService.get_Dato(idDato).subscribe(dato =>{  
            this.dato=dato;
            alert('Dato:'+this.dato.id);
      });
    });
 }
    
}
