"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 4114
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _components_pages_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/terms-and-conditions/terms-and-conditions.component */ 4052);
/* harmony import */ var _components_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/page-not-found/page-not-found.component */ 3108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);





const routes = [
//{path: '', redirectTo: '/auth/login', pathMatch: 'full'},
{
  path: '',
  redirectTo: '/users',
  pathMatch: 'full'
}, {
  path: 'auth',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(() => (__webpack_require__(/*! ./auth/auth.module */ 841))).then(m => m.AuthModule)
}, {
  path: 'users',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_user_user_module_ts").then(() => (__webpack_require__(/*! ./user/user.module */ 2483))).then(m => m.UserModule)
}, {
  path: 'tyc',
  component: _components_pages_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_1__.TermsAndConditionsComponent
}, {
  path: 'employees',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_employee_employee_module_ts").then(() => (__webpack_require__(/*! ./employee/employee.module */ 8929))).then(m => m.EmployeeModule)
}, {
  path: '**',
  component: _components_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__.PageNotFoundComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/header/header.component */ 5004);



class AppComponent {
  constructor() {
    this.title = 'Brad';
    this.title = 'Ted';
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: false,
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header")(2, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 1
    });
  }
}

/***/ },

/***/ 635
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ 551);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/header/header.component */ 5004);
/* harmony import */ var _components_pages_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/terms-and-conditions/terms-and-conditions.component */ 4052);
/* harmony import */ var _components_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/page-not-found/page-not-found.component */ 3108);
/* harmony import */ var _common_http_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/http-error.interceptor */ 3846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 6124);


//import { NoopAnimationsModule } from '@angular/platform-browser/animations';










class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
        useClass: _common_http_error_interceptor__WEBPACK_IMPORTED_MODULE_10__.HttpErrorInterceptor,
        multi: true
      }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.withXhr)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.withInterceptorsFromDi)())],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent, _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _components_pages_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_8__.TermsAndConditionsComponent, _components_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__.PageNotFoundComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule]
  });
})();

/***/ },

/***/ 3767
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 2389);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/notification.service */ 7473);









class AuthService {
  constructor(httpClient, router, notificationService) {
    this.httpClient = httpClient;
    this.router = router;
    this.notificationService = notificationService;
    this.TOKEN_NAME = 'TOKEN';
    this.AUTH_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.baseUrl + '/api/user';
    this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    //this is not injectable.
    this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService();
  }
  isAuthenticated() {
    const token = localStorage.getItem(this.TOKEN_NAME);
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }
  login(user) {
    return this.httpClient.post(`${this.AUTH_API_URL}/login`, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(res => {
      if (res && res.role == 'ADMIN') {
        this.saveToken(res.token, res.token);
      } else {
        this.notificationService.error('Sólo acceso para administradores.');
        throw new Error('Not Admin');
      }
    }));
  }
  saveToken(token, expiresIn) {
    localStorage.setItem(this.TOKEN_NAME, token);
    //localStorage.setItem('EXPIRES_IN', expiresIn);
    this.token = token;
  }
  logout() {
    this.token = '';
    localStorage.removeItem(this.TOKEN_NAME);
    //localStorage.removeItem('EXPIRES_IN');
    //TODO: this router should be directly on the component. 
    //(due to it's not on the right place when the logout is called from the interceptor).
    this.router.navigateByUrl('/auth/login');
  }
  decode() {
    const token = localStorage.getItem(this.TOKEN_NAME);
    return this.jwtHelper.decodeToken(token);
  }
  getHttpHeader(isAuth) {
    const token = this.getToken();
    if (isAuth && token) {
      return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      });
    }
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
  getToken() {
    if (!this.token) {
      this.token = localStorage.getItem(this.TOKEN_NAME);
    }
    return this.token;
  }
  static {
    this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
      /* @ts-ignore */
      return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 3846
/*!**************************************************!*\
  !*** ./src/app/common/http-error.interceptor.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpErrorInterceptor: () => (/* binding */ HttpErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/services/auth.service */ 3767);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/notification.service */ 7473);





class HttpErrorInterceptor {
  constructor(authService, notificationService) {
    this.authService = authService;
    this.notificationService = notificationService;
  }
  intercept(request, next) {
    //console.log('intercepting:' + request);
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        this.notificationService.error(error.error.message);
      } else {
        // server-side error
        this.performError(error);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(errorMessage);
    }));
  }
  performError(error) {
    switch (error.status) {
      case 404:
        this.notificationService.error('Error 404');
        break;
      case 422:
        //Unprocessable entity.
        console.log(error);
        this.notificationService.error(error.error.errors.message);
        break;
      case 401:
        // Unauthorized.
        this.notificationService.error('No autorizado.');
        this.authService.logout();
        break;
      case 403:
        // Forbidden.
        this.notificationService.error('Acceso restringido.');
        this.authService.logout();
        break;
      default:
        this.notificationService.error('Default error');
        return "default error";
    }
  }
  static {
    this.ɵfac = function HttpErrorInterceptor_Factory(__ngFactoryType__) {
      /* @ts-ignore */
      return new (__ngFactoryType__ || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: HttpErrorInterceptor,
      factory: HttpErrorInterceptor.ɵfac
    });
  }
}

/***/ },

/***/ 5004
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/services/auth.service */ 3767);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6264);





function HeaderComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Usuarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Conditional_7_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Salir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ingresar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class HeaderComponent {
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {}
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  logout() {
    this.authService.logout();
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
      /* @ts-ignore */
      return new (__ngFactoryType__ || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      standalone: false,
      decls: 9,
      vars: 3,
      consts: [["color", "primary"], [1, "fill-remaining-space"], ["mat-button", "", "routerLink", "/tyc"], ["mat-button", "", "routerLink", "/users"], ["mat-button", ""], ["mat-button", "", "routerLink", "/auth/login"], ["mat-button", "", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "GEAPP");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Terminos y condiciones");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](6, HeaderComponent_Conditional_6_Template, 2, 0, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](7, HeaderComponent_Conditional_7_Template, 2, 0, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](8, HeaderComponent_Conditional_8_Template, 2, 0, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.isAuthenticated() ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.isAuthenticated() ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.isAuthenticated() ? 8 : -1);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
      styles: [".header[_ngcontent-%COMP%] {\n  background: #333;\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n}\n\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n\nnav[_ngcontent-%COMP%] {\n  background-color: #40bef7;\n  \n  \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgXG4gIC5oZWFkZXIgYSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGJlZjc7XG4gIC8qY29sb3IxOiAjNDBiZWY3OyovXG4gIC8qY29sb3IyOiAjNzE3ZWQzKi9cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 1
    });
  }
}

/***/ },

/***/ 3108
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageNotFoundComponent: () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);

class PageNotFoundComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function PageNotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PageNotFoundComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      standalone: false,
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pagina no encontrada!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 1
    });
  }
}

/***/ },

/***/ 4052
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/terms-and-conditions/terms-and-conditions.component.ts ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsAndConditionsComponent: () => (/* binding */ TermsAndConditionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);

class TermsAndConditionsComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function TermsAndConditionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TermsAndConditionsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TermsAndConditionsComponent,
      selectors: [["app-terms-and-conditions"]],
      standalone: false,
      decls: 10,
      vars: 0,
      consts: [["href", "mailto:geapp.web@gmail.com"], ["href", "tel:+5492974756985"]],
      template: function TermsAndConditionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Terminos y condiciones");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ante cualquier consulta comunicate con nosotros a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "geapp.web@gmail.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " o al ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "+54 9 2974 75-6985");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 1
    });
  }
}

/***/ },

/***/ 551
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ 6488);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 78);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 6124);

















const MaterialComponents = [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridListModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__.MatCheckboxModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule];
class MaterialModule {
  static {
    this.ɵfac = function MaterialModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MaterialModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
      imports: [MaterialComponents, _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridListModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__.MatCheckboxModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridListModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__.MatCheckboxModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule],
    exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridListModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__.MatCheckboxModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule]
  });
})();

/***/ },

/***/ 7473
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);


class NotificationService {
  constructor(snackBar) {
    this.snackBar = snackBar;
    this.config = {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    };
  }
  error(msg) {
    //this.config['panelClass'] = ['notification','error']
    this.snackBar.open(msg, '', this.config);
  }
  info(msg) {
    this.snackBar.open(msg, '', this.config);
  }
  static {
    this.ɵfac = function NotificationService_Factory(__ngFactoryType__) {
      /* @ts-ignore */
      return new (__ngFactoryType__ || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 5312
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  baseUrl: 'http://api.geapp.com.ar:3000'
};
/*
baseUrl:'http://localhost:3000'
*/
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule, {
  applicationProviders: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.provideZoneChangeDetection)()]
}).catch(err => console.error(err));

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map