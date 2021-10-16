import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {RestService} from '../services/rest.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  public datosObservable: Observable<any>;

 constructor(private restService: RestService) {
        this.datosObservable = this.restService.get_Datos();
    }
  ngOnInit() {}
}
