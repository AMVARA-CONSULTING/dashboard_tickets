(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pages-help-help-module"],{

/***/ "8H9r":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/help/components/contact/contact.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var _c0 = ["*"];
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["contact"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n}\n\n  name,   description,   tel {\n  display: block;\n  line-height: 25px;\n}\n\n  name {\n  color: white;\n  font-weight: bold;\n}\n\n  tel {\n  color: #d3d3d3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9oZWxwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksY0FBYztFQUNkLG1CQUFtQjtBQUZ2Qjs7QUFLQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7QUFGckI7O0FBS0E7RUFDSSxZQUFZO0VBQ1osaUJBQ0o7QUFIQTs7QUFLQTtFQUNJLGNDUlU7QURNZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaGVscC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbG9ycyc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG46Om5nLWRlZXAgbmFtZSwgOjpuZy1kZWVwIGRlc2NyaXB0aW9uLCA6Om5nLWRlZXAgdGVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuOjpuZy1kZWVwIG5hbWUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuXG46Om5nLWRlZXAgdGVsIHtcbiAgICBjb2xvcjogJGdyZXk7XG59IiwiXG4vLyBNYWluIGNvbG9yc1xuJGJnLWNvbG9yOiByZ2IoMCwyMiw0MCk7XG4kc2VtaS13aGl0ZTogcmdiYSh3aGl0ZSwgLjg1KTtcbiRzZW1pLWJsYWNrLTE6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA1KTtcbiRzZW1pLWJsYWNrLTI6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA4KTtcbiRoZWFkZXItYm94OiAkc2VtaS1ibGFjay0xO1xuJGNvbnRlbnQtYm94OiAkc2VtaS1ibGFjay0yO1xuXG4vLyBDb2xvcnNcbiRibHVlOiAjZWYzMzQwO1xuJGdyZXk6ICNkM2QzZDM7XG4kb3JhbmdlOiByZ2IoMjQ3LDE3NCwyMSk7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItcmFkaXVzOiA3cHg7XG5cbi8vIFByaW9yaXRpZXNcbiRwcmlvcml0eS1pbW1lZGlhdGU6ICNDMTI3MkQ7XG4kcHJpb3JpdHktdXJnZW50OiAjRjE1QTI0O1xuJHByaW9yaXR5LW5vcm1hbDogIzIyQjU3MztcbiRwcmlvcml0eS1oaWdoOiAjRjc5MzFFO1xuXG4vLyBHcmFwaGljc1xuJGdyYXBoaWMtYmx1ZS1kYXJrOiAjMDM5YmU1O1xuJGdyYXBoaWMtYmx1ZTogJGJsdWU7XG4kZ3JhcGhpYy1vcmFuZ2U6ICNlZjMzNDA7XG4kZ3JhcGhpYy10ZWFsOiAjN2U1N2MyO1xuXG4vLyBTdGF0dXNlc1xuJHN0YXR1cy1iYWQ6ICNFNTM5MzU7XG4kc3RhdHVzLW1lZGl1bTogI0ZGQ0EyODtcbiRzdGF0dXMtZ29vZDogIzRDQUY1MDtcblxuLy8gU2hhZG93c1xuJGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwwLDAsLjMpO1xuXG4vLyBUcmFuc2l0aW9uc1xuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5KSB7XG4gICAgdHJhbnNpdGlvbjogJHByb3BlcnR5IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIE1peGluc1xuXG4kdHJpZ2dlcjogNjAwcHg7XG4kdGFibGV0OiAxMTAwcHg7XG5cbkBtaXhpbiBpZSB7XG5cdEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGVkZ2Uge1xuICAgIEBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG1vYmlsZSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0cmlnZ2VyKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIGFuZCAobWluLXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdGFibGV0IHtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0LWRlc2t0b3Age1xuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufSJdfQ== */"], changeDetection: 0 });
    return ContactComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "WKYI":
/*!******************************************************!*\
  !*** ./src/app/components/pages/help/help.module.ts ***!
  \******************************************************/
/*! exports provided: HelpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpModule", function() { return HelpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_pages_help_components_help_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/pages/help/components/help/help.component */ "cpD9");
/* harmony import */ var _components_pages_help_components_title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/pages/help/components/title/title.component */ "klSq");
/* harmony import */ var _components_pages_help_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/pages/help/components/contact/contact.component */ "8H9r");








var routes = [
    {
        path: '', component: _components_pages_help_components_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"]
    }
];
var HelpModule = /** @class */ (function () {
    function HelpModule() {
    }
    HelpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HelpModule });
    HelpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HelpModule_Factory(t) { return new (t || HelpModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ]] });
    return HelpModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HelpModule, { declarations: [_components_pages_help_components_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"], _components_pages_help_components_title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"], _components_pages_help_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                declarations: [_components_pages_help_components_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"], _components_pages_help_components_title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"], _components_pages_help_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cpD9":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/help/components/help/help.component.ts ***!
  \*************************************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _components_pages_help_components_title_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/pages/help/components/title/title.component */ "klSq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_pages_help_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/pages/help/components/contact/contact.component */ "8H9r");









function HelpComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.config.portalLink[ctx_r0.config.scenario], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Link to ", ctx_r0.config.appTitle, " Corporate Analytics Platform");
} }
function HelpComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.config.portalFolder, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Link to ", ctx_r2.config.appTitle, "");
} }
function HelpComponent_contact_14_email_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var contact_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r4.email);
} }
function HelpComponent_contact_14_tel_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tel_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tel_r9);
} }
function HelpComponent_contact_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HelpComponent_contact_14_email_5_Template, 2, 1, "email", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HelpComponent_contact_14_tel_6_Template, 2, 1, "tel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var contact_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contact_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", contact_r4.telephones);
} }
var HelpComponent = /** @class */ (function () {
    function HelpComponent(data, _store) {
        this.data = data;
        this._store = _store;
        this.config = this._store.selectSnapshot(function (state) { return state.config; });
        data.currentLevel = 1;
        this.contacts = this.config.contacts[this.config.scenario];
    }
    HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
    HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["help"]], decls: 36, vars: 5, consts: [[1, "help-box"], [1, "contact-info"], [1, "category"], [1, "telephones"], [4, "ngIf", "ngIfElse"], ["normalType", ""], [4, "ngFor", "ngForOf"], [1, "helpers"], [1, "helper", "hand1"], [1, "helper", "hand2"], [1, "img"], [1, "img-box"], [1, "helper", "portrait_landscape"], [1, "helper", "scroll_swipe"], ["target", "_blank", 3, "href"], [4, "ngIf"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "help-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "General Information");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " iBISS: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HelpComponent_ng_container_7_Template, 3, 2, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HelpComponent_ng_template_8_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HelpComponent_contact_14_Template, 7, 4, "contact", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "help-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " This application is adapted for any device and visualization. You can navigate through it with different options. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Portrait & Landscape ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Scroll & Swipe ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.apiType === "cognos")("ngIfElse", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.config.appTitle, " Support: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.config.appTitle, " Functions");
        } }, directives: [_components_pages_help_components_title_title_component__WEBPACK_IMPORTED_MODULE_3__["TitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_pages_help_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0px;\n  box-sizing: border-box;\n  max-width: 1000px;\n  margin: 0 auto;\n  -ms-touch-action: pan-y !important;\n      touch-action: pan-y !important;\n  box-sizing: border-box;\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    padding: 20px;\n  }\n}\n\n@media (max-width: 1300px) {\n  [_nghost-%COMP%] {\n    padding: 20px;\n  }\n}\n\n@media (min-width: 600px) {\n  [_nghost-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    box-sizing: border-box;\n    max-width: none;\n    margin: 0 auto;\n    -ms-touch-action: pan-y !important;\n        touch-action: pan-y !important;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .img[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  .img-box[_ngcontent-%COMP%] {\n    -ms-flex: 1;\n        flex: 1;\n  }\n  .scroll_swipe[_ngcontent-%COMP%] {\n    width: 219px !important;\n    height: 122px !important;\n  }\n  .portrait_landscape[_ngcontent-%COMP%] {\n    width: 219px !important;\n    height: 122px !important;\n  }\n  .help-box[_ngcontent-%COMP%] {\n    padding: 20px !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .img-box[_ngcontent-%COMP%] {\n    -ms-flex: 1 100%;\n        flex: 1 100%;\n    padding-top: 35px;\n  }\n  .help-box[_ngcontent-%COMP%] {\n    -ms-flex: 1 100% !important;\n        flex: 1 100% !important;\n  }\n}\n\n@media (max-width: 1300px) {\n  .img-box[_ngcontent-%COMP%] {\n    -ms-flex: 1 100%;\n        flex: 1 100%;\n    padding-top: 35px;\n  }\n  .help-box[_ngcontent-%COMP%] {\n    -ms-flex: 1 100% !important;\n        flex: 1 100% !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .img-box[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n}\n\n.help-box[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  -ms-flex: 1;\n      flex: 1;\n  padding: 0px;\n}\n\n.contact-info[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.contact-info[_ngcontent-%COMP%]:nth-child(2) {\n  margin-bottom: 30px;\n}\n\n.contact-info[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 10px;\n}\n\n.contact-info[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  -ms-flex: 1 35%;\n  flex: 1 35%;\n  line-height: 25px;\n  padding-left: 30px;\n  box-sizing: border-box;\n}\n\n.contact-info[_ngcontent-%COMP%]   .telephones[_ngcontent-%COMP%] {\n  -ms-flex: 1 65%;\n  flex: 1 65%;\n  line-height: 25px;\n}\n\np[_ngcontent-%COMP%] {\n  line-height: 20px;\n  text-align: justify;\n}\n\na[_ngcontent-%COMP%] {\n  color: #f7ae15;\n  position: relative;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n}\n\na[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 0%;\n  height: 2px;\n  opacity: .7;\n  transition: width .2s ease-in-out;\n  background-color: #f7ae15;\n  bottom: -5px;\n  left: 0;\n  border-radius: 3px;\n  right: 0;\n  position: absolute;\n  margin: auto;\n}\n\n.helpers[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 50px 0;\n}\n\n.helpers[_ngcontent-%COMP%]   .helper[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.helpers[_ngcontent-%COMP%]   .portrait_landscape[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 140px;\n  background-image: url('assets/img/DIP_ICON_PortLandsView.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.helpers[_ngcontent-%COMP%]   .scroll_swipe[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 135px;\n  background-image: url('assets/img/DIP_ICON_ScrollSwipeView.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.helpers[_ngcontent-%COMP%]   .hand1[_ngcontent-%COMP%], .helpers[_ngcontent-%COMP%]   .hand2[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 90px;\n}\n\n.helpers[_ngcontent-%COMP%]   .hand1[_ngcontent-%COMP%] {\n  background-image: url('assets/img/DIP_ICON_Hand1.svg');\n}\n\n.helpers[_ngcontent-%COMP%]   .hand2[_ngcontent-%COMP%] {\n  margin-left: 80px;\n  height: 95px;\n  background-image: url('assets/img/DIP_ICON_Hand2.svg');\n}\n\nbr[_ngcontent-%COMP%] {\n  line-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9oZWxwL2NvbXBvbmVudHMvaGVscC9oZWxwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vX2JyZWFrcG9pbnRzLnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxjQUFjO0VBQ2QsbUJBQWU7TUFBZixlQUFlO0VBQ2YsWUFBWTtFQUVKLHNCQUFzQjtFQUM5QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtDQUE4QjtNQUE5Qiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBSDFCOztBQ05JO0VEQUo7SUFXUSxhQUFhO0VBQW5CO0FBQ0Y7O0FDREk7RURYSjtJQWNRLGFBQWE7RUFHbkI7QUFDRjs7QUNaSTtFRFlBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBR0wsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDdkIsY0FBYztJQUNkLGtDQUE4QjtRQUE5Qiw4QkFBOEI7SUFDOUIseUJBQTZCO1FBQTdCLDZCQUE2QjtFQUduQztFQURFO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsbUJBQWU7UUFBZixlQUFlO0lBQ2YseUJBQTZCO1FBQTdCLDZCQUE2QjtFQUduQztFQURFO0lBQ0ksV0FBTztRQUFQLE9BQU87RUFHYjtFQURFO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtFQUc5QjtFQURFO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtFQUc5QjtFQURFO0lBQ0ksd0JBQXdCO0VBRzlCO0FBQ0Y7O0FDakRJO0VEaURBO0lBQ0ksZ0JBQVk7UUFBWixZQUFZO0lBQ1osaUJBQWlCO0VBSXZCO0VBRkU7SUFDSSwyQkFBdUI7UUFBdkIsdUJBQXVCO0VBSTdCO0FBQ0Y7O0FDaERJO0VEc0NBO0lBQ0ksZ0JBQVk7UUFBWixZQUFZO0lBQ1osaUJBQWlCO0VBY3ZCO0VBWkU7SUFDSSwyQkFBdUI7UUFBdkIsdUJBQXVCO0VBYzdCO0FBQ0Y7O0FDckVJO0VEMERBO0lBQ0ksZ0JBQ0o7RUFjRjtBQUNGOztBQWJBO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQU87TUFBUCxPQUFPO0VBQ1AsWUFBWTtBQWdCaEI7O0FBYkE7RUFFSSxvQkFBb0I7RUFDcEIsYUFBYTtBQWdCakI7O0FBbkJBO0VBS1EsbUJBQW1CO0FBa0IzQjs7QUF2QkE7RUFRUSxtQkFBbUI7QUFtQjNCOztBQTNCQTtFQVlZLGVBQWU7RUFDWCxXQUFXO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFVixzQkFBc0I7QUFvQnRDOztBQXJDQTtFQXFCWSxlQUFlO0VBQ1gsV0FBVztFQUNuQixpQkFBaUI7QUFxQnpCOztBQWpCQTtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFvQnZCOztBQWpCQTtFQUNJLGNFN0ZvQjtFRjhGcEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQW9CekI7O0FBdkJBO0VBS1EsV0FBVztBQXNCbkI7O0FBM0JBO0VBUVEsV0FBVztFQUNYLGNBQWM7RUFDZCxTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFHWCxpQ0FBaUM7RUFDakMseUJFNUdnQjtFRjZHaEIsWUFBWTtFQUNaLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixZQUFZO0FBdUJwQjs7QUFuQkE7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztBQXNCbEI7O0FBeEJBO0VBSVEscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUF3QnBDOztBQTlCQTtFQVNRLFlBQVk7RUFDWixhQUFhO0VBQ2IsOERBQTZEO0VBQzdELHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUF5QnBDOztBQXRDQTtFQWdCUSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdFQUErRDtFQUMvRCx3QkFBd0I7RUFDeEIsNEJBQTRCO0FBMEJwQzs7QUE5Q0E7RUF1QlEsV0FBVztFQUNYLFlBQVk7QUEyQnBCOztBQW5EQTtFQTJCUSxzREFBcUQ7QUE0QjdEOztBQXZEQTtFQThCUSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHNEQUFxRDtBQTZCN0Q7O0FBekJBO0VBQ0ksaUJBQWlCO0FBNEJyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaGVscC9jb21wb25lbnRzL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbG9ycyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9jb21tb24vYnJlYWtwb2ludHMnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLXkgIWltcG9ydGFudDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxufVxuQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgOmhvc3R7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7ICBcbiAgICAgICAgLy9wYWRkaW5nOiAyMHB4O1xuICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0b3VjaC1hY3Rpb246IHBhbi15ICFpbXBvcnRhbnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbiAgICAuaW1ne1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbiAgICAuaW1nLWJveHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG4gICAgLnNjcm9sbF9zd2lwZXtcbiAgICAgICAgd2lkdGg6IDIxOXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTIycHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnBvcnRyYWl0X2xhbmRzY2FwZXtcbiAgICAgICAgd2lkdGg6IDIxOXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTIycHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmhlbHAtYm94IHtcbiAgICAgICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBpbmNsdWRlIG1vYmlsZS10YWJsZXR7XG4gICAgLmltZy1ib3h7XG4gICAgICAgIGZsZXg6IDEgMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDM1cHg7XG4gICAgfVxuICAgIC5oZWxwLWJveHtcbiAgICAgICAgZmxleDogMSAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAuaW1nLWJveHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweFxuICAgIH1cbn1cbi5oZWxwLWJveHtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmNvbnRhY3QtaW5mbyB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5jYXRlZ29yeSB7XG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAgICAgICAtbXMtZmxleDogMSAzNSU7XG4gICAgICAgICAgICAgICAgZmxleDogMSAzNSU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgICAudGVsZXBob25lcyB7XG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAgICAgICAtbXMtZmxleDogMSA2NSU7XG4gICAgICAgICAgICAgICAgZmxleDogMSA2NSU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIH1cbn1cblxucCB7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuYSB7XG4gICAgY29sb3I6ICRvcmFuZ2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAmOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAtby10cmFuc2l0aW9uOiB3aWR0aCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcbiAgICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG5cbi5oZWxwZXJzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1MHB4IDA7XG4gICAgLmhlbHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgICAucG9ydHJhaXRfbGFuZHNjYXBlIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXmFzc2V0cy9pbWcvRElQX0lDT05fUG9ydExhbmRzVmlldy5zdmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5zY3JvbGxfc3dpcGUge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMTM1cHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCheYXNzZXRzL2ltZy9ESVBfSUNPTl9TY3JvbGxTd2lwZVZpZXcuc3ZnKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cbiAgICAuaGFuZDEsIC5oYW5kMiB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgfVxuICAgIC5oYW5kMSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCheYXNzZXRzL2ltZy9ESVBfSUNPTl9IYW5kMS5zdmcpO1xuICAgIH1cbiAgICAuaGFuZDIge1xuICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA5NXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXmFzc2V0cy9pbWcvRElQX0lDT05fSGFuZDIuc3ZnKTtcbiAgICB9XG59XG5cbmJyIHtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbn1cbiIsIlxuJG1vYmlsZS13aWR0aDo2MDBweDtcbiR0YWJsZXQtd2lkdGg6MTMwMHB4O1xuQG1peGluIG1vYmlsZSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpe1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1vYmlsZS13aWR0aCl7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiB0YWJsZXQge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LXdpZHRoKXtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1vYmlsZS10YWJsZXQge1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmb3ItcGhvbmUtb25seSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7IEBjb250ZW50OyB9XG59XG4gIEBtaXhpbiBmb3ItcGhvbmUtbGFuZHNjYXBlLW9ubHkge1xuICAgIEBtZWRpYSAobWF4LWhlaWdodDogNTAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICB9XG4gIH1cbiAgQG1peGluIGZvci1waG9uZS1sYW5kc2NhcGUtdXAge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICB9XG4gIH1cbiAgQG1peGluIGZvci10YWJsZXQtcG9ydHJhaXQtdXAge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBtaXhpbiBmb3ItdGFibGV0LXBvcnRyYWl0LW9ubHkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDg5OXB4KSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQG1peGluIGZvci10YWJsZXQtb25seSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7IEBjb250ZW50OyB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODk5cHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAbWl4aW4gZm9yLXBob25lLWFuZC10YWJsZXQtb25seSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7IEBjb250ZW50OyB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODk5cHgpIHsgQGNvbnRlbnQ7IH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAbWl4aW4gZm9yLXRhYmxldC1sYW5kc2NhcGUtdXAge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBtaXhpbiBmb3ItdGFibGV0LWxhbmRzY2FwZS1vbmx5IHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAbWl4aW4gZm9yLWRlc2t0b3AtdXAge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAbWl4aW4gZm9yLWRlc2t0b3AtZG93biB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgeyBAY29udGVudDsgfVxuICB9XG4gIEBtaXhpbiBmb3ItZGVza3RvcC1vbmx5IHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTc5OXB4KSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQG1peGluIGZvci1iaWctZGVza3RvcC11cCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkgeyBAY29udGVudDsgfVxuICB9XG4gIFxuICBAbWl4aW4gZm9yLWlwaG9uZTcge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KSB7XG4gICAgICBAc3VwcG9ydHMgKC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaCkge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MzZweCkge1xuICAgICAgQHN1cHBvcnRzICgtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2gpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBAbWl4aW4gZm9yLWlwaG9uZTUge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNTY4cHgpIHtcbiAgICAgIEBzdXBwb3J0cyAoLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgQG1peGluIHBvcnRyYWl0IHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSIsIlxuLy8gTWFpbiBjb2xvcnNcbiRiZy1jb2xvcjogcmdiKDAsMjIsNDApO1xuJHNlbWktd2hpdGU6IHJnYmEod2hpdGUsIC44NSk7XG4kc2VtaS1ibGFjay0xOiBsaWdodGVuKCRiZy1jb2xvciwgNSk7XG4kc2VtaS1ibGFjay0yOiBsaWdodGVuKCRiZy1jb2xvciwgOCk7XG4kaGVhZGVyLWJveDogJHNlbWktYmxhY2stMTtcbiRjb250ZW50LWJveDogJHNlbWktYmxhY2stMjtcblxuLy8gQ29sb3JzXG4kYmx1ZTogI2VmMzM0MDtcbiRncmV5OiAjZDNkM2QzO1xuJG9yYW5nZTogcmdiKDI0NywxNzQsMjEpO1xuXG4vLyBCb3JkZXJzXG4kYm9yZGVyLXJhZGl1czogN3B4O1xuXG4vLyBQcmlvcml0aWVzXG4kcHJpb3JpdHktaW1tZWRpYXRlOiAjQzEyNzJEO1xuJHByaW9yaXR5LXVyZ2VudDogI0YxNUEyNDtcbiRwcmlvcml0eS1ub3JtYWw6ICMyMkI1NzM7XG4kcHJpb3JpdHktaGlnaDogI0Y3OTMxRTtcblxuLy8gR3JhcGhpY3NcbiRncmFwaGljLWJsdWUtZGFyazogIzAzOWJlNTtcbiRncmFwaGljLWJsdWU6ICRibHVlO1xuJGdyYXBoaWMtb3JhbmdlOiAjZWYzMzQwO1xuJGdyYXBoaWMtdGVhbDogIzdlNTdjMjtcblxuLy8gU3RhdHVzZXNcbiRzdGF0dXMtYmFkOiAjRTUzOTM1O1xuJHN0YXR1cy1tZWRpdW06ICNGRkNBMjg7XG4kc3RhdHVzLWdvb2Q6ICM0Q0FGNTA7XG5cbi8vIFNoYWRvd3NcbiRib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsMCwwLC4zKTtcblxuLy8gVHJhbnNpdGlvbnNcbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0eSkge1xuICAgIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4vLyBNaXhpbnNcblxuJHRyaWdnZXI6IDYwMHB4O1xuJHRhYmxldDogMTEwMHB4O1xuXG5AbWl4aW4gaWUge1xuXHRAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBlZGdlIHtcbiAgICBAc3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0bykge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSBhbmQgKG1pbi13aWR0aDogJHRyaWdnZXIpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXRhYmxldCB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldC1kZXNrdG9wIHtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn0iXX0= */"], changeDetection: 0 });
    return HelpComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "klSq":
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/help/components/title/title.component.ts ***!
  \***************************************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var _c0 = ["*"];
var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
    }
    TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
    TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["help-title"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 15px 0;\n  box-sizing: border-box;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.85);\n  border-bottom: 1px solid #ef3340;\n  margin-bottom: 30px;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9oZWxwL2NvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0NDTG1CO0VETW5CLGdDQ0NVO0VEQVYsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUZ0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaGVscC9jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY29sb3JzJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogJHNlbWktd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRibHVlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufSIsIlxuLy8gTWFpbiBjb2xvcnNcbiRiZy1jb2xvcjogcmdiKDAsMjIsNDApO1xuJHNlbWktd2hpdGU6IHJnYmEod2hpdGUsIC44NSk7XG4kc2VtaS1ibGFjay0xOiBsaWdodGVuKCRiZy1jb2xvciwgNSk7XG4kc2VtaS1ibGFjay0yOiBsaWdodGVuKCRiZy1jb2xvciwgOCk7XG4kaGVhZGVyLWJveDogJHNlbWktYmxhY2stMTtcbiRjb250ZW50LWJveDogJHNlbWktYmxhY2stMjtcblxuLy8gQ29sb3JzXG4kYmx1ZTogI2VmMzM0MDtcbiRncmV5OiAjZDNkM2QzO1xuJG9yYW5nZTogcmdiKDI0NywxNzQsMjEpO1xuXG4vLyBCb3JkZXJzXG4kYm9yZGVyLXJhZGl1czogN3B4O1xuXG4vLyBQcmlvcml0aWVzXG4kcHJpb3JpdHktaW1tZWRpYXRlOiAjQzEyNzJEO1xuJHByaW9yaXR5LXVyZ2VudDogI0YxNUEyNDtcbiRwcmlvcml0eS1ub3JtYWw6ICMyMkI1NzM7XG4kcHJpb3JpdHktaGlnaDogI0Y3OTMxRTtcblxuLy8gR3JhcGhpY3NcbiRncmFwaGljLWJsdWUtZGFyazogIzAzOWJlNTtcbiRncmFwaGljLWJsdWU6ICRibHVlO1xuJGdyYXBoaWMtb3JhbmdlOiAjZWYzMzQwO1xuJGdyYXBoaWMtdGVhbDogIzdlNTdjMjtcblxuLy8gU3RhdHVzZXNcbiRzdGF0dXMtYmFkOiAjRTUzOTM1O1xuJHN0YXR1cy1tZWRpdW06ICNGRkNBMjg7XG4kc3RhdHVzLWdvb2Q6ICM0Q0FGNTA7XG5cbi8vIFNoYWRvd3NcbiRib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsMCwwLC4zKTtcblxuLy8gVHJhbnNpdGlvbnNcbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0eSkge1xuICAgIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4vLyBNaXhpbnNcblxuJHRyaWdnZXI6IDYwMHB4O1xuJHRhYmxldDogMTEwMHB4O1xuXG5AbWl4aW4gaWUge1xuXHRAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBlZGdlIHtcbiAgICBAc3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0bykge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSBhbmQgKG1pbi13aWR0aDogJHRyaWdnZXIpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXRhYmxldCB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldC1kZXNrdG9wIHtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn0iXX0= */"], changeDetection: 0 });
    return TitleComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'help-title',
                templateUrl: './title.component.html',
                styleUrls: ['./title.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-pages-help-help-module.js.map