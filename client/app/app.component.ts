import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    fotos: Object[] = [];

    constructor(http: Http) {

        //rxjs = reactive extension for javascript
        http
        .get('v1/fotos')
        .map( res => res.json())
        .subscribe( fotos => {
            this.fotos = fotos;
        }, erro => console.log(erro));

    }

}