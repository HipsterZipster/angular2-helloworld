"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.color = 'red';
        this.customers = [
            { name: 'joel', city: 'miami' },
            { name: 'jacob', city: 'nyc' }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.message = 'Hello World!';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-container',
            template: "\n<h1>{{ message }}</h1>\n<br/>\n<input type=\"text\" [(ngModel)]=\"firstName\" />\n{{ firstName }}\n<ul>\n<li *ngFor=\"let c of customers\">\n{{ c.name }} : {{ c.city }}\n</li>\n</ul>\n<pre>\n{{ customers | json }}\n</pre>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map