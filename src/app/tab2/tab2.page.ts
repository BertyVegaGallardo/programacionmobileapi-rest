import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {RestService} from '../services/rest.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public datosObservable: Observable<any>;

 constructor(private restService: RestService) {
        this.datosObservable = this.restService.get_Datos();
    }
  ngOnInit() {

  }
}


