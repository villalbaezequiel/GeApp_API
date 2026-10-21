"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_user_user_module_ts"],{

/***/ 3303
/*!*****************************************************!*\
  !*** ./src/app/auth/services/auth-guard.service.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuardService: () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 3767);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ 7473);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3305);




class AuthGuardService {
  constructor(auth, notificationService, router) {
    this.auth = auth;
    this.notificationService = notificationService;
    this.router = router;
  }
  canActivate(route) {
    // this will be passed from the route config on the data property
    //console.log('AUTH GUARD-CanActivateW/Role: isAuthcated?:'+this.auth.isAuthenticated() + " / Role:"+tokenPayload.role + " expected:"+expectedRole ); 
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    const expectedRole = route.data.expectedRole;
    if (this.auth.decode().role !== expectedRole) {
      this.notificationService.error('No tiene rol para ver esta página.');
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
  static {
    this.ɵfac = function AuthGuardService_Factory(__ngFactoryType__) {
      /* @ts-ignore */
      return new (__ngFactoryType__ || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 7235
/*!**********************************************************************!*\
  !*** ./src/app/user/components/user-detail/user-detail.component.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserDetailComponent: () => (/* binding */ UserDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ 2735);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification.service */ 7473);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ 6488);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 423);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 3840);













class UserDetailComponent {
  constructor(route, router, userService, notificationService
  // private location:Location,
  , dialogRef) {
    this.route = route;
    this.router = router;
    this.userService = userService;
    this.notificationService = notificationService;
    this.dialogRef = dialogRef;
    this.hide = true;
  }
  ngOnInit() {
    /*const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => this.user = user);*/
  }
  onSubmit() {
    //TODO: No se está refrescando los elementos en la lista cuando se edita un usuario.
    this.userService.editUser(this.userService.form.value).subscribe(msg => {
      this.notificationService.info(msg.status);
      this.onClose();
    });
  }
  onClear() {
    this.userService.form.reset();
    this.userService.initFormGroup();
  }
  onClose() {
    this.onClear();
    this.dialogRef.close();
  }
  static {
    this.ɵfac = function UserDetailComponent_Factory(__ngFactoryType__) {
      /* @ts-ignore */
      return new (__ngFactoryType__ || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserDetailComponent,
      selectors: [["app-user-detail"]],
      standalone: false,
      decls: 35,
      vars: 3,
      consts: [[1, "fill-remaining-space"], ["mat-stroked-button", "", "tabIndex", "-1", 1, "btn-dialog-close", 3, "click"], [1, "normal-form", 3, "ngSubmit", "formGroup"], ["cols", "2", "rowHeight", "300px"], [1, "controls-container"], ["type", "hidden", "formControlName", "id"], ["formControlName", "nationalId", "placeholder", "DNI", "matInput", ""], ["formControlName", "first", "placeholder", "Nombre", "matInput", ""], ["formControlName", "last", "placeholder", "Apellido", "matInput", ""], ["formControlName", "email", "placeholder", "Correo", "matInput", ""], ["formControlName", "phone", "placeholder", "Tel\u00E9fono", "matInput", ""], ["formControlName", "role", "placeholder", "Rol", "matInput", ""], ["formControlName", "password", "placeholder", "Nueva contrase\u00F1a", "type", "text", "matInput", ""], [1, "add-bottom-padding"], ["formControlName", "approved", "color", "primary"], [1, "button-row"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]],
      template: function UserDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "mat-toolbar")(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_Template_button_click_5_listener() {
            return ctx.onClose();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "clear");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserDetailComponent_Template_form_ngSubmit_8_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-list", 3)(10, "mat-grid-tile")(11, "div", 4)(12, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field")(14, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field")(16, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field")(18, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field")(20, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-grid-tile")(22, "div", 4)(23, "mat-form-field")(24, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field")(26, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field")(28, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13)(30, "mat-checkbox", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Habilitado");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15)(33, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Guardar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userService.form.controls["id"].value ? "Editar usuario" : "Crear usuario");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userService.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.userService.form.invalid);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__.MatGridTile, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 1
    });
  }
}

/***/ },

/***/ 6067
/*!********************************************************************************!*\
  !*** ./src/app/user/components/user-list-filter/user-list-filter.component.ts ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserListFilterComponent: () => (/* binding */ UserListFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);



class UserListFilterComponent {
  constructor() {
    this.filterUsers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.filterText = '';
  }
  ngOnInit() {}
  onSubmit() {
    this.filterText = this.filterText.trim();
    this.filterUsers.emit(this.filterText);
  }
  static {
    this.ɵfac = function UserListFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserListFilterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UserListFilterComponent,
      selectors: [["app-user-list-filter"]],
      outputs: {
        filterUsers: "filterUsers"
      },
      standalone: false,
      decls: 3,
      vars: 1,
      consts: [[1, "form", 3, "ngSubmit"], ["type", "text", "name", "filterText", "placeholder", "Filtrar por DNI...", 3, "ngModelChange", "ngModel"], ["type", "submit", "value", "Filtrar", 1, "btn"]],
      template: function UserListFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserListFilterComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function UserListFilterComponent_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.filterText, $event) || (ctx.filterText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.filterText);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontrol"]();
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
      styles: [".form[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  flex: 10;\n  padding: 5px;\n}\n\n.form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  flex: 2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9jb21wb25lbnRzL3VzZXItbGlzdC1maWx0ZXIvdXNlci1saXN0LWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxPQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAgIGZsZXg6IDEwO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICAgIGZsZXg6IDI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 1
    });
  }
}

/***/ },

/***/ 4965
/*!****************************************************************************!*\
  !*** ./src/app/user/components/user-list-item/user-list-item.component.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserListItemComponent: () => (/* binding */ UserListItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ 2735);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





class UserListItemComponent {
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
  }
  ngOnInit() {}
  //set dynamic classes
  setClasses() {
    let classes = {
      user: true,
      'is-approved': this.user.approved
    };
    return classes;
  }
  onToggle(user) {
    console.log('toggle');
    //this is not needed anymore because i'm using [(ngModel)]="user.approved"
    //user.approved = !user.approved;
    this.userService.editUser(user).subscribe(user => {
      console.log(user);
    });
  }
  goToUserDetail(user) {
    //TODO: move this event to the upper div.
    console.log('show user');
    this.router.navigate(['users', user.id]);
  }
  static {
    this.ɵfac = function UserListItemComponent_Factory(__ngFactoryType__) {
      /* @ts-ignore */
      return new (__ngFactoryType__ || UserListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserListItemComponent,
      selectors: [["app-user-list-item"]],
      inputs: {
        user: "user"
      },
      standalone: false,
      decls: 6,
      vars: 5,
      consts: [[3, "ngClass"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [3, "click"]],
      template: function UserListItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "span")(3, "input", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function UserListItemComponent_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.user.approved, $event) || (ctx.user.approved = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserListItemComponent_Template_input_change_3_listener() {
            return ctx.onToggle(ctx.user);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListItemComponent_Template_span_click_4_listener() {
            return ctx.goToUserDetail(ctx.user);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.user.approved);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" (", ctx.user.nationalId, ") ", ctx.user.first, " ", ctx.user.last, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      styles: [".del[_ngcontent-%COMP%] {\n  background: #ff0000;\n  color: #fff;\n  border: none;\n  padding: 5px 9px;\n  border-radius: 50%;\n  cursor: pointer;\n  float: right;\n}\n\n.user[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding: 10px;\n  border-bottom: 1px #ccc dotted;\n  color: #ff0000;\n  cursor: pointer;\n}\n\n.is-approved[_ngcontent-%COMP%] {\n  \n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci9jb21wb25lbnRzL3VzZXItbGlzdC1pdGVtL3VzZXItbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0UsaUNBQUE7RUFDQSxjQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHggOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIFxuICAudXNlciB7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCAjY2NjIGRvdHRlZDtcbiAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5pcy1hcHByb3ZlZCB7XG4gICAgLyp0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsqL1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 1
    });
  }
}

/***/ },

/***/ 9347
/*!******************************************************************!*\
  !*** ./src/app/user/components/user-list/user-list.component.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserListComponent: () => (/* binding */ UserListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 78);
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-detail/user-detail.component */ 7235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ 2735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 5326);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 423);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 4624);














const _c0 = ["paginator"];
const _c1 = () => ["loading"];
const _c2 = () => ["noData"];
const _c3 = a0 => ({
  "hide": a0
});
function UserListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserListComponent_Conditional_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onSearchClear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function UserListComponent_mat_header_cell_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserListComponent_mat_cell_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r4.nationalId);
  }
}
function UserListComponent_mat_header_cell_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserListComponent_mat_cell_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r5.first);
  }
}
function UserListComponent_mat_header_cell_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserListComponent_mat_cell_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r6.last);
  }
}
function UserListComponent_mat_header_cell_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserListComponent_mat_cell_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r7.phone);
  }
}
function UserListComponent_mat_header_cell_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-header-cell");
  }
}
function UserListComponent_mat_cell_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell")(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserListComponent_mat_cell_21_Template_button_click_1_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onEdit(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function UserListComponent_mat_footer_cell_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-footer-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Cargando datos... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserListComponent_mat_footer_cell_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-footer-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No hay datos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function UserListComponent_mat_header_row_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-header-row");
  }
}
function UserListComponent_mat_row_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-row");
  }
}
function UserListComponent_mat_footer_row_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-footer-row", 24);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c3, ctx_r2.listData != null));
  }
}
function UserListComponent_mat_footer_row_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-footer-row", 24);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c3, !(ctx_r2.listData != null && ctx_r2.listData.data.length == 0)));
  }
}
class UserListComponent {
  constructor(userService, dialog) {
    this.userService = userService;
    this.dialog = dialog;
    this.displayedColumns = ['nationalId', 'first', 'last', 'phone', 'actions'];
  }
  ngOnInit() {
    this.paginator.pageSize = 25;
    this.paginator._intl.itemsPerPageLabel = 'Usuarios por página';
    this.onSearchClear();
  }
  onPaginatorChange() {
    this.applyFilter();
  }
  onSearchClear() {
    this.searchKey = '';
    this.onSearch();
  }
  onSearch() {
    //restart pagination.
    this.paginator.pageIndex = 0;
    this.applyFilter();
  }
  applyFilter() {
    const textFilter = this.searchKey.trim().toLowerCase();
    const pageIx = this.paginator.pageIndex;
    //console.log(`Filter: ${textFilter} and PageIx: ${this.paginator.pageIndex} and PageSize:${this.paginator.pageSize} `);
    this.userService.getUsers(textFilter, pageIx).subscribe(userList => {
      this.paginator.length = userList.count;
      this.listData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(userList.rows);
    });
  }
  onEdit(row) {
    this.userService.populateForm(row);
    this.openDialog();
  }
  openDialog() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const matRef = this.dialog.open(_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_2__.UserDetailComponent, dialogConfig);
    /*matRef.afterClosed().subscribe(
      () => console.log('sa')
    );*/
  }
  static {
    this.ɵfac = function UserListComponent_Factory(__ngFactoryType__) {
      /* @ts-ignore */
      return new (__ngFactoryType__ || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: UserListComponent,
      selectors: [["app-user-list"]],
      viewQuery: function UserListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      standalone: false,
      decls: 32,
      vars: 9,
      consts: [["paginator", ""], [1, "search-div"], ["floatLabel", "never", 1, "search-form-field"], ["matInput", "", "placeholder", "Buscar", "autocomplete", "off", 3, "ngModelChange", "keyup", "ngModel"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear"], [1, "mat-elevation-z8"], [3, "dataSource"], ["matColumnDef", "nationalId"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "first"], ["matColumnDef", "last"], ["matColumnDef", "phone"], ["matColumnDef", "actions"], ["matColumnDef", "loading"], ["colspan", "4", 4, "matFooterCellDef"], ["matColumnDef", "noData"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "ngClass", 4, "matFooterRowDef"], [3, "page"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-icon-button", "", 3, "click"], ["colspan", "4"], [3, "ngClass"]],
      template: function UserListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "mat-form-field", 2)(3, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function UserListComponent_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchKey, $event) || (ctx.searchKey = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function UserListComponent_Template_input_keyup_3_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](4, UserListComponent_Conditional_4_Template, 3, 0, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "mat-table", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, UserListComponent_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 8)(9, UserListComponent_mat_cell_9_Template, 2, 1, "mat-cell", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, UserListComponent_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 8)(12, UserListComponent_mat_cell_12_Template, 2, 1, "mat-cell", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, UserListComponent_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 8)(15, UserListComponent_mat_cell_15_Template, 2, 1, "mat-cell", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, UserListComponent_mat_header_cell_17_Template, 2, 0, "mat-header-cell", 8)(18, UserListComponent_mat_cell_18_Template, 2, 1, "mat-cell", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, UserListComponent_mat_header_cell_20_Template, 1, 0, "mat-header-cell", 8)(21, UserListComponent_mat_cell_21_Template, 4, 0, "mat-cell", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, UserListComponent_mat_footer_cell_23_Template, 2, 0, "mat-footer-cell", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](24, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, UserListComponent_mat_footer_cell_25_Template, 2, 0, "mat-footer-cell", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, UserListComponent_mat_header_row_26_Template, 1, 0, "mat-header-row", 17)(27, UserListComponent_mat_row_27_Template, 1, 0, "mat-row", 18)(28, UserListComponent_mat_footer_row_28_Template, 1, 3, "mat-footer-row", 19)(29, UserListComponent_mat_footer_row_29_Template, 1, 3, "mat-footer-row", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-paginator", 20, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function UserListComponent_Template_mat_paginator_page_30_listener() {
            return ctx.onPaginatorChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchKey);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.searchKey ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.listData);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c2));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatFooterRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 1
    });
  }
}

/***/ },

/***/ 2735
/*!***********************************************!*\
  !*** ./src/app/user/services/user.service.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/services/auth.service */ 3767);






/*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmF0aW9uYWxJZCI6IjU1NSIsInJvbGUiOiJBRE1JTiIsImlzT3duZXIiOnRydWUsImV4cCI6MTU3NzE1MTY0MywiaWF0IjoxNTcxOTY3NjQzfQ.wcYS6Bu2BAPSrhbJqog0GPvRGx1ZBAEAyGviz62FpNk'
  })
};*/
class UserService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.USERS_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + '/api/user';
    //TODO: this form might be on the component and the data must be sent through the dialog.
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(null),
      nationalId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl({
        value: '',
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
      first: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl({
        value: '',
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
      last: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl({
        value: '',
        disabled: true
      }),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(''),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl({
        value: '',
        disabled: true
      }),
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl({
        value: '',
        disabled: true
      }),
      helpPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl({
        value: '',
        disabled: true
      }),
      role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl({
        value: '',
        disabled: true
      }),
      createdAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl({
        value: '',
        disabled: true
      }),
      approved: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(false)
    });
  }
  initFormGroup() {
    this.form.setValue({
      id: null,
      nationalId: '',
      first: '',
      last: '',
      password: '',
      email: '',
      phone: '',
      helpPhone: '',
      role: '',
      createdAt: '',
      approved: false
    });
  }
  populateForm(user) {
    //console.log(user);
    user.password = '';
    user.email = '';
    this.form.setValue(user);
  }
  //returns an observable
  getUsers(filterText, pageIx) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    params = filterText === '' ? params : params.append('q', filterText);
    params = String(pageIx) === '' ? params : params.append('page', String(pageIx));
    return this.http.get(`${this.USERS_API_URL}`, {
      params: params,
      headers: this.getHttpAuthHeader()
    });
  }
  getUser(id) {
    return this.http.get(`${this.USERS_API_URL}/${id}`, {
      headers: this.getHttpAuthHeader()
    });
  }
  addUser(user) {
    return this.http.post(this.USERS_API_URL, user, {
      headers: this.getHttpAuthHeader()
    });
  }
  editUser(user) {
    if (user.password !== undefined && user.password.trim() == '') {
      user.password = undefined;
    }
    //console.log(`onSubmit after ${user.password}`);
    const url = `${this.USERS_API_URL}/${user.id}`;
    return this.http.put(url, user, {
      headers: this.getHttpAuthHeader()
    });
  }
  getHttpAuthHeader() {
    return this.authService.getHttpHeader(true);
  }
  static {
    this.ɵfac = function UserService_Factory(__ngFactoryType__) {
      /* @ts-ignore */
      return new (__ngFactoryType__ || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 8618
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRoutingModule: () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user-list/user-list.component */ 9347);
/* harmony import */ var _auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/services/auth-guard.service */ 3303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);





const routes = [{
  path: '',
  component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__.UserListComponent,
  canActivate: [_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService],
  data: {
    expectedRole: 'ADMIN'
  }
}
//{path: ':id', component: UserDetailComponent, canActivate: [AuthGuardService], data:{expectedRole: 'ADMIN'}}
];
class UserRoutingModule {
  static {
    this.ɵfac = function UserRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: UserRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 2483
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserModule: () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-routing.module */ 8618);
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-list/user-list.component */ 9347);
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ 7235);
/* harmony import */ var _components_user_list_item_user_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-list-item/user-list-item.component */ 4965);
/* harmony import */ var _components_user_list_filter_user_list_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-list-filter/user-list-filter.component */ 6067);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material/material.module */ 551);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user.service */ 2735);
/* harmony import */ var _common_http_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/http-error.interceptor */ 3846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 6124);












class UserModule {
  static {
    this.ɵfac = function UserModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
      type: UserModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _common_http_error_interceptor__WEBPACK_IMPORTED_MODULE_10__.HttpErrorInterceptor,
        multi: true
      }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.withXhr)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.withInterceptorsFromDi)())],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_1__.UserRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](UserModule, {
    declarations: [_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__.UserListComponent, _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__.UserDetailComponent, _components_user_list_item_user_list_item_component__WEBPACK_IMPORTED_MODULE_4__.UserListItemComponent, _components_user_list_filter_user_list_filter_component__WEBPACK_IMPORTED_MODULE_5__.UserListFilterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_1__.UserRoutingModule]
  });
})();

/***/ }

}]);
//# sourceMappingURL=src_app_user_user_module_ts.js.map