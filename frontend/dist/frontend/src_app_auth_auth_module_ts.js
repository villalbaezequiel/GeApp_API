"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 600
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoutingModule: () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 3592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);




//import { RegisterComponent } from './components/register/register.component';
const routes = [{
  path: '',
  redirectTo: 'login'
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}
//,{path: 'register', component: RegisterComponent},
];
class AuthRoutingModule {
  static {
    this.ɵfac = function AuthRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AuthRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 841
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ 600);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ 2196);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ 3592);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material/material.module */ 551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);








//import { AuthService } from '../services/auth.service';
class AuthModule {
  static {
    this.ɵfac = function AuthModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      providers: [(0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.withXhr)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.withInterceptorsFromDi)())],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__.AuthRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__.AuthRoutingModule]
  });
})();

/***/ },

/***/ 3592
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 3767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 423);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);








function LoginComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "DNI o contrase\u00F1a incorrecta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(authService, router, fb) {
    this.authService = authService;
    this.router = router;
    this.fb = fb;
  }
  myValidator(form) {
    return true;
  }
  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   nationalId: new FormControl('', Validators.required),
    //   password: new FormControl('', [Validators.required, Validators.minLength(4)])
    // }, {validator: this.myValidator});
    this.loginForm = this.fb.group({
      nationalId: '',
      password: ''
    }, {
      validator: this.myValidator
    });
    if (this.authService.isAuthenticated()) {
      console.log('User logged. Redirecting to /');
      this.router.navigateByUrl('/');
    }
  }
  onSubmit() {
    //console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(user => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Not right privileges: ' + error);
    });
  }
  onLogin(form) {
    //console.log('Login', form.value);
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      /* @ts-ignore */
      return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: false,
      decls: 13,
      vars: 3,
      consts: [[1, "form-wraper"], [1, "form-container", "card"], [1, "form-body"], [1, "form-flex-container", 3, "ngSubmit", "formGroup"], ["hideRequiredMarker", "true"], ["formControlName", "nationalId", "placeholder", "DNI", "type", "text", "matInput", "", "required", ""], ["formControlName", "password", "placeholder", "Contrase\u00F1a", "type", "password", "matInput", "", "required", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn", 3, "disabled"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4)(5, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](8, LoginComponent_Conditional_8_Template, 2, 0, "mat-error");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7)(10, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "input");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Ingresar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]( false ? 0 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
      styles: [".form-wraper[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 2%;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: auto;\n  display: block;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.form-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.form-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-flex-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-flex-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.form-flex-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 1% !important;\n  margin: 15px 0px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n@media (min-width: 768px) and (max-width: 1024px) {\n  .form-container[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: auto;\n    display: block;\n    background: rgb(253, 253, 253);\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n\n\n\n\n\n\n\n\n\n@media (min-width: 481px) and (max-width: 767px) {\n  .form-container[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: auto;\n    display: block;\n    background: rgb(253, 253, 253);\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n\n\n\n\n\n@media (min-width: 320px) and (max-width: 480px) {\n  .form-container[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: auto;\n    display: block;\n    background: rgb(253, 253, 253);\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx3RUFBQTtFQUNBLHFEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTs7O0NBQUE7QUFTQTs7O0NBQUE7QUFTQTs7O0NBQUE7QUFLQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsOEJBQUE7RUFWSjtFQVlBO0lBQ0ksY0FBQTtFQVZKO0FBQ0Y7QUFhQTs7O0NBQUE7QUFTQTs7OztFQUFBO0FBS0E7RUFDRTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLDhCQUFBO0VBaEJKO0VBa0JBO0lBQ0ksY0FBQTtFQWhCSjtBQUNGO0FBbUJBOzs7O0NBQUE7QUFLQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsOEJBQUE7RUFqQko7RUFtQkE7SUFDSSxjQUFBO0VBakJKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS13cmFwZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLmZvcm0tY29udGFpbmVye1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbn1cblxuLmZvcm0tYm9keXtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLmZvcm0tZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybS1mbGV4LWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZmxleC1jb250YWluZXIgZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWZsZXgtY29udGFpbmVyIGZvcm0gPiAqIHtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmJ0bntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDE1cHggMHB4O1xufVxuXG4vKlxuIyNEZXZpY2UgPSBEZXNrdG9wc1xuIyNTY3JlZW4gPSAxMjgxcHggdG8gaGlnaGVyIHJlc29sdXRpb24gZGVza3RvcHNcbiovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHtcblxufVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBMYXB0b3BzLCBEZXNrdG9wc1xuICAjI1NjcmVlbiA9IEIvdyAxMDI1cHggdG8gMTI4MHB4XG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG5cbn0gXG5cbi8qIFxuICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChwb3J0cmFpdClcbiAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4XG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmZvcm0tY29udGFpbmVye1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogcmdiKDI1MywgMjUzLCAyNTMpO1xuICB9XG4gIC5idG57XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAobGFuZHNjYXBlKVxuICAjI1NjcmVlbiA9IEIvdyA3NjhweCB0byAxMDI0cHhcbiovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbn0gXG5cbi8qIFxuICAjI0RldmljZSA9IExvdyBSZXNvbHV0aW9uIFRhYmxldHMsIE1vYmlsZXMgKExhbmRzY2FwZSlcbiAgIyNTY3JlZW4gPSBCL3cgNDgxcHggdG8gNzY3cHhcblxuICovXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1jb250YWluZXJ7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjUzLCAyNTMsIDI1Myk7XG4gIH1cbiAgLmJ0bntcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59IFxuXG4vKiBcbiAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcbiAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcblxuKi9cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5mb3JtLWNvbnRhaW5lcntcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNTMsIDI1MywgMjUzKTtcbiAgfVxuICAuYnRue1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 1
    });
  }
}

/***/ },

/***/ 2196
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);

class RegisterComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegisterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      standalone: false,
      decls: 2,
      vars: 0,
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 1
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map