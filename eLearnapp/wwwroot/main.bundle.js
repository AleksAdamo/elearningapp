webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kurse_kurs_detail_kurs_detail_component__ = __webpack_require__("../../../../../src/app/kurse/kurs-detail/kurs-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__kurse_add_kurs_add_kurs_component__ = __webpack_require__("../../../../../src/app/kurse/add-kurs/add-kurs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//wohin möchte ich navigieren?



//routen definieren
var routes = [
    //Zu jeder Route die ich routen möchte vergebe ich einen Pfad und eine Komponente
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'kurs/add', component: __WEBPACK_IMPORTED_MODULE_4__kurse_add_kurs_add_kurs_component__["a" /* AddKursComponent */] },
    { path: 'kurs/:kursID', component: __WEBPACK_IMPORTED_MODULE_3__kurse_kurs_detail_kurs_detail_component__["a" /* KursDetailComponent */] }
];
//Modul konfigurieren
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.toolbar-box {\r\n    color: black;\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<mat-toolbar class=\"toolbar-box\" color=\"primary\">\r\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n        <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item>\r\n            <mat-icon>assignment</mat-icon>\r\n            <span>Meine Kurse</span>\r\n        </button>\r\n        <button mat-menu-item>\r\n            <mat-icon>settings</mat-icon>\r\n            <span>Einstellungen</span>\r\n        </button>\r\n    </mat-menu>\r\n    {{title}}\r\n</mat-toolbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Meine Lernapp';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__kurse_kurs_detail_kurs_detail_component__ = __webpack_require__("../../../../../src/app/kurse/kurs-detail/kurs-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__kurse_service__ = __webpack_require__("../../../../../src/app/kurse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__delete_dialog_component__ = __webpack_require__("../../../../../src/app/delete-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__kurse_add_kurs_add_kurs_component__ = __webpack_require__("../../../../../src/app/kurse/add-kurs/add-kurs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //Um Eintr�ge �ndern zu k�nnen









 //Das Modul wird hier referenziert



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__kurse_kurs_detail_kurs_detail_component__["a" /* KursDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__delete_dialog_component__["a" /* DeleteDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__kurse_add_kurs_add_kurs_component__["a" /* AddKursComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_14__delete_dialog_component__["a" /* DeleteDialogComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatMenuModule */]
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_13__kurse_service__["a" /* KurseService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Eintrag löschen</h2>\r\n<mat-dialog-content>Möchten Sie den Eintrag wirklich löschen?</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <button mat-button mat-dialog-close>Nein</button>\r\n    <button mat-button [mat-dialog-close]=\"true\">Ja</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/delete-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteDialogComponent = (function () {
    function DeleteDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DeleteDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'delete-dialog',
            template: __webpack_require__("../../../../../src/app/delete-dialog.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */]])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kurse.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KurseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Aufgabe: Komplette Kommunikation zur API (Backend) kapseln
var KurseService = (function () {
    //Ein fertiges HttpModul-Objekt hereinbekommen
    //private legt automatisch ein Feld an
    function KurseService(http) {
        this.http = http;
    }
    KurseService.prototype.getKategorien = function () {
        return this.http.get('api/kategorien')
            .toPromise() //ich ruf was ab, dann ist fertig und da und kann nicht geändert werden
            .then(function (r) { return r.json(); });
    };
    KurseService.prototype.getKurs = function (kursID) {
        return this.http.get("api/kurse/" + kursID) //backtape weil wir ein TemplateString benutzen
            .toPromise()
            .then(function (r) { return r.json(); });
    };
    KurseService.prototype.saveKurs = function (kurs) {
        if (kurs.kursID) {
            return this.http.put("api/kurse/" + kurs.kursID, kurs) //backtape weil wir ein TemplateString benutzen
                .toPromise()
                .then(function (r) { return r.json(); });
        }
        else {
            return this.http.post('api/kurse', kurs)
                .toPromise()
                .then(function (r) { return r.json(); }); //Antwort verarbeiten: Json des Bodys parsen und in Kurs casten
        }
    };
    KurseService.prototype.deleteKurs = function (kursID) {
        return this.http.delete("api/kurse/" + kursID)
            .toPromise()
            .then(function () { return null; });
    };
    KurseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])() //damit wir die klasse injizieren können
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], KurseService);
    return KurseService;
}());



/***/ }),

/***/ "../../../../../src/app/kurse/add-kurs/add-kurs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".kurs-form {\r\n    width: 500px;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n    color: black;\r\n}\r\n\r\n.select-fix {\r\n    margin: 30px, 0px, 10px, 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kurse/add-kurs/add-kurs.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"!kategorien\"></mat-spinner>\r\n<form *ngIf=\"kategorien\" class=\"kurs-form\">\r\n    <mat-form-field class=\"full-widht\">\r\n        <input matInput placeholder=\"name\" [(ngModel)]=\"kurs.name\" maxlength=\"100\" name=\"name\" />\r\n        <mat-hint align=\"end\">{{kurs.name.length}} / 100</mat-hint>\r\n    </mat-form-field>\r\n    <!--<mat-form-field class=\"full-widht\">\r\n        <textarea matInput placeholder=\"Beschreibung\" [(ngModel)]=\"kurs.beschreibung\" maxlength=\"250\" name=\"beschreibung\"></textarea>\r\n        <mat-hint align=\"end\">/ 250</mat-hint>\r\n    </mat-form-field> -->\r\n    <mat-form-field>\r\n        <mat-select class=\"full-widht select-fix\" placeholder=\"Kategorie\" [(ngModel)]=\"kurs.kategorieID\" name=\"kategorie\">\r\n            <mat-option *ngFor=\"let kategorie of kategorien\" [value]=\"kategorie.kategorieID\">{{kategorie.kategorieID}}</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <div>\r\n        <button mat-raised-button color=\"primary\" (click)=\"save()\">speichern</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/kurse/add-kurs/add-kurs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddKursComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kurse_service__ = __webpack_require__("../../../../../src/app/kurse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__kurs__ = __webpack_require__("../../../../../src/app/kurse/kurs.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddKursComponent = (function () {
    function AddKursComponent(kurseService, router) {
        this.kurseService = kurseService;
        this.router = router;
        this.kurs = new __WEBPACK_IMPORTED_MODULE_4__kurs__["a" /* Kurs */]();
    }
    AddKursComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kurseService.getKategorien().then(function (kategorien) { return _this.kategorien = kategorien; });
    };
    AddKursComponent.prototype.save = function () {
        var _this = this;
        this.kurseService.saveKurs(this.kurs).then(function () { return _this.router.navigate(['/']); });
    };
    AddKursComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-kurs',
            template: __webpack_require__("../../../../../src/app/kurse/add-kurs/add-kurs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kurse/add-kurs/add-kurs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__kurse_service__["a" /* KurseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AddKursComponent);
    return AddKursComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kurse/kurs-detail/kurs-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".kurs-form {\r\n    width: 500px;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n    color: black;\r\n}\r\n\r\n.select-fix {\r\n    margin: 30px, 0px, 10px, 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kurse/kurs-detail/kurs-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"!kurs || !kategorien\"></mat-spinner>\r\n<form *ngIf=\"kurs && kategorien\" class=\"kurs-form\">\r\n    <mat-form-field class=\"full-widht\">\r\n        <input matInput placeholder=\"name\" [(ngModel)]=\"kurs.name\" maxlength=\"100\" name=\"name\" />\r\n        <mat-hint align=\"right\">{{kurs.name.length}} / 100</mat-hint>\r\n    </mat-form-field>\r\n    <!--<mat-form-field class=\"full-widht\">\r\n        <textarea matInput placeholder=\"Beschreibung\" [(ngModel)]=\"kurs.beschreibung\" maxlength=\"250\" name=\"beschreibung\"></textarea>\r\n        <mat-hint align=\"end\">/ 250</mat-hint>\r\n    </mat-form-field> -->\r\n    <mat-form-field>\r\n        <mat-select class=\"full-widht select-fix\" placeholder=\"Kategorie\" [(ngModel)]=\"kurs.kategorieID\" name=\"kategorie\">\r\n            <mat-option *ngFor=\"let kategorie of kategorien\" [value]=\"kategorie.kategorieID\">{{kategorie.kategorieID}}</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <div>\r\n        <button mat-raised-button color=\"primary\" (click)=\"save()\">speichern</button>\r\n        <button mat-raised-button color=\"warn\" (click)=\"delete()\">delete</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/kurse/kurs-detail/kurs-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KursDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__kurse_service__ = __webpack_require__("../../../../../src/app/kurse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delete_dialog_component__ = __webpack_require__("../../../../../src/app/delete-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //um die in der URL �bergebene ID abzurufen



var KursDetailComponent = (function () {
    function KursDetailComponent(route, kurseService, router, dialog) {
        this.route = route;
        this.kurseService = kurseService;
        this.router = router;
        this.dialog = dialog;
    }
    KursDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kurseService.getKategorien().then(function (kategorien) { return _this.kategorien = kategorien; });
        this.route.paramMap
            .switchMap(function (params) { return _this.kurseService.getKurs(+params.get('kursID')); })
            .subscribe(function (kurs) { return _this.kurs = kurs; }); //den Kurs den ich zur�ckbekommen habe auf den aktuellen Kurs setzen
    };
    KursDetailComponent.prototype.save = function () {
        var _this = this;
        this.kurseService.saveKurs(this.kurs).then(function () { return _this.router.navigate(['/']); }); //navigiert anschlie�end auf die Startseite
    };
    KursDetailComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__delete_dialog_component__["a" /* DeleteDialogComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.kurseService.deleteKurs(_this.kurs.kursID).then(function () { return _this.router.navigate(['/']); });
            }
        });
    };
    KursDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-kurs-detail',
            template: __webpack_require__("../../../../../src/app/kurse/kurs-detail/kurs-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/kurse/kurs-detail/kurs-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__kurse_service__["a" /* KurseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]])
    ], KursDetailComponent);
    return KursDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/kurse/kurs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kurs; });
var Kurs = (function () {
    function Kurs() {
        this.name = "";
    }
    return Kurs;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-line {\r\n    color: black;\r\n}\r\n\r\n.mat-divider {\r\n    border-color: hotpink;\r\n}\r\n\r\n.add-button {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Kursübersicht</h2>\r\n<mat-spinner *ngIf=\"!kategorien\"></mat-spinner>\r\n<mat-list *ngIf=\"kategorien\">\r\n    <ng-container *ngFor=\"let kategorie of kategorien\"> <!--Ngcontainer = etwas wiederholen ohne äußeres element-->\r\n        <h3 my-subheader>\r\n            {{kategorie.name}}\r\n        </h3>\r\n        <mat-list-item *ngFor=\"let kurs of kategorie.kurse\">\r\n            <h4 mat-line (click)=\"goToKurs(kurs)\">{{kurs.kursID}} - {{kurs.name}}</h4>\r\n            <div mat-line>\r\n                <div fxLayout=\"row\">\r\n                    <div fxFlex=\"80\">{{kurs.beschreibung}}</div>\r\n                    <div fxFlex=\"20\"><i class=\"material-icons\">error</i></div>\r\n                </div>\r\n            </div>\r\n        </mat-list-item>\r\n        <mat-divider></mat-divider>\r\n    </ng-container>\r\n</mat-list>\r\n<span class=\"add-button\">\r\n    <button mat-fab (click)=\"addKurs()\">\r\n        <mat-icon>add</mat-icon>\r\n    </button>\r\n</span>"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kurse_service__ = __webpack_require__("../../../../../src/app/kurse.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
 //OnInit = Lebenszyklus event


var MenuComponent = (function () {
    //KurseService injizieren
    function MenuComponent(kurseService, router) {
        this.kurseService = kurseService;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kurseService.getKategorien().then(function (kategorien) { return _this.kategorien = kategorien; });
    };
    MenuComponent.prototype.goToKurs = function (kurs) {
        this.router.navigate(['/kurs', kurs.kursID]);
    };
    MenuComponent.prototype.addKurs = function () {
        this.router.navigate(['/kurs/add']);
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kurs-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__kurse_service__["a" /* KurseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__kurse_service__["a" /* KurseService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map