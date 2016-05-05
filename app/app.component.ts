import {Component, OnInit} from '@angular/core';

@Component({
               selector: 'app-container',
               template: `<h1>Hello World</h1>`
           })
export class AppComponent implements OnInit {

    message: string;

    ngOnInit() {
        this.message = 'Hello World!';
    }

}