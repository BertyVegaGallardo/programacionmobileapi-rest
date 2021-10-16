(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mostrar-datos-mostrar-datos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mostrar-datos/mostrar-datos.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mostrar-datos/mostrar-datos.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title>{{dato.id}} {{dato.title}}</ion-title>\n\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref='/tab3'></ion-back-button>\n      </ion-buttons>\n\n  </ion-toolbar>\n</ion-header> \n\n<ion-content [fullscreen]>\n  <ion-card>\n    <ion-card-content>\n      {{dato.body}}\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mostrar-datos/mostrar-datos.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/mostrar-datos/mostrar-datos.module.ts ***!
  \*******************************************************/
/*! exports provided: MostrarDatosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostrarDatosPageModule", function() { return MostrarDatosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mostrar_datos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mostrar-datos.page */ "./src/app/mostrar-datos/mostrar-datos.page.ts");







const routes = [
    {
        path: '',
        component: _mostrar_datos_page__WEBPACK_IMPORTED_MODULE_6__["MostrarDatosPage"]
    }
];
let MostrarDatosPageModule = class MostrarDatosPageModule {
};
MostrarDatosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mostrar_datos_page__WEBPACK_IMPORTED_MODULE_6__["MostrarDatosPage"]]
    })
], MostrarDatosPageModule);



/***/ }),

/***/ "./src/app/mostrar-datos/mostrar-datos.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/mostrar-datos/mostrar-datos.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vc3RyYXItZGF0b3MvbW9zdHJhci1kYXRvcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mostrar-datos/mostrar-datos.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/mostrar-datos/mostrar-datos.page.ts ***!
  \*****************************************************/
/*! exports provided: MostrarDatosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostrarDatosPage", function() { return MostrarDatosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rest.service */ "./src/app/services/rest.service.ts");




let MostrarDatosPage = class MostrarDatosPage {
    constructor(activateRoute, restService) {
        this.activateRoute = activateRoute;
        this.restService = restService;
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            const idDato = paramMap.get('datoId');
            this.restService.get_Dato(idDato).subscribe(dato => {
                this.dato = dato;
                alert(this.dato.id);
            });
        });
    }
};
MostrarDatosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] }
];
MostrarDatosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mostrar-datos',
        template: __webpack_require__(/*! raw-loader!./mostrar-datos.page.html */ "./node_modules/raw-loader/index.js!./src/app/mostrar-datos/mostrar-datos.page.html"),
        styles: [__webpack_require__(/*! ./mostrar-datos.page.scss */ "./src/app/mostrar-datos/mostrar-datos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]])
], MostrarDatosPage);



/***/ }),

/***/ "./src/app/services/rest.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RestService = class RestService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    }
    get_Datos() {
        return this.httpClient.get(this.baseUrl);
    }
    get_Dato(id) {
        let stringUrl = this.baseUrl + '/' + id;
        alert("----->>>" + stringUrl);
        return this.httpClient.get(stringUrl);
    }
};
RestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RestService);



/***/ })

}]);
//# sourceMappingURL=mostrar-datos-mostrar-datos-module-es2015.js.map