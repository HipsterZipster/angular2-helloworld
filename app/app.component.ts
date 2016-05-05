import { Component, OnInit } from '@angular/core';

@Component({
               selector: 'app-container',
               template: `
<h1>{{ message }}</h1>
<br/>
<input type="text" [(ngModel)]="firstName" />
{{ firstName }}
<ul>
<li *ngFor="let c of customers">
{{ c.name }} : {{ c.city }}
</li>
</ul>
<pre>
{{ customers | json }}
</pre>
`
           })
export class AppComponent implements OnInit {

    message: string;
    firstName: string;
    lastName: string;
    color: string = 'red';

    customers: any[] = [
        {name: 'joel', city: 'miami'},
        {name: 'jacob', city: 'nyc'}
    ];


    ngOnInit() {
        this.message = 'Hello World!';
    }

}