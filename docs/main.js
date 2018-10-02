(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./member/member.component */ "./src/app/member/member.component.ts");
/* harmony import */ var _payment_and_billing_payment_and_billing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-and-billing/payment-and-billing.component */ "./src/app/payment-and-billing/payment-and-billing.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'todo', component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"] },
    { path: 'member', component: _member_member_component__WEBPACK_IMPORTED_MODULE_5__["MemberComponent"] },
    { path: 'payment-and-billing', component: _payment_and_billing_payment_and_billing_component__WEBPACK_IMPORTED_MODULE_6__["PaymentAndBillingComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav>\r\n  <router-outlet></router-outlet>\r\n</app-main-nav>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'To Do App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./member/member.component */ "./src/app/member/member.component.ts");
/* harmony import */ var _payment_and_billing_payment_and_billing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payment-and-billing/payment-and-billing.component */ "./src/app/payment-and-billing/payment-and-billing.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _todo_filter_and_search_dialog_todo_filter_and_search_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./todo-filter-and-search-dialog/todo-filter-and-search-dialog.component */ "./src/app/todo-filter-and-search-dialog/todo-filter-and-search-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _category_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./category-filter.pipe */ "./src/app/category-filter.pipe.ts");
/* harmony import */ var _shared_todo_status_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/todo-status.service */ "./src/app/shared/todo-status.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_11__["TodoComponent"],
                _member_member_component__WEBPACK_IMPORTED_MODULE_12__["MemberComponent"],
                _payment_and_billing_payment_and_billing_component__WEBPACK_IMPORTED_MODULE_13__["PaymentAndBillingComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_14__["SettingsComponent"],
                _todo_filter_and_search_dialog_todo_filter_and_search_dialog_component__WEBPACK_IMPORTED_MODULE_15__["TodoFilterAndSearchDialogComponent"],
                _category_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["CategoryFilterPipe"]
            ],
            entryComponents: [
                _todo_filter_and_search_dialog_todo_filter_and_search_dialog_component__WEBPACK_IMPORTED_MODULE_15__["TodoFilterAndSearchDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__["APP_BASE_HREF"], useValue: '/' }, _shared_todo_status_service__WEBPACK_IMPORTED_MODULE_18__["TodoStatusService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category-filter.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/category-filter.pipe.ts ***!
  \*****************************************/
/*! exports provided: CategoryFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFilterPipe", function() { return CategoryFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoryFilterPipe = /** @class */ (function () {
    function CategoryFilterPipe() {
    }
    CategoryFilterPipe.prototype.transform = function (todos, filter) {
        if (!todos || !filter) {
            return todos;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return todos.filter(function (todo) { return todo.category.indexOf(filter.category) !== -1; });
    };
    CategoryFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'argsFilter',
            pure: false
        })
    ], CategoryFilterPipe);
    return CategoryFilterPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".show-case-container {\r\n    background: url(https://raw.githubusercontent.com/ranibb/TamTodo/master/docs/assets/images/spacex-549326-unsplash.jpg) no-repeat;\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    height: calc(100vh - 64px)\r\n}\r\n\r\n.book-now-button {\r\n    width: 170px;\r\n    color: white;\r\n    border:  1px solid white;\r\n    text-transform: uppercase;\r\n    border-radius: 4px;\r\n}\r\n\r\n.show-case-content-1, .show-case-content-3 {\r\n    min-width:170px;\r\n    padding: 40px; \r\n}\r\n\r\n.show-case-content-2 { \r\n    text-align: center\r\n}\r\n\r\n.show-case-content-2 .show-case-content-header {\r\n    max-width: 540px;\r\n    padding: 20px;\r\n}\r\n\r\n.show-case-content-2 .mat-display-1 {\r\n    margin: 0 0 0 -10px;\r\n}\r\n\r\n.photo-credit {\r\n    color: rgba(255, 255, 255, 0.84);\r\n    background: rgba(39, 54, 72, 0.7);\r\n    border-radius: 4px;\r\n    padding: 5px;\r\n}\r\n\r\n.photo-credit a {\r\n    color: #4A90E2;\r\n}\r\n\r\n.mat-display-4 {\r\n    text-transform: uppercase;\r\n    letter-spacing: 10px;\r\n}\r\n\r\n@media (max-width: 1243px) {\r\n    .show-case-container .show-case-content-2 .mat-display-4 {\r\n        font-size: 3.3rem;\r\n        line-height: 1;\r\n\r\n    }\r\n    .show-case-container .show-case-content-2 .mat-display-1 {\r\n        font-size: 1.0rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 1049px) {\r\n    .show-case-container .show-case-content-2 .mat-display-4 {\r\n        font-size: 2.55rem;\r\n        letter-spacing: 5px;\r\n\r\n    }\r\n    .show-case-container .show-case-content-2 .mat-display-1 {\r\n        font-size: 0.7rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 959px) {\r\n    .show-case-container .show-case-content-2 .mat-display-4 {\r\n        font-size: 4rem;\r\n    }\r\n    .show-case-container .show-case-content-2 .mat-display-1 {\r\n        font-size: 1.05rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 399px) {\r\n    .show-case-container .show-case-content-2 .mat-display-4 {\r\n        font-size: 3.3rem;\r\n        letter-spacing: 3px;\r\n    }\r\n    .show-case-container .show-case-content-2 .mat-display-1 {\r\n        font-size: 0.8rem;\r\n        line-height: 1.3;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutAlign=\"space-evenly center\" class=\"show-case-container\">\n\n  <div fxFlexOrder.sm=\"3\" fxFlexOrder.xs=\"3\" fxFlexAlign.sm=\"auto\" fxFlexAlign.xs=\"auto\" fxFlexAlign=\"end\" class=\"show-case-content-1\">\n    <div class=\"photo-credit\">\n        Photo by <a href=\"https://unsplash.com/photos/OHOU-5UVIYQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">SpaceX</a> <br>\n        on <a href=\"https://unsplash.com/search/photos/space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>\n    </div>\n  </div>\n\n  <div fxFlexOrder.sm=\"2\" fxFlexOrder.xs=\"2\" class=\"show-case-content-2\">\n    <div class=\"show-case-content-header\">\n      <h3 class=\"mat-display-1\">Angular, Material, TypeScript, SASS, CSS</h3>\n      <h1 class=\"mat-display-4\">Web App</h1>\n    </div>\n  </div>\n\n  <div fxFlexAlign.sm=\"auto\" fxFlexAlign.xs=\"auto\" fxFlexAlign=\"start\" class=\"show-case-content-3\">\n    <!-- <button class=\"book-now-button\" mat-stroked-button color=\"primary\">\n      Book Now\n    </button> -->\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.mat-drawer:not(.mat-drawer-side) {\n  box-shadow: unset;\n}\n\n.sidenav-close-button {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  margin-right: -12px;\n}\n\n.sidenav-close-button mat-icon {\n  font-size: 14px;\n}\n\n.input-clear-button {\n  width: 256px;\n}"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container [hasBackdrop]=\"(isHandset$ | async) ? true : false\" class=\"sidenav-container\">\r\n  <mat-sidenav \r\n    #drawer\r\n    class=\"sidenav\"\r\n    fixedInViewport=\"true\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"!(isHandset$ | async)\">\r\n    <mat-toolbar color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      \r\n      <div fxLayoutAlign=\"center center\">\r\n        <img src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxp%0D%0AbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOTMuNjQ1cHgiIGhlaWdodD0iOTUuMjAxcHgi%0D%0AIHZpZXdCb3g9IjAgMCA5My42NDUgOTUuMjAxIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA5%0D%0AMy42NDUgOTUuMjAxIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IHg9IjI2MC41IiB5PSI0%0D%0AMDIiIGRpc3BsYXk9Im5vbmUiIHdpZHRoPSIzMzkuNSIgaGVpZ2h0PSIxMDAuNSIvPg0KPGcgaWQ9%0D%0AIkJSQU5EIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0MwMjEyNyIgZD0iTTg2LjU4OCw3MC41MzVM%0D%0ANTUuNSwzOS40NDdsOC40MzgtMC4wMDhjMTkuNzU4LTAuMDIsMjIuNzA3LTEwLjIzMywyMi43MDct%0D%0AMTYuMzE5DQoJCQlDODYuNjQ1LDE1LjMwNiw4MC42OTUsNyw2OS42NjYsN2MtMjYuMTI5LDAtNDYu%0D%0AMzE5LDAuMDA4LTQ2LjMyLDAuMDA4bC03LjAwMy03YzAsMCwyNy4xOTItMC4wMDgsNTMuMzIzLTAu%0D%0AMDA4DQoJCQljMTMuNjcsMCwyMy45NzksOS45MzksMjMuOTc5LDIzLjEyYzAsNC44ODktMS43MTUs%0D%0AMTkuNjc4LTIxLjgxOCwyMi43NTVsMTQuNzkxLDE0Ljc4OUw4Ni41ODgsNzAuNTM1eiIvPg0KCTwv%0D%0AZz4NCgk8Zz4NCgkJPHBvbHlnb24gZmlsbD0iI0MwMjEyNyIgcG9pbnRzPSI5My40NzksOTUuMjAx%0D%0AIDIzLjM1NCwyNS4wNzUgMzMuMjU2LDI1LjA3NyA5My40ODEsODUuMzAyIAkJIi8+DQoJPC9nPg0K%0D%0ACTxnPg0KCQk8cG9seWdvbiBmaWxsPSIjQzAyMTI3IiBwb2ludHM9IjU1LjUzMyw3NC40ODcgMCwx%0D%0AOC45NTUgOS45MDQsMTguOTU4IDU1LjUyOSw2NC41ODQgCQkiLz4NCgk8L2c+DQo8L2c+DQo8L3N2%0D%0AZz4NCg==\" alt=\"Logo!\" height=\"45px;\">\r\n      </div>\r\n\r\n      <div fxFlexAlign=\"start\">\r\n        <button\r\n          class=\"sidenav-close-button\"\r\n          type=\"button\"\r\n          aria-label=\"Toggle sidenav\"\r\n          mat-icon-button\r\n          (click)=\"drawer.toggle()\">\r\n          <mat-icon aria-label=\"Side nav toggle icon\">close</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </mat-toolbar>\r\n    <mat-nav-list (click)=\"onClickClose()\">\r\n      <a mat-list-item routerLink=\"/home\" routerLinkActive=\"active\">\r\n        <mat-icon>home</mat-icon>\r\n        <span>Home</span>\r\n      </a>\r\n      <a mat-list-item routerLink=\"/todo\" routerLinkActive=\"active\">\r\n        <mat-icon>list</mat-icon>\r\n        <span>Todo</span>\r\n      </a>\r\n      <a mat-list-item routerLink=\"/member\" routerLinkActive=\"active\">\r\n        <mat-icon>account_circle</mat-icon>\r\n        <span>Member</span>\r\n      </a>\r\n      <a mat-list-item routerLink=\"/payment-and-billing\" routerLinkActive=\"active\">\r\n        <mat-icon>payment</mat-icon>\r\n        <span>Payment & Billing</span>\r\n      </a>\r\n      <a mat-list-item routerLink=\"/settings\" routerLinkActive=\"active\">\r\n        <mat-icon>settings</mat-icon>\r\n        <span>Settings</span>\r\n      </a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"primaryToolBar\">\r\n      <div>\r\n        <button\r\n          type=\"button\"\r\n          aria-label=\"Toggle sidenav\"\r\n          mat-icon-button\r\n          (click)=\"drawer.toggle()\"\r\n          *ngIf=\"(isHandset$ | async) || (!drawer.opened)\">\r\n          <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n        </button>\r\n      </div>\r\n      <!-- show only in large screens & when route path on todo component -->\r\n      <div *ngIf=\"!(isHandset$ | async) && (router.url === '/todo')\" class=\"primaryToolBar-notHandset\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-select [(value)]=\"selected\" (selectionChange)=todoFilter(selected)>\r\n            <mat-option value=\"All Todos\">All Todos</mat-option>\r\n            <mat-option value=\"Completed\">Completed</mat-option>\r\n            <mat-option value=\"In progress\">In progress</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      \r\n        <mat-form-field appearance=\"outline\" class=\"input-clear-button\" color=\"primary\">\r\n          <input matInput type=\"text\" placeholder=\"Search...\" [(ngModel)]=\"searchKey\" (input)=\"onSearchChange(searchKey)\">\r\n          <button mat-button *ngIf=\"searchKey\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearch()\">\r\n            <mat-icon>close</mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- show only in small screens & when route path on todo component -->\r\n      <div *ngIf=\"(isHandset$ | async) && (router.url === '/todo')\" class=\"primaryToolBar-handset\">\r\n        <button mat-raised-button (click)=\"openDialog()\">Filter & Search</button>\r\n      </div>\r\n    </mat-toolbar>\r\n    <!-- Add Content Here -->\r\n    <ng-content></ng-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_filter_and_search_dialog_todo_filter_and_search_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todo-filter-and-search-dialog/todo-filter-and-search-dialog.component */ "./src/app/todo-filter-and-search-dialog/todo-filter-and-search-dialog.component.ts");
/* harmony import */ var _shared_todo_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/todo-status.service */ "./src/app/shared/todo-status.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver, router, dialog, todoStatusService) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.dialog = dialog;
        this.todoStatusService = todoStatusService;
        this.selected = 'All Todos';
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.selectedFilter = 'All Todos';
        this.searchKey = '';
    }
    MainNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fSdata = this.todoStatusService.getfSdata();
        this.fSdataSubscription = this.todoStatusService.fSdataUpdated.subscribe(function () {
            _this.fSdata = _this.todoStatusService.getfSdata();
            _this.selected = _this.fSdata[0];
            _this.selectedFilter = _this.fSdata[0];
            _this.searchKey = _this.fSdata[1];
        });
    };
    MainNavComponent.prototype.todoFilter = function (selectedFilter) {
        this.selectedFilter = selectedFilter;
        this.fSdata = [this.selectedFilter, this.searchKey];
        this.todoStatusService.todofSdata(this.fSdata);
    };
    MainNavComponent.prototype.onSearchChange = function (searchKey) {
        this.searchKey = searchKey;
        this.fSdata = [this.selectedFilter, this.searchKey];
        this.todoStatusService.todofSdata(this.fSdata);
    };
    MainNavComponent.prototype.clearSearch = function () {
        this.searchKey = '';
        this.fSdata = [this.selectedFilter, this.searchKey];
        this.todoStatusService.todofSdata(this.fSdata);
    };
    MainNavComponent.prototype.onClickClose = function () {
        var _this = this;
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset]) //.observe(['(max-width: 959px)'])
            .subscribe(function (state) {
            if (state.matches) {
                _this.drawer.close();
            }
        });
    };
    MainNavComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_todo_filter_and_search_dialog_todo_filter_and_search_dialog_component__WEBPACK_IMPORTED_MODULE_5__["TodoFilterAndSearchDialogComponent"], {
            width: '260px',
            data: { name: this.name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    MainNavComponent.prototype.ngOnDestroy = function () {
        this.fSdataSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"])
    ], MainNavComponent.prototype, "drawer", void 0);
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _shared_todo_status_service__WEBPACK_IMPORTED_MODULE_6__["TodoStatusService"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/member/member.component.css":
/*!*********************************************!*\
  !*** ./src/app/member/member.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member.component.html":
/*!**********************************************!*\
  !*** ./src/app/member/member.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  member works!\n</p>\n"

/***/ }),

/***/ "./src/app/member/member.component.ts":
/*!********************************************!*\
  !*** ./src/app/member/member.component.ts ***!
  \********************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberComponent = /** @class */ (function () {
    function MemberComponent() {
    }
    MemberComponent.prototype.ngOnInit = function () {
    };
    MemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member',
            template: __webpack_require__(/*! ./member.component.html */ "./src/app/member/member.component.html"),
            styles: [__webpack_require__(/*! ./member.component.css */ "./src/app/member/member.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/mock-todos.ts":
/*!*******************************!*\
  !*** ./src/app/mock-todos.ts ***!
  \*******************************/
/*! exports provided: TODOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODOS", function() { return TODOS; });
var TODOS = [
    { completed: true, description: "Template design on Sketch | Figma | invison", type: "UI/UX", category: "design and development" },
    { completed: true, description: "Convert design into HTML + CSS template", type: "CSS", category: "design and development" },
    { completed: true, description: "Make the template resposnive", type: "CSS", category: "design and development" },
    { completed: true, description: "Make the design compatible as a minimum with IE9", type: "Browsers", category: "design and development" },
    { completed: true, description: "Use SASS to make colors easy to change (skin-able / theme-able )", type: "SASS", category: "design and development" },
    { completed: true, description: "Build on top of Angular and load data from a data source", type: "TypeScript", category: "design and development" },
    { completed: true, description: "Use Angular Material", type: "Angular", category: "design and development" },
    { completed: true, description: "Implement the filter and search functionality in both desktop and mobile", type: "Angular", category: "design and development" },
    { completed: false, description: "Develop a RESTfull APIs for CRUD operations with mongoDB or Firebase", type: "", category: "design and development" },
    { completed: true, description: "Use Flexbox | Angular Flex-Layout", type: "CSS", category: "design and development" },
    { completed: true, description: "Sidemenu's initial state is open with the ability to close it.", type: "", category: "improvment" },
    { completed: true, description: "The ability to mark tasks as completed", type: "", category: "improvment" },
    { completed: false, description: "Ability to rearrange tasks and groups", type: "", category: "improvment" },
    { completed: true, description: "Compatibility with touch devices", type: "", category: "improvment" },
    { completed: true, description: "Display Filter & serach elements within a dialod for handset devices", type: "", category: "improvment" },
    { completed: true, description: "Avoid rendering dummy divs with *ngIF after iterating with *ngFor by using a pipe in the *ngFor directive to filter lists based on filter arguments", type: "", category: "improvment" },
    { completed: false, description: "Deliver the final project in a git repository using git-flow", type: "Bash", category: "other" },
    { completed: true, description: "Add your own touches in the places you see fit with the reason why they are added.", type: "", category: "other" },
    { completed: false, description: "Build up a tutorial | dcoumentation for using the App", type: "Github", category: "other" }
];


/***/ }),

/***/ "./src/app/payment-and-billing/payment-and-billing.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/payment-and-billing/payment-and-billing.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment-and-billing/payment-and-billing.component.html":
/*!************************************************************************!*\
  !*** ./src/app/payment-and-billing/payment-and-billing.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  payment-and-billing works!\n</p>\n"

/***/ }),

/***/ "./src/app/payment-and-billing/payment-and-billing.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/payment-and-billing/payment-and-billing.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaymentAndBillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentAndBillingComponent", function() { return PaymentAndBillingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentAndBillingComponent = /** @class */ (function () {
    function PaymentAndBillingComponent() {
    }
    PaymentAndBillingComponent.prototype.ngOnInit = function () {
    };
    PaymentAndBillingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-and-billing',
            template: __webpack_require__(/*! ./payment-and-billing.component.html */ "./src/app/payment-and-billing/payment-and-billing.component.html"),
            styles: [__webpack_require__(/*! ./payment-and-billing.component.css */ "./src/app/payment-and-billing/payment-and-billing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentAndBillingComponent);
    return PaymentAndBillingComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/todo-status.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/todo-status.service.ts ***!
  \***********************************************/
/*! exports provided: TodoStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoStatusService", function() { return TodoStatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoStatusService = /** @class */ (function () {
    function TodoStatusService() {
        this.selectedFilter = "All Todos";
        this.searchKey = '';
        this.fSdata = [this.selectedFilter, this.searchKey];
        this.fSdataUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    TodoStatusService.prototype.todofSdata = function (fSdata) {
        this.fSdata = fSdata;
        this.fSdataUpdated.next();
    };
    TodoStatusService.prototype.getfSdata = function () {
        return this.fSdata;
    };
    TodoStatusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TodoStatusService);
    return TodoStatusService;
}());



/***/ }),

/***/ "./src/app/todo-filter-and-search-dialog/todo-filter-and-search-dialog.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/todo-filter-and-search-dialog/todo-filter-and-search-dialog.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-clear-button {\r\n    width: 200px;\r\n}"

/***/ }),

/***/ "./src/app/todo-filter-and-search-dialog/todo-filter-and-search-dialog.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/todo-filter-and-search-dialog/todo-filter-and-search-dialog.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toDoFilterAndSearch\">\n\n  <div mat-dialog-content>\n\n    <mat-form-field appearance=\"outline\">\n      <mat-select [(value)]=\"selected\" (selectionChange)=todoFilter(selected)>\n        <mat-option value=\"All Todos\">All Todos</mat-option>\n        <mat-option value=\"Completed\">Completed</mat-option>\n        <mat-option value=\"In progress\">In progress</mat-option>\n      </mat-select>\n    </mat-form-field>\n  \n    <mat-form-field appearance=\"outline\" class=\"input-clear-button\" color=\"primary\">\n      <input matInput type=\"text\" placeholder=\"Search...\" [(ngModel)]=\"searchKey\" (input)=\"onSearchChange(searchKey)\">\n      <button mat-button *ngIf=\"searchKey\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearch()\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n\n  </div>\n\n  <div mat-dialog-actions>\n    <!-- <button mat-button (click)=\"onNoClick()\">No Thanks</button> -->\n    <button mat-button [mat-dialog-close]=\"data.name\" cdkFocusInitial>Ok</button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/todo-filter-and-search-dialog/todo-filter-and-search-dialog.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/todo-filter-and-search-dialog/todo-filter-and-search-dialog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TodoFilterAndSearchDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFilterAndSearchDialogComponent", function() { return TodoFilterAndSearchDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_todo_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/todo-status.service */ "./src/app/shared/todo-status.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TodoFilterAndSearchDialogComponent = /** @class */ (function () {
    function TodoFilterAndSearchDialogComponent(dialogRef, data, todoStatusService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.todoStatusService = todoStatusService;
        this.selectedFilter = 'All Todos';
        this.searchKey = '';
    }
    TodoFilterAndSearchDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    TodoFilterAndSearchDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fSdata = this.todoStatusService.getfSdata();
        this.fSdataSubscription = this.todoStatusService.fSdataUpdated.subscribe(function () {
            _this.fSdata = _this.todoStatusService.getfSdata();
        });
        this.selected = this.fSdata[0];
        this.selectedFilter = this.fSdata[0];
        this.searchKey = this.fSdata[1];
    };
    TodoFilterAndSearchDialogComponent.prototype.todoFilter = function (selectedFilter) {
        this.selectedFilter = selectedFilter;
        this.fSdata = [this.selectedFilter, this.searchKey];
        this.todoStatusService.todofSdata(this.fSdata);
    };
    TodoFilterAndSearchDialogComponent.prototype.onSearchChange = function (searchKey) {
        this.searchKey = searchKey;
        this.fSdata = [this.selectedFilter, this.searchKey];
        this.todoStatusService.todofSdata(this.fSdata);
    };
    TodoFilterAndSearchDialogComponent.prototype.clearSearch = function () {
        this.searchKey = '';
        this.fSdata = [this.selectedFilter, this.searchKey];
        this.todoStatusService.todofSdata(this.fSdata);
    };
    TodoFilterAndSearchDialogComponent.prototype.ngOnDestroy = function () {
        this.fSdataSubscription.unsubscribe();
    };
    TodoFilterAndSearchDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-filter-and-search-dialog',
            template: __webpack_require__(/*! ./todo-filter-and-search-dialog.component.html */ "./src/app/todo-filter-and-search-dialog/todo-filter-and-search-dialog.component.html"),
            styles: [__webpack_require__(/*! ./todo-filter-and-search-dialog.component.css */ "./src/app/todo-filter-and-search-dialog/todo-filter-and-search-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _shared_todo_status_service__WEBPACK_IMPORTED_MODULE_2__["TodoStatusService"]])
    ], TodoFilterAndSearchDialogComponent);
    return TodoFilterAndSearchDialogComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-container {\r\n    padding: 16px;\r\n}\r\n.tasksCategory:not(:first-child) {\r\n    margin-top: 32px;\r\n}\r\n.tasksCategory:first-child {\r\n    margin-top: 16px;\r\n}\r\n.taskType {\r\n    font-size: 13px;\r\n    background: #E0E0E0;\r\n    padding: 9px;\r\n    border-radius: 100px;\r\n}\r\n.completed {\r\n    text-decoration: line-through;\r\n}\r\n@media (max-width: 686px) {\r\n    .mat-list-option {\r\n        height:90px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\" stretch\" class=\"todo-container\">\r\n  <div class=\"tasksCategory\">\r\n    <h2 class=\"mat-h2\">Design & Development</h2>\r\n    <mat-card>\r\n      <mat-selection-list>\r\n        <div *ngFor=\"let todo of todos | argsFilter:dDFilter\">\r\n          <mat-list-option (click)=\"onSelect(todo)\" checkboxPosition=\"before\"\r\n            [selected]=\"todo.completed\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n              <div [class.completed]=\"todo.completed\">{{todo.description}}</div>\r\n              <div [class.taskType]=\"todo.type\">{{todo.type}}</div>\r\n            </div>\r\n          </mat-list-option>\r\n        </div>\r\n      </mat-selection-list>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"tasksCategory\">\r\n    <h2 class=\"mat-h2\">Improvments</h2>\r\n    <mat-card>\r\n      <mat-selection-list>\r\n        <div *ngFor=\"let todo of todos | argsFilter:improvmentFilter\">\r\n          <mat-list-option (click)=\"onSelect(todo)\" checkboxPosition=\"before\"\r\n            [selected]=\"todo.completed\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n              <div [class.completed]=\"todo.completed\">{{todo.description}}</div>\r\n              <div [class.taskType]=\"todo.type\">{{todo.type}}</div>\r\n            </div>\r\n          </mat-list-option>\r\n        </div>\r\n      </mat-selection-list>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"tasksCategory\">\r\n    <h2 class=\"mat-h2\">Other</h2>\r\n    <mat-card>\r\n      <mat-selection-list>\r\n        <div *ngFor=\"let todo of todos | argsFilter:otherFilter\">\r\n          <mat-list-option (click)=\"onSelect(todo)\" checkboxPosition=\"before\"\r\n            [selected]=\"todo.completed\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n              <div [class.completed]=\"todo.completed\">{{todo.description}}</div>\r\n              <div [class.taskType]=\"todo.type\">{{todo.type}}</div>\r\n            </div>\r\n          </mat-list-option>\r\n        </div>\r\n      </mat-selection-list>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-todos */ "./src/app/mock-todos.ts");
/* harmony import */ var _shared_todo_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/todo-status.service */ "./src/app/shared/todo-status.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoStatusService) {
        this.todoStatusService = todoStatusService;
        // Filter arguments
        this.dDFilter = { category: 'design and development' };
        this.improvmentFilter = { category: 'improvment' };
        this.otherFilter = { category: 'other' };
        this.todos = _mock_todos__WEBPACK_IMPORTED_MODULE_1__["TODOS"];
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fSdata = this.todoStatusService.getfSdata();
        this.fSdataSubscription = this.todoStatusService.fSdataUpdated.subscribe(function () {
            _this.fSdata = _this.todoStatusService.getfSdata();
            _this.filterItem();
        });
        this.filterItem();
    };
    TodoComponent.prototype.filterItem = function () {
        var _this = this;
        console.log(this.fSdata);
        if ((this.fSdata[0] == "All Todos") && (!this.fSdata[1])) {
            this.todos = _mock_todos__WEBPACK_IMPORTED_MODULE_1__["TODOS"];
        }
        else if ((this.fSdata[0] == "Completed") && ((this.fSdata[1]) || (!this.fSdata[1]))) {
            this.todos = _mock_todos__WEBPACK_IMPORTED_MODULE_1__["TODOS"];
            this.todos = this.todos.filter(function (todo) { return ((todo.completed == true) && (todo.description.toLocaleLowerCase().indexOf(_this.fSdata[1].toLocaleLowerCase()) !== -1)); });
        }
        else if ((this.fSdata[0] == "In progress") && ((this.fSdata[1]) || (!this.fSdata[1]))) {
            this.todos = _mock_todos__WEBPACK_IMPORTED_MODULE_1__["TODOS"];
            this.todos = this.todos.filter(function (todo) { return ((todo.completed == false) && (todo.description.toLocaleLowerCase().indexOf(_this.fSdata[1].toLocaleLowerCase()) !== -1)); });
        }
        else if (((this.fSdata[1]))) {
            this.todos = _mock_todos__WEBPACK_IMPORTED_MODULE_1__["TODOS"];
            this.todos = this.todos.filter(function (todo) { return ((todo.description.toLocaleLowerCase().indexOf(_this.fSdata[1].toLocaleLowerCase()) !== -1)); });
        }
    };
    TodoComponent.prototype.onSelect = function (todo) {
        this.selectedTodo = todo;
        if (this.selectedTodo.completed == false) {
            this.selectedTodo.completed = true;
        }
        else if (this.selectedTodo.completed == true) {
            this.selectedTodo.completed = false;
        }
        console.log(this.selectedTodo);
    };
    TodoComponent.prototype.ngOnDestroy = function () {
        this.fSdataSubscription.unsubscribe();
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_todo_status_service__WEBPACK_IMPORTED_MODULE_2__["TodoStatusService"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rani Abu Sultan\Desktop\tam-todo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map