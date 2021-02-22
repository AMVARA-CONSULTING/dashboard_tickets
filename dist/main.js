(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+7qI":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");





var _c0 = ["*"];
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(data) {
        var _this = this;
        this.data = data;
        this.opened = true;
        this.data.opened.subscribe(function (open) {
            _this.opened = open;
        });
    }
    SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
    SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["cism-sidenav"]], hostVars: 1, hostBindings: function SidenavComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@open", ctx.opened);
        } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: calc(100vh - 125px);\n  position: fixed;\n  top: 85px;\n  -ms-transform: translateX(100%);\n      transform: translateX(100%);\n  will-change: transform;\n  background-color: #001628;\n  right: 0;\n  z-index: 99;\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    top: 63px;\n    height: calc(100vh - 93px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsU0FBUztFQUNULCtCQUEyQjtNQUEzQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHlCQ1RxQjtFRFVyQixRQUFRO0VBQ1IsV0FBVztBQUZiOztBQzBESTtFRGxFSjtJQVlJLFNBQVM7SUFDVCwwQkFBMEI7RUFDNUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi8uLi9jb21tb24vY29sb3JzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEyNXB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDg1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk7XG4gIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgdG9wOiA2M3B4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDkzcHgpO1xuICB9XG59IiwiXG4vLyBNYWluIGNvbG9yc1xuJGJnLWNvbG9yOiByZ2IoMCwyMiw0MCk7XG4kc2VtaS13aGl0ZTogcmdiYSh3aGl0ZSwgLjg1KTtcbiRzZW1pLWJsYWNrLTE6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA1KTtcbiRzZW1pLWJsYWNrLTI6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA4KTtcbiRoZWFkZXItYm94OiAkc2VtaS1ibGFjay0xO1xuJGNvbnRlbnQtYm94OiAkc2VtaS1ibGFjay0yO1xuXG4vLyBDb2xvcnNcbiRibHVlOiAjZWYzMzQwO1xuJGdyZXk6ICNkM2QzZDM7XG4kb3JhbmdlOiByZ2IoMjQ3LDE3NCwyMSk7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItcmFkaXVzOiA3cHg7XG5cbi8vIFByaW9yaXRpZXNcbiRwcmlvcml0eS1pbW1lZGlhdGU6ICNDMTI3MkQ7XG4kcHJpb3JpdHktdXJnZW50OiAjRjE1QTI0O1xuJHByaW9yaXR5LW5vcm1hbDogIzIyQjU3MztcbiRwcmlvcml0eS1oaWdoOiAjRjc5MzFFO1xuXG4vLyBHcmFwaGljc1xuJGdyYXBoaWMtYmx1ZS1kYXJrOiAjMDM5YmU1O1xuJGdyYXBoaWMtYmx1ZTogJGJsdWU7XG4kZ3JhcGhpYy1vcmFuZ2U6ICNlZjMzNDA7XG4kZ3JhcGhpYy10ZWFsOiAjN2U1N2MyO1xuXG4vLyBTdGF0dXNlc1xuJHN0YXR1cy1iYWQ6ICNFNTM5MzU7XG4kc3RhdHVzLW1lZGl1bTogI0ZGQ0EyODtcbiRzdGF0dXMtZ29vZDogIzRDQUY1MDtcblxuLy8gU2hhZG93c1xuJGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwwLDAsLjMpO1xuXG4vLyBUcmFuc2l0aW9uc1xuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5KSB7XG4gICAgdHJhbnNpdGlvbjogJHByb3BlcnR5IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIE1peGluc1xuXG4kdHJpZ2dlcjogNjAwcHg7XG4kdGFibGV0OiAxMTAwcHg7XG5cbkBtaXhpbiBpZSB7XG5cdEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGVkZ2Uge1xuICAgIEBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG1vYmlsZSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0cmlnZ2VyKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIGFuZCAobWluLXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdGFibGV0IHtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0LWRlc2t0b3Age1xuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufSJdfQ== */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms cubic-bezier(0.645,0.045,0.355,1.000)'))
                ])
            ] }, changeDetection: 0 });
    return SidenavComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cism-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms cubic-bezier(0.645,0.045,0.355,1.000)'))
                    ])
                ],
                host: {
                    '[@open]': 'opened'
                }
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/cism/src/main.ts */"zUnb");


/***/ }),

/***/ "057z":
/*!*****************************************************************!*\
  !*** ./src/app/components/overall-box/overall-box.component.ts ***!
  \*****************************************************************/
/*! exports provided: OverallBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverallBoxComponent", function() { return OverallBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/tools.service */ "6mc2");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @states/config.state */ "gGAk");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/Observable */ "Q1FS");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/combineLatest */ "yESu");
/* harmony import */ var rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");














var OverallBoxComponent = /** @class */ (function () {
    function OverallBoxComponent(data, _store) {
        this.data = data;
        this._store = _store;
        this.subs = new _services_tools_service__WEBPACK_IMPORTED_MODULE_4__["SubSink"]();
        this.total$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
    }
    OverallBoxComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var language;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.language$.toPromise()];
                    case 1:
                        language = _a.sent();
                        this.subs.sink = this.data.month.pipe(Object(rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])(this._store.select(function (store) { return store.tickets.overall; }))).subscribe(function (_a) {
                            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), month = _b[0], overall = _b[1];
                            var total = +overall.filter(function (row) { return row[0] == month.month; })[0][1];
                            _this.total$.next(total.toLocaleString(language));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OverallBoxComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    OverallBoxComponent.ɵfac = function OverallBoxComponent_Factory(t) { return new (t || OverallBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
    OverallBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OverallBoxComponent, selectors: [["cism-overall-box"]], decls: 6, vars: 6, consts: [[1, "title"], [1, "count"]], template: function OverallBoxComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "overall_silt.overall_tickets"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, ctx.total$));
        } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 100%;\n      flex: 1 100%;\n  max-width: 100%;\n  width: 100%;\n  height: 45px;\n  padding: 0 20px;\n  background-color: #002442;\n  border-radius: 7px;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 45px;\n  font-weight: bold;\n  -ms-flex: 1;\n      flex: 1;\n  color: #ef3340;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.count[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 45px;\n  -ms-flex: 1;\n      flex: 1;\n  text-align: right;\n  color: #ef3340;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdmVyYWxsLWJveC9vdmVyYWxsLWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGdCQUFZO01BQVosWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkNOa0M7RURPbEMsa0JDSWlCO0VESGpCLHNCQUE4QjtNQUE5Qiw4QkFBOEI7RUFDOUIsMENDc0JxQztBRHhCdkM7O0FBS0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFPO01BQVAsT0FBTztFQUNQLGNDWFk7RURZWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUZ6Qjs7QUFLQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBTztNQUFQLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsY0N0Qlk7QURvQmQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL292ZXJhbGwtYm94L292ZXJhbGwtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi8uLi9jb21tb24vY29sb3JzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VtaS1ibGFjay0xO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxleDogMTtcbiAgY29sb3I6ICRibHVlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNvdW50IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAkYmx1ZVxufSIsIlxuLy8gTWFpbiBjb2xvcnNcbiRiZy1jb2xvcjogcmdiKDAsMjIsNDApO1xuJHNlbWktd2hpdGU6IHJnYmEod2hpdGUsIC44NSk7XG4kc2VtaS1ibGFjay0xOiBsaWdodGVuKCRiZy1jb2xvciwgNSk7XG4kc2VtaS1ibGFjay0yOiBsaWdodGVuKCRiZy1jb2xvciwgOCk7XG4kaGVhZGVyLWJveDogJHNlbWktYmxhY2stMTtcbiRjb250ZW50LWJveDogJHNlbWktYmxhY2stMjtcblxuLy8gQ29sb3JzXG4kYmx1ZTogI2VmMzM0MDtcbiRncmV5OiAjZDNkM2QzO1xuJG9yYW5nZTogcmdiKDI0NywxNzQsMjEpO1xuXG4vLyBCb3JkZXJzXG4kYm9yZGVyLXJhZGl1czogN3B4O1xuXG4vLyBQcmlvcml0aWVzXG4kcHJpb3JpdHktaW1tZWRpYXRlOiAjQzEyNzJEO1xuJHByaW9yaXR5LXVyZ2VudDogI0YxNUEyNDtcbiRwcmlvcml0eS1ub3JtYWw6ICMyMkI1NzM7XG4kcHJpb3JpdHktaGlnaDogI0Y3OTMxRTtcblxuLy8gR3JhcGhpY3NcbiRncmFwaGljLWJsdWUtZGFyazogIzAzOWJlNTtcbiRncmFwaGljLWJsdWU6ICRibHVlO1xuJGdyYXBoaWMtb3JhbmdlOiAjZWYzMzQwO1xuJGdyYXBoaWMtdGVhbDogIzdlNTdjMjtcblxuLy8gU3RhdHVzZXNcbiRzdGF0dXMtYmFkOiAjRTUzOTM1O1xuJHN0YXR1cy1tZWRpdW06ICNGRkNBMjg7XG4kc3RhdHVzLWdvb2Q6ICM0Q0FGNTA7XG5cbi8vIFNoYWRvd3NcbiRib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsMCwwLC4zKTtcblxuLy8gVHJhbnNpdGlvbnNcbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0eSkge1xuICAgIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4vLyBNaXhpbnNcblxuJHRyaWdnZXI6IDYwMHB4O1xuJHRhYmxldDogMTEwMHB4O1xuXG5AbWl4aW4gaWUge1xuXHRAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBlZGdlIHtcbiAgICBAc3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0bykge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSBhbmQgKG1pbi13aWR0aDogJHRyaWdnZXIpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXRhYmxldCB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldC1kZXNrdG9wIHtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn0iXX0= */"], changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_states_config_state__WEBPACK_IMPORTED_MODULE_5__["ConfigState"].getLanguage),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"])
    ], OverallBoxComponent.prototype, "language$", void 0);
    return OverallBoxComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverallBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'cism-overall-box',
                templateUrl: './overall-box.component.html',
                styleUrls: ['./overall-box.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, { language$: [] }); })();


/***/ }),

/***/ "45kG":
/*!**********************************************************!*\
  !*** ./src/app/components/ux/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @states/config.state */ "gGAk");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/Observable */ "Q1FS");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["cism-footer"]], decls: 20, vars: 14, consts: [["routerLink", "help", 1, "flexed", "copyright"], [1, "footer"], [1, "flexed", "info"], [1, "desktop"], [1, "mobile"], ["routerLink", "about", 1, "flexed", "version"], [1, "desktop", "execution_date"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Code is Poetry");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "amvara-example@amvara.de");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Confidential");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Execution Date: 15.02.2021 - 09:00h");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.config$).copyright, " \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, ctx.config$).appTitle, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("v", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 8, ctx.config$).version, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 12, ctx.config$).language), "");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]], styles: ["[_nghost-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  height: 55px;\n  background-color: #000e19;\n  padding: 5px 20px;\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    height: 30px;\n    padding: 5px 10px;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  [_nghost-%COMP%] {\n    height: 40px;\n  }\n}\n\n.flexed[_ngcontent-%COMP%] {\n  -ms-flex: 1;\n      flex: 1;\n}\n\n.version[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.info[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 23px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  line-height: 45px;\n}\n\n@media (max-width: 600px) {\n  .footer[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .footer[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n\n@media (max-width: 600px) {\n  .footer[_ngcontent-%COMP%] {\n    line-height: 20px;\n    font-size: 1rem;\n    white-space: nowrap;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .footer[_ngcontent-%COMP%] {\n    line-height: 30px;\n  }\n}\n\n.mobile[_ngcontent-%COMP%] {\n  line-height: 20px;\n  font-size: 1.2rem;\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .mobile[_ngcontent-%COMP%] {\n    line-height: 30px;\n  }\n}\n\n@media (max-width: 600px) {\n  .mobile[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n.execution_date[_ngcontent-%COMP%] {\n  line-height: 45px;\n}\n\n@media (min-width: 1100px) {\n  .execution_date[_ngcontent-%COMP%] {\n    line-height: 27px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91eC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWix5QkFBc0M7RUFDdEMsaUJBQWlCO0FBRm5COztBQzRESTtFRGxFSjtJQVVJLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7QUFDRjs7QUMyREk7RUR4RUo7SUFjSSxZQUFZO0VBSWQ7QUFDRjs7QUFEQTtFQUNFLFdBQU87TUFBUCxPQUFPO0FBSVQ7O0FBREE7RUFDRSxpQkFBaUI7QUFJbkI7O0FBRkE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBS25COztBQUZBO0VBQ0UsaUJBQWlCO0FBS25COztBQzhCSTtFRHBDSjtJQUdJLGlCQUFpQjtFQVFuQjtBQUNGOztBQzhCSTtFRDFDSjtJQUdJLGlCQUFpQjtFQWNuQjtBQUNGOztBQ2tCSTtFRHBDSjtJQU1JLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0VBaUJyQjtBQUNGOztBQ2dCSTtFRDFDSjtJQVdJLGlCQUFpQjtFQW9CbkI7QUFDRjs7QUFqQkE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBb0JuQjs7QUNLSTtFRDNCSjtJQUlJLGlCQUFpQjtFQXVCbkI7QUFDRjs7QUNQSTtFRHJCSjtJQU9JLGVBQWU7RUEwQmpCO0FBQ0Y7O0FBdkJBO0VBQ0UsaUJBQWlCO0FBMEJuQjs7QUN2Qkk7RURKSjtJQUdJLGlCQUNGO0VBNEJBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3V4L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgJy4uLy4uLy4uL2NvbW1vbi9jb2xvcnMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJnLWNvbG9yLCAzKTtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICB9XG4gIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5cbi5mbGV4ZWQge1xuICBmbGV4OiAxO1xufVxuXG4udmVyc2lvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xufVxuXG4uZm9vdGVyIHtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7IFxuICBAaW5jbHVkZSBtb2JpbGUtdGFibGV0IHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICBAaW5jbHVkZSBtb2JpbGUge1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cbn1cblxuLm1vYmlsZSB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxuICBAaW5jbHVkZSBtb2JpbGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG4uZXhlY3V0aW9uX2RhdGUge1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHhcbiAgfVxufSIsIlxuLy8gTWFpbiBjb2xvcnNcbiRiZy1jb2xvcjogcmdiKDAsMjIsNDApO1xuJHNlbWktd2hpdGU6IHJnYmEod2hpdGUsIC44NSk7XG4kc2VtaS1ibGFjay0xOiBsaWdodGVuKCRiZy1jb2xvciwgNSk7XG4kc2VtaS1ibGFjay0yOiBsaWdodGVuKCRiZy1jb2xvciwgOCk7XG4kaGVhZGVyLWJveDogJHNlbWktYmxhY2stMTtcbiRjb250ZW50LWJveDogJHNlbWktYmxhY2stMjtcblxuLy8gQ29sb3JzXG4kYmx1ZTogI2VmMzM0MDtcbiRncmV5OiAjZDNkM2QzO1xuJG9yYW5nZTogcmdiKDI0NywxNzQsMjEpO1xuXG4vLyBCb3JkZXJzXG4kYm9yZGVyLXJhZGl1czogN3B4O1xuXG4vLyBQcmlvcml0aWVzXG4kcHJpb3JpdHktaW1tZWRpYXRlOiAjQzEyNzJEO1xuJHByaW9yaXR5LXVyZ2VudDogI0YxNUEyNDtcbiRwcmlvcml0eS1ub3JtYWw6ICMyMkI1NzM7XG4kcHJpb3JpdHktaGlnaDogI0Y3OTMxRTtcblxuLy8gR3JhcGhpY3NcbiRncmFwaGljLWJsdWUtZGFyazogIzAzOWJlNTtcbiRncmFwaGljLWJsdWU6ICRibHVlO1xuJGdyYXBoaWMtb3JhbmdlOiAjZWYzMzQwO1xuJGdyYXBoaWMtdGVhbDogIzdlNTdjMjtcblxuLy8gU3RhdHVzZXNcbiRzdGF0dXMtYmFkOiAjRTUzOTM1O1xuJHN0YXR1cy1tZWRpdW06ICNGRkNBMjg7XG4kc3RhdHVzLWdvb2Q6ICM0Q0FGNTA7XG5cbi8vIFNoYWRvd3NcbiRib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsMCwwLC4zKTtcblxuLy8gVHJhbnNpdGlvbnNcbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0eSkge1xuICAgIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4vLyBNaXhpbnNcblxuJHRyaWdnZXI6IDYwMHB4O1xuJHRhYmxldDogMTEwMHB4O1xuXG5AbWl4aW4gaWUge1xuXHRAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBlZGdlIHtcbiAgICBAc3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0bykge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSBhbmQgKG1pbi13aWR0aDogJHRyaWdnZXIpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXRhYmxldCB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldC1kZXNrdG9wIHtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn0iXX0= */"], changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_states_config_state__WEBPACK_IMPORTED_MODULE_3__["ConfigState"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], FooterComponent.prototype, "config$", void 0);
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'cism-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { config$: [] }); })();


/***/ }),

/***/ "6Kw5":
/*!****************************************!*\
  !*** ./src/app/pipes/date-ago.pipe.ts ***!
  \****************************************/
/*! exports provided: DateAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function() { return DateAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "b/SL");



var DateAgoPipe = /** @class */ (function () {
    function DateAgoPipe() {
    }
    DateAgoPipe.prototype.transform = function (date) {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["formatDistanceStrict"])(date, new Date()) + ' ago';
    };
    DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) { return new (t || DateAgoPipe)(); };
    DateAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateAgo", type: DateAgoPipe, pure: true });
    return DateAgoPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateAgo'
            }]
    }], null, null); })();


/***/ }),

/***/ "6mc2":
/*!*******************************************!*\
  !*** ./src/app/services/tools.service.ts ***!
  \*******************************************/
/*! exports provided: ToolsService, SubSink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsService", function() { return ToolsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubSink", function() { return SubSink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



var ToolsService = /** @class */ (function () {
    function ToolsService() {
    }
    ToolsService.prototype.getCookie = function (cookies, name) {
        var value = "; " + cookies;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    ToolsService.prototype.log = function (classe) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var texts = [];
        var objects = [];
        var arrays = [];
        args.forEach(function (arg) {
            if (Array.isArray(arg)) {
                arrays.push(arg);
                return;
            }
            if (typeof arg === 'object') {
                objects.push(arg);
                return;
            }
            if (typeof arg === 'number') {
                texts.push(arg);
                return;
            }
            if (typeof arg === 'string') {
                texts.push(arg);
            }
        });
        console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(["%cAMVARA %c| %c" + classe + "%c | " + texts.join(' '), 'color:#1976d2;font-weight:bold;', 'color:#37474f;', 'color:#009688;font-weight:bold;', 'color:#37474f;'], objects, arrays));
    };
    /**
     * Return a WebWorker object
     *
     * @param foo Function to execute in background
     */
    ToolsService.prototype.BuildWebWorker = function (foo) {
        var str = foo.toString().match(/^\s*function\s*\(\s*\)\s*\{(([\s\S](?!\}$))*[\s\S])/)[1];
        return new Worker(window.URL.createObjectURL(new Blob([str], { type: 'text/javascript' })));
    };
    ToolsService.prototype.isIE = function () {
        var ua = window.navigator.userAgent;
        return ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
    };
    ToolsService.prototype.formatPercent = function (percent) {
        return Math.round(percent * 100) / 100;
    };
    /**
     * Sums values of an array collection
     * @param array An array containing other arrays
     * @param i A number defining the index of the desired value to make the sum
     */
    ToolsService.prototype.sumByIndex = function (array, i) {
        return array.reduce(function (a, b) { return a + b[i]; }, 0);
    };
    /**
     * Sums values of an array collection and return it's average
     * @param array An array containing other arrays
     * @param i A number defining the index of the desired value to make the sum
     */
    ToolsService.prototype.averageByIndex = function (array, i, useFormatPercent) {
        if (useFormatPercent === void 0) { useFormatPercent = false; }
        var avg = this.sumByIndex(array, i) / array.length;
        return useFormatPercent ? this.formatPercent(avg) : avg;
    };
    ToolsService.prototype.getMin = function (array, i, useFormatPercent) {
        if (useFormatPercent === void 0) { useFormatPercent = false; }
        var min = Math.min.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(array.map(function (r) { return r[i]; })));
        return useFormatPercent ? this.formatPercent(min) : min;
    };
    ToolsService.prototype.getMax = function (array, i, useFormatPercent) {
        if (useFormatPercent === void 0) { useFormatPercent = false; }
        var min = Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(array.map(function (r) { return r[i]; })));
        return useFormatPercent ? this.formatPercent(min) : min;
    };
    /**
     * Generates a CSV File
     * @param headers An array containing all header fields title
     * @param array Array of the data
     * @param columns An array containing all index to use as columns
     */
    ToolsService.prototype.generateCSV = function (headers, data, columns) {
        return new Promise(function (resolve, reject) {
            var rows = [];
            // Push Headers
            rows.push(headers);
            // Get only specific columns from data
            data.forEach(function (dat) {
                var toPush = [];
                // @ts-ignore
                columns.forEach(function (index) { return toPush.push(dat[index]); });
                rows.push(toPush);
            });
            var csvContent = 'data:text/csvcharset=utf-8,';
            rows.forEach(function (row) {
                var rowB = row.join('');
                csvContent += rowB + '\r\n';
            });
            resolve(csvContent);
        });
    };
    /**
     * Download a CSV Encoded file
     * @param content CSV Encoded data
     * @param name Name of the CSV File
     */
    ToolsService.prototype.downloadCSV = function (content, name) {
        var encodedUri = encodeURI(content);
        var link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', name + '.csv');
        document.body.appendChild(link);
        link.click();
    };
    /**
     * Classifies an array collection based on an index
     * @param array An array containing other arrays
     * @param index A number defining the index of the desired value to pivoting
     */
    ToolsService.prototype.classifyByIndex = function (array, index) {
        return array.reduce(function (r, a) {
            r[a[index]] = r[a[index]] || [];
            r[a[index]].push(a);
            return r;
        }, {});
    };
    /* Returns a random integer between min (inclusive) and max (inclusive)
    * Using Math.round() will give you a non-uniform distribution!
    */
    ToolsService.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    /* Return a percent number with/without sign */
    ToolsService.prototype.percent = function (part, total, sign, space_between, zeroSign) {
        sign = sign || false;
        space_between = space_between || false;
        zeroSign = zeroSign || false;
        if (zeroSign && total === 0) {
            return '-';
        }
        if (sign) {
            return parseInt(((part * 100) / total).toFixed(0), 10) + (space_between ? ' ' : '') + '%';
        }
        else {
            return parseInt(((part * 100) / total).toFixed(0), 10);
        }
    };
    /* sortBy native alternative to Underscore */
    ToolsService.prototype.sortBy = function (collection, iterator) {
        var isString = typeof iterator === 'string';
        return collection.sort(function (x, y) {
            return isString ? x[iterator] - y[iterator] : iterator(x) - iterator(y);
        });
    };
    ToolsService.prototype.chunkArray = function (array, size) {
        var chunked_arr = [];
        var copied = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(array);
        var numOfChild = Math.ceil(copied.length / size);
        for (var i = 0; i < numOfChild; i++) {
            chunked_arr.push(copied.splice(0, size));
        }
        return chunked_arr;
    };
    /**
     * Function very basic to imitate .reduce JS function without all checks garbage code
     * @param data Array of the date to reduce
     * @param fn Function to execute in each iteration, MUST return the accumulator
     * @param accumulator Accumulator, same as default .reduce JS function
     */
    ToolsService.prototype.primitiveReduce = function (data, fn, accumulator) {
        if (accumulator === void 0) { accumulator = {}; }
        var length = data.length;
        var i = 0;
        for (; i < length; i++) {
            accumulator = fn(accumulator, data[i]);
        }
        return accumulator;
    };
    ToolsService.ɵfac = function ToolsService_Factory(t) { return new (t || ToolsService)(); };
    ToolsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToolsService, factory: ToolsService.ɵfac });
    return ToolsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToolsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
var isFunction = function (fn) { return typeof fn === 'function'; };
/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
var SubSink = /** @class */ (function () {
    /**
     * Subscription sink that holds Observable subscriptions
     * until you call unsubscribe on it in ngOnDestroy.
     *
     * @example
     * In Angular:
     * ```
     *   private subs = new SubSink();
     *   ...
     *   this.subs.sink = observable$.subscribe(
     *   this.subs.add(observable$.subscribe(...));
     *   ...
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     * ```
     */
    function SubSink() {
        this._subs = [];
    }
    /**
     * Add subscriptions to the tracked subscriptions
     * @example
     *  this.subs.add(observable$.subscribe(...));
     */
    SubSink.prototype.add = function () {
        var subscriptions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            subscriptions[_i] = arguments[_i];
        }
        this._subs = this._subs.concat(subscriptions);
    };
    Object.defineProperty(SubSink.prototype, "sink", {
        /**
         * Assign subscription to this sink to add it to the tracked subscriptions
         * @example
         *  this.subs.sink = observable$.subscribe(...);
         */
        set: function (subscription) {
            this._subs.push(subscription);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Unsubscribe to all subscriptions in ngOnDestroy()
     * @example
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     */
    SubSink.prototype.unsubscribe = function () {
        this._subs.forEach(function (sub) { return sub && isFunction(sub.unsubscribe) && sub.unsubscribe(); });
        this._subs = [];
    };
    return SubSink;
}());



/***/ }),

/***/ "AytR":
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

/***/ "BNfh":
/*!*****************************************************************!*\
  !*** ./src/app/components/report-info/report-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReportInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportInfoComponent", function() { return ReportInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pipes/date-format.pipe */ "u7Z3");
/* harmony import */ var _pipes_date_parse_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pipes/date-parse.pipe */ "L3ee");





var ReportInfoComponent = /** @class */ (function () {
    function ReportInfoComponent(ref) {
        this.ref = ref;
    }
    ReportInfoComponent.prototype.ngOnChanges = function (changes) {
        this.date = changes.prop.currentValue.value.date;
    };
    ReportInfoComponent.ɵfac = function ReportInfoComponent_Factory(t) { return new (t || ReportInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    ReportInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportInfoComponent, selectors: [["report-info"]], inputs: { prop: "prop" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 11, consts: [[1, "title"], [1, "container"], [1, "id"], [1, "prop"], [1, "value"], [1, "date"]], template: function ReportInfoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ID:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "dateFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "dateParse");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.prop.key));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.prop.value.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 8, ctx.date, "MMM d, yyyy H:mm:ss A"), "MMM yyyy"));
        } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__["DateFormatPipe"], _pipes_date_parse_pipe__WEBPACK_IMPORTED_MODULE_3__["DateParsePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin: 25px 0 15px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n@media (max-width: 600px) {\n  .container[_ngcontent-%COMP%] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #ef3340;\n  font-size: 1.1rem;\n  margin-bottom: 10px;\n}\n\n.prop[_ngcontent-%COMP%] {\n  -ms-flex: initial;\n      flex: initial;\n  color: rgba(255, 255, 255, 0.4);\n}\n\n@media (min-width: 1100px) {\n  .prop[_ngcontent-%COMP%] {\n    margin-right: 30px;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .prop[_ngcontent-%COMP%] {\n    margin-right: 30px;\n  }\n}\n\n@media (max-width: 600px) {\n  .prop[_ngcontent-%COMP%] {\n    -ms-flex: 0 0 120px;\n        flex: 0 0 120px;\n  }\n}\n\n.value[_ngcontent-%COMP%] {\n  -ms-flex: initial;\n      flex: initial;\n  white-space: nowrap;\n}\n\n@media (min-width: 1100px) {\n  .value[_ngcontent-%COMP%] {\n    -ms-flex: 0 0 120px;\n        flex: 0 0 120px;\n  }\n}\n\n.id[_ngcontent-%COMP%], .date[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n@media (max-width: 600px) {\n  .id[_ngcontent-%COMP%], .date[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}\n\n.name[_ngcontent-%COMP%], .id[_ngcontent-%COMP%], .date[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 100%;\n      flex: 1 100%;\n}\n\n.name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2), .id[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2), .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQtaW5mby9yZXBvcnQtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGNBQWM7RUFDZCxtQkFBbUI7QUFGdkI7O0FBS0E7RUFDSSxvQkFBYTtFQUFiLGFBQWE7QUFGakI7O0FDOERJO0VEN0RKO0lBR1EsbUJBQWU7UUFBZixlQUFlO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDSSxjQ05VO0VET1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNJLGlCQUFhO01BQWIsYUFBYTtFQU9iLCtCQUFpQjtBQUxyQjs7QUN1Q0k7RUQxQ0o7SUFHUSxrQkFBa0I7RUFLeEI7QUFDRjs7QUM2Q0k7RUR0REo7SUFHUSxrQkFBa0I7RUFXeEI7QUFDRjs7QUNpQ0k7RURoREo7SUFNUSxtQkFBZTtRQUFmLGVBQWU7RUFjckI7QUFDRjs7QUFWQTtFQUNJLGlCQUFhO01BQWIsYUFBYTtFQUNiLG1CQUFtQjtBQWF2Qjs7QUNnQkk7RUQvQko7SUFJUSxtQkFBZTtRQUFmLGVBQWU7RUFnQnJCO0FBQ0Y7O0FBYkE7RUFDSSxrQkFBa0I7QUFnQnRCOztBQ1lJO0VEN0JKO0lBR1EsZUFBZTtFQW1CckI7QUFDRjs7QUFoQkE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixnQkFBWTtNQUFaLFlBQVk7QUFtQmhCOztBQXJCQTtFQUlRLGlCQUFpQjtBQXFCekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlcG9ydC1pbmZvL3JlcG9ydC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi8uLi9jb21tb24vX2NvbG9ycy5zY3NzJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMjVweCAwIDE1cHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbn1cblxuLnRpdGxlIHtcbiAgICBjb2xvcjogJGJsdWU7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnByb3Age1xuICAgIGZsZXg6IGluaXRpYWw7XG4gICAgQGluY2x1ZGUgdGFibGV0LWRlc2t0b3Age1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIGZsZXg6IDAgMCAxMjBweDtcbiAgICB9XG4gICAgY29sb3I6IHJnYmEod2hpdGUsIC40KTtcbn1cblxuLnZhbHVlIHtcbiAgICBmbGV4OiBpbml0aWFsO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIGZsZXg6IDAgMCAxMjBweDtcbiAgICB9XG59XG5cbi5pZCwgLmRhdGUge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxufVxuXG4ubmFtZSwgLmlkLCAuZGF0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEwMCU7XG4gICAgc3BhbjpudGgtY2hpbGQoMikge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG59IiwiXG4vLyBNYWluIGNvbG9yc1xuJGJnLWNvbG9yOiByZ2IoMCwyMiw0MCk7XG4kc2VtaS13aGl0ZTogcmdiYSh3aGl0ZSwgLjg1KTtcbiRzZW1pLWJsYWNrLTE6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA1KTtcbiRzZW1pLWJsYWNrLTI6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA4KTtcbiRoZWFkZXItYm94OiAkc2VtaS1ibGFjay0xO1xuJGNvbnRlbnQtYm94OiAkc2VtaS1ibGFjay0yO1xuXG4vLyBDb2xvcnNcbiRibHVlOiAjZWYzMzQwO1xuJGdyZXk6ICNkM2QzZDM7XG4kb3JhbmdlOiByZ2IoMjQ3LDE3NCwyMSk7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItcmFkaXVzOiA3cHg7XG5cbi8vIFByaW9yaXRpZXNcbiRwcmlvcml0eS1pbW1lZGlhdGU6ICNDMTI3MkQ7XG4kcHJpb3JpdHktdXJnZW50OiAjRjE1QTI0O1xuJHByaW9yaXR5LW5vcm1hbDogIzIyQjU3MztcbiRwcmlvcml0eS1oaWdoOiAjRjc5MzFFO1xuXG4vLyBHcmFwaGljc1xuJGdyYXBoaWMtYmx1ZS1kYXJrOiAjMDM5YmU1O1xuJGdyYXBoaWMtYmx1ZTogJGJsdWU7XG4kZ3JhcGhpYy1vcmFuZ2U6ICNlZjMzNDA7XG4kZ3JhcGhpYy10ZWFsOiAjN2U1N2MyO1xuXG4vLyBTdGF0dXNlc1xuJHN0YXR1cy1iYWQ6ICNFNTM5MzU7XG4kc3RhdHVzLW1lZGl1bTogI0ZGQ0EyODtcbiRzdGF0dXMtZ29vZDogIzRDQUY1MDtcblxuLy8gU2hhZG93c1xuJGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwwLDAsLjMpO1xuXG4vLyBUcmFuc2l0aW9uc1xuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5KSB7XG4gICAgdHJhbnNpdGlvbjogJHByb3BlcnR5IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIE1peGluc1xuXG4kdHJpZ2dlcjogNjAwcHg7XG4kdGFibGV0OiAxMTAwcHg7XG5cbkBtaXhpbiBpZSB7XG5cdEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGVkZ2Uge1xuICAgIEBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG1vYmlsZSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0cmlnZ2VyKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIGFuZCAobWluLXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdGFibGV0IHtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0LWRlc2t0b3Age1xuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufSJdfQ== */"], changeDetection: 0 });
    return ReportInfoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'report-info',
                templateUrl: './report-info.component.html',
                styleUrls: ['./report-info.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { prop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "C3FG":
/*!********************************************!*\
  !*** ./src/app/services/worker.service.ts ***!
  \********************************************/
/*! exports provided: WorkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerService", function() { return WorkerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Observable */ "Q1FS");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__);



var WorkerService = /** @class */ (function () {
    function WorkerService() {
        // Determine wether or not browser supports Transferable Objects
        // https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast
        this.supportsTransferableObjects = false;
        this.supportsTransferableObjects = "TextDecoder" in window && "TextEncoder" in window;
    }
    /**
     * WorkerService: This method is used to create a WebWorker with the following advantages:
     *
     * - No need of any external script file
     * - Runs script within a scope declared function
     * - Runs parallel to the Browser, supporting multiple CPU processes
     * - Transfers the data passed to the WebWorker using ArrayBuffers if it's supported
     * - Supports external JS plugins, which should be in assets/js/ folder
     *
     * WHEN YOU SHOULD USE IT:
     * - Use this WebWorker creator to highly optimize heavy processing operations without blocking the UI.
     * - The WebWorker instatiation takes 50-200ms, so don't use it if the operation is simple or fast enough.
     * - WebWorkers have no access to main UI context, so make sure you pass all data and scripts you need to run it.
     *
     * @param {Function} workerFunction - Function used inside the WebWorker, MUST use returnResult function to get the result
     * @param {any} data - to be passed to the function in the WebWorker.
     * @param {string[]} scripts - Array of JS script files to preload in the WebWorker, the scripts have to be located in assets/js/
     *
     * @returns Observable<T>
     */
    WorkerService.prototype.run = function (workerFunction, data, scripts) {
        var _this = this;
        if (scripts === void 0) { scripts = []; }
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            // Convert passed function to string
            var resolveString = workerFunction.toString();
            // Get current host path for the plugin collector
            var path = location.protocol + "//" + location.host;
            if (_this.supportsTransferableObjects) {
                _this.encoding = new TextDecoder('utf-8').encoding;
            }
            var webWorkerTemplate = '';
            // Fetch scripts inside the WebWorker using importScripts
            if (scripts.length > 0) {
                console.log("The WebWorker will fetch these scripts:");
                scripts.forEach(function (script) {
                    console.log(path + "/assets/js/" + script + ".js");
                });
                var scriptFiles = scripts.map(function (script) { return "'" + path + "/assets/js/" + script + ".js'"; });
                webWorkerTemplate += "\n          importScripts(" + scriptFiles.join(',') + ");\n        ";
            }
            // Create the WebWorker Process using the function string and decoding the ArrayBuffer if
            // Transferable Objects are supported
            if (_this.supportsTransferableObjects) {
                webWorkerTemplate += "\n          var decoder = new TextDecoder('utf-8');\n          self.addEventListener('message', function(e) {\n            var data = JSON.parse(decoder.decode(e.data));\n            var encoder = new TextEncoder();\n            postMessage(encoder.encode(JSON.stringify((" + resolveString + ")(data))));\n            close();\n          });\n        ";
            }
            else {
                webWorkerTemplate += "\n        self.addEventListener('message', function(e) {\n          postMessage(encoder.encode(JSON.stringify((" + resolveString + ")(e.data))));\n          close();\n        });\n      ";
            }
            // Create WebWorker Blob without external file
            var blob = new Blob([webWorkerTemplate], { type: 'text/javascript' });
            // The following line takes 50-200ms
            var worker = new Worker(URL.createObjectURL(blob));
            // On finish handler
            worker.onmessage = function (_a) {
                var data = _a.data;
                if (_this.supportsTransferableObjects) {
                    observer.next(_this.fromArrayBuffer(data));
                }
                else {
                    observer.next(data);
                }
                worker.terminate();
                observer.complete();
            };
            // On error handler
            worker.onerror = function (event) {
                observer.error(event);
                observer.complete();
            };
            // Start the WebWorker by emitting data message
            if (_this.supportsTransferableObjects) {
                var buffer = _this.toArrayBuffer(data);
                worker.postMessage(buffer, [buffer.buffer]);
            }
            else {
                worker.postMessage(data);
            }
        });
    };
    // Convert an ArrayBuffer to JSON
    WorkerService.prototype.fromArrayBuffer = function (buffer) {
        var decoder = new TextDecoder('utf-8');
        return JSON.parse(decoder.decode(buffer));
    };
    // Convert any kind of variable to ArrayBuffer
    WorkerService.prototype.toArrayBuffer = function (obj) {
        var txt = JSON.stringify(obj);
        var encoder = new TextEncoder();
        this.encoding = encoder.encoding;
        return encoder.encode(txt);
    };
    WorkerService.ɵfac = function WorkerService_Factory(t) { return new (t || WorkerService)(); };
    WorkerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkerService, factory: WorkerService.ɵfac, providedIn: 'root' });
    return WorkerService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "CVyY":
/*!****************************************!*\
  !*** ./src/app/state/tickets.state.ts ***!
  \****************************************/
/*! exports provided: UpdateTickets, SetMonthTickets, TicketsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTickets", function() { return UpdateTickets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMonthTickets", function() { return SetMonthTickets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsState", function() { return TicketsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");


var UpdateTickets = /** @class */ (function () {
    function UpdateTickets(payload) {
        this.payload = payload;
    }
    UpdateTickets.type = '[TICKETS] Update';
    return UpdateTickets;
}());

var SetMonthTickets = /** @class */ (function () {
    function SetMonthTickets(monthIndex, tickets) {
        this.monthIndex = monthIndex;
        this.tickets = tickets;
    }
    SetMonthTickets.type = '[TICKETS] Set Month Tickets';
    return SetMonthTickets;
}());

var TicketsState = /** @class */ (function () {
    function TicketsState() {
    }
    TicketsState.prototype.setConfig = function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        patchState(payload);
    };
    TicketsState.prototype.setMonthTickets = function (_a, _b) {
        var _c;
        var patchState = _a.patchState, getState = _a.getState;
        var monthIndex = _b.monthIndex, tickets = _b.tickets;
        patchState({
            ticketsBackup: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getState().ticketsBackup), (_c = {}, _c[monthIndex] = tickets, _c))
        });
    };
    TicketsState.StackedChart = function (state) {
        return state.chart;
    };
    TicketsState.Section1 = function (state) {
        return state.system.filter(function (row) { return row[0] == 'S1'; });
    };
    TicketsState.Section2 = function (state) {
        return state.system.filter(function (row) { return row[0] == 'S2'; });
    };
    TicketsState.Section3 = function (state) {
        return state.system.filter(function (row) { return row[0] == 'S3'; });
    };
    TicketsState.Section4 = function (state) {
        return state.system.filter(function (row) { return row[0] == 'S4'; });
    };
    TicketsState.Section5 = function (state) {
        return state.system.filter(function (row) { return row[0] == 'S5'; });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(UpdateTickets),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, UpdateTickets]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], TicketsState.prototype, "setConfig", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(SetMonthTickets),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, SetMonthTickets]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], TicketsState.prototype, "setMonthTickets", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], TicketsState, "StackedChart", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], TicketsState, "Section1", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], TicketsState, "Section2", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], TicketsState, "Section3", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], TicketsState, "Section4", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], TicketsState, "Section5", null);
    TicketsState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'tickets',
            defaults: {
                system: [],
                tickets: [],
                ticketsBackup: {},
                ticketsReduced: []
            }
        })
    ], TicketsState);
    return TicketsState;
}());



/***/ }),

/***/ "Clhl":
/*!***********************************************************************!*\
  !*** ./src/app/components/month-selector/month-selector.component.ts ***!
  \***********************************************************************/
/*! exports provided: MonthSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthSelectorComponent", function() { return MonthSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pipes/date-format.pipe */ "u7Z3");
/* harmony import */ var _pipes_date_parse_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pipes/date-parse.pipe */ "L3ee");










function MonthSelectorComponent_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "dateParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var month_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", month_r1)("disabled", ctx_r0.data.availableMonths.indexOf(month_r1) == -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, month_r1, "yyyy'M'M"), "MMM yyyy"));
} }
var MonthSelectorComponent = /** @class */ (function () {
    function MonthSelectorComponent(data) {
        this.data = data;
    }
    MonthSelectorComponent.prototype.handleMonth = function (month) {
        var index = this.data.availableMonths.findIndex(function (mon) { return mon === month; });
        this.data.month.next({
            month: month,
            index: index
        });
    };
    MonthSelectorComponent.ɵfac = function MonthSelectorComponent_Factory(t) { return new (t || MonthSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
    MonthSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonthSelectorComponent, selectors: [["cism-month-selector"]], decls: 4, vars: 4, consts: [[1, "no-underline"], ["panelClass", "month-selector", 3, "value", "selectionChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"]], template: function MonthSelectorComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function MonthSelectorComponent_Template_mat_select_selectionChange_1_listener($event) { return ctx.handleMonth($event.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MonthSelectorComponent_mat_option_3_Template, 4, 9, "mat-option", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.data.month).month);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.months);
        } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_6__["DateFormatPipe"], _pipes_date_parse_pipe__WEBPACK_IMPORTED_MODULE_7__["DateParsePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 45px;\n  background-color: #002442;\n  border-radius: 7px;\n  padding-left: 20px;\n  font-size: 1.2rem;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n}\n\n  cism-month-selector .mat-select-value-text {\n  font-size: 1.05rem;\n}\n\n  cism-month-selector .mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0;\n}\n\n  .no-underline .mat-form-field-underline {\n  display: none;\n}\n\n  .no-underline .mat-select-value {\n  color: rgba(255, 255, 255, 0.85);\n  padding-right: 10px;\n}\n\n  .no-underline .mat-select {\n  width: 100px;\n}\n\n  .no-underline .mat-select-arrow {\n  color: rgba(255, 255, 255, 0.85);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb250aC1zZWxlY3Rvci9tb250aC1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQ0hrQztFRElsQyxrQkNPaUI7RUROakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQ0N3QnFDO0FEMUJ2Qzs7QUFLQTtFQUNFLGtCQUFrQjtBQUZwQjs7QUFLQTtFQUNFLFVBQVU7QUFGWjs7QUFLQTtFQUNFLGFBQWE7QUFGZjs7QUFLQTtFQUNFLGdDQ3hCcUI7RUR5QnJCLG1CQUFtQjtBQUZyQjs7QUFLQTtFQUNFLFlBQVk7QUFGZDs7QUFLQTtFQUNFLGdDQ2pDcUI7QUQrQnZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb250aC1zZWxlY3Rvci9tb250aC1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCAnLi4vLi4vY29tbW9uL2NvbG9ycyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZW1pLWJsYWNrLTE7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbn1cblxuOjpuZy1kZWVwIGNpc20tbW9udGgtc2VsZWN0b3IgLm1hdC1zZWxlY3QtdmFsdWUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbn1cblxuOjpuZy1kZWVwIGNpc20tbW9udGgtc2VsZWN0b3IgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjo6bmctZGVlcCAubm8tdW5kZXJsaW5lIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46Om5nLWRlZXAgLm5vLXVuZGVybGluZSAubWF0LXNlbGVjdC12YWx1ZSB7XG4gIGNvbG9yOiAkc2VtaS13aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5uby11bmRlcmxpbmUgLm1hdC1zZWxlY3Qge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbjo6bmctZGVlcCAubm8tdW5kZXJsaW5lIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICRzZW1pLXdoaXRlO1xufSIsIlxuLy8gTWFpbiBjb2xvcnNcbiRiZy1jb2xvcjogcmdiKDAsMjIsNDApO1xuJHNlbWktd2hpdGU6IHJnYmEod2hpdGUsIC44NSk7XG4kc2VtaS1ibGFjay0xOiBsaWdodGVuKCRiZy1jb2xvciwgNSk7XG4kc2VtaS1ibGFjay0yOiBsaWdodGVuKCRiZy1jb2xvciwgOCk7XG4kaGVhZGVyLWJveDogJHNlbWktYmxhY2stMTtcbiRjb250ZW50LWJveDogJHNlbWktYmxhY2stMjtcblxuLy8gQ29sb3JzXG4kYmx1ZTogI2VmMzM0MDtcbiRncmV5OiAjZDNkM2QzO1xuJG9yYW5nZTogcmdiKDI0NywxNzQsMjEpO1xuXG4vLyBCb3JkZXJzXG4kYm9yZGVyLXJhZGl1czogN3B4O1xuXG4vLyBQcmlvcml0aWVzXG4kcHJpb3JpdHktaW1tZWRpYXRlOiAjQzEyNzJEO1xuJHByaW9yaXR5LXVyZ2VudDogI0YxNUEyNDtcbiRwcmlvcml0eS1ub3JtYWw6ICMyMkI1NzM7XG4kcHJpb3JpdHktaGlnaDogI0Y3OTMxRTtcblxuLy8gR3JhcGhpY3NcbiRncmFwaGljLWJsdWUtZGFyazogIzAzOWJlNTtcbiRncmFwaGljLWJsdWU6ICRibHVlO1xuJGdyYXBoaWMtb3JhbmdlOiAjZWYzMzQwO1xuJGdyYXBoaWMtdGVhbDogIzdlNTdjMjtcblxuLy8gU3RhdHVzZXNcbiRzdGF0dXMtYmFkOiAjRTUzOTM1O1xuJHN0YXR1cy1tZWRpdW06ICNGRkNBMjg7XG4kc3RhdHVzLWdvb2Q6ICM0Q0FGNTA7XG5cbi8vIFNoYWRvd3NcbiRib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsMCwwLC4zKTtcblxuLy8gVHJhbnNpdGlvbnNcbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0eSkge1xuICAgIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4vLyBNaXhpbnNcblxuJHRyaWdnZXI6IDYwMHB4O1xuJHRhYmxldDogMTEwMHB4O1xuXG5AbWl4aW4gaWUge1xuXHRAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBlZGdlIHtcbiAgICBAc3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0bykge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSBhbmQgKG1pbi13aWR0aDogJHRyaWdnZXIpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXRhYmxldCB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldC1kZXNrdG9wIHtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn0iXX0= */"], changeDetection: 0 });
    return MonthSelectorComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cism-month-selector',
                templateUrl: './month-selector.component.html',
                styleUrls: ['./month-selector.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "Dpyk":
/*!*****************************************!*\
  !*** ./src/app/pipes/to-string.pipe.ts ***!
  \*****************************************/
/*! exports provided: ToStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToStringPipe", function() { return ToStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ToStringPipe = /** @class */ (function () {
    function ToStringPipe() {
    }
    ToStringPipe.prototype.transform = function (value) {
        return value.toString();
    };
    ToStringPipe.ɵfac = function ToStringPipe_Factory(t) { return new (t || ToStringPipe)(); };
    ToStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toString", type: ToStringPipe, pure: true });
    return ToStringPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'toString'
            }]
    }], null, null); })();


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "b/SL");





var DataService = /** @class */ (function () {
    function DataService() {
        this.months = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Array(12).keys()).map(function (i) {
            var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subMonths"])(new Date(), i);
            return Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(date, "yyyy'M'MM");
        });
        this.availableMonths = [];
        this.disabledAnimations = false;
        // Used to don't calculate totals if comes from L1
        this.count = 0;
        this.percent = 0;
        this.barchart = [];
        this.loadingTickets = true;
        this.isMobile = false;
        this.hideClosed = false;
        this.pagination = [10, 20, 50, 100];
        this.isMobile = window.screen.width <= 800;
        this.opened = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.loading = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
    return DataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "I4Jp":
/*!******************************************!*\
  !*** ./src/app/pipes/limit-text.pipe.ts ***!
  \******************************************/
/*! exports provided: LimitTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitTextPipe", function() { return LimitTextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var LimitTextPipe = /** @class */ (function () {
    function LimitTextPipe() {
    }
    LimitTextPipe.prototype.transform = function (text, chars) {
        if (!text)
            return '';
        if (!chars)
            return text;
        if (text.length > chars) {
            return text.substring(0, chars) + '...';
        }
        else {
            return text;
        }
    };
    LimitTextPipe.ɵfac = function LimitTextPipe_Factory(t) { return new (t || LimitTextPipe)(); };
    LimitTextPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "limitText", type: LimitTextPipe, pure: true });
    return LimitTextPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LimitTextPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'limitText'
            }]
    }], null, null); })();


/***/ }),

/***/ "Jq0s":
/*!*********************************************************************!*\
  !*** ./src/app/components/stadistic-box/stadistic-box.component.ts ***!
  \*********************************************************************/
/*! exports provided: StadisticBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StadisticBoxComponent", function() { return StadisticBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var _services_tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/tools.service */ "6mc2");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @states/config.state */ "gGAk");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/Observable */ "Q1FS");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/combineLatest */ "yESu");
/* harmony import */ var rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");

















function StadisticBoxComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StadisticBoxComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var row_r1 = ctx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.goA(row_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 5, ctx_r0.go) + ": " + row_r1.name)("matRippleColor", ctx_r0.rippleColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("# of ", row_r1.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r1.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", row_r1.percent, "%");
} }
var StadisticBoxComponent = /** @class */ (function () {
    function StadisticBoxComponent(router, data, _store) {
        var _this = this;
        this.router = router;
        this.data = data;
        this._store = _store;
        this.subs = new _services_tools_service__WEBPACK_IMPORTED_MODULE_4__["SubSink"]();
        this.ngOnDestroy = function () { return _this.subs.unsubscribe(); };
        this.title = '';
        this.go = '';
        this.rows = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]([]);
        this.rippleColor = 'rgba(255,255,255,.06)';
    }
    StadisticBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.sink = this.data.month.pipe(Object(rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])(this._store.select(function (store) { return store.tickets.priority; }), this._store.select(function (store) { return store.tickets.status; }), this._store.select(function (store) { return store.tickets.type; }), this._store.select(function (store) { return store.tickets.service; }))).subscribe(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 5), month = _b[0], priority = _b[1], status = _b[2], type = _b[3], service = _b[4];
            return _this.rollup(priority, status, type, service);
        });
    };
    StadisticBoxComponent.prototype.goA = function (row) {
        this.data.count = row.count;
        this.data.percent = row.percent;
        this.data.loading.next(true);
        this.router.navigate(['tickets', this.go, row.name]);
    };
    StadisticBoxComponent.prototype.rollup = function (priority, status, type, service) {
        var month = this.data.month.getValue().month;
        var stats = [];
        switch (this.go) {
            case "priority":
                stats = priority;
                break;
            case "status":
                stats = status;
                break;
            case "type":
                stats = type;
                break;
            case "service":
                stats = service;
                break;
        }
        stats = stats.filter(function (row) { return row[1] == month; });
        var newRows = [];
        var length = stats.length;
        var total = stats.reduce(function (r, a) { return r + parseInt(a[3], 10); }, 0);
        var lang = this._store.selectSnapshot(function (state) { return state.config.language; });
        for (var i = 0; i < length; i++) {
            newRows.push({
                name: stats[i][2],
                count: stats[i][3].toLocaleString(lang),
                percent: (stats[i][3] * 100 / total).toFixed(0)
            });
        }
        this.rows.next(newRows);
    };
    StadisticBoxComponent.ɵfac = function StadisticBoxComponent_Factory(t) { return new (t || StadisticBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
    StadisticBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StadisticBoxComponent, selectors: [["cism-stadistic-box"]], inputs: { title: "title", go: "go" }, decls: 5, vars: 4, consts: [[1, "title"], [1, "stats"], ["class", "stat", "matTooltipPosition", "before", "matTooltipClass", "before", "matRipple", "", 3, "matTooltip", "matRippleColor", "click", 4, "ngFor", "ngForOf"], ["matTooltipPosition", "before", "matTooltipClass", "before", "matRipple", "", 1, "stat", 3, "matTooltip", "matRippleColor", "click"], [1, "stat-name"], [1, "stat-primary-value"], [1, "stat-secondary-value"]], template: function StadisticBoxComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, StadisticBoxComponent_div_3_Template, 8, 7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx.rows));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRipple"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["TitleCasePipe"]], styles: ["[_nghost-%COMP%] {\n  -ms-flex: 0 50%;\n      flex: 0 50%;\n  -ms-flex: 0 calc(50% - 20px);\n      flex: 0 calc(50% - 20px);\n  height: calc(50% - 30px);\n  max-width: calc(50% - 20px);\n  border-radius: 7px;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n  background-color: #002442;\n  padding: 20px;\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    -ms-flex: 1 100%;\n        flex: 1 100%;\n    height: auto;\n    background-color: transparent;\n    box-shadow: none;\n    margin-top: 0 !important;\n    margin-bottom: 0;\n    max-width: 100%;\n    padding: 20px 10px;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  [_nghost-%COMP%] {\n    background-color: transparent;\n    box-shadow: none;\n    height: auto;\n  }\n}\n\n.title[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  font-size: 1.35rem;\n  padding-bottom: 15px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n@media (max-width: 600px) {\n  .title[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .title[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n\n.stats[_ngcontent-%COMP%] {\n  height: calc(100% - 36px);\n  margin: 0 -20px;\n  margin-top: 15px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n@media (max-width: 600px) {\n  .stats[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .stats[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n.stats[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n.stats[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #de1120;\n}\n\n.stats[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n\n.stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 20px;\n  line-height: 35px;\n  height: 35px;\n  -ms-touch-action: auto !important;\n      touch-action: auto !important;\n  cursor: pointer;\n  font-size: 1.2rem;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n    margin-right: 1px;\n  }\n}\n\n@media (max-width: 600px) {\n  .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n    margin-bottom: 7px;\n    background-color: #002442;\n    border-radius: 5px;\n  }\n  .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:hover {\n    background-color: #003a6a;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n    margin-bottom: 7px;\n    background-color: #002442;\n    border-radius: 5px;\n  }\n  .stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:hover {\n    background-color: #003a6a;\n  }\n}\n\n.stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:hover {\n  background-color: #002f56;\n}\n\n.stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-name[_ngcontent-%COMP%] {\n  -ms-flex: 1 40%;\n      flex: 1 40%;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  max-width: 40%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-primary-value[_ngcontent-%COMP%] {\n  -ms-flex: 1 30%;\n      flex: 1 30%;\n  text-align: right;\n  color: #ef3340;\n  max-width: 30%;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n.stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .stat-secondary-value[_ngcontent-%COMP%] {\n  -ms-flex: 1 30%;\n      flex: 1 30%;\n  text-align: right;\n  color: #f7ae15;\n  max-width: 30%;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFkaXN0aWMtYm94L3N0YWRpc3RpYy1ib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFXO01BQVgsV0FBVztFQUNYLDRCQUF3QjtNQUF4Qix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQWdCM0Isa0JDUmlCO0VEU2pCLDBDQ1dxQztFRFZyQyx5QkNyQmtDO0VEc0JsQyxhQUFhO0FBakJmOztBQzRESTtFRGxFSjtJQU1JLGdCQUFZO1FBQVosWUFBWTtJQUNaLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtFQUtwQjtBQUNGOztBQ3FESTtFRHhFSjtJQWdCSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFRZDtBQUNGOztBQURBO0VBQ0UsaURDM0JxQjtFRDRCckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUlyQjs7QUM4Qkk7RUR4Q0o7SUFRSSxtQkFBbUI7RUFPckI7QUFDRjs7QUM4Qkk7RUQ5Q0o7SUFRSSxtQkFBbUI7RUFhckI7QUFDRjs7QUFWQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFhcEI7O0FDVUk7RUQ1Qko7SUFPSSxTQUFTO0VBZ0JYO0FBQ0Y7O0FDVUk7RURsQ0o7SUFPSSxTQUFTO0VBc0JYO0FBQ0Y7O0FBOUJBO0VBVUksVUFBVTtBQXdCZDs7QUFsQ0E7RUFhTSx5QkFBbUM7QUF5QnpDOztBQXRDQTtFQWdCTSw2QkFBNkI7QUEwQm5DOztBQTFDQTtFQW1CSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQ0FBNkI7TUFBN0IsNkJBQTZCO0VBWTdCLGVBQWU7RUFDZixpQkFBaUI7QUFnQnJCOztBQTVCSTtFQXhCSjtJQXlCTSxpQkFBaUI7RUFnQ3JCO0FBQ0Y7O0FDOUJJO0VENUJKO0lBNEJNLGtCQUFrQjtJQUNsQix5QkNsRThCO0lEbUU5QixrQkFBa0I7RUFtQ3RCO0VBakVGO0lBZ0NRLHlCQUEyQztFQW9DakQ7QUFDRjs7QUNuQ0k7RURsQ0o7SUE0Qk0sa0JBQWtCO0lBQ2xCLHlCQ2xFOEI7SURtRTlCLGtCQUFrQjtFQThDdEI7RUE1RUY7SUFnQ1EseUJBQTJDO0VBK0NqRDtBQUNGOztBQWhGQTtFQXNDTSx5QkFBMkM7QUE4Q2pEOztBQXBGQTtFQXlDTSxlQUFXO01BQVgsV0FBVztFQUNYLHdCQUFvQjtNQUFwQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBK0N6Qjs7QUE3RkE7RUFpRE0sZUFBVztNQUFYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0NsRlE7RURtRlIsY0FBYztFQUNkLHdCQUFvQjtNQUFwQixvQkFBb0I7QUFnRDFCOztBQXJHQTtFQXdETSxlQUFXO01BQVgsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQ3ZGa0I7RUR3RmxCLGNBQWM7RUFDZCx3QkFBb0I7TUFBcEIsb0JBQW9CO0FBaUQxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhZGlzdGljLWJveC9zdGFkaXN0aWMtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi8uLi9jb21tb24vY29sb3JzJztcblxuOmhvc3Qge1xuICBmbGV4OiAwIDUwJTtcbiAgZmxleDogMCBjYWxjKDUwJSAtIDIwcHgpO1xuICBoZWlnaHQ6IGNhbGMoNTAlIC0gMzBweCk7XG4gIG1heC13aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICBmbGV4OiAxIDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgfVxuICBAaW5jbHVkZSB0YWJsZXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlbWktYmxhY2stMTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRpdGxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJHNlbWktd2hpdGUsIC4xKTtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIEBpbmNsdWRlIG1vYmlsZS10YWJsZXQge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cblxuLnN0YXRzIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgbWFyZ2luOiAwIC0yMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIEBpbmNsdWRlIG1vYmlsZS10YWJsZXQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDRweDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwKTtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAuc3RhdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHRvdWNoLWFjdGlvbjogYXV0byAhaW1wb3J0YW50O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86MCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgfVxuICAgIEBpbmNsdWRlIG1vYmlsZS10YWJsZXQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlbWktYmxhY2stMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRzZW1pLWJsYWNrLTIsIDUpO1xuICAgICAgfVxuICAgIH1cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRzZW1pLWJsYWNrLTIsIDEpO1xuICAgIH1cbiAgICAuc3RhdC1uYW1lIHtcbiAgICAgIGZsZXg6IDEgNDAlO1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICBtYXgtd2lkdGg6IDQwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICAgIC5zdGF0LXByaW1hcnktdmFsdWUge1xuICAgICAgZmxleDogMSAzMCU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGNvbG9yOiAkYmx1ZTtcbiAgICAgIG1heC13aWR0aDogMzAlO1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgfVxuICAgIC5zdGF0LXNlY29uZGFyeS12YWx1ZSB7XG4gICAgICBmbGV4OiAxIDMwJTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgY29sb3I6ICRvcmFuZ2U7XG4gICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIH1cbiAgfVxufVxuIiwiXG4vLyBNYWluIGNvbG9yc1xuJGJnLWNvbG9yOiByZ2IoMCwyMiw0MCk7XG4kc2VtaS13aGl0ZTogcmdiYSh3aGl0ZSwgLjg1KTtcbiRzZW1pLWJsYWNrLTE6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA1KTtcbiRzZW1pLWJsYWNrLTI6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA4KTtcbiRoZWFkZXItYm94OiAkc2VtaS1ibGFjay0xO1xuJGNvbnRlbnQtYm94OiAkc2VtaS1ibGFjay0yO1xuXG4vLyBDb2xvcnNcbiRibHVlOiAjZWYzMzQwO1xuJGdyZXk6ICNkM2QzZDM7XG4kb3JhbmdlOiByZ2IoMjQ3LDE3NCwyMSk7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItcmFkaXVzOiA3cHg7XG5cbi8vIFByaW9yaXRpZXNcbiRwcmlvcml0eS1pbW1lZGlhdGU6ICNDMTI3MkQ7XG4kcHJpb3JpdHktdXJnZW50OiAjRjE1QTI0O1xuJHByaW9yaXR5LW5vcm1hbDogIzIyQjU3MztcbiRwcmlvcml0eS1oaWdoOiAjRjc5MzFFO1xuXG4vLyBHcmFwaGljc1xuJGdyYXBoaWMtYmx1ZS1kYXJrOiAjMDM5YmU1O1xuJGdyYXBoaWMtYmx1ZTogJGJsdWU7XG4kZ3JhcGhpYy1vcmFuZ2U6ICNlZjMzNDA7XG4kZ3JhcGhpYy10ZWFsOiAjN2U1N2MyO1xuXG4vLyBTdGF0dXNlc1xuJHN0YXR1cy1iYWQ6ICNFNTM5MzU7XG4kc3RhdHVzLW1lZGl1bTogI0ZGQ0EyODtcbiRzdGF0dXMtZ29vZDogIzRDQUY1MDtcblxuLy8gU2hhZG93c1xuJGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwwLDAsLjMpO1xuXG4vLyBUcmFuc2l0aW9uc1xuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5KSB7XG4gICAgdHJhbnNpdGlvbjogJHByb3BlcnR5IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIE1peGluc1xuXG4kdHJpZ2dlcjogNjAwcHg7XG4kdGFibGV0OiAxMTAwcHg7XG5cbkBtaXhpbiBpZSB7XG5cdEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGVkZ2Uge1xuICAgIEBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG1vYmlsZSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0cmlnZ2VyKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIGFuZCAobWluLXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdGFibGV0IHtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0LWRlc2t0b3Age1xuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufSJdfQ== */"], changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_states_config_state__WEBPACK_IMPORTED_MODULE_6__["ConfigState"].getLanguage),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"])
    ], StadisticBoxComponent.prototype, "language$", void 0);
    return StadisticBoxComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StadisticBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'cism-stadistic-box',
                templateUrl: './stadistic-box.component.html',
                styleUrls: ['./stadistic-box.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, { language$: [], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], go: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "KY19":
/*!*********************************************!*\
  !*** ./src/app/services/reports.service.ts ***!
  \*********************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Observable */ "Q1FS");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/observable/forkJoin */ "Ljqs");
/* harmony import */ var rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools.service */ "6mc2");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @states/config.state */ "gGAk");
/* harmony import */ var _states_tickets_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @states/tickets.state */ "CVyY");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "vLqr");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "6aLS");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_15__);






















var ReportsService = /** @class */ (function () {
    function ReportsService(http, data, _tools, _snack, _store) {
        this.http = http;
        this.data = data;
        this._tools = _tools;
        this._snack = _snack;
        this._store = _store;
        this.corpintra = false;
        this.corpintra = location.hostname.indexOf('corpintra.net') > -1;
    }
    ReportsService.prototype.transcode = function (data) {
        var xotree = new XML.ObjTree();
        var dumper = new JKL.Dumper();
        return JSON.parse(dumper.dump(xotree.parseXML(data)));
    };
    ReportsService.prototype.getReportOverallData = function (key) {
        var config = this._store.selectSnapshot(function (state) { return state.config; });
        var keyData = config.reports[config.scenario][key];
        return this.getReportData(keyData.id, keyData.selector, keyData.fallback, keyData.live);
    };
    ReportsService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.data.disabledAnimations = _this._tools.isIE();
            document.querySelector('.progress-value').style.width = '35%';
            _this.http.get('assets/config.json').subscribe(function (config) {
                document.querySelector('.progress-value').style.width = '40%';
                document.querySelector('.progress-value').style.width = '45%';
                config.language = localStorage.getItem('lang') || config.language;
                if (location.hostname.indexOf('corpintra.net') == -1 && !config.corpintraMode) {
                    config.portalFolder = '/analytics/bi/';
                }
                if (!!localStorage.getItem('hideClosed'))
                    _this.data.hideClosed = localStorage.getItem('hideClosed') === 'yes';
                document.querySelector('.progress-value').style.width = '50%';
                config.system.enable = localStorage.getItem('enableExperimentalFeatures') === 'yes' || false;
                if (config.system.enable) {
                    _this._snack.open('CISM is running with Experimental Features enabled.', 'OK');
                }
                config.displayedColumns = JSON.parse(localStorage.getItem('displayedColumns')) || config.displayedColumnsDefault;
                if (config.ticketOptions)
                    config.displayedColumns.push('options');
                document.querySelector('.progress-value').style.transitionDuration = config.delay + 'ms';
                document.querySelector('.progress-value').style.width = '100%';
                _this._tools.log('Config', config);
                _this._store.dispatch(new _states_config_state__WEBPACK_IMPORTED_MODULE_11__["SetConfig"](config));
                _this.login().then(function (_) { return resolve(); });
            });
        });
    };
    ReportsService.prototype.login = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var config = _this._store.selectSnapshot(function (state) { return state.config; });
            if (location.hostname.indexOf('corpintra.net') == -1 && !config.corpintraMode) {
                _this.loadInitialReport().then(function (_) { return resolve(); });
            }
            else {
                console.log("Sending XHR to /analytics/bi/v1/notifications");
                _this.http.get("" + config.fullUrl + config.portalFolder + config.protectedUrl, { observe: 'response', responseType: 'text' })
                    .subscribe(function (_) {
                    console.log("XSRF Token was valid, load CISM");
                    _this.loadInitialReport().then(function (_) { return resolve(); });
                }, function (err) {
                    console.log(err);
                    // Login
                    console.log("XSRF Token was invalid or undefined, load Login");
                    var app = document.querySelector('cism-root');
                    app.style.display = 'none';
                    var iframe = document.createElement("iframe");
                    iframe.style.height = '100%';
                    iframe.style.width = '100%';
                    iframe.style.border = '0';
                    iframe.src = "" + config.fullUrl + config.portalFolder + "?pathRef=.public_folders%2FIWM_BI%2FIWM_BI%2FAMVARA_triggerCISM&ui_appbar=false&ui_navbar=false&format=HTML&Download=false";
                    document.body.appendChild(iframe);
                    // AMVARA_triggerCISM sended login is done
                    window.top.document.addEventListener('complete', function () {
                        console.log("Login done, load CISM");
                        var app = document.querySelector('cism-root');
                        app.style.removeProperty('display');
                        localStorage.setItem('cookies', iframe.contentWindow.document.cookie);
                        window.top.document.body.querySelector('iframe').remove();
                        // Make initial request to check user permissions
                        _this.getReportOverallData('barchart').subscribe(function (success) {
                            _this.loadInitialReport().then(function (_) { return resolve(); });
                        }, function (error) {
                            alert(error);
                        });
                    });
                });
            }
        });
    };
    ReportsService.prototype.loadInitialReport = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var config = _this._store.selectSnapshot(function (state) { return state.config; });
            document.querySelector('.progress-value').style.width = '5%';
            var jobs = [
                _this.getReportOverallData('barchart'),
                _this.getReportOverallData('overview_prio'),
                _this.getReportOverallData('overview_service'),
                _this.getReportOverallData('overview_silt'),
                _this.getReportOverallData('overview_status'),
                _this.getReportOverallData('overview_type'),
                _this.getReportOverallData('overview_count')
            ];
            if (config.system.enable) {
                jobs.push(_this.getReportData(config.reports[config.scenario].allMonths, config.reports[config.scenario].monthsSelector, 'Mobile_Tickets_List.csv', false));
                jobs.push(_this.getReportOverallData('system'));
            }
            rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_5__["forkJoin"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(jobs)).subscribe(function (data) {
                var tickets = [];
                var ticketsReduced = [];
                var systemRows = [];
                if (config.system.enable) {
                    tickets = data[7];
                    ticketsReduced = tickets.map(function (ticket) {
                        return config.importantColumns.reduce(function (r, a) {
                            r.push(ticket[a]);
                            return r;
                        }, []);
                    });
                    if (config.excludeDatesFuture) {
                        tickets = tickets.filter(function (row) { return !Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["isAfter"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["parse"])(row[2], 'dd.MM.yyyy HH:mm', new Date()), new Date()); });
                    }
                    systemRows = data[8];
                    if (config.excludeDatesFuture) {
                        systemRows = systemRows.filter(function (row) { return !Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["isAfter"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["parse"])(row[1], 'MM/dd/yyyy', new Date()), new Date()); });
                    }
                    // Replace comma separated numbers with dot decimal notation
                    var indexes_1 = [2, 3, 4, 5, 6];
                    systemRows = systemRows.map(function (row) {
                        var copy = row;
                        if (['S1', 'S4'].includes(copy[0])) {
                            // Iterate each index, which they should be a number
                            indexes_1.forEach(function (index) {
                                if (typeof copy[index] !== 'string') {
                                    copy[index] = copy[index].toString();
                                }
                                copy[index] = parseFloat(copy[index].replace(/\,/g, '.'));
                            });
                        }
                        return copy;
                    });
                }
                _this.data.availableMonths = data[6].map(function (row) { return row[0]; }).reverse();
                var currentMonth = _this.data.months.filter(function (month) { return _this.data.availableMonths.indexOf(month) > -1; })[0];
                var currentMonthIndex = _this.data.months.findIndex(function (month) { return month == currentMonth; });
                _this.data.month = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({
                    month: currentMonth,
                    index: currentMonthIndex
                });
                _this._store.dispatch(new _states_tickets_state__WEBPACK_IMPORTED_MODULE_12__["UpdateTickets"]({
                    chart: data[0],
                    priority: data[1],
                    service: data[2],
                    silt: data[3],
                    status: data[4],
                    type: data[5],
                    overall: data[6],
                    tickets: tickets,
                    ticketsReduced: ticketsReduced,
                    system: systemRows
                }));
                resolve();
            });
        });
    };
    ReportsService.prototype.getReportData = function (ReportID, selector, fallback, live) {
        var _this = this;
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var config = _this._store.selectSnapshot(function (state) { return state.config; });
            if (_this.corpintra || config.corpintraMode) {
                var request = _this.http.get("" + config.fullUrl + config.portalFolder + "v1/objects/" + ReportID + "/versions").pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_14__["map"])(function (json) {
                    if (json.data.length === 0) {
                        alert('Looks like you don\'t have access to CISM');
                        Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_13__["throwError"])('permission_denied');
                    }
                    return "" + config.fullUrl + json.data[0]._meta.links.outputs.url;
                }), // Get outputs url
                Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_15__["switchMap"])(function (link) { return _this.http.get(link); }), // Return the outputs response json
                Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_14__["map"])(function (json) { return "" + config.fullUrl + json.data[0]._meta.links.content.url; }), // Get the last saved output url
                Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_15__["switchMap"])(function (link) { return _this.http.get(link, { responseType: 'text' }); }), // Return the content response as HTML
                Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_14__["map"])(function (json) { return _this.htmlToJson(json, selector); }) // Convert HTML to JSON
                );
                if (live) {
                    request = _this.http.get("" + config.fullUrl + config.portalFolder + "v1/disp/rds/reportData/report/" + ReportID + "?v=3&async=OFF&fmt=CSV", { responseType: 'text' }).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_14__["map"])(function (json) { return _this.csvToJson(json); }) // Convert CSV to JSON
                    );
                }
                request.subscribe(function (json) {
                    observer.next(json);
                    observer.complete();
                }, function (err) {
                    if (config.system.enable) {
                        _this.giveFallback(fallback, observer);
                        console.log(ReportID + " is running in fallback mode");
                    }
                    else {
                        console.log(err);
                        observer.complete();
                    }
                });
            }
            else {
                _this.giveFallback(fallback, observer);
            }
        });
    };
    ReportsService.prototype.giveFallback = function (fallback, observer) {
        var _this = this;
        this.http.get('assets/reports/' + fallback, { responseType: 'text' })
            .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_14__["map"])(function (data) { return _this.csvToJson(data); }))
            .subscribe(function (data) {
            observer.next(data);
            observer.complete();
        });
    };
    ReportsService.prototype.htmlToJson = function (data, element) {
        var htmlDoc = new DOMParser().parseFromString(data, "text/html");
        var table = htmlDoc.querySelectorAll(element);
        var rows = [];
        for (var i = 0; i < table.length; i++) {
            var row = [];
            for (var t = 0; t < table[i].childNodes.length; t++) {
                row.push(table[i].childNodes[t].innerText);
            }
            rows.push(row);
        }
        rows.shift();
        return rows;
    };
    ReportsService.prototype.csvToJson = function (data) {
        var rows = [];
        var lines = data.split('\n');
        lines.shift();
        lines.forEach(function (line) {
            if (line.length > 0) {
                var newRow_1 = [];
                line.split(';').forEach(function (element) {
                    newRow_1.push(isNaN(element) ? element : +element);
                });
                rows.push(newRow_1);
            }
        });
        return rows;
    };
    ReportsService.ɵfac = function ReportsService_Factory(t) { return new (t || ReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_tools_service__WEBPACK_IMPORTED_MODULE_7__["ToolsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_10__["Store"])); };
    ReportsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReportsService, factory: ReportsService.ɵfac });
    return ReportsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _tools_service__WEBPACK_IMPORTED_MODULE_7__["ToolsService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["Store"] }]; }, null); })();


/***/ }),

/***/ "L0ja":
/*!************************!*\
  !*** ./src/parsers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Plugins
// Convert XML to JSON
// ========================================================================
//  XML.ObjTree -- XML source code from/to JavaScript object like E4X
// ========================================================================
var XML = function XML() {}; //  constructor


XML.ObjTree = function () {
  return this;
}; //  class variables


XML.ObjTree.VERSION = "0.23"; //  object prototype

XML.ObjTree.prototype.xmlDecl = '<?xml version="1.0" encoding="UTF-8" ?>\n';
XML.ObjTree.prototype.attr_prefix = '-'; //  method: parseXML( xmlsource )

XML.ObjTree.prototype.parseXML = function (xml) {
  var root;

  if (window.DOMParser) {
    var xmldom = new DOMParser(); //      xmldom.async = false;           // DOMParser is always sync-mode

    var dom = xmldom.parseFromString(xml, "application/xml");
    if (!dom) return;
    root = dom.documentElement;
  } else if (window.ActiveXObject) {
    xmldom = new ActiveXObject('Microsoft.XMLDOM');
    xmldom.async = false;
    xmldom.loadXML(xml);
    root = xmldom.documentElement;
  }

  if (!root) return;
  return this.parseDOM(root);
}; //  method: parseHTTP( url, options, callback )


XML.ObjTree.prototype.parseHTTP = function (url, options, callback) {
  var myopt = {};

  for (var key in options) {
    myopt[key] = options[key]; // copy object
  }

  if (!myopt.method) {
    if (typeof myopt.postBody == "undefined" && typeof myopt.postbody == "undefined" && typeof myopt.parameters == "undefined") {
      myopt.method = "get";
    } else {
      myopt.method = "post";
    }
  }

  if (callback) {
    myopt.asynchronous = true; // async-mode

    var __this = this;

    var __func = callback;
    var __save = myopt.onComplete;

    myopt.onComplete = function (trans) {
      var tree;

      if (trans && trans.responseXML && trans.responseXML.documentElement) {
        tree = __this.parseDOM(trans.responseXML.documentElement);
      }

      __func(tree, trans);

      if (__save) __save(trans);
    };
  } else {
    myopt.asynchronous = false; // sync-mode
  }

  var trans;

  if (typeof HTTP != "undefined" && HTTP.Request) {
    myopt.uri = url;
    var req = new HTTP.Request(myopt); // JSAN

    if (req) trans = req.transport;
  } else if (typeof Ajax != "undefined" && Ajax.Request) {
    var req = new Ajax.Request(url, myopt); // ptorotype.js

    if (req) trans = req.transport;
  }

  if (callback) return trans;

  if (trans && trans.responseXML && trans.responseXML.documentElement) {
    return this.parseDOM(trans.responseXML.documentElement);
  }
}; //  method: parseDOM( documentroot )


XML.ObjTree.prototype.parseDOM = function (root) {
  if (!root) return;
  this.__force_array = {};

  if (this.force_array) {
    for (var i = 0; i < this.force_array.length; i++) {
      this.__force_array[this.force_array[i]] = 1;
    }
  }

  var json = this.parseElement(root); // parse root node

  if (this.__force_array[root.nodeName]) {
    json = [json];
  }

  if (root.nodeType != 11) {
    // DOCUMENT_FRAGMENT_NODE
    var tmp = {};
    tmp[root.nodeName] = json; // root nodeName

    json = tmp;
  }

  return json;
}; //  method: parseElement( element )


XML.ObjTree.prototype.parseElement = function (elem) {
  //  COMMENT_NODE
  if (elem.nodeType == 7) {
    return;
  } //  TEXT_NODE CDATA_SECTION_NODE


  if (elem.nodeType == 3 || elem.nodeType == 4) {
    var bool = elem.nodeValue.match(/[^\x00-\x20]/);
    if (bool == null) return; // ignore white spaces

    return elem.nodeValue;
  }

  var retval;
  var cnt = {}; //  parse attributes

  if (elem.attributes && elem.attributes.length) {
    retval = {};

    for (var i = 0; i < elem.attributes.length; i++) {
      var key = elem.attributes[i].nodeName;
      if (typeof key != "string") continue;
      var val = elem.attributes[i].nodeValue;
      if (!val) continue;
      key = this.attr_prefix + key;
      if (typeof cnt[key] == "undefined") cnt[key] = 0;
      cnt[key]++;
      this.addNode(retval, key, cnt[key], val);
    }
  } //  parse child nodes (recursive)


  if (elem.childNodes && elem.childNodes.length) {
    var textonly = true;
    if (retval) textonly = false; // some attributes exists

    for (var i = 0; i < elem.childNodes.length && textonly; i++) {
      var ntype = elem.childNodes[i].nodeType;
      if (ntype == 3 || ntype == 4) continue;
      textonly = false;
    }

    if (textonly) {
      if (!retval) retval = "";

      for (var i = 0; i < elem.childNodes.length; i++) {
        retval += elem.childNodes[i].nodeValue;
      }
    } else {
      if (!retval) retval = {};

      for (var i = 0; i < elem.childNodes.length; i++) {
        var key = elem.childNodes[i].nodeName;
        if (typeof key != "string") continue;
        var val = this.parseElement(elem.childNodes[i]);
        if (!val) continue;
        if (typeof cnt[key] == "undefined") cnt[key] = 0;
        cnt[key]++;
        this.addNode(retval, key, cnt[key], val);
      }
    }
  }

  return retval;
}; //  method: addNode( hash, key, count, value )


XML.ObjTree.prototype.addNode = function (hash, key, cnts, val) {
  if (this.__force_array[key]) {
    if (cnts == 1) hash[key] = [];
    hash[key][hash[key].length] = val; // push
  } else if (cnts == 1) {
    // 1st sibling
    hash[key] = val;
  } else if (cnts == 2) {
    // 2nd sibling
    hash[key] = [hash[key], val];
  } else {
    // 3rd sibling and more
    hash[key][hash[key].length] = val;
  }
}; //  method: writeXML( tree )


XML.ObjTree.prototype.writeXML = function (tree) {
  var xml = this.hash_to_xml(null, tree);
  return this.xmlDecl + xml;
}; //  method: hash_to_xml( tagName, tree )


XML.ObjTree.prototype.hash_to_xml = function (name, tree) {
  var elem = [];
  var attr = [];

  for (var key in tree) {
    if (!tree.hasOwnProperty(key)) continue;
    var val = tree[key];

    if (key.charAt(0) != this.attr_prefix) {
      if (typeof val == "undefined" || val == null) {
        elem[elem.length] = "<" + key + " />";
      } else if (typeof val == "object" && val.constructor == Array) {
        elem[elem.length] = this.array_to_xml(key, val);
      } else if (typeof val == "object") {
        elem[elem.length] = this.hash_to_xml(key, val);
      } else {
        elem[elem.length] = this.scalar_to_xml(key, val);
      }
    } else {
      attr[attr.length] = " " + key.substring(1) + '="' + this.xml_escape(val) + '"';
    }
  }

  var jattr = attr.join("");
  var jelem = elem.join("");

  if (typeof name == "undefined" || name == null) {// no tag
  } else if (elem.length > 0) {
    if (jelem.match(/\n/)) {
      jelem = "<" + name + jattr + ">\n" + jelem + "</" + name + ">\n";
    } else {
      jelem = "<" + name + jattr + ">" + jelem + "</" + name + ">\n";
    }
  } else {
    jelem = "<" + name + jattr + " />\n";
  }

  return jelem;
}; //  method: array_to_xml( tagName, array )


XML.ObjTree.prototype.array_to_xml = function (name, array) {
  var out = [];

  for (var i = 0; i < array.length; i++) {
    var val = array[i];

    if (typeof val == "undefined" || val == null) {
      out[out.length] = "<" + name + " />";
    } else if (typeof val == "object" && val.constructor == Array) {
      out[out.length] = this.array_to_xml(name, val);
    } else if (typeof val == "object") {
      out[out.length] = this.hash_to_xml(name, val);
    } else {
      out[out.length] = this.scalar_to_xml(name, val);
    }
  }

  return out.join("");
}; //  method: scalar_to_xml( tagName, text )


XML.ObjTree.prototype.scalar_to_xml = function (name, text) {
  if (name == "#text") {
    return this.xml_escape(text);
  } else {
    return "<" + name + ">" + this.xml_escape(text) + "</" + name + ">\n";
  }
}; //  method: xml_escape( text )


XML.ObjTree.prototype.xml_escape = function (text) {
  return (text + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};

var JKL = function JKL() {}; //  JKL.Dumper Constructor


JKL.Dumper = function () {
  return this;
}; //  Dump the data into JSON format


JKL.Dumper.prototype.dump = function (data, offset) {
  if (typeof offset == "undefined") offset = "";
  var nextoff = offset + "  ";

  switch (typeof data) {
    case "string":
      return '"' + this.escapeString(data) + '"';
      break;

    case "number":
      return data;
      break;

    case "boolean":
      return data ? "true" : "false";
      break;

    case "undefined":
      return "null";
      break;

    case "object":
      if (data == null) {
        return "null";
      } else if (data.constructor == Array) {
        var array = [];

        for (var i = 0; i < data.length; i++) {
          array[i] = this.dump(data[i], nextoff);
        }

        return "[\n" + nextoff + array.join(",\n" + nextoff) + "\n" + offset + "]";
      } else {
        var array = [];

        for (var key in data) {
          var val = this.dump(data[key], nextoff); //              if ( key.match( /[^A-Za-z0-9_]/ )) {

          key = '"' + this.escapeString(key) + '"'; //              }

          array[array.length] = key + ": " + val;
        }

        if (array.length == 1 && !array[0].match(/[\n\{\[]/)) {
          return "{ " + array[0] + " }";
        }

        return "{\n" + nextoff + array.join(",\n" + nextoff) + "\n" + offset + "}";
      }

      break;

    default:
      return data; // unsupported data type

      break;
  }
}; //  escape '\' and '"'


JKL.Dumper.prototype.escapeString = function (str) {
  return str.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"");
};

/***/ }),

/***/ "L3ee":
/*!******************************************!*\
  !*** ./src/app/pipes/date-parse.pipe.ts ***!
  \******************************************/
/*! exports provided: DateParsePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateParsePipe", function() { return DateParsePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "b/SL");



var DateParsePipe = /** @class */ (function () {
    function DateParsePipe() {
    }
    DateParsePipe.prototype.transform = function (date, format) {
        if (date === undefined) {
            return new Date();
        }
        if (!format) {
            var parsed = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["parse"])(date, 'MMM d, yyyy h:mm:ss a', new Date());
            if (!Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isValid"])(parsed))
                return new Date();
            return parsed;
        }
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["parse"])(date, format, new Date());
    };
    DateParsePipe.ɵfac = function DateParsePipe_Factory(t) { return new (t || DateParsePipe)(); };
    DateParsePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateParse", type: DateParsePipe, pure: true });
    return DateParsePipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateParsePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateParse'
            }]
    }], null, null); })();


/***/ }),

/***/ "LiT0":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/tickets/tickets.component.ts ***!
  \***************************************************************/
/*! exports provided: TicketsComponent, SolveTicket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsComponent", function() { return TicketsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolveTicket", function() { return SolveTicket; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/observable/combineLatest */ "FCKb");
/* harmony import */ var rxjs_internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/reports.service */ "KY19");
/* harmony import */ var _services_tools_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/tools.service */ "6mc2");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @states/config.state */ "gGAk");
/* harmony import */ var _states_tickets_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @states/tickets.state */ "CVyY");
/* harmony import */ var _components_month_selector_month_selector_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/month-selector/month-selector.component */ "Clhl");
/* harmony import */ var _components_overall_box_overall_box_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/overall-box/overall-box.component */ "057z");
/* harmony import */ var _components_silt_silt_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/silt/silt.component */ "kyBy");
/* harmony import */ var _components_classification_classification_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @components/classification/classification.component */ "pGiK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @pipes/group-by.pipe */ "zdZq");
/* harmony import */ var _pipes_fix_filter_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @pipes/fix-filter.pipe */ "RPkx");
/* harmony import */ var _pipes_ru_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @pipes/ru.pipe */ "qfzh");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @pipes/date-ago.pipe */ "6Kw5");
/* harmony import */ var _pipes_date_parse_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @pipes/date-parse.pipe */ "L3ee");
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @pipes/date-format.pipe */ "u7Z3");
/* harmony import */ var _pipes_limit_text_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @pipes/limit-text.pipe */ "I4Jp");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
















































function TicketsComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TicketsComponent_ng_container_12_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.changeViewClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, ctx_r0.changeView) ? "none" : "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleColor", ctx_r0.rippleColor);
} }
function TicketsComponent_div_21_mat_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-checkbox", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TicketsComponent_div_21_mat_checkbox_1_Template_mat_checkbox_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); var prop_r42 = ctx.$implicit; var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r43.checkHandler(prop_r42.key, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "ru");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var prop_r42 = ctx.$implicit;
    var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r41.isChecked(prop_r42.key))("value", prop_r42.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, prop_r42.key));
} }
function TicketsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TicketsComponent_div_21_mat_checkbox_1_Template, 3, 5, "mat-checkbox", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var group_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r40);
} }
function TicketsComponent_mat_header_cell_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.ticketid"));
} }
function TicketsComponent_mat_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", element_r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r45.id);
} }
function TicketsComponent_mat_header_cell_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.create_date"));
} }
function TicketsComponent_mat_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "dateParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "dateParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, element_r46.create_date)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 9, element_r46.create_date), "dd.MM.yyyy HH:mm"));
} }
function TicketsComponent_mat_header_cell_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.modify_date"));
} }
function TicketsComponent_mat_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "dateParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "dateParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, element_r47.modify_date)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 9, element_r47.modify_date), "dd.MM.yyyy HH:mm"));
} }
function TicketsComponent_mat_header_cell_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.ticket_type"));
} }
var _c0 = function (a2) { return ["/tickets", "type", a2]; };
function TicketsComponent_mat_cell_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, element_r48.type))("matTooltip", element_r48.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r48.type);
} }
function TicketsComponent_mat_header_cell_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.priority"));
} }
var _c1 = function (a2) { return ["/tickets", "priority", a2]; };
function TicketsComponent_mat_cell_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, element_r49.priority))("matTooltip", element_r49.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "prio-" + element_r49.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r49.priority);
} }
function TicketsComponent_mat_header_cell_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.status"));
} }
var _c2 = function (a2) { return ["/tickets", "status", a2]; };
function TicketsComponent_mat_cell_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c2, element_r50.status))("matTooltip", element_r50.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r50.status);
} }
function TicketsComponent_mat_header_cell_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.description"));
} }
function TicketsComponent_mat_cell_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "limitText");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", element_r51.description)("matTooltip", element_r51.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 3, element_r51.description, 30));
} }
function TicketsComponent_mat_header_cell_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.external"));
} }
function TicketsComponent_mat_cell_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", element_r52.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r52.external);
} }
function TicketsComponent_mat_header_cell_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.classification"));
} }
function TicketsComponent_mat_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", element_r53.classification);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r53.classification);
} }
function TicketsComponent_mat_header_cell_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.component"));
} }
function TicketsComponent_mat_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", element_r54.component);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r54.component);
} }
function TicketsComponent_mat_header_cell_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.servicegroup"));
} }
function TicketsComponent_mat_cell_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", element_r55.service_group);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r55.service_group);
} }
function TicketsComponent_mat_header_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.MonthID"));
} }
function TicketsComponent_mat_cell_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", element_r56.month_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r56.month_id);
} }
function TicketsComponent_mat_header_cell_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.service_label"));
} }
var _c3 = function (a2) { return ["/tickets", "service", a2]; };
function TicketsComponent_mat_cell_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c3, element_r57.service))("matTooltip", element_r57.service);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r57.service);
} }
function TicketsComponent_mat_header_cell_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.ticket_count"));
} }
function TicketsComponent_mat_cell_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", element_r58.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r58.count);
} }
function TicketsComponent_mat_header_cell_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "cell_header.silt"));
} }
function TicketsComponent_mat_cell_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", element_r59.silt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r59.silt);
} }
function TicketsComponent_mat_header_cell_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "% done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TicketsComponent_mat_cell_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "30% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", element_r60.done + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 30, "%");
} }
function TicketsComponent_mat_header_cell_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-cell", 45);
} }
function TicketsComponent_mat_cell_87_Template(rf, ctx) { if (rf & 1) {
    var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-menu", null, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TicketsComponent_mat_cell_87_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); var element_r61 = ctx.$implicit; var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r63.goSolve(element_r61); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Resolve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TicketsComponent_mat_cell_87_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); var element_r61 = ctx.$implicit; var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r65.removeItem(element_r61); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleColor", ctx_r35.rippleColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleColor", ctx_r35.rippleColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleColor", ctx_r35.rippleColor);
} }
function TicketsComponent_mat_header_row_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function TicketsComponent_mat_row_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row", 57);
} if (rf & 2) {
    var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleColor", ctx_r37.rippleColor);
} }
var _c4 = function () { return []; };
var TicketsComponent = /** @class */ (function () {
    function TicketsComponent(data, bottomSheet, ac, router, ref, _reports, _store) {
        this.data = data;
        this.bottomSheet = bottomSheet;
        this.ac = ac;
        this.router = router;
        this.ref = ref;
        this._reports = _reports;
        this._store = _store;
        this.subs = new _services_tools_service__WEBPACK_IMPORTED_MODULE_12__["SubSink"]();
        this.displayedColumns_copy = [];
        this.fixedWidth = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](true);
        this.hideClosed = true;
        this.rippleColor = 'rgba(255,255,255,.08)';
        this.byPriority = [];
        this.byType = [];
        this.byApplication = [];
        this.byStatus = [];
        this.changeView = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](false);
        this.column_active = 'id';
        this.column_direction = 'desc';
        this.tickets = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]([]));
        this.ticketsLength = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](0);
        this.config = this._store.selectSnapshot(function (state) { return state.config; });
    }
    TicketsComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    TicketsComponent.prototype.changeViewClick = function () {
        this.displayedColumns_copy = this.config.displayedColumns;
        this.changeView.next(!this.changeView.getValue());
    };
    TicketsComponent.prototype.isChecked = function (column) {
        return this.displayedColumns_copy.indexOf(column) > -1;
    };
    TicketsComponent.prototype.checkHandler = function (column, e) {
        if (e.checked) {
            this.displayedColumns_copy.push(column);
        }
        else {
            this.displayedColumns_copy = this.displayedColumns_copy.filter(function (columnB) { return columnB != column; });
        }
    };
    TicketsComponent.prototype.saveColumns = function () {
        var _this = this;
        var allColumns = this.config.displayedColumnsOrder;
        allColumns = allColumns.filter(function (column) { return _this.displayedColumns_copy.indexOf(column) > -1; });
        localStorage.setItem('displayedColumns', JSON.stringify(allColumns));
        if (this.config.ticketOptions)
            allColumns.push('options');
        this._store.dispatch(new _states_config_state__WEBPACK_IMPORTED_MODULE_15__["UpdateConfig"]({ displayedColumns: allColumns }));
        this.fixedWidth.next(allColumns.length > 5);
        this.changeView.next(false);
        localStorage.setItem('hideClosed', this.hideClosed ? 'yes' : 'no');
        this.newTickets(this.ticketsBkp);
        setTimeout(function (_) { return _this.ref.detectChanges(); });
    };
    TicketsComponent.prototype.saveHideClosed = function (e) {
        this.hideClosed = e.checked;
    };
    TicketsComponent.prototype.getID = function (el, i) {
        return el.id;
    };
    TicketsComponent.prototype.rollup = function (ticketRows, type, filter) {
        var _this = this;
        if (type !== null && filter !== null) {
            if (!this.config.columns.hasOwnProperty(type)) {
                this.data.loading.next(true);
                this.router.navigate(['/']);
                return;
            }
            ticketRows = ticketRows.filter(function (row) { return row[_this.config.columns[type]] == filter; });
        }
        var newTickets = ticketRows.map(function (row) {
            var newTicket = {};
            for (var prop in _this.config.columns) {
                newTicket[prop] = row[_this.config.columns[prop]];
            }
            return newTicket;
        });
        this.newTickets(newTickets);
        this.data.loading.next(false);
        this.ref.detectChanges();
    };
    TicketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loading.next(true);
        this.subs.add(Object(rxjs_internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_10__["combineLatest"])(this.data.month, this.ac.paramMap)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])())
            .subscribe(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), month = _b[0], params = _b[1];
            var type = params.get('type');
            var filter = params.get('filter');
            _this.data.loading.next(true);
            var monthIndex = month.index;
            var ticketsBackup = _this._store.selectSnapshot(function (store) { return store.tickets.ticketsBackup; });
            if (typeof _this.config.show_debug_in_console !== 'undefined' && _this.config.show_debug_in_console)
                console.dir("AMVARA DECIDING ON IF/ELSE");
            if (!Array.isArray(ticketsBackup[monthIndex])) {
                if (typeof _this.config.show_debug_in_console !== 'undefined' && _this.config.show_debug_in_console)
                    console.dir("AMVARA IF");
                _this.subs.add(_this._reports.getReportData(_this.config.reports[_this.config.scenario].months[monthIndex], _this.config.reports[_this.config.scenario].monthsSelector, 'Mobile_Tickets_List.csv', false).subscribe(function (data) {
                    _this._store.dispatch(new _states_tickets_state__WEBPACK_IMPORTED_MODULE_16__["SetMonthTickets"](monthIndex, data));
                    _this.rollup(data, type, filter);
                }));
            }
            else {
                if (typeof _this.config.show_debug_in_console !== 'undefined' && _this.config.show_debug_in_console)
                    console.log("AMVARA ELSE");
                var tickets = _this._store.selectSnapshot(function (store) { return store.tickets.ticketsBackup; })[monthIndex];
                _this.rollup(tickets, type, filter);
            }
            if (typeof _this.config.show_debug_in_console !== 'undefined' && _this.config.show_debug_in_console)
                console.log("AMVARA ticketsBackup: ", ticketsBackup);
        }));
        this.fixedWidth.next(this.config.displayedColumns.length > 5);
        this.column_active = localStorage.getItem('column_active') || 'id';
        this.column_direction = localStorage.getItem('column_direction') || 'desc';
        if (typeof this.config.show_debug_in_console !== 'undefined' && this.config.show_debug_in_console)
            console.log("AMVARA tickets: ", this.tickets);
        setTimeout(function (_) { return _this.ref.markForCheck(); });
    };
    TicketsComponent.prototype.newTickets = function (tickets) {
        this.ticketsBkp = tickets;
        var source = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](tickets);
        source.paginator = this.paginator;
        source.sort = this.sort;
        source.filterPredicate = function (data, filter) {
            return data.status != filter;
        };
        source.filter = this.hideClosed ? 'Closed' : '';
        this.ticketsLength.next(tickets.length);
        this.tickets.next(source);
    };
    TicketsComponent.prototype.saveSort = function (e) {
        this.column_active = e.active;
        this.column_direction = e.direction;
        localStorage.setItem('column_active', e.active);
        localStorage.setItem('column_direction', e.direction);
    };
    TicketsComponent.prototype.goSolve = function (ticket) {
        var _this = this;
        var ref = this.bottomSheet.open(SolveTicket, {
            panelClass: 'solve-ticket-panel',
            data: ticket
        });
        this.subs.add(ref.instance.success.subscribe(function (success) {
            if (success.success) {
                var id_1 = success.id;
                var tickets = _this.tickets.getValue().data;
                var index = tickets.findIndex(function (row) { return row[_this.config.columns.id] == id_1; });
                tickets[index][_this.config.columns.status] = 'Solved';
                _this.newTickets(tickets);
            }
        }));
    };
    TicketsComponent.prototype.removeItem = function (ticket) {
        var _this = this;
        var tickets = this.tickets.getValue().data.filter(function (ticketB) { return ticketB[_this.config.columns.id] != ticket[_this.config.columns.id]; });
        this.newTickets(tickets);
    };
    TicketsComponent.ɵfac = function TicketsComponent_Factory(t) { return new (t || TicketsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_reports_service__WEBPACK_IMPORTED_MODULE_11__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_14__["Store"])); };
    TicketsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TicketsComponent, selectors: [["cism-tickets"]], viewQuery: function TicketsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 92, vars: 44, consts: [[1, "header", "desktop"], [1, "info", "desktop"], [1, "overview"], [1, "mobile"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [4, "ngIf"], [1, "change-view-container"], [1, "close", 3, "click"], [1, "box-title"], [1, "checkboxes"], ["class", "column", 4, "ngFor", "ngForOf"], [1, "options-box"], [3, "checked", "change"], ["mat-raised-button", "", 1, "save-changes", 3, "click"], [1, "table"], ["matSort", "", "matSortDisableClear", "", 3, "matSortActive", "matSortDirection", "dataSource", "trackBy", "matSortChange"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], ["matTooltipPosition", "above", "matTooltipClass", "above", 3, "matTooltip", 4, "matCellDef"], ["matColumnDef", "create_date"], ["matColumnDef", "modify_date"], ["matColumnDef", "type"], ["class", "pointer", "matTooltipPosition", "above", "matTooltipClass", "above", 3, "routerLink", "matTooltip", 4, "matCellDef"], ["matColumnDef", "priority"], ["matColumnDef", "status"], ["matColumnDef", "description"], ["matTooltipPosition", "above", "matTooltipClass", "above", "matTooltipPosition", "above", "matTooltipClass", "above", 3, "matTooltip", 4, "matCellDef"], ["matColumnDef", "external"], ["matColumnDef", "classification"], ["matColumnDef", "component"], ["matColumnDef", "service_group"], ["matColumnDef", "month_id"], ["matColumnDef", "service"], ["matColumnDef", "count"], ["matColumnDef", "silt"], ["matTooltip", "Sales Incident Lifecycle Time", "matTooltipPosition", "above", "matTooltipClass", "above", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "done"], ["matColumnDef", "options"], [4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "matRippleColor", 4, "matRowDef", "matRowDefColumns"], ["matTooltip", "Change view", "matTooltipPosition", "above", "matTooltipClass", "above", "matRipple", "", 1, "change-view", 3, "matRippleColor", "click"], [1, "column"], [3, "checked", "value", "change", 4, "ngFor", "ngForOf"], [3, "checked", "value", "change"], ["mat-sort-header", ""], ["matTooltipPosition", "above", "matTooltipClass", "above", 3, "matTooltip"], ["matTooltipPosition", "above", "matTooltipClass", "above", 1, "pointer", 3, "routerLink", "matTooltip"], [1, "priority-circle", 3, "ngClass"], ["matTooltipPosition", "above", "matTooltipClass", "above", "matTooltipPosition", "above", "matTooltipClass", "above", 3, "matTooltip"], ["matTooltip", "Sales Incident Lifecycle Time", "matTooltipPosition", "above", "matTooltipClass", "above", "mat-sort-header", ""], [1, "progress"], [1, "bar"], [1, "options", 3, "matMenuTriggerFor"], ["menuOptions", "matMenu"], ["mat-menu-item", "", "matRipple", "", 3, "matRippleColor", "click"], ["mat-menu-item", "", "matRipple", "", 3, "matRippleColor"], ["matRipple", "", 3, "matRippleColor"]], template: function TicketsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "cism-month-selector");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "cism-overall-box");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "cism-silt");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "cism-month-selector", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "cism-overall-box");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "cism-classification");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-paginator", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TicketsComponent_ng_container_12_Template, 5, 5, "ng-container", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TicketsComponent_Template_div_click_16_listener() { return ctx.changeViewClick(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "X");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Ticket view");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, TicketsComponent_div_21_Template, 2, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "groupBy");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "fixFilter");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-checkbox", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TicketsComponent_Template_mat_checkbox_change_28_listener($event) { return ctx.saveHideClosed($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Hide closed tickets");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TicketsComponent_Template_button_click_30_listener() { return ctx.saveColumns(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "save");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-table", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matSortChange", function TicketsComponent_Template_mat_table_matSortChange_35_listener($event) { return ctx.saveSort($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](37, 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, TicketsComponent_mat_header_cell_38_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, TicketsComponent_mat_cell_39_Template, 2, 2, "mat-cell", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](40, 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, TicketsComponent_mat_header_cell_41_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, TicketsComponent_mat_cell_42_Template, 6, 11, "mat-cell", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](43, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, TicketsComponent_mat_header_cell_44_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, TicketsComponent_mat_cell_45_Template, 6, 11, "mat-cell", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](46, 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, TicketsComponent_mat_header_cell_47_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, TicketsComponent_mat_cell_48_Template, 2, 5, "mat-cell", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](49, 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, TicketsComponent_mat_header_cell_50_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, TicketsComponent_mat_cell_51_Template, 4, 6, "mat-cell", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](52, 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, TicketsComponent_mat_header_cell_53_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, TicketsComponent_mat_cell_54_Template, 2, 5, "mat-cell", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](55, 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, TicketsComponent_mat_header_cell_56_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, TicketsComponent_mat_cell_57_Template, 3, 6, "mat-cell", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](58, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, TicketsComponent_mat_header_cell_59_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, TicketsComponent_mat_cell_60_Template, 2, 2, "mat-cell", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](61, 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, TicketsComponent_mat_header_cell_62_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, TicketsComponent_mat_cell_63_Template, 2, 2, "mat-cell", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](64, 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, TicketsComponent_mat_header_cell_65_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, TicketsComponent_mat_cell_66_Template, 2, 2, "mat-cell", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](67, 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, TicketsComponent_mat_header_cell_68_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, TicketsComponent_mat_cell_69_Template, 2, 2, "mat-cell", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](70, 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, TicketsComponent_mat_header_cell_71_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, TicketsComponent_mat_cell_72_Template, 2, 2, "mat-cell", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](73, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, TicketsComponent_mat_header_cell_74_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, TicketsComponent_mat_cell_75_Template, 2, 5, "mat-cell", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](76, 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, TicketsComponent_mat_header_cell_77_Template, 3, 3, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, TicketsComponent_mat_cell_78_Template, 2, 2, "mat-cell", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](79, 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, TicketsComponent_mat_header_cell_80_Template, 3, 3, "mat-header-cell", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, TicketsComponent_mat_cell_81_Template, 2, 2, "mat-cell", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](82, 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, TicketsComponent_mat_header_cell_83_Template, 2, 0, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, TicketsComponent_mat_cell_84_Template, 4, 3, "mat-cell", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](85, 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, TicketsComponent_mat_header_cell_86_Template, 1, 0, "mat-header-cell", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, TicketsComponent_mat_cell_87_Template, 16, 4, "mat-cell", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, TicketsComponent_mat_header_row_88_Template, 1, 0, "mat-header-row", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](89, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](90, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, TicketsComponent_mat_row_91_Template, 1, 1, "mat-row", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 18, ctx.ticketsLength) > 0 && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 20, ctx.changeView) ? "block" : "none");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", ctx.data.pagination);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 22, ctx.ticketsLength));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 24, ctx.changeView) ? "none" : "block");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 31, ctx.config.columns)), 3));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.data.hideClosed);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 33, ctx.changeView) ? "none" : "block");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fixedWidth", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 35, ctx.fixedWidth));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matSortActive", ctx.column_active)("matSortDirection", ctx.column_direction)("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 37, ctx.tickets))("trackBy", ctx.getID);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](89, 39, ctx.ticketsLength) > 0 && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](90, 41, ctx.changeView) ? ctx.config.displayedColumns : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c4));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.config.displayedColumns);
        } }, directives: [_components_month_selector_month_selector_component__WEBPACK_IMPORTED_MODULE_17__["MonthSelectorComponent"], _components_overall_box_overall_box_component__WEBPACK_IMPORTED_MODULE_18__["OverallBoxComponent"], _components_silt_silt_component__WEBPACK_IMPORTED_MODULE_19__["SiltComponent"], _components_classification_classification_component__WEBPACK_IMPORTED_MODULE_20__["ClassificationComponent"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRipple"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgClass"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuItem"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["AsyncPipe"], _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_28__["GroupByPipe"], _pipes_fix_filter_pipe__WEBPACK_IMPORTED_MODULE_29__["FixFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["KeyValuePipe"], _pipes_ru_pipe__WEBPACK_IMPORTED_MODULE_30__["RuPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__["TranslatePipe"], _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_32__["DateAgoPipe"], _pipes_date_parse_pipe__WEBPACK_IMPORTED_MODULE_33__["DateParsePipe"], _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_34__["DateFormatPipe"], _pipes_limit_text_pipe__WEBPACK_IMPORTED_MODULE_35__["LimitTextPipe"]], styles: ["[_nghost-%COMP%] {\n  padding: 30px 40px;\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    margin-bottom: 40px;\n    padding: 15px;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  [_nghost-%COMP%] {\n    margin-bottom: 40px;\n    padding: 25px;\n  }\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 20px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: calc(100vh - 400px);\n}\n\n@media (max-width: 600px) {\n  .flex[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .flex[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n.overview[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 20px;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n\n@media (max-width: 600px) {\n  .overview[_ngcontent-%COMP%] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .overview[_ngcontent-%COMP%] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 600px) {\n  .overview[_ngcontent-%COMP%] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  cism-month-selector.mobile[_ngcontent-%COMP%] {\n    -ms-flex: 0 calc(50% - 10px);\n        flex: 0 calc(50% - 10px);\n  }\n}\n\n@media (max-width: 600px) {\n  cism-month-selector.mobile[_ngcontent-%COMP%] {\n    -ms-flex: 1 100%;\n        flex: 1 100%;\n  }\n}\n\ncism-overall-box[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  -ms-flex: 0 0 310px;\n      flex: 0 0 310px;\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  cism-overall-box[_ngcontent-%COMP%] {\n    -ms-flex: 0 calc(50% - 10px);\n        flex: 0 calc(50% - 10px);\n    margin-right: 0;\n  }\n}\n\n@media (max-width: 600px) {\n  cism-overall-box[_ngcontent-%COMP%] {\n    -ms-flex: 1 100%;\n        flex: 1 100%;\n    margin-top: 20px;\n    margin-right: 0;\n  }\n}\n\ncism-classification[_ngcontent-%COMP%] {\n  -ms-flex: 1;\n      flex: 1;\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  cism-classification[_ngcontent-%COMP%] {\n    -ms-flex: 1 100%;\n        flex: 1 100%;\n    margin-top: 20px;\n  }\n}\n\n@media (max-width: 600px) {\n  cism-classification[_ngcontent-%COMP%] {\n    -ms-flex: 1 100%;\n        flex: 1 100%;\n    margin-top: 20px;\n  }\n}\n\n.change-view[_ngcontent-%COMP%] {\n  margin: 20px 0 -45px auto;\n  height: 35px;\n  width: 50px;\n  z-index: 9999;\n  border-radius: 3px;\n  position: relative;\n  background-color: #001628;\n  cursor: pointer;\n  background-position: 5px 7px;\n}\n\n.change-view[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  will-change: transform;\n  margin-bottom: 50px;\n}\n\nmat-header-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\nmat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mat-column-id[_ngcontent-%COMP%], .mat-column-category[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%], .mat-column-target[_ngcontent-%COMP%], .mat-column-time[_ngcontent-%COMP%] {\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.mat-column-updated[_ngcontent-%COMP%] {\n  -ms-flex: 0 0 140px;\n      flex: 0 0 140px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  background: transparent !important;\n  font-family: \"CorpoS\", \"Segoe UI\", \"Arial\", \"sans-serif\" !important;\n}\n\n@media (max-width: 600px) {\n  .fixedWidth[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n    width: 1200px;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .fixedWidth[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n    width: 1200px;\n  }\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  text-transform: uppercase;\n}\n\n.table[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 600px) {\n  .table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n}\n\n.mat-header-cell[_ngcontent-%COMP%]:first-child {\n  -ms-flex: 0 0 90px;\n      flex: 0 0 90px;\n}\n\n.mat-cell[_ngcontent-%COMP%]:first-child {\n  -ms-flex: 0 0 90px;\n      flex: 0 0 90px;\n}\n\n.priority-circle[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n}\n\n.priority-circle.prio-1[_ngcontent-%COMP%] {\n  background-color: #C1272D;\n}\n\n.priority-circle.prio-2[_ngcontent-%COMP%] {\n  background-color: #F15A24;\n}\n\n.priority-circle.prio-3[_ngcontent-%COMP%] {\n  background-color: #F7931E;\n}\n\n.priority-circle.prio-4[_ngcontent-%COMP%] {\n  background-color: #22B573;\n}\n\n.mat-column-priority[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.options-box[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  margin-left: 10px;\n}\n\n@media (min-width: 1100px) {\n  .options-box[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n\n.progress[_ngcontent-%COMP%] {\n  display: block;\n  width: calc(100px - 50px);\n  height: 15px;\n  border-radius: 2px;\n  overflow: hidden;\n  background-color: #003a6a;\n  margin-left: 15px;\n  position: relative;\n}\n\n.progress[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #de1120;\n  border-radius: 2px;\n  height: inherit;\n}\n\nmat-footer-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n  margin-bottom: 5px;\n}\n\n.mat-row[_ngcontent-%COMP%] {\n  min-height: 40px;\n  background-color: rgba(0, 36, 66, 0.8);\n  border-radius: 5px;\n}\n\n.mat-column-options[_ngcontent-%COMP%] {\n  -ms-flex: 0 0 40px;\n      flex: 0 0 40px;\n}\n\n.options[_ngcontent-%COMP%] {\n  display: block;\n  height: 40px;\n  width: 100%;\n  background-image: url('assets/img/menu_dots.svg');\n  background-repeat: no-repeat;\n  cursor: pointer;\n  background-size: 15px;\n  background-position: center;\n}\n\nmat-cell[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.mat-column-subject[_ngcontent-%COMP%] {\n  -ms-flex: 0 0 250px;\n      flex: 0 0 250px;\n  padding: 0 10px;\n}\n\n.end-paginator[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.change-view-container[_ngcontent-%COMP%] {\n  background-color: #002442;\n  border-radius: 5px;\n  margin-top: 25px;\n  padding: 20px 40px;\n  position: relative;\n}\n\n.change-view-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  display: block;\n  height: 40px;\n  width: 40px;\n  position: absolute;\n  top: 40px;\n  font-size: 13pt;\n  right: 40px;\n  color: white;\n  text-align: center;\n  cursor: pointer;\n}\n\n.change-view-container[_ngcontent-%COMP%]   .box-title[_ngcontent-%COMP%] {\n  line-height: 50px;\n  font-size: 1.3rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n}\n\n.change-view-container[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%] {\n  padding: 50px 20px;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n@media (max-width: 600px) {\n  .change-view-container[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%] {\n    padding: 30px 10px;\n    display: block;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .change-view-container[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n}\n\n.change-view-container[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  -ms-flex: 1 20%;\n      flex: 1 20%;\n}\n\n@media (max-width: 600px) {\n  .change-view-container[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n    -ms-flex: 1 100%;\n        flex: 1 100%;\n  }\n}\n\n.change-view-container[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%] {\n  display: block;\n  height: 40px;\n}\n\n.change-view-container[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%]     .mat-checkbox-label {\n  margin-left: 10px;\n  font-size: 1rem;\n  letter-spacing: .5px;\n}\n\n@media (max-width: 600px) {\n  .change-view-container[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%]     .mat-checkbox-label {\n    font-size: 1.1rem;\n  }\n}\n\n.save-changes[_ngcontent-%COMP%] {\n  background-color: #003a6a;\n  line-height: 30px;\n  width: 100px;\n  border-radius: 2px;\n  display: block;\n  margin: 0 0 10px auto;\n  transition: background-color .1s ease-in-out;\n}\n\n.save-changes[_ngcontent-%COMP%]:hover {\n  background-color: #c6101c;\n}\n\n  .save-changes .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.08) !important;\n}\n\n  .header cism-month-selector .mat-form-field {\n  width: 115px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n@media (min-width: 1100px) {\n  .header[_ngcontent-%COMP%]   cism-month-selector[_ngcontent-%COMP%] {\n    -ms-flex: 0 0 100px;\n        flex: 0 0 100px;\n  }\n  .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    -ms-flex: 1;\n        flex: 1;\n    display: -ms-flexbox;\n    display: flex;\n    margin-left: 20px;\n    height: 45px;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    background-color: #002442;\n    border-radius: 7px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n  }\n  .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   cism-overall-box[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   cism-silt[_ngcontent-%COMP%] {\n    -ms-flex: 0 0 40%;\n        flex: 0 0 40%;\n    background-color: transparent;\n    box-shadow: none;\n  }\n  .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   cism-overall-box[_ngcontent-%COMP%] {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n  }\n  .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   cism-silt[_ngcontent-%COMP%] {\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n  }\n}\n\n  .info .title {\n  -ms-flex: initial !important;\n      flex: initial !important;\n}\n\n  .info .count {\n  -ms-flex: initial !important;\n      flex: initial !important;\n  margin-left: 30px;\n}\n\n  .info cism-overall-box .count {\n  margin-left: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy90aWNrZXRzL3RpY2tldHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBa0I7QUFGcEI7O0FDbUVJO0VEbEVKO0lBR00sbUJBQW1CO0lBQ25CLGFBQWE7RUFDakI7QUFDRjs7QUNrRUk7RUR4RUo7SUFPTSxtQkFBbUI7SUFDbkIsYUFBYTtFQUlqQjtBQUNGOztBQURBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFlO01BQWYsZUFBZTtFQUNmLDJCQUEyQjtBQUk3Qjs7QUM4Q0k7RUR0REo7SUFNSSxZQUFZO0VBT2Q7QUFDRjs7QUM4Q0k7RUQ1REo7SUFTSSxZQUFZO0VBVWQ7QUFDRjs7QUFQQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQkFBOEI7TUFBOUIsOEJBQThCO0FBVWhDOztBQzRCSTtFRHpDSjtJQUtJLG1CQUFlO1FBQWYsZUFBZTtFQWFqQjtBQUNGOztBQzRCSTtFRC9DSjtJQUtJLG1CQUFlO1FBQWYsZUFBZTtFQW1CakI7QUFDRjs7QUNnQkk7RUR6Q0o7SUFRSSxtQkFBZTtRQUFmLGVBQWU7RUFzQmpCO0FBQ0Y7O0FDZ0JJO0VEbkNKO0lBRUksNEJBQXdCO1FBQXhCLHdCQUF3QjtFQXNCMUI7QUFDRjs7QUNJSTtFRDdCSjtJQUtJLGdCQUFZO1FBQVosWUFBWTtFQXlCZDtBQUNGOztBQXRCQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBZTtNQUFmLGVBQWU7QUF5QmpCOztBQ0RJO0VEMUJKO0lBSUksNEJBQXdCO1FBQXhCLHdCQUF3QjtJQUN4QixlQUFlO0VBNEJqQjtBQUNGOztBQ2RJO0VEcEJKO0lBUUksZ0JBQVk7UUFBWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7RUErQmpCO0FBQ0Y7O0FBNUJBO0VBQ0UsV0FBTztNQUFQLE9BQU87QUErQlQ7O0FDcEJJO0VEWko7SUFHSSxnQkFBWTtRQUFaLFlBQVk7SUFDWixnQkFBZ0I7RUFrQ2xCO0FBQ0Y7O0FDakNJO0VETko7SUFPSSxnQkFBWTtRQUFaLFlBQVk7SUFDWixnQkFBZ0I7RUFxQ2xCO0FBQ0Y7O0FBbENBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJDaEZxQjtFRGlGckIsZUFBZTtFQUNmLDRCQUE0QjtBQXFDOUI7O0FBOUNBO0VBV0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBdUNaOztBQW5DQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBc0NyQjs7QUFuQ0E7RUFDRSxrQkFBa0I7QUFzQ3BCOztBQW5DQTtFQUNFLHFCQUF1QjtNQUF2Qix1QkFBdUI7QUFzQ3pCOztBQW5DQTtFQUNFLCtCQzNHcUI7QURpSnZCOztBQW5DQTs7Ozs7RUFLRSxxQkFBdUI7TUFBdkIsdUJBQXVCO0FBc0N6Qjs7QUFuQ0E7RUFDRSxtQkFBZTtNQUFmLGVBQWU7QUFzQ2pCOztBQW5DQTtFQUNFLGtDQUFrQztFQUNsQyxtRUFBbUU7QUFzQ3JFOztBQ2hHSTtFRDhERjtJQUNFLGFBQWE7RUFzQ2Y7QUFDRjs7QUNoR0k7RUR3REY7SUFDRSxhQUFhO0VBNENmO0FBQ0Y7O0FBekNBO0VBQ0UsK0JDdElxQjtFRHVJckIseUJBQXlCO0FBNEMzQjs7QUF6Q0E7RUFDRSxrQkFBa0I7QUE0Q3BCOztBQ3JISTtFRHdFSjtJQUdJLGdCQUFnQjtFQStDbEI7QUFDRjs7QUNySEk7RURrRUo7SUFHSSxnQkFBZ0I7RUFxRGxCO0FBQ0Y7O0FBbERBO0VBQ0Usa0JBQWM7TUFBZCxjQUFjO0FBcURoQjs7QUFsREE7RUFDRSxrQkFBYztNQUFkLGNBQWM7QUFxRGhCOztBQWxEQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQXFEcEI7O0FBekRBO0VBTUkseUJDaEp3QjtBRHVNNUI7O0FBN0RBO0VBU0kseUJDbEpxQjtBRDBNekI7O0FBakVBO0VBWUkseUJDbkptQjtBRDRNdkI7O0FBckVBO0VBZUkseUJDdkpxQjtBRGlOekI7O0FBdERBO0VBQ0UsaUJBQWlCO0FBeURuQjs7QUF0REE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUF5RG5COztBQ2pMSTtFRG9ISjtJQU1JLGlCQUFpQjtFQTREbkI7QUFDRjs7QUF6REE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUEyQztFQUMzQyxpQkFBaUI7RUFDakIsa0JBQWtCO0FBNERwQjs7QUFwRUE7RUFVSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AseUJBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixlQUFlO0FBOERuQjs7QUExREE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBNkRwQjs7QUExREE7RUFDRSxnQkFBZ0I7RUFDaEIsc0NDcE5rQztFRHFObEMsa0JBQWtCO0FBNkRwQjs7QUExREE7RUFDRSxrQkFBYztNQUFkLGNBQWM7QUE2RGhCOztBQTFEQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGlEQUFnRDtFQUNoRCw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUE2RDdCOztBQTFEQTtFQUNFLGdCQUFnQjtBQTZEbEI7O0FBMURBO0VBQ0UsMENBQXVDO0FBNkR6Qzs7QUExREE7RUFDRSxtQkFBZTtNQUFmLGVBQWU7RUFDZixlQUFlO0FBNkRqQjs7QUExREE7RUFDRSxtQkFBbUI7QUE2RHJCOztBQTFEQTtFQUNFLHlCQ3pQa0M7RUQwUGxDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQTZEcEI7O0FBbEVBO0VBT0ksY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQStEbkI7O0FBL0VBO0VBbUJJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaURDOVFtQjtBRDhVdkI7O0FBckZBO0VBd0JJLGtCQUFrQjtFQUNsQixvQkFBYTtFQUFiLGFBQWE7QUFpRWpCOztBQ2pSSTtFRHVMSjtJQTJCTSxrQkFBa0I7SUFDbEIsY0FBYztFQW9FbEI7QUFDRjs7QUNsUkk7RURpTEo7SUErQk0sa0JBQWtCO0VBdUV0QjtBQUNGOztBQXZHQTtFQWtDTSxlQUFXO01BQVgsV0FBVztBQXlFakI7O0FDbFNJO0VEdUxKO0lBb0NRLGdCQUFZO1FBQVosWUFBWTtFQTRFbEI7QUFDRjs7QUFqSEE7RUF1Q1EsY0FBYztFQUNkLFlBQVk7QUE4RXBCOztBQXRIQTtFQTBDVSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtBQWdGOUI7O0FDblRJO0VEdUxKO0lBOENZLGlCQUFpQjtFQW1GM0I7QUFDRjs7QUE1RUE7RUFDRSx5QkFBMkM7RUFDM0MsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiw0Q0FBNEM7QUErRTlDOztBQXRGQTtFQVNJLHlCQUFtQztBQWlGdkM7O0FBN0VBO0VBQ0Usc0RBQWtEO0FBZ0ZwRDs7QUE3RUE7RUFDRSxZQUFZO0FBZ0ZkOztBQTdFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQWdGZjs7QUN6Vkk7RUR3UUo7SUFJTSxtQkFBZTtRQUFmLGVBQWU7RUFrRm5CO0VBdEZGO0lBT00sV0FBTztRQUFQLE9BQU87SUFDUCxvQkFBYTtJQUFiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHNCQUE4QjtRQUE5Qiw4QkFBOEI7SUFDOUIseUJDL1U4QjtJRGdWOUIsa0JDclVhO0lEc1ViLDBDQ2xUaUM7RURvWXJDO0VBaEdGOztJQWlCUSxpQkFBYTtRQUFiLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0VBbUZ0QjtFQXRHRjtJQXNCUSxvQkFBMkI7UUFBM0IsMkJBQTJCO0VBbUZqQztFQXpHRjtJQXlCUSxrQkFBeUI7UUFBekIseUJBQXlCO0VBbUYvQjtBQUNGOztBQTlFQTtFQUNFLDRCQUF3QjtNQUF4Qix3QkFBd0I7QUFpRjFCOztBQTlFQTtFQUNFLDRCQUF3QjtNQUF4Qix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBaUZuQjs7QUE5RUE7RUFDRSxpQkFBaUI7QUFpRm5CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy90aWNrZXRzL3RpY2tldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgJy4uLy4uLy4uL2NvbW1vbi9jb2xvcnMnO1xuXG46aG9zdCB7XG4gIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgcGFkZGluZzogMjVweDtcbiAgfVxufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDAwcHgpO1xuICBAaW5jbHVkZSBtb2JpbGUge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBAaW5jbHVkZSB0YWJsZXQge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG4ub3ZlcnZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIEBpbmNsdWRlIG1vYmlsZS10YWJsZXQge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICBAaW5jbHVkZSBtb2JpbGUge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuXG5jaXNtLW1vbnRoLXNlbGVjdG9yLm1vYmlsZSB7XG4gIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgZmxleDogMCBjYWxjKDUwJSAtIDEwcHgpO1xuICB9XG4gIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgZmxleDogMSAxMDAlO1xuICB9XG59XG5cbmNpc20tb3ZlcmFsbC1ib3gge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZsZXg6IDAgMCAzMTBweDtcbiAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICBmbGV4OiAwIGNhbGMoNTAlIC0gMTBweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgZmxleDogMSAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5cbmNpc20tY2xhc3NpZmljYXRpb24ge1xuICBmbGV4OiAxO1xuICBAaW5jbHVkZSB0YWJsZXQge1xuICAgIGZsZXg6IDEgMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgZmxleDogMSAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cblxuLmNoYW5nZS12aWV3IHtcbiAgbWFyZ2luOiAyMHB4IDAgLTQ1cHggYXV0bztcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogNTBweDtcbiAgei1pbmRleDogOTk5OTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1cHggN3B4O1xuICAubWF0LWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5tYXQtY2VsbCwgbWF0LWZvb3Rlci1jZWxsLCBtYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogcmdiYSgkc2VtaS13aGl0ZSwgLjcpO1xufVxuXG4ubWF0LWNvbHVtbi1pZCxcbi5tYXQtY29sdW1uLWNhdGVnb3J5LFxuLm1hdC1jb2x1bW4tc3RhdHVzLFxuLm1hdC1jb2x1bW4tdGFyZ2V0LFxuLm1hdC1jb2x1bW4tdGltZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWF0LWNvbHVtbi11cGRhdGVkIHtcbiAgZmxleDogMCAwIDE0MHB4O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiQ29ycG9TXCIsIFwiU2Vnb2UgVUlcIiwgXCJBcmlhbFwiLCBcInNhbnMtc2VyaWZcIiAhaW1wb3J0YW50O1xufVxuXG5AaW5jbHVkZSBtb2JpbGUtdGFibGV0IHtcbiAgLmZpeGVkV2lkdGggLm1hdC10YWJsZSB7XG4gICAgd2lkdGg6IDEyMDBweDtcbiAgfVxufVxuXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgY29sb3I6IHJnYmEoJHNlbWktd2hpdGUsIC41KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAaW5jbHVkZSBtb2JpbGUtdGFibGV0IHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG59XG5cbi5tYXQtaGVhZGVyLWNlbGw6Zmlyc3QtY2hpbGQge1xuICBmbGV4OiAwIDAgOTBweDtcbn1cblxuLm1hdC1jZWxsOmZpcnN0LWNoaWxkIHtcbiAgZmxleDogMCAwIDkwcHg7XG59XG5cbi5wcmlvcml0eS1jaXJjbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgJi5wcmlvLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmlvcml0eS1pbW1lZGlhdGU7XG4gIH1cbiAgJi5wcmlvLTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmlvcml0eS11cmdlbnQ7XG4gIH1cbiAgJi5wcmlvLTMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmlvcml0eS1oaWdoO1xuICB9XG4gICYucHJpby00IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpb3JpdHktbm9ybWFsO1xuICB9XG59XG5cbi5tYXQtY29sdW1uLXByaW9yaXR5IHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm9wdGlvbnMtYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxufVxuXG4ucHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwcHggLSA1MHB4KTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHNlbWktYmxhY2stMiwgNSk7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5iYXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICB9XG59XG5cbm1hdC1mb290ZXItcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdyB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1hdC1yb3cge1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzZW1pLWJsYWNrLTEsIC44KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubWF0LWNvbHVtbi1vcHRpb25zIHtcbiAgZmxleDogMCAwIDQwcHg7XG59XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCheYXNzZXRzL2ltZy9tZW51X2RvdHMuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxubWF0LWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxubWF0LWljb24ge1xuICBjb2xvcjogcmdiYSgkc2VtaS13aGl0ZSwgLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLXN1YmplY3Qge1xuICBmbGV4OiAwIDAgMjUwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmVuZC1wYWdpbmF0b3Ige1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uY2hhbmdlLXZpZXctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlbWktYmxhY2stMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmNsb3NlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDBweDtcbiAgICBmb250LXNpemU6IDEzcHQ7XG4gICAgcmlnaHQ6IDQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJveC10aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJHNlbWktd2hpdGUsIC40KVxuICB9XG4gIC5jaGVja2JveGVzIHtcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgcGFkZGluZzogMzBweCAxMHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgfVxuICAgIC5jb2x1bW4ge1xuICAgICAgZmxleDogMSAyMCU7XG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBmbGV4OiAxIDEwMCU7XG4gICAgICB9XG4gICAgICAubWF0LWNoZWNrYm94IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zYXZlLWNoYW5nZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRzZW1pLWJsYWNrLTIsIDUpO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMCAxMHB4IGF1dG87XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjFzIGVhc2UtaW4tb3V0O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJsdWUsIDE1KTtcbiAgfVxufVxuXG46Om5nLWRlZXAgLnNhdmUtY2hhbmdlcyAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMDgpICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuaGVhZGVyIGNpc20tbW9udGgtc2VsZWN0b3IgLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDExNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgY2lzbS1tb250aC1zZWxlY3RvciB7XG4gICAgICBmbGV4OiAwIDAgMTAwcHg7XG4gICAgfVxuICAgIC5pbmZvIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VtaS1ibGFjay0xO1xuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgICAgIGNpc20tb3ZlcmFsbC1ib3gsXG4gICAgICBjaXNtLXNpbHQge1xuICAgICAgICBmbGV4OiAwIDAgNDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICAgIGNpc20tb3ZlcmFsbC1ib3gge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG4gICAgICBjaXNtLXNpbHQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAgLmluZm8gLnRpdGxlIHtcbiAgZmxleDogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmluZm8gLmNvdW50IHtcbiAgZmxleDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuOjpuZy1kZWVwIC5pbmZvIGNpc20tb3ZlcmFsbC1ib3ggLmNvdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59IiwiXG4vLyBNYWluIGNvbG9yc1xuJGJnLWNvbG9yOiByZ2IoMCwyMiw0MCk7XG4kc2VtaS13aGl0ZTogcmdiYSh3aGl0ZSwgLjg1KTtcbiRzZW1pLWJsYWNrLTE6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA1KTtcbiRzZW1pLWJsYWNrLTI6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA4KTtcbiRoZWFkZXItYm94OiAkc2VtaS1ibGFjay0xO1xuJGNvbnRlbnQtYm94OiAkc2VtaS1ibGFjay0yO1xuXG4vLyBDb2xvcnNcbiRibHVlOiAjZWYzMzQwO1xuJGdyZXk6ICNkM2QzZDM7XG4kb3JhbmdlOiByZ2IoMjQ3LDE3NCwyMSk7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItcmFkaXVzOiA3cHg7XG5cbi8vIFByaW9yaXRpZXNcbiRwcmlvcml0eS1pbW1lZGlhdGU6ICNDMTI3MkQ7XG4kcHJpb3JpdHktdXJnZW50OiAjRjE1QTI0O1xuJHByaW9yaXR5LW5vcm1hbDogIzIyQjU3MztcbiRwcmlvcml0eS1oaWdoOiAjRjc5MzFFO1xuXG4vLyBHcmFwaGljc1xuJGdyYXBoaWMtYmx1ZS1kYXJrOiAjMDM5YmU1O1xuJGdyYXBoaWMtYmx1ZTogJGJsdWU7XG4kZ3JhcGhpYy1vcmFuZ2U6ICNlZjMzNDA7XG4kZ3JhcGhpYy10ZWFsOiAjN2U1N2MyO1xuXG4vLyBTdGF0dXNlc1xuJHN0YXR1cy1iYWQ6ICNFNTM5MzU7XG4kc3RhdHVzLW1lZGl1bTogI0ZGQ0EyODtcbiRzdGF0dXMtZ29vZDogIzRDQUY1MDtcblxuLy8gU2hhZG93c1xuJGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwwLDAsLjMpO1xuXG4vLyBUcmFuc2l0aW9uc1xuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5KSB7XG4gICAgdHJhbnNpdGlvbjogJHByb3BlcnR5IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIE1peGluc1xuXG4kdHJpZ2dlcjogNjAwcHg7XG4kdGFibGV0OiAxMTAwcHg7XG5cbkBtaXhpbiBpZSB7XG5cdEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGVkZ2Uge1xuICAgIEBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG1vYmlsZSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0cmlnZ2VyKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIGFuZCAobWluLXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdGFibGV0IHtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0LWRlc2t0b3Age1xuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufSJdfQ== */"], changeDetection: 0 });
    return TicketsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TicketsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'cism-tickets',
                templateUrl: './tickets.component.html',
                styleUrls: ['./tickets.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _services_reports_service__WEBPACK_IMPORTED_MODULE_11__["ReportsService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_14__["Store"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: true }]
        }] }); })();
var SolveTicket = /** @class */ (function () {
    function SolveTicket(ticket, bottomSheetRef, _store) {
        this.ticket = ticket;
        this.bottomSheetRef = bottomSheetRef;
        this._store = _store;
        this.solveText = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
        this.config = this._store.selectSnapshot(function (store) { return store.config; });
        this.success = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    SolveTicket.prototype.close = function () {
        this.success.next({ id: 0, success: false, solveText: '' });
        this.success.complete();
        this.bottomSheetRef.dismiss();
    };
    SolveTicket.prototype.solve = function () {
        this.success.next({ id: this.ticket[this.config.columns.id], success: true, solveText: this.solveText.getValue() });
        this.success.complete();
        this.bottomSheetRef.dismiss();
    };
    SolveTicket.ɵfac = function SolveTicket_Factory(t) { return new (t || SolveTicket)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_14__["Store"])); };
    SolveTicket.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SolveTicket, selectors: [["solve-ticket"]], decls: 10, vars: 4, consts: [[1, "solve-field"], ["matInput", "", "autocomplete", "off", "spellcheck", "false", "placeholder", "Comments", 3, "value", "change"], ["mat-dialog-actions", "", 1, "solve-actions"], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "click"]], template: function SolveTicket_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SolveTicket_Template_input_change_3_listener($event) { return ctx.solveText.next($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SolveTicket_Template_button_click_6_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SolveTicket_Template_button_click_8_listener() { return ctx.solve(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "OK");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Solve ticket: ", ctx.ticket[ctx.config.config.columns.subject], "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx.solveText));
        } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_36__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_37__["MatInput"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
    return SolveTicket;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SolveTicket, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'solve-ticket',
                templateUrl: 'solve.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MAT_BOTTOM_SHEET_DATA"]]
            }] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetRef"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_14__["Store"] }]; }, null); })();


/***/ }),

/***/ "LvPo":
/*!**********************************************************!*\
  !*** ./src/app/components/ux/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @states/config.state */ "gGAk");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/Observable */ "Q1FS");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ux_header_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/ux/header/menu-icon/menu-icon.component */ "tbm1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/loader/loader.component */ "vPOg");













function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "li", 7);
} }
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    HeaderComponent.prototype.navigate = function (url) {
        this.data.loading.next(true);
        this.router.navigate([url]);
        this.data.opened.next(false);
    };
    HeaderComponent.prototype.open = function () {
        this.data.opened.next(!this.data.opened.value);
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["cism-header"]], decls: 13, vars: 3, consts: [[1, "header"], ["routerLinkActive", "active", 1, "logo", 3, "click"], [3, "click"], [1, "nav"], ["routerLink", "/system", "routerLinkActive", "active", "class", "system", 4, "ngIf"], ["routerLink", "/about", "routerLinkActive", "active", 1, "about"], ["routerLink", "/help", "routerLinkActive", "active", 1, "help"], ["routerLink", "/system", "routerLinkActive", "active", 1, "system"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_1_listener() { return ctx.navigate("/"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "AMVARA");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Code is Poetry");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "cism-menu-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_cism_menu_icon_click_6_listener() { return ctx.open(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 1, 0, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "cism-loader");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 1, ctx.config$).system.enable);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _components_ux_header_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_7__["MenuIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  padding: 20px;\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: #000e19;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n\n.logo[_ngcontent-%COMP%] {\n  -ms-flex: 1;\n      flex: 1;\n  cursor: pointer;\n  max-width: 300px;\n}\n\nspan[_ngcontent-%COMP%] {\n  -ms-flex: 1;\n      flex: 1;\n  display: inline-block;\n  font-size: 1.8rem;\n  transition: font-size 0.15s ease-in-out;\n}\n\n@media (max-width: 600px) {\n  span[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n\nspan[_ngcontent-%COMP%]:last-of-type {\n  margin-left: 5px;\n  color: #ef3340;\n}\n\ncism-menu-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: auto;\n  bottom: 0;\n}\n\n.nav[_ngcontent-%COMP%] {\n  -ms-flex: 1;\n      flex: 1;\n  display: none;\n}\n\n@media (min-width: 1100px) {\n  .nav[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    list-style: none;\n    height: inherit;\n    width: 130px;\n    position: absolute;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    top: -2px;\n    right: 0;\n  }\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  content: \"\";\n  -ms-flex: 1;\n      flex: 1;\n  text-align: center;\n  height: inherit;\n  outline: 0;\n  padding: 0 15px;\n  cursor: pointer;\n  position: relative;\n  max-width: 30px;\n  height: 32px;\n  border: 1.5px solid #970c15;\n  border-radius: 50%;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #970c15;\n}\n\n.nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: #c6101c;\n  border-color: #c6101c;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  margin: auto;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center center;\n  height: 18px;\n  width: 18px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.navbutton[_ngcontent-%COMP%] {\n  content: \"\";\n  -ms-flex: 1;\n      flex: 1;\n}\n\n.help[_ngcontent-%COMP%]:after {\n  background-image: url('assets/img/CISM_Icon_Help.svg');\n}\n\n.system[_ngcontent-%COMP%]:after {\n  background-image: url('assets/img/security-on.svg');\n  opacity: .7;\n}\n\n.about[_ngcontent-%COMP%]:after {\n  background-image: url('assets/img/CISM_Icon_About.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91eC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix5QkFBc0M7QUFGMUM7O0FBSUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQThCO01BQTlCLDhCQUE4QjtBQURsQzs7QUFHQTtFQUNJLFdBQU87TUFBUCxPQUFPO0VBQ1AsZUFBZTtFQUNmLGdCQUFnQjtBQUFwQjs7QUFFQTtFQUNJLFdBQU87TUFBUCxPQUFPO0VBQ1AscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQ2VqQix1Q0FBc0M7QURiMUM7O0FDMkNJO0VEaERKO0lBTVEsaUJBQWlCO0VBSXZCO0FBQ0Y7O0FBWEE7RUFTUSxnQkFBZ0I7RUFDaEIsY0NyQk07QUQyQmQ7O0FBRkE7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0VBQ1osU0FBUztBQUtiOztBQUhBO0VBQ0ksV0FBTztNQUFQLE9BQU87RUFDUCxhQUFhO0FBTWpCOztBQ2FJO0VEckJKO0lBSVEsb0JBQWE7SUFBYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUE4QjtRQUE5Qiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFFBQVE7RUFTZDtBQUNGOztBQU5BO0VBQ0ksV0FBVztFQUNYLFdBQU87TUFBUCxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWiwyQkFBcUM7RUFDckMsa0JBQWtCO0FBU3RCOztBQXJCQTtFQWNRLHlCQUFtQztBQVczQzs7QUF6QkE7RUFpQlEseUJBQW1DO0VBQ25DLHFCQUErQjtBQVl2Qzs7QUE5QkE7RUFxQlEsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBYWhCOztBQVJBO0VBQ0ksV0FBVztFQUNYLFdBQU87TUFBUCxPQUFPO0FBV1g7O0FBUkE7RUFDSSxzREFBcUQ7QUFXekQ7O0FBVEE7RUFDSSxtREFBa0Q7RUFDbEQsV0FBVztBQVlmOztBQVZBO0VBQ0ksdURBQXNEO0FBYTFEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91eC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi8uLi8uLi9jb21tb24vY29sb3JzJztcblxuOmhvc3Qge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmctY29sb3IsIDMpO1xufVxuLmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubG9nb3tcbiAgICBmbGV4OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuc3BhbiB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbihmb250LXNpemUpO1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgICAmOmxhc3Qtb2YtdHlwZXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgY29sb3I6ICRibHVlO1xuICAgIH1cbn1cblxuY2lzbS1tZW51LWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbn1cbi5uYXZ7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIEBpbmNsdWRlIGRlc2t0b3B7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG5cbn1cbi5uYXYgbGkge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZmxleDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIG91dGxpbmU6IDA7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGRhcmtlbigkYmx1ZSwgMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRibHVlLCAyNSk7XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRibHVlLCAxNSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRibHVlLCAxNSk7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxufVxuXG5cbi5uYXZidXR0b257XG4gICAgY29udGVudDogXCJcIjtcbiAgICBmbGV4OiAxO1xuICAgIFxufVxuLmhlbHA6YWZ0ZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKF5hc3NldHMvaW1nL0NJU01fSWNvbl9IZWxwLnN2Zyk7XG59XG4uc3lzdGVtOmFmdGVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCheYXNzZXRzL2ltZy9zZWN1cml0eS1vbi5zdmcpO1xuICAgIG9wYWNpdHk6IC43O1xufVxuLmFib3V0OmFmdGVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCheYXNzZXRzL2ltZy9DSVNNX0ljb25fQWJvdXQuc3ZnKVxufSIsIlxuLy8gTWFpbiBjb2xvcnNcbiRiZy1jb2xvcjogcmdiKDAsMjIsNDApO1xuJHNlbWktd2hpdGU6IHJnYmEod2hpdGUsIC44NSk7XG4kc2VtaS1ibGFjay0xOiBsaWdodGVuKCRiZy1jb2xvciwgNSk7XG4kc2VtaS1ibGFjay0yOiBsaWdodGVuKCRiZy1jb2xvciwgOCk7XG4kaGVhZGVyLWJveDogJHNlbWktYmxhY2stMTtcbiRjb250ZW50LWJveDogJHNlbWktYmxhY2stMjtcblxuLy8gQ29sb3JzXG4kYmx1ZTogI2VmMzM0MDtcbiRncmV5OiAjZDNkM2QzO1xuJG9yYW5nZTogcmdiKDI0NywxNzQsMjEpO1xuXG4vLyBCb3JkZXJzXG4kYm9yZGVyLXJhZGl1czogN3B4O1xuXG4vLyBQcmlvcml0aWVzXG4kcHJpb3JpdHktaW1tZWRpYXRlOiAjQzEyNzJEO1xuJHByaW9yaXR5LXVyZ2VudDogI0YxNUEyNDtcbiRwcmlvcml0eS1ub3JtYWw6ICMyMkI1NzM7XG4kcHJpb3JpdHktaGlnaDogI0Y3OTMxRTtcblxuLy8gR3JhcGhpY3NcbiRncmFwaGljLWJsdWUtZGFyazogIzAzOWJlNTtcbiRncmFwaGljLWJsdWU6ICRibHVlO1xuJGdyYXBoaWMtb3JhbmdlOiAjZWYzMzQwO1xuJGdyYXBoaWMtdGVhbDogIzdlNTdjMjtcblxuLy8gU3RhdHVzZXNcbiRzdGF0dXMtYmFkOiAjRTUzOTM1O1xuJHN0YXR1cy1tZWRpdW06ICNGRkNBMjg7XG4kc3RhdHVzLWdvb2Q6ICM0Q0FGNTA7XG5cbi8vIFNoYWRvd3NcbiRib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsMCwwLC4zKTtcblxuLy8gVHJhbnNpdGlvbnNcbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0eSkge1xuICAgIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4vLyBNaXhpbnNcblxuJHRyaWdnZXI6IDYwMHB4O1xuJHRhYmxldDogMTEwMHB4O1xuXG5AbWl4aW4gaWUge1xuXHRAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBlZGdlIHtcbiAgICBAc3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0bykge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSBhbmQgKG1pbi13aWR0aDogJHRyaWdnZXIpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXRhYmxldCB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldC1kZXNrdG9wIHtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn0iXX0= */"], changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_states_config_state__WEBPACK_IMPORTED_MODULE_5__["ConfigState"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], HeaderComponent.prototype, "config$", void 0);
    return HeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'cism-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { config$: [] }); })();


/***/ }),

/***/ "OPUf":
/*!************************************************************!*\
  !*** ./src/app/components/legend/color/color.component.ts ***!
  \************************************************************/
/*! exports provided: ColorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorComponent", function() { return ColorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ColorComponent = /** @class */ (function () {
    function ColorComponent() {
        this.color = '';
        this.name = '';
    }
    ColorComponent.ɵfac = function ColorComponent_Factory(t) { return new (t || ColorComponent)(); };
    ColorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorComponent, selectors: [["cism-color"]], inputs: { color: "color", name: "name" }, decls: 3, vars: 3, consts: [[1, "color-block"], [1, "name"]], template: function ColorComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.color);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        } }, styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  margin-left: 30px;\n}\n\n.color-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  top: 6px;\n  margin-right: 15px;\n  border-radius: 50%;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n}\n\n.name[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWdlbmQvY29sb3IvY29sb3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxxQkFBcUI7RUFDckIsd0JBQW9CO01BQXBCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFGbkI7O0FBS0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsMENDa0JxQztBRHBCdkM7O0FBS0E7RUFDRSxxQkFBcUI7QUFGdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xlZ2VuZC9jb2xvci9jb2xvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCAnLi4vLi4vLi4vY29tbW9uL2NvbG9ycyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5jb2xvci1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xufVxuXG4ubmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iLCJcbi8vIE1haW4gY29sb3JzXG4kYmctY29sb3I6IHJnYigwLDIyLDQwKTtcbiRzZW1pLXdoaXRlOiByZ2JhKHdoaXRlLCAuODUpO1xuJHNlbWktYmxhY2stMTogbGlnaHRlbigkYmctY29sb3IsIDUpO1xuJHNlbWktYmxhY2stMjogbGlnaHRlbigkYmctY29sb3IsIDgpO1xuJGhlYWRlci1ib3g6ICRzZW1pLWJsYWNrLTE7XG4kY29udGVudC1ib3g6ICRzZW1pLWJsYWNrLTI7XG5cbi8vIENvbG9yc1xuJGJsdWU6ICNlZjMzNDA7XG4kZ3JleTogI2QzZDNkMztcbiRvcmFuZ2U6IHJnYigyNDcsMTc0LDIxKTtcblxuLy8gQm9yZGVyc1xuJGJvcmRlci1yYWRpdXM6IDdweDtcblxuLy8gUHJpb3JpdGllc1xuJHByaW9yaXR5LWltbWVkaWF0ZTogI0MxMjcyRDtcbiRwcmlvcml0eS11cmdlbnQ6ICNGMTVBMjQ7XG4kcHJpb3JpdHktbm9ybWFsOiAjMjJCNTczO1xuJHByaW9yaXR5LWhpZ2g6ICNGNzkzMUU7XG5cbi8vIEdyYXBoaWNzXG4kZ3JhcGhpYy1ibHVlLWRhcms6ICMwMzliZTU7XG4kZ3JhcGhpYy1ibHVlOiAkYmx1ZTtcbiRncmFwaGljLW9yYW5nZTogI2VmMzM0MDtcbiRncmFwaGljLXRlYWw6ICM3ZTU3YzI7XG5cbi8vIFN0YXR1c2VzXG4kc3RhdHVzLWJhZDogI0U1MzkzNTtcbiRzdGF0dXMtbWVkaXVtOiAjRkZDQTI4O1xuJHN0YXR1cy1nb29kOiAjNENBRjUwO1xuXG4vLyBTaGFkb3dzXG4kYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLDAsMCwuMyk7XG5cbi8vIFRyYW5zaXRpb25zXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcGVydHkpIHtcbiAgICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgLjE1cyBlYXNlLWluLW91dDtcbn1cblxuLy8gTWl4aW5zXG5cbiR0cmlnZ2VyOiA2MDBweDtcbiR0YWJsZXQ6IDExMDBweDtcblxuQG1peGluIGllIHtcblx0QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gZWRnZSB7XG4gICAgQHN1cHBvcnRzICgtbXMtYWNjZWxlcmF0b3I6dHJ1ZSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOmF1dG8pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gbW9iaWxlIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHRyaWdnZXIpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkgYW5kIChtaW4td2lkdGg6ICR0cmlnZ2VyKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG1vYmlsZS10YWJsZXQge1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtZGVza3RvcCB7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59Il19 */"], changeDetection: 0 });
    return ColorComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cism-color',
                templateUrl: './color.component.html',
                styleUrls: ['./color.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RPkx":
/*!******************************************!*\
  !*** ./src/app/pipes/fix-filter.pipe.ts ***!
  \******************************************/
/*! exports provided: FixFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixFilterPipe", function() { return FixFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var FixFilterPipe = /** @class */ (function () {
    function FixFilterPipe() {
    }
    FixFilterPipe.prototype.transform = function (filters) {
        // @ts-ignore
        window.filters = filters;
        var newList = [];
        var length = filters.length;
        for (var i = 0; i < length; i++) {
            if (filters[i].key === 'id') {
                filters[i].key = 'Ticket ID';
            }
            if (filters[i].key !== 'month_id') {
                newList.push(filters[i]);
            }
        }
        return newList;
    };
    FixFilterPipe.ɵfac = function FixFilterPipe_Factory(t) { return new (t || FixFilterPipe)(); };
    FixFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fixFilter", type: FixFilterPipe, pure: true });
    return FixFilterPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FixFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'fixFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "U7z1":
/*!**************************************************!*\
  !*** ./src/app/interceptors/xsrf.interceptor.ts ***!
  \**************************************************/
/*! exports provided: XSRFInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFInterceptor", function() { return XSRFInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_tools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/tools.service */ "6mc2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





var XSRFInterceptor = /** @class */ (function () {
    function XSRFInterceptor(_tools) {
        this._tools = _tools;
    }
    XSRFInterceptor.prototype.intercept = function (req, next) {
        var newOptions = {};
        var xsrf = this._tools.getCookie(document.cookie, 'XSRF-TOKEN') || this._tools.getCookie(localStorage.getItem('cookies'), 'XSRF-TOKEN');
        if (xsrf) {
            newOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'X-XSRF-TOKEN': xsrf
                })
            };
        }
        var xsrfReq = req.clone(newOptions);
        return next.handle(xsrfReq);
    };
    XSRFInterceptor.ɵfac = function XSRFInterceptor_Factory(t) { return new (t || XSRFInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_tools_service__WEBPACK_IMPORTED_MODULE_1__["ToolsService"])); };
    XSRFInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: XSRFInterceptor, factory: XSRFInterceptor.ɵfac });
    return XSRFInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](XSRFInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _services_tools_service__WEBPACK_IMPORTED_MODULE_1__["ToolsService"] }]; }, null); })();


/***/ }),

/***/ "WfQD":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var _services_tools_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/tools.service */ "6mc2");
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/observable/interval */ "CIkO");
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_internal_operators_retry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/retry */ "a6us");
/* harmony import */ var rxjs_internal_operators_retry__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_retry__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @states/config.state */ "gGAk");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/internal/Observable */ "Q1FS");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_ux_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/ux/header/header.component */ "LvPo");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/sidenav/sidenav.component */ "+7qI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_ux_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/ux/footer/footer.component */ "45kG");
























function AppComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_li_5_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.navigate("/system"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(translate, data, router, tools, _http, _store) {
        var _this = this;
        this.translate = translate;
        this.data = data;
        this.router = router;
        this.tools = tools;
        this._http = _http;
        this._store = _store;
        var config = this._store.selectSnapshot(function (store) { return store.config; });
        this.translate.setDefaultLang('en');
        this.translate.use(localStorage.getItem('lang') || config.language);
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"])
                _this.data.loading.next(true);
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])
                _this.data.loading.next(false);
        });
        if (config.heartbeat > 0 && location.hostname.indexOf('corpintra.net') == -1 && !config.corpintraMode) {
            Object(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_7__["interval"])(config.heartbeat).subscribe(function (_) {
                _this._http.get("" + config.fullUrl + config.portalFolder + config.protectedUrl)
                    .pipe(Object(rxjs_internal_operators_retry__WEBPACK_IMPORTED_MODULE_9__["retry"])(3))
                    .subscribe();
            });
        }
    }
    AppComponent.prototype.trigger = function () {
        if (!this.tools.isIE())
            window.dispatchEvent(new Event('resize'));
    };
    AppComponent.prototype.getPage = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent.prototype.navigate = function (url) {
        this.data.loading.next(true);
        this.router.navigate([url]);
        this.data.opened.next(false);
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tools_service__WEBPACK_IMPORTED_MODULE_6__["ToolsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_10__["Store"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["cism-root"]], decls: 16, vars: 5, consts: [[1, "nav"], [3, "click"], [3, "click", 4, "ngIf"], [1, "wrapper"], ["o", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cism-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "cism-sidenav");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_li_click_3_listener() { return ctx.navigate("/"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_li_5_Template, 2, 0, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_li_click_7_listener() { return ctx.navigate("/about"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "About");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_li_click_9_listener() { return ctx.navigate("/help"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Help");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@routerTransitions.done", function AppComponent_Template_div_animation_routerTransitions_done_12_listener() { return ctx.trigger(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "router-outlet", null, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "cism-footer");
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, ctx.config$).system.enable);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@.disabled", ctx.data.disabledAnimations);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@routerTransitions", ctx.getPage(_r1));
        } }, directives: [_components_ux_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_14__["SidenavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_ux_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  \n  perspective: 2000px;\n}\n\n@media (max-width: 600px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n    \n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n    \n  }\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: rgba(255, 255, 255, 0.85);\n  margin: 0px;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: rgba(255, 255, 255, 0.85);\n  width: 300px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  line-height: 35px;\n  padding-left: 45px;\n  list-style-type: none;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  -ms-flex: 1;\n      flex: 1;\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n  position: relative;\n  cursor: pointer;\n  padding-left: 25px;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  width: 15px;\n  height: 13px;\n  display: inline-block;\n  content: \"\";\n  margin-right: 1em;\n  position: absolute;\n  transition: .15s ease-in-out;\n  background-image: url('assets/img/src_assets_arrow.svg');\n  background-repeat: no-repeat;\n  left: 0;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  transition: left .15s ease-in-out;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:before {\n  left: 5px;\n  background-image: url('/assets/img/src_assets_arrow.blue.svg');\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #ef3340;\n}\n\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side) {\n  box-shadow: none;\n}\n\ncism-tickets[_ngcontent-%COMP%], cism-main[_ngcontent-%COMP%] {\n  will-change: transform;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksd0JBQUE7RUFDQSxtQkFBbUI7QUFGdkI7O0FDa0VJO0VEbEVKO0lBSVEsbUJBQW1CO0lBQ25CLG1CQUFBO0VBQ047QUFDRjs7QUNpRUk7RUR4RUo7SUFRUSxtQkFBbUI7SUFDbkIsbUJBQUE7RUFJTjtBQUNGOztBQUZBO0VBQ0ssNkJBQTZCO0VBQzdCLGdDQ2RrQjtFRGVsQixXQUFXO0FBS2hCOztBQUhBO0VBQ1EsV0FBVztBQU1uQjs7QUFKQTtFQUNJLDZCQUE2QjtFQUM3QixnQ0N0Qm1CO0VEdUJuQixZQUFZO0FBT2hCOztBQUxBO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQ0o7QUFPQTs7QUFOQTtFQUNJLFdBQU87TUFBUCxPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUNKO0FBUUE7O0FBUEE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsd0RBQXVEO0VBQ3ZELDRCQUE0QjtFQUM1QixPQUFPO0VBQ1AsWUFBWTtFQUNaLE1BQU07RUFDTixTQUFTO0VBQ1QsaUNBQWlDO0FBVXJDOztBQVJBO0VBQ0ksU0FBUztFQUNULDhEQUE2RDtBQVdqRTs7QUFUQTtFQUNJLGNDckRVO0FEaUVkOztBQVZBO0VBQ0ksZ0JBQWdCO0FBYXBCOztBQVZBO0VBQ0ksc0JBQXNCO0FBYTFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi8uLi9jb21tb24vY29sb3JzJztcblxuLndyYXBwZXIge1xuICAgIC8qIHBhZGRpbmc6IDMwcHggNDBweDsgKi9cbiAgICBwZXJzcGVjdGl2ZTogMjAwMHB4O1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIC8qIHBhZGRpbmc6IDE1cHg7ICovXG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIC8qIHBhZGRpbmc6IDI1cHg7ICovXG4gICAgfVxufVxuLm1hdC1kcmF3ZXItY29udGFpbmVye1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgXG4gICAgIGNvbG9yOiAkc2VtaS13aGl0ZTtcbiAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuLm1hdC1kcmF3ZXItY29udGVudHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuLnNpZGVuYXZ7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAkc2VtaS13aGl0ZTtcbiAgICB3aWR0aDogMzAwcHg7XG59XG4ubmF2e1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNDVweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmUgXG59XG4ubmF2IGxpe1xuICAgIGZsZXg6IDE7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogMjVweFxufVxuLm5hdiBsaTo6YmVmb3Jle1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTNweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogLjE1cyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXmFzc2V0cy9pbWcvc3JjX2Fzc2V0c19hcnJvdy5zdmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2IGxpOmhvdmVyOmJlZm9yZXtcbiAgICBsZWZ0OiA1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKF4vYXNzZXRzL2ltZy9zcmNfYXNzZXRzX2Fycm93LmJsdWUuc3ZnKTtcbn1cbi5uYXYgbGk6aG92ZXJ7XG4gICAgY29sb3I6ICRibHVlO1xufVxuLm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpe1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmNpc20tdGlja2V0cywgY2lzbS1tYWluIHtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufSIsIlxuLy8gTWFpbiBjb2xvcnNcbiRiZy1jb2xvcjogcmdiKDAsMjIsNDApO1xuJHNlbWktd2hpdGU6IHJnYmEod2hpdGUsIC44NSk7XG4kc2VtaS1ibGFjay0xOiBsaWdodGVuKCRiZy1jb2xvciwgNSk7XG4kc2VtaS1ibGFjay0yOiBsaWdodGVuKCRiZy1jb2xvciwgOCk7XG4kaGVhZGVyLWJveDogJHNlbWktYmxhY2stMTtcbiRjb250ZW50LWJveDogJHNlbWktYmxhY2stMjtcblxuLy8gQ29sb3JzXG4kYmx1ZTogI2VmMzM0MDtcbiRncmV5OiAjZDNkM2QzO1xuJG9yYW5nZTogcmdiKDI0NywxNzQsMjEpO1xuXG4vLyBCb3JkZXJzXG4kYm9yZGVyLXJhZGl1czogN3B4O1xuXG4vLyBQcmlvcml0aWVzXG4kcHJpb3JpdHktaW1tZWRpYXRlOiAjQzEyNzJEO1xuJHByaW9yaXR5LXVyZ2VudDogI0YxNUEyNDtcbiRwcmlvcml0eS1ub3JtYWw6ICMyMkI1NzM7XG4kcHJpb3JpdHktaGlnaDogI0Y3OTMxRTtcblxuLy8gR3JhcGhpY3NcbiRncmFwaGljLWJsdWUtZGFyazogIzAzOWJlNTtcbiRncmFwaGljLWJsdWU6ICRibHVlO1xuJGdyYXBoaWMtb3JhbmdlOiAjZWYzMzQwO1xuJGdyYXBoaWMtdGVhbDogIzdlNTdjMjtcblxuLy8gU3RhdHVzZXNcbiRzdGF0dXMtYmFkOiAjRTUzOTM1O1xuJHN0YXR1cy1tZWRpdW06ICNGRkNBMjg7XG4kc3RhdHVzLWdvb2Q6ICM0Q0FGNTA7XG5cbi8vIFNoYWRvd3NcbiRib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsMCwwLC4zKTtcblxuLy8gVHJhbnNpdGlvbnNcbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0eSkge1xuICAgIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4vLyBNaXhpbnNcblxuJHRyaWdnZXI6IDYwMHB4O1xuJHRhYmxldDogMTEwMHB4O1xuXG5AbWl4aW4gaWUge1xuXHRAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBlZGdlIHtcbiAgICBAc3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0bykge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSBhbmQgKG1pbi13aWR0aDogJHRyaWdnZXIpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXRhYmxldCB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldC1kZXNrdG9wIHtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn0iXX0= */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('routerTransitions', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('main => tickets', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])(), { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ position: 'fixed', width: '100%', opacity: 0 }), { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ position: 'fixed', opacity: 1 }), { optional: true }),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(0deg)' }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(-90deg)' }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(0deg)', opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(90deg)', opacity: 0 })
                        ])), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(-90deg)', opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(0deg)', opacity: 1 })
                        ])), { optional: true })
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('tickets => main', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])(), { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ position: 'fixed', opacity: 0 }), { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ position: 'fixed', width: '100%', opacity: 1 }), { optional: true })
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(0deg)' }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(90deg)' }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(0deg)', opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(-90deg)', opacity: 0 })
                        ])), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(90deg)', opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(0deg)', opacity: 1 })
                        ])), { optional: true })
                    ])
                ])
            ] }, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_10__["Select"])(_states_config_state__WEBPACK_IMPORTED_MODULE_11__["ConfigState"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_12__["Observable"])
    ], AppComponent.prototype, "config$", void 0);
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'cism-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('routerTransitions', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('main => tickets', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["group"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])(), { optional: true }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ position: 'fixed', width: '100%', opacity: 0 }), { optional: true }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ position: 'fixed', opacity: 1 }), { optional: true }),
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(0deg)' }), { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(-90deg)' }), { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(0deg)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(90deg)', opacity: 0 })
                            ])), { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(-90deg)', opacity: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(0deg)', opacity: 1 })
                            ])), { optional: true })
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('tickets => main', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["group"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])(), { optional: true }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ position: 'fixed', opacity: 0 }), { optional: true }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ position: 'fixed', width: '100%', opacity: 1 }), { optional: true })
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(0deg)' }), { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(90deg)' }), { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(0deg)', opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(-90deg)', opacity: 0 })
                            ])), { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(90deg)', opacity: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotateY(0deg)', opacity: 1 })
                            ])), { optional: true })
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_tools_service__WEBPACK_IMPORTED_MODULE_6__["ToolsService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["Store"] }]; }, { config$: [] }); })();


/***/ }),

/***/ "Z0OH":
/*!*******************************************************!*\
  !*** ./src/app/components/legend/legend.component.ts ***!
  \*******************************************************/
/*! exports provided: LegendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendComponent", function() { return LegendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @states/config.state */ "gGAk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_legend_color_color_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/legend/color/color.component */ "OPUf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








function LegendComponent_cism_color_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cism-color", 2);
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", item_r1.color)("name", item_r1.name);
} }
var LegendComponent = /** @class */ (function () {
    function LegendComponent(_store) {
        this._store = _store;
        this.colors = [];
        this.colors = this._store.selectSnapshot(_states_config_state__WEBPACK_IMPORTED_MODULE_2__["ConfigState"].getColorScheme);
    }
    LegendComponent.ɵfac = function LegendComponent_Factory(t) { return new (t || LegendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
    LegendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LegendComponent, selectors: [["cism-legend"]], decls: 4, vars: 4, consts: [[1, "legend-title"], [3, "color", "name", 4, "ngFor", "ngForOf"], [3, "color", "name"]], template: function LegendComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LegendComponent_cism_color_3_Template, 1, 2, "cism-color", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "legend.ticket"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_legend_color_color_component__WEBPACK_IMPORTED_MODULE_4__["ColorComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".legend-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: inline-block;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n[_nghost-%COMP%] {\n  height: 70px;\n  font-size: 1.1rem;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWdlbmQvbGVnZW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix3QkFBb0I7TUFBcEIsb0JBQW9CO0FBRnRCOztBQUtBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwyQkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLHFCQUF1QjtNQUF2Qix1QkFBdUI7RUFDdkIsV0FBVztBQUZiOztBQ3lESTtFRDVESjtJQU9JLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sZWdlbmQvbGVnZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi8uLi9jb21tb24vY29sb3JzJztcblxuLmxlZ2VuZC10aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbjpob3N0IHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiXG4vLyBNYWluIGNvbG9yc1xuJGJnLWNvbG9yOiByZ2IoMCwyMiw0MCk7XG4kc2VtaS13aGl0ZTogcmdiYSh3aGl0ZSwgLjg1KTtcbiRzZW1pLWJsYWNrLTE6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA1KTtcbiRzZW1pLWJsYWNrLTI6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA4KTtcbiRoZWFkZXItYm94OiAkc2VtaS1ibGFjay0xO1xuJGNvbnRlbnQtYm94OiAkc2VtaS1ibGFjay0yO1xuXG4vLyBDb2xvcnNcbiRibHVlOiAjZWYzMzQwO1xuJGdyZXk6ICNkM2QzZDM7XG4kb3JhbmdlOiByZ2IoMjQ3LDE3NCwyMSk7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItcmFkaXVzOiA3cHg7XG5cbi8vIFByaW9yaXRpZXNcbiRwcmlvcml0eS1pbW1lZGlhdGU6ICNDMTI3MkQ7XG4kcHJpb3JpdHktdXJnZW50OiAjRjE1QTI0O1xuJHByaW9yaXR5LW5vcm1hbDogIzIyQjU3MztcbiRwcmlvcml0eS1oaWdoOiAjRjc5MzFFO1xuXG4vLyBHcmFwaGljc1xuJGdyYXBoaWMtYmx1ZS1kYXJrOiAjMDM5YmU1O1xuJGdyYXBoaWMtYmx1ZTogJGJsdWU7XG4kZ3JhcGhpYy1vcmFuZ2U6ICNlZjMzNDA7XG4kZ3JhcGhpYy10ZWFsOiAjN2U1N2MyO1xuXG4vLyBTdGF0dXNlc1xuJHN0YXR1cy1iYWQ6ICNFNTM5MzU7XG4kc3RhdHVzLW1lZGl1bTogI0ZGQ0EyODtcbiRzdGF0dXMtZ29vZDogIzRDQUY1MDtcblxuLy8gU2hhZG93c1xuJGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwwLDAsLjMpO1xuXG4vLyBUcmFuc2l0aW9uc1xuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5KSB7XG4gICAgdHJhbnNpdGlvbjogJHByb3BlcnR5IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIE1peGluc1xuXG4kdHJpZ2dlcjogNjAwcHg7XG4kdGFibGV0OiAxMTAwcHg7XG5cbkBtaXhpbiBpZSB7XG5cdEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGVkZ2Uge1xuICAgIEBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG1vYmlsZSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0cmlnZ2VyKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIGFuZCAobWluLXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdGFibGV0IHtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0LWRlc2t0b3Age1xuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufSJdfQ== */"], changeDetection: 0 });
    return LegendComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LegendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cism-legend',
                templateUrl: './legend.component.html',
                styleUrls: ['./legend.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @components/app/app.component */ "WfQD");
/* harmony import */ var _components_ux_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @components/ux/header/header.component */ "LvPo");
/* harmony import */ var _components_ux_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @components/ux/footer/footer.component */ "45kG");
/* harmony import */ var _components_ux_header_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @components/ux/header/menu-icon/menu-icon.component */ "tbm1");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @components/pages/about/about.component */ "qE0E");
/* harmony import */ var _components_pages_main_main_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @components/pages/main/main.component */ "ZqKk");
/* harmony import */ var _components_month_selector_month_selector_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @components/month-selector/month-selector.component */ "Clhl");
/* harmony import */ var _components_overall_box_overall_box_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @components/overall-box/overall-box.component */ "057z");
/* harmony import */ var _components_pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @components/pages/tickets/tickets.component */ "LiT0");
/* harmony import */ var _components_classification_classification_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @components/classification/classification.component */ "pGiK");
/* harmony import */ var _components_stadistic_box_stadistic_box_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @components/stadistic-box/stadistic-box.component */ "Jq0s");
/* harmony import */ var _components_graphics_stacked_stacked_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @components/graphics/stacked/stacked.component */ "yw1n");
/* harmony import */ var _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @components/legend/legend.component */ "Z0OH");
/* harmony import */ var _components_legend_color_color_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @components/legend/color/color.component */ "OPUf");
/* harmony import */ var _components_silt_silt_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @components/silt/silt.component */ "kyBy");
/* harmony import */ var _pipes_limit_text_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @pipes/limit-text.pipe */ "I4Jp");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @components/sidenav/sidenav.component */ "+7qI");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var _services_tools_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @services/tools.service */ "6mc2");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @services/reports.service */ "KY19");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _paginator_intl__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./paginator-intl */ "uOkz");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @components/loader/loader.component */ "vPOg");
/* harmony import */ var _pipes_to_string_pipe__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @pipes/to-string.pipe */ "Dpyk");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @pipes/group-by.pipe */ "zdZq");
/* harmony import */ var _pipes_ru_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @pipes/ru.pipe */ "qfzh");
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @pipes/date-format.pipe */ "u7Z3");
/* harmony import */ var _pipes_date_parse_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @pipes/date-parse.pipe */ "L3ee");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @pipes/date-ago.pipe */ "6Kw5");
/* harmony import */ var _components_report_info_report_info_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @components/report-info/report-info.component */ "BNfh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_fix_filter_pipe__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @pipes/fix-filter.pipe */ "RPkx");
/* harmony import */ var _modules_shared_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @modules/shared.module */ "jvDc");
/* harmony import */ var _services_worker_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @services/worker.service */ "C3FG");
/* harmony import */ var _interceptors_xsrf_interceptor__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./interceptors/xsrf.interceptor */ "U7z1");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @states/config.state */ "gGAk");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "xuHu");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @ngxs/logger-plugin */ "/wON");
/* harmony import */ var _states_tickets_state__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @states/tickets.state */ "CVyY");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! environments/environment */ "AytR");
// Angular




// Angular Material















// Internal

// Components

















// Services



// Plugins



























// AoT requires an exported function for factories
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_41__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _services_data_service__WEBPACK_IMPORTED_MODULE_37__["DataService"],
            _services_tools_service__WEBPACK_IMPORTED_MODULE_38__["ToolsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__["TranslateService"],
            _services_reports_service__WEBPACK_IMPORTED_MODULE_39__["ReportsService"],
            _services_worker_service__WEBPACK_IMPORTED_MODULE_55__["WorkerService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_xsrf_interceptor__WEBPACK_IMPORTED_MODULE_56__["XSRFInterceptor"],
                deps: [_services_tools_service__WEBPACK_IMPORTED_MODULE_38__["ToolsService"]],
                multi: true
            },
            {
                provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorIntl"],
                useClass: _paginator_intl__WEBPACK_IMPORTED_MODULE_42__["CismPaginatorIntl"]
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                useFactory: function (reportsService) { return function () { return reportsService.load(); }; },
                deps: [_services_reports_service__WEBPACK_IMPORTED_MODULE_39__["ReportsService"], _services_data_service__WEBPACK_IMPORTED_MODULE_37__["DataService"], _services_tools_service__WEBPACK_IMPORTED_MODULE_38__["ToolsService"]],
                multi: true,
            },
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_52__["APP_BASE_HREF"],
                useValue: '/'
            }
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_45__["MatSortModule"],
                _modules_shared_module__WEBPACK_IMPORTED_MODULE_54__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_18__["NgxsModule"].forRoot([
                    _states_config_state__WEBPACK_IMPORTED_MODULE_57__["ConfigState"],
                    _states_tickets_state__WEBPACK_IMPORTED_MODULE_60__["TicketsState"]
                ], { developmentMode: !environments_environment__WEBPACK_IMPORTED_MODULE_61__["environment"].production }),
                _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_58__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_59__["NgxsLoggerPluginModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                })
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
        _components_ux_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
        _components_ux_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
        _components_ux_header_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_23__["MenuIconComponent"],
        _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_24__["AboutComponent"],
        _components_pages_main_main_component__WEBPACK_IMPORTED_MODULE_25__["MainComponent"],
        _components_month_selector_month_selector_component__WEBPACK_IMPORTED_MODULE_26__["MonthSelectorComponent"],
        _components_overall_box_overall_box_component__WEBPACK_IMPORTED_MODULE_27__["OverallBoxComponent"],
        _components_graphics_stacked_stacked_component__WEBPACK_IMPORTED_MODULE_31__["StackedComponent"],
        _components_stadistic_box_stadistic_box_component__WEBPACK_IMPORTED_MODULE_30__["StadisticBoxComponent"],
        _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_32__["LegendComponent"],
        _components_legend_color_color_component__WEBPACK_IMPORTED_MODULE_33__["ColorComponent"],
        _components_silt_silt_component__WEBPACK_IMPORTED_MODULE_34__["SiltComponent"],
        _components_pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_28__["TicketsComponent"],
        _components_classification_classification_component__WEBPACK_IMPORTED_MODULE_29__["ClassificationComponent"],
        _components_pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_28__["SolveTicket"],
        _pipes_limit_text_pipe__WEBPACK_IMPORTED_MODULE_35__["LimitTextPipe"],
        _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_36__["SidenavComponent"],
        _components_pages_main_main_component__WEBPACK_IMPORTED_MODULE_25__["DataNotFound"],
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_43__["LoaderComponent"],
        _pipes_to_string_pipe__WEBPACK_IMPORTED_MODULE_44__["ToStringPipe"],
        _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_46__["GroupByPipe"],
        _pipes_ru_pipe__WEBPACK_IMPORTED_MODULE_47__["RuPipe"],
        _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_48__["DateFormatPipe"],
        _pipes_date_parse_pipe__WEBPACK_IMPORTED_MODULE_49__["DateParsePipe"],
        _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_50__["DateAgoPipe"],
        _pipes_limit_text_pipe__WEBPACK_IMPORTED_MODULE_35__["LimitTextPipe"],
        _components_report_info_report_info_component__WEBPACK_IMPORTED_MODULE_51__["ReportInfoComponent"],
        _pipes_fix_filter_pipe__WEBPACK_IMPORTED_MODULE_53__["FixFilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_45__["MatSortModule"],
        _modules_shared_module__WEBPACK_IMPORTED_MODULE_54__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_18__["ɵk"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_58__["NgxsReduxDevtoolsPluginModule"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_59__["NgxsLoggerPluginModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _components_app_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
                    _components_ux_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                    _components_ux_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                    _components_ux_header_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_23__["MenuIconComponent"],
                    _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_24__["AboutComponent"],
                    _components_pages_main_main_component__WEBPACK_IMPORTED_MODULE_25__["MainComponent"],
                    _components_month_selector_month_selector_component__WEBPACK_IMPORTED_MODULE_26__["MonthSelectorComponent"],
                    _components_overall_box_overall_box_component__WEBPACK_IMPORTED_MODULE_27__["OverallBoxComponent"],
                    _components_graphics_stacked_stacked_component__WEBPACK_IMPORTED_MODULE_31__["StackedComponent"],
                    _components_stadistic_box_stadistic_box_component__WEBPACK_IMPORTED_MODULE_30__["StadisticBoxComponent"],
                    _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_32__["LegendComponent"],
                    _components_legend_color_color_component__WEBPACK_IMPORTED_MODULE_33__["ColorComponent"],
                    _components_silt_silt_component__WEBPACK_IMPORTED_MODULE_34__["SiltComponent"],
                    _components_pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_28__["TicketsComponent"],
                    _components_classification_classification_component__WEBPACK_IMPORTED_MODULE_29__["ClassificationComponent"],
                    _components_pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_28__["SolveTicket"],
                    _pipes_limit_text_pipe__WEBPACK_IMPORTED_MODULE_35__["LimitTextPipe"],
                    _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_36__["SidenavComponent"],
                    _components_pages_main_main_component__WEBPACK_IMPORTED_MODULE_25__["DataNotFound"],
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_43__["LoaderComponent"],
                    _pipes_to_string_pipe__WEBPACK_IMPORTED_MODULE_44__["ToStringPipe"],
                    _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_46__["GroupByPipe"],
                    _pipes_ru_pipe__WEBPACK_IMPORTED_MODULE_47__["RuPipe"],
                    _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_48__["DateFormatPipe"],
                    _pipes_date_parse_pipe__WEBPACK_IMPORTED_MODULE_49__["DateParsePipe"],
                    _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_50__["DateAgoPipe"],
                    _pipes_limit_text_pipe__WEBPACK_IMPORTED_MODULE_35__["LimitTextPipe"],
                    _components_report_info_report_info_component__WEBPACK_IMPORTED_MODULE_51__["ReportInfoComponent"],
                    _pipes_fix_filter_pipe__WEBPACK_IMPORTED_MODULE_53__["FixFilterPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_45__["MatSortModule"],
                    _modules_shared_module__WEBPACK_IMPORTED_MODULE_54__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_18__["NgxsModule"].forRoot([
                        _states_config_state__WEBPACK_IMPORTED_MODULE_57__["ConfigState"],
                        _states_tickets_state__WEBPACK_IMPORTED_MODULE_60__["TicketsState"]
                    ], { developmentMode: !environments_environment__WEBPACK_IMPORTED_MODULE_61__["environment"].production }),
                    _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_58__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                    _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_59__["NgxsLoggerPluginModule"].forRoot(),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__["TranslateLoader"],
                            useFactory: (createTranslateLoader),
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                        }
                    })
                ],
                entryComponents: [
                    _components_app_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
                    _components_ux_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                    _components_ux_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                    _components_ux_header_menu_icon_menu_icon_component__WEBPACK_IMPORTED_MODULE_23__["MenuIconComponent"],
                    _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_24__["AboutComponent"],
                    _components_pages_main_main_component__WEBPACK_IMPORTED_MODULE_25__["MainComponent"],
                    _components_month_selector_month_selector_component__WEBPACK_IMPORTED_MODULE_26__["MonthSelectorComponent"],
                    _components_overall_box_overall_box_component__WEBPACK_IMPORTED_MODULE_27__["OverallBoxComponent"],
                    _components_graphics_stacked_stacked_component__WEBPACK_IMPORTED_MODULE_31__["StackedComponent"],
                    _components_stadistic_box_stadistic_box_component__WEBPACK_IMPORTED_MODULE_30__["StadisticBoxComponent"],
                    _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_32__["LegendComponent"],
                    _components_legend_color_color_component__WEBPACK_IMPORTED_MODULE_33__["ColorComponent"],
                    _components_silt_silt_component__WEBPACK_IMPORTED_MODULE_34__["SiltComponent"],
                    _components_pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_28__["TicketsComponent"],
                    _components_classification_classification_component__WEBPACK_IMPORTED_MODULE_29__["ClassificationComponent"],
                    _components_pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_28__["SolveTicket"],
                    _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_36__["SidenavComponent"],
                    _components_pages_main_main_component__WEBPACK_IMPORTED_MODULE_25__["DataNotFound"],
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_43__["LoaderComponent"]
                ],
                providers: [
                    _services_data_service__WEBPACK_IMPORTED_MODULE_37__["DataService"],
                    _services_tools_service__WEBPACK_IMPORTED_MODULE_38__["ToolsService"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__["TranslateService"],
                    _services_reports_service__WEBPACK_IMPORTED_MODULE_39__["ReportsService"],
                    _services_worker_service__WEBPACK_IMPORTED_MODULE_55__["WorkerService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_xsrf_interceptor__WEBPACK_IMPORTED_MODULE_56__["XSRFInterceptor"],
                        deps: [_services_tools_service__WEBPACK_IMPORTED_MODULE_38__["ToolsService"]],
                        multi: true
                    },
                    {
                        provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorIntl"],
                        useClass: _paginator_intl__WEBPACK_IMPORTED_MODULE_42__["CismPaginatorIntl"]
                    },
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                        useFactory: function (reportsService) { return function () { return reportsService.load(); }; },
                        deps: [_services_reports_service__WEBPACK_IMPORTED_MODULE_39__["ReportsService"], _services_data_service__WEBPACK_IMPORTED_MODULE_37__["DataService"], _services_tools_service__WEBPACK_IMPORTED_MODULE_38__["ToolsService"]],
                        multi: true,
                    },
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_52__["APP_BASE_HREF"],
                        useValue: '/'
                    }
                ],
                bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZqKk":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/main/main.component.ts ***!
  \*********************************************************/
/*! exports provided: MainComponent, DataNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataNotFound", function() { return DataNotFound; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _components_month_selector_month_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/month-selector/month-selector.component */ "Clhl");
/* harmony import */ var _components_overall_box_overall_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/overall-box/overall-box.component */ "057z");
/* harmony import */ var _components_silt_silt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/silt/silt.component */ "kyBy");
/* harmony import */ var _components_graphics_stacked_stacked_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/graphics/stacked/stacked.component */ "yw1n");
/* harmony import */ var _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/legend/legend.component */ "Z0OH");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _components_stadistic_box_stadistic_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/stadistic-box/stadistic-box.component */ "Jq0s");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















var MainComponent = /** @class */ (function () {
    function MainComponent(data) {
        this.data = data;
        this.rows = [];
        this.rippleColor = 'rgba(255,255,255,.08)';
        this.byPriority = [];
        this.byType = [];
        this.byApplication = [];
        this.byStatus = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        this.data.loading.next(false);
    };
    MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["cism-main"]], decls: 21, vars: 12, consts: [[1, "header"], [1, "info", "desktop"], [1, "flex"], [1, "overview"], [1, "mobile"], [1, "boxes"], ["matTooltip", "Sales Incident Lifecycle Time", "matTooltipPosition", "above", "matTooltipClass", "above", 1, "desktop"], ["go", "priority", 3, "title"], ["go", "type", 3, "title"], ["go", "service", 3, "title"], ["go", "status", 3, "title"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cism-month-selector");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "cism-overall-box");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "cism-silt");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "cism-overall-box");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "cism-silt", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "cism-stacked");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "cism-legend");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "cism-silt", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "cism-stadistic-box", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "cism-stadistic-box", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "cism-stadistic-box", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "cism-stadistic-box", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 4, "by.priority"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 6, "by.type"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 8, "by.app_service"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 10, "by.ticket_status"));
        } }, directives: [_components_month_selector_month_selector_component__WEBPACK_IMPORTED_MODULE_3__["MonthSelectorComponent"], _components_overall_box_overall_box_component__WEBPACK_IMPORTED_MODULE_4__["OverallBoxComponent"], _components_silt_silt_component__WEBPACK_IMPORTED_MODULE_5__["SiltComponent"], _components_graphics_stacked_stacked_component__WEBPACK_IMPORTED_MODULE_6__["StackedComponent"], _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_7__["LegendComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _components_stadistic_box_stadistic_box_component__WEBPACK_IMPORTED_MODULE_9__["StadisticBoxComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  padding: 30px 40px;\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    margin-bottom: 40px;\n    padding: 15px 20px;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  [_nghost-%COMP%] {\n    margin-bottom: 40px;\n    padding: 25px 20px;\n  }\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 20px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: calc(100vh - 300px);\n  max-height: calc(100vh - 300px);\n  will-change: transform;\n}\n\n@media (min-width: 1100px) {\n  .flex[_ngcontent-%COMP%] {\n    height: calc(100vh - 230px) !important;\n    max-height: calc(100vh - 230px) !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .flex[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .flex[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n  .header cism-month-selector .mat-form-field {\n  width: 115px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n@media (min-width: 1100px) {\n  .header[_ngcontent-%COMP%]   cism-month-selector[_ngcontent-%COMP%] {\n    -ms-flex: 0 0 100px;\n        flex: 0 0 100px;\n  }\n  .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    -ms-flex: 1;\n        flex: 1;\n    display: -ms-flexbox;\n    display: flex;\n    margin-left: 20px;\n    height: 45px;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    background-color: #002442;\n    border-radius: 7px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n  }\n  .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   cism-overall-box[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   cism-silt[_ngcontent-%COMP%] {\n    -ms-flex: 0 0 40%;\n        flex: 0 0 40%;\n    background-color: transparent;\n    box-shadow: none;\n  }\n  .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   cism-overall-box[_ngcontent-%COMP%] {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n  }\n  .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   cism-silt[_ngcontent-%COMP%] {\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n  }\n}\n\n  .info .title {\n  -ms-flex: initial !important;\n      flex: initial !important;\n}\n\n  .info .count {\n  -ms-flex: initial !important;\n      flex: initial !important;\n  margin-left: 30px;\n}\n\n  .info cism-overall-box .count {\n  margin-left: 70px;\n}\n\n.overview[_ngcontent-%COMP%] {\n  -ms-flex: 1 60%;\n      flex: 1 60%;\n  max-width: 60%;\n  height: 100%;\n  border-right: 20px solid transparent;\n}\n\n@media (max-width: 600px) {\n  .overview[_ngcontent-%COMP%] {\n    -ms-flex: 1 100%;\n        flex: 1 100%;\n    max-width: 100%;\n    border-right-width: 0;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .overview[_ngcontent-%COMP%] {\n    -ms-flex: 1 100%;\n        flex: 1 100%;\n    max-width: 100%;\n    border-right-width: 0;\n  }\n}\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n.boxes[_ngcontent-%COMP%] {\n  -ms-flex: 1 40%;\n      flex: 1 40%;\n  max-width: 40%;\n  border-left: 20px solid transparent;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n\n@media (max-width: 600px) {\n  .boxes[_ngcontent-%COMP%] {\n    -ms-flex: 1 100%;\n        flex: 1 100%;\n    max-width: 100%;\n    border-left-width: 0;\n    margin-top: 0;\n    margin-bottom: 30px;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .boxes[_ngcontent-%COMP%] {\n    -ms-flex: 1 100%;\n        flex: 1 100%;\n    max-width: 100%;\n    border-left-width: 0;\n    margin-top: 50px;\n    margin-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxrQkFBa0I7QUFGdEI7O0FDbUVJO0VEbEVKO0lBR1EsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUN4QjtBQUNGOztBQ2tFSTtFRHhFSjtJQU9RLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFJeEI7QUFDRjs7QUFEQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBZTtNQUFmLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLHNCQUFzQjtBQUl4Qjs7QUNzQ0k7RURoREo7SUFRSSxzQ0FBc0M7SUFDdEMsMENBQTBDO0VBTzVDO0FBQ0Y7O0FDcUNJO0VEdERKO0lBWUksWUFBWTtFQVVkO0FBQ0Y7O0FDcUNJO0VENURKO0lBZUksWUFBWTtFQWFkO0FBQ0Y7O0FBVkE7RUFDRSxZQUFZO0FBYWQ7O0FBVkE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7QUFhZjs7QUNXSTtFRHpCSjtJQUlNLG1CQUFlO1FBQWYsZUFBZTtFQWVuQjtFQW5CRjtJQU9NLFdBQU87UUFBUCxPQUFPO0lBQ1Asb0JBQWE7SUFBYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixzQkFBOEI7UUFBOUIsOEJBQThCO0lBQzlCLHlCQzlDOEI7SUQrQzlCLGtCQ3BDYTtJRHFDYiwwQ0NqQmlDO0VEZ0NyQztFQTdCRjs7SUFpQlEsaUJBQWE7UUFBYixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGdCQUFnQjtFQWdCdEI7RUFuQ0Y7SUFzQlEsb0JBQTJCO1FBQTNCLDJCQUEyQjtFQWdCakM7RUF0Q0Y7SUF5QlEsa0JBQXlCO1FBQXpCLHlCQUF5QjtFQWdCL0I7QUFDRjs7QUFYQTtFQUNFLDRCQUF3QjtNQUF4Qix3QkFBd0I7QUFjMUI7O0FBWEE7RUFDRSw0QkFBd0I7TUFBeEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQWNuQjs7QUFYQTtFQUNFLGlCQUFpQjtBQWNuQjs7QUFYQTtFQUNFLGVBQVc7TUFBWCxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixvQ0FBb0M7QUFjdEM7O0FDL0JJO0VEYUo7SUFNSSxnQkFBWTtRQUFaLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0VBaUJ2QjtBQUNGOztBQ2pDSTtFRE9KO0lBV0ksZ0JBQVk7UUFBWixZQUFZO0lBQ1osZUFBZTtJQUNmLHFCQUFxQjtFQW9CdkI7QUFDRjs7QUFqQkE7RUFDRSxjQUFjO0FBb0JoQjs7QUFmQTtFQUNFLGVBQVc7TUFBWCxXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxvQkFBYTtFQUFiLGFBQWE7RUFDYixtQkFBZTtNQUFmLGVBQWU7RUFDZixzQkFBOEI7TUFBOUIsOEJBQThCO0FBa0JoQzs7QUM1REk7RURvQ0o7SUFRSSxnQkFBWTtRQUFaLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7RUFxQnJCO0FBQ0Y7O0FDaEVJO0VEOEJKO0lBZUksZ0JBQVk7UUFBWixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBd0JyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgJy4uLy4uLy4uL2NvbW1vbi9jb2xvcnMnO1xuXG46aG9zdCB7XG4gICAgcGFkZGluZzogMzBweCA0MHB4O1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgcGFkZGluZzogMjVweCAyMHB4O1xuICAgIH1cbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjMwcHgpICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIzMHB4KSAhaW1wb3J0YW50O1xuICB9XG4gIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbjo6bmctZGVlcCAuaGVhZGVyIGNpc20tbW9udGgtc2VsZWN0b3IgLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDExNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgY2lzbS1tb250aC1zZWxlY3RvciB7XG4gICAgICBmbGV4OiAwIDAgMTAwcHg7XG4gICAgfVxuICAgIC5pbmZvIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VtaS1ibGFjay0xO1xuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbiAgICAgIGNpc20tb3ZlcmFsbC1ib3gsXG4gICAgICBjaXNtLXNpbHQge1xuICAgICAgICBmbGV4OiAwIDAgNDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICAgIGNpc20tb3ZlcmFsbC1ib3gge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG4gICAgICBjaXNtLXNpbHQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAgLmluZm8gLnRpdGxlIHtcbiAgZmxleDogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmluZm8gLmNvdW50IHtcbiAgZmxleDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuOjpuZy1kZWVwIC5pbmZvIGNpc20tb3ZlcmFsbC1ib3ggLmNvdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG5cbi5vdmVydmlldyB7XG4gIGZsZXg6IDEgNjAlO1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgZmxleDogMSAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gIH1cbiAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICBmbGV4OiAxIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgfVxufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cblxuLmJveGVzIHtcbiAgZmxleDogMSA0MCU7XG4gIG1heC13aWR0aDogNDAlO1xuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgZmxleDogMSAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICBmbGV4OiAxIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxufSIsIlxuLy8gTWFpbiBjb2xvcnNcbiRiZy1jb2xvcjogcmdiKDAsMjIsNDApO1xuJHNlbWktd2hpdGU6IHJnYmEod2hpdGUsIC44NSk7XG4kc2VtaS1ibGFjay0xOiBsaWdodGVuKCRiZy1jb2xvciwgNSk7XG4kc2VtaS1ibGFjay0yOiBsaWdodGVuKCRiZy1jb2xvciwgOCk7XG4kaGVhZGVyLWJveDogJHNlbWktYmxhY2stMTtcbiRjb250ZW50LWJveDogJHNlbWktYmxhY2stMjtcblxuLy8gQ29sb3JzXG4kYmx1ZTogI2VmMzM0MDtcbiRncmV5OiAjZDNkM2QzO1xuJG9yYW5nZTogcmdiKDI0NywxNzQsMjEpO1xuXG4vLyBCb3JkZXJzXG4kYm9yZGVyLXJhZGl1czogN3B4O1xuXG4vLyBQcmlvcml0aWVzXG4kcHJpb3JpdHktaW1tZWRpYXRlOiAjQzEyNzJEO1xuJHByaW9yaXR5LXVyZ2VudDogI0YxNUEyNDtcbiRwcmlvcml0eS1ub3JtYWw6ICMyMkI1NzM7XG4kcHJpb3JpdHktaGlnaDogI0Y3OTMxRTtcblxuLy8gR3JhcGhpY3NcbiRncmFwaGljLWJsdWUtZGFyazogIzAzOWJlNTtcbiRncmFwaGljLWJsdWU6ICRibHVlO1xuJGdyYXBoaWMtb3JhbmdlOiAjZWYzMzQwO1xuJGdyYXBoaWMtdGVhbDogIzdlNTdjMjtcblxuLy8gU3RhdHVzZXNcbiRzdGF0dXMtYmFkOiAjRTUzOTM1O1xuJHN0YXR1cy1tZWRpdW06ICNGRkNBMjg7XG4kc3RhdHVzLWdvb2Q6ICM0Q0FGNTA7XG5cbi8vIFNoYWRvd3NcbiRib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsMCwwLC4zKTtcblxuLy8gVHJhbnNpdGlvbnNcbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0eSkge1xuICAgIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4vLyBNaXhpbnNcblxuJHRyaWdnZXI6IDYwMHB4O1xuJHRhYmxldDogMTEwMHB4O1xuXG5AbWl4aW4gaWUge1xuXHRAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBlZGdlIHtcbiAgICBAc3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0bykge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSBhbmQgKG1pbi13aWR0aDogJHRyaWdnZXIpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gbW9iaWxlLXRhYmxldCB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldC1kZXNrdG9wIHtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn0iXX0= */"], changeDetection: 0 });
    return MainComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cism-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();
var DataNotFound = /** @class */ (function () {
    function DataNotFound(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DataNotFound.ɵfac = function DataNotFound_Factory(t) { return new (t || DataNotFound)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
    DataNotFound.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataNotFound, selectors: [["data-unavailable"]], decls: 8, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", ""]], template: function DataNotFound_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Oops");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No data was found for this month.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "OK");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], encapsulation: 2 });
    return DataNotFound;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataNotFound, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'data-unavailable',
                templateUrl: 'data-unavailable.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "gGAk":
/*!***************************************!*\
  !*** ./src/app/state/config.state.ts ***!
  \***************************************/
/*! exports provided: SetConfig, UpdateConfig, ConfigState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetConfig", function() { return SetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateConfig", function() { return UpdateConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigState", function() { return ConfigState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");


var SetConfig = /** @class */ (function () {
    function SetConfig(config) {
        this.config = config;
    }
    SetConfig.type = '[CONFIG] Set';
    return SetConfig;
}());

var UpdateConfig = /** @class */ (function () {
    function UpdateConfig(updates) {
        this.updates = updates;
    }
    UpdateConfig.type = '[CONFIG] Update';
    return UpdateConfig;
}());

var ConfigState = /** @class */ (function () {
    function ConfigState() {
    }
    ConfigState.prototype.setConfig = function (_a, _b) {
        var setState = _a.setState;
        var config = _b.config;
        setState(config);
    };
    ConfigState.prototype.updateConfig = function (_a, _b) {
        var patchState = _a.patchState;
        var updates = _b.updates;
        patchState(updates);
    };
    ConfigState.getLanguage = function (state) {
        return state.language;
    };
    ConfigState.getColorScheme = function (state) {
        return state.colorScheme;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(SetConfig),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, SetConfig]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], ConfigState.prototype, "setConfig", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(UpdateConfig),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, UpdateConfig]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], ConfigState.prototype, "updateConfig", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], ConfigState, "getLanguage", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], ConfigState, "getColorScheme", null);
    ConfigState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'config',
            defaults: {}
        })
    ], ConfigState);
    return ConfigState;
}());



/***/ }),

/***/ "jvDc":
/*!******************************************!*\
  !*** ./src/app/modules/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kyBy":
/*!***************************************************!*\
  !*** ./src/app/components/silt/silt.component.ts ***!
  \***************************************************/
/*! exports provided: SiltComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiltComponent", function() { return SiltComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/tools.service */ "6mc2");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/combineLatest */ "yESu");
/* harmony import */ var rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");












var SiltComponent = /** @class */ (function () {
    function SiltComponent(data, _store) {
        this.data = data;
        this._store = _store;
        this.subs = new _services_tools_service__WEBPACK_IMPORTED_MODULE_4__["SubSink"]();
        this.total = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
    }
    SiltComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    SiltComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.sink = this.data.month.pipe(Object(rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(this._store.select(function (state) { return state.tickets.silt; }))).subscribe(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), month = _b[0], silt = _b[1];
            var total = +silt.filter(function (row) { return row[1] == month.month; })[0][2];
            _this.total.next(humanizeDuration(total * 60000));
        });
    };
    SiltComponent.ɵfac = function SiltComponent_Factory(t) { return new (t || SiltComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
    SiltComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SiltComponent, selectors: [["cism-silt"]], decls: 6, vars: 6, consts: [[1, "title"], [1, "count"]], template: function SiltComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "overall_silt.average_silt"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, ctx.total));
        } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 100%;\n      flex: 1 100%;\n  max-width: 100%;\n  width: 100%;\n  height: 45px;\n  padding: 0 20px;\n  margin-bottom: 20px;\n  background-color: #002442;\n  border-radius: 7px;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    margin-top: -15px;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  [_nghost-%COMP%] {\n    margin-top: -15px;\n  }\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 45px;\n  -ms-flex: 1;\n      flex: 1;\n  white-space: nowrap;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n@media (max-width: 600px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n\n.count[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  line-height: 45px;\n  -ms-flex: 1;\n      flex: 1;\n  text-align: right;\n  color: rgba(255, 255, 255, 0.6);\n  white-space: nowrap;\n}\n\n@media (max-width: 600px) {\n  .count[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .count[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWx0L3NpbHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixnQkFBWTtNQUFaLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQ05rQztFRE9sQyxrQkNJaUI7RURIakIsc0JBQThCO01BQTlCLDhCQUE4QjtFQUM5QiwwQ0NzQnFDO0FEdkJ2Qzs7QUN5REk7RURuRUo7SUFhSSxpQkFBaUI7RUFFbkI7QUFDRjs7QUN5REk7RUR6RUo7SUFhSSxpQkFBaUI7RUFRbkI7QUFDRjs7QUFMQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBTztNQUFQLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsK0JDckJxQjtBRDZCdkI7O0FDcUNJO0VEbERKO0lBT0ksaUJBQWlCO0VBV25CO0FBQ0Y7O0FDcUNJO0VEeERKO0lBT0ksaUJBQWlCO0VBaUJuQjtBQUNGOztBQWRBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFPO01BQVAsT0FBTztFQUNQLGlCQUFpQjtFQUNqQiwrQkNoQ3FCO0VEaUNyQixtQkFBbUI7QUFpQnJCOztBQ2dCSTtFRHZDSjtJQVFJLGlCQUFpQjtFQW9CbkI7QUFDRjs7QUNnQkk7RUQ3Q0o7SUFRSSxpQkFBaUI7RUEwQm5CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpbHQvc2lsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2NvbW1vbi9jb2xvcnMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZW1pLWJsYWNrLTE7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xuICBAaW5jbHVkZSBtb2JpbGUtdGFibGV0IHtcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgfVxufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGZsZXg6IDE7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiByZ2JhKCRzZW1pLXdoaXRlLCAuNik7XG4gIEBpbmNsdWRlIG1vYmlsZS10YWJsZXQge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG59XG5cbi5jb3VudCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiByZ2JhKCRzZW1pLXdoaXRlLCAuNik7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIEBpbmNsdWRlIG1vYmlsZS10YWJsZXQge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG59IiwiXG4vLyBNYWluIGNvbG9yc1xuJGJnLWNvbG9yOiByZ2IoMCwyMiw0MCk7XG4kc2VtaS13aGl0ZTogcmdiYSh3aGl0ZSwgLjg1KTtcbiRzZW1pLWJsYWNrLTE6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA1KTtcbiRzZW1pLWJsYWNrLTI6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA4KTtcbiRoZWFkZXItYm94OiAkc2VtaS1ibGFjay0xO1xuJGNvbnRlbnQtYm94OiAkc2VtaS1ibGFjay0yO1xuXG4vLyBDb2xvcnNcbiRibHVlOiAjZWYzMzQwO1xuJGdyZXk6ICNkM2QzZDM7XG4kb3JhbmdlOiByZ2IoMjQ3LDE3NCwyMSk7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItcmFkaXVzOiA3cHg7XG5cbi8vIFByaW9yaXRpZXNcbiRwcmlvcml0eS1pbW1lZGlhdGU6ICNDMTI3MkQ7XG4kcHJpb3JpdHktdXJnZW50OiAjRjE1QTI0O1xuJHByaW9yaXR5LW5vcm1hbDogIzIyQjU3MztcbiRwcmlvcml0eS1oaWdoOiAjRjc5MzFFO1xuXG4vLyBHcmFwaGljc1xuJGdyYXBoaWMtYmx1ZS1kYXJrOiAjMDM5YmU1O1xuJGdyYXBoaWMtYmx1ZTogJGJsdWU7XG4kZ3JhcGhpYy1vcmFuZ2U6ICNlZjMzNDA7XG4kZ3JhcGhpYy10ZWFsOiAjN2U1N2MyO1xuXG4vLyBTdGF0dXNlc1xuJHN0YXR1cy1iYWQ6ICNFNTM5MzU7XG4kc3RhdHVzLW1lZGl1bTogI0ZGQ0EyODtcbiRzdGF0dXMtZ29vZDogIzRDQUY1MDtcblxuLy8gU2hhZG93c1xuJGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwwLDAsLjMpO1xuXG4vLyBUcmFuc2l0aW9uc1xuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5KSB7XG4gICAgdHJhbnNpdGlvbjogJHByb3BlcnR5IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIE1peGluc1xuXG4kdHJpZ2dlcjogNjAwcHg7XG4kdGFibGV0OiAxMTAwcHg7XG5cbkBtaXhpbiBpZSB7XG5cdEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGVkZ2Uge1xuICAgIEBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG1vYmlsZSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0cmlnZ2VyKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIGFuZCAobWluLXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdGFibGV0IHtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0LWRlc2t0b3Age1xuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufSJdfQ== */"], changeDetection: 0 });
    return SiltComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SiltComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'cism-silt',
                templateUrl: './silt.component.html',
                styleUrls: ['./silt.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "pGiK":
/*!***********************************************************************!*\
  !*** ./src/app/components/classification/classification.component.ts ***!
  \***********************************************************************/
/*! exports provided: ClassificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificationComponent", function() { return ClassificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_tools_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/tools.service */ "6mc2");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @states/config.state */ "gGAk");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/Observable */ "Q1FS");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "6aLS");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_to_string_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @pipes/to-string.pipe */ "Dpyk");


















function ClassificationComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassificationComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var group_r1 = ctx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.changeTickets(group_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "toString");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var group_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", group_r1.name == _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 6, ctx_r0.filter));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleColor", ctx_r0.rippleColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("# of ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 10, group_r1.name)), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r1.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", group_r1.percent, "%");
} }
var ClassificationComponent = /** @class */ (function () {
    function ClassificationComponent(data, ac, router, _store) {
        var _this = this;
        this.data = data;
        this.ac = ac;
        this.router = router;
        this._store = _store;
        this.subs = new _services_tools_service__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
        this.type = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.filter = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.percent = '';
        this.total = '';
        this.rippleColor = 'rgba(255,255,255,.08)';
        this.groups$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.subs.sink = this.ac.paramMap.subscribe(function (params) {
            _this.type.next(params.get('type'));
            _this.filter.next(params.get('filter'));
        });
        this.config = this._store.selectSnapshot(function (state) { return state.config; });
        this.subs.sink = this.data.month.subscribe(function (_) { return _this.rollup(); });
    }
    ClassificationComponent.prototype.rollup = function () {
        var _this = this;
        var month = this.data.month.getValue().month;
        this.subs.sink = this.type.pipe(Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (type) { return _this._store.select(function (state) { return state.tickets[type]; }); }), Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_10__["map"])(function (rows) { return rows.filter(function (row) { return row[1] === month; }); })).subscribe(function (rows) {
            var total = rows.reduce(function (r, a) { return r + parseInt(a[3], 10); }, 0);
            var groups = [];
            var length = rows.length;
            for (var i = 0; i < length; i++) {
                groups.push({
                    name: rows[i][2],
                    total: (+rows[i][3]).toLocaleString(_this.config.language),
                    percent: +((+rows[i][3]) * 100 / total).toFixed(0)
                });
            }
            _this.groups$.next(groups);
        });
    };
    ClassificationComponent.prototype.changeTickets = function (name) {
        this.router.navigate(['tickets', this.type.getValue(), name]);
    };
    ClassificationComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    ClassificationComponent.ɵfac = function ClassificationComponent_Factory(t) { return new (t || ClassificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
    ClassificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClassificationComponent, selectors: [["cism-classification"]], decls: 7, vars: 9, consts: [["routerLink", "/", "matRipple", "", 1, "classification", 3, "matRippleColor"], [1, "groups"], ["class", "group", "matRipple", "", 3, "selected", "matRippleColor", "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "group", 3, "matRippleColor", "click"], [1, "holder"], [1, "selected"], [1, "count"], [1, "percent"]], template: function ClassificationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ClassificationComponent_div_5_Template, 11, 12, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleColor", ctx.rippleColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("By ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx.type)), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, ctx.groups$));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], _pipes_to_string_pipe__WEBPACK_IMPORTED_MODULE_13__["ToStringPipe"]], styles: ["[_nghost-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 45px;\n  background-color: #002442;\n  border-radius: 7px;\n  font-size: 1.2rem;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n  line-height: 45px;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n@media (max-width: 850px) {\n  [_nghost-%COMP%] {\n    height: auto;\n  }\n}\n\n.classification[_ngcontent-%COMP%] {\n  -ms-flex: initial;\n      flex: initial;\n  padding: 0 20px;\n  font-size: 1.3rem;\n}\n\n@media (max-width: 850px) {\n  .classification[_ngcontent-%COMP%] {\n    -ms-flex: 0 0 150px;\n        flex: 0 0 150px;\n  }\n}\n\n.classification[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-image: url('assets/img/arrow.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 12px;\n  width: 12px;\n  margin-right: 15px;\n  display: inline-block;\n  position: relative;\n  -ms-transform: rotate(180deg);\n      transform: rotate(180deg);\n  top: 1px;\n}\n\n.group[_ngcontent-%COMP%] {\n  -ms-flex: 1;\n      flex: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n\n@media (max-width: 850px) {\n  .group[_ngcontent-%COMP%] {\n    -ms-flex: 1 100%;\n        flex: 1 100%;\n  }\n}\n\n.group[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\n  -ms-flex: 1;\n      flex: 1;\n  white-space: nowrap;\n}\n\n@media (min-width: 1100px) {\n  .group[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\n    -ms-flex: initial;\n        flex: initial;\n  }\n  .group[_ngcontent-%COMP%]   .selected.selected[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .selected.count[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .count.selected[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .count.count[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .percent.selected[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .percent.count[_ngcontent-%COMP%] {\n    margin-right: 20px;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .group[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\n    -ms-flex: initial;\n        flex: initial;\n  }\n  .group[_ngcontent-%COMP%]   .selected.selected[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .selected.count[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .count.selected[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .count.count[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .percent.selected[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .percent.count[_ngcontent-%COMP%] {\n    margin-right: 20px;\n  }\n}\n\n.group[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  opacity: .6;\n}\n\n.group[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 1.4rem;\n}\n\n.group[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  color: #ef3340;\n  white-space: nowrap;\n}\n\n.group[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%] {\n  color: #f7ae15;\n}\n\n.groups[_ngcontent-%COMP%] {\n  -ms-flex: 1;\n      flex: 1;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n@media (max-width: 850px) {\n  .groups[_ngcontent-%COMP%] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n}\n\n.group[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  position: relative;\n  transition: background-color .1s ease-in-out;\n}\n\n@media (max-width: 850px) {\n  .group[_ngcontent-%COMP%] {\n    padding-left: 20px;\n  }\n}\n\n@media (min-width: 1100px) {\n  .group[_ngcontent-%COMP%] {\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .group[_ngcontent-%COMP%] {\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n  }\n}\n\n@media (min-width: 1100px) {\n  .group[_ngcontent-%COMP%]:not(:first-child)   .holder[_ngcontent-%COMP%]:after {\n    content: \"\";\n    height: 65%;\n    width: 1px;\n    background-color: rgba(255, 255, 255, 0.15);\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n  }\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  .group[_ngcontent-%COMP%]:not(:first-child)   .holder[_ngcontent-%COMP%]:after {\n    content: \"\";\n    height: 65%;\n    width: 1px;\n    background-color: rgba(255, 255, 255, 0.15);\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n  }\n}\n\n.group[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.03);\n}\n\n.group.selected[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  opacity: .9;\n}\n\n.group.selected[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid #cf101d;\n  width: 0;\n  height: 0;\n}\n\n@media (max-width: 850px) {\n  .group.selected[_ngcontent-%COMP%]:before {\n    top: 0;\n    right: initial;\n    border-left: 8px solid #cf101d;\n    border-top: 7px solid transparent;\n    border-right: 0px solid transparent;\n    border-bottom: 7px solid transparent;\n    border-radius: 2px;\n  }\n}\n\n.group.selected[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  height: 2px;\n  background-color: #cf101d;\n  width: 100%;\n}\n\n@media (max-width: 850px) {\n  .group.selected[_ngcontent-%COMP%]:after {\n    background-color: transparent;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGFzc2lmaWNhdGlvbi9jbGFzc2lmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBSVoseUJDTmtDO0VET2xDLGtCQ0lpQjtFREhqQixpQkFBaUI7RUFDakIsMENDc0JxQztFRHJCckMsaUJBQWlCO0VBQ2pCLHNCQUE4QjtNQUE5Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFMakI7O0FBTEU7RUFKRjtJQUtJLFlBQVk7RUFTZDtBQUNGOztBQUVBO0VBQ0UsaUJBQWE7TUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFBRTtFQUpGO0lBS0ksbUJBQWU7UUFBZixlQUFlO0VBSWpCO0FBQ0Y7O0FBVkE7RUFRSSxXQUFXO0VBQ1gsNkNBQTRDO0VBQzVDLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQiw2QkFBeUI7TUFBekIseUJBQXlCO0VBQ3pCLFFBQVE7QUFNWjs7QUFGQTtFQUNFLFdBQU87TUFBUCxPQUFPO0VBQ1Asb0JBQWE7RUFBYixhQUFhO0VBSWIsc0JBQThCO01BQTlCLDhCQUE4QjtBQUVoQzs7QUFMRTtFQUhGO0lBSUksZ0JBQVk7UUFBWixZQUFZO0VBU2Q7QUFDRjs7QUFkQTtFQVFJLFdBQU87TUFBUCxPQUFPO0VBQ1AsbUJBQW1CO0FBVXZCOztBQ0VJO0VEckJKO0lBV00saUJBQWE7UUFBYixhQUFhO0VBYWpCO0VBeEJGO0lBY1Esa0JBQWtCO0VBYXhCO0FBQ0Y7O0FDS0k7RURqQ0o7SUFrQk0saUJBQWE7UUFBYixhQUFhO0VBZWpCO0VBakNGO0lBcUJRLGtCQUFrQjtFQWV4QjtBQUNGOztBQXJDQTtFQTBCSSxXQUFXO0FBZWY7O0FBekNBO0VBNkJJLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFnQnJCOztBQTlDQTtFQWlDSSxjQ2pFVTtFRGtFVixtQkFBbUI7QUFpQnZCOztBQW5EQTtFQXFDSSxjQ25Fb0I7QURxRnhCOztBQWRBO0VBQ0UsV0FBTztNQUFQLE9BQU87RUFDUCxvQkFBYTtFQUFiLGFBQWE7QUFpQmY7O0FBaEJFO0VBSEY7SUFJSSxtQkFBZTtRQUFmLGVBQWU7RUFvQmpCO0FBQ0Y7O0FBakJBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw0Q0FBNEM7QUFvQjlDOztBQW5CRTtFQUpGO0lBS0ksa0JBQWtCO0VBdUJwQjtBQUNGOztBQ3pESTtFRDRCSjtJQVFJLHFCQUF1QjtRQUF2Qix1QkFBdUI7SUFDdkIsc0JBQW1CO1FBQW5CLG1CQUFtQjtFQTBCckI7QUFDRjs7QUNwREk7RURnQko7SUFZSSxxQkFBdUI7UUFBdkIsdUJBQXVCO0lBQ3ZCLHNCQUFtQjtRQUFuQixtQkFBbUI7RUE2QnJCO0FBQ0Y7O0FDdkVJO0VENEJKO0lBa0JRLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLDJDQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztFQThCYjtBQUNGOztBQ3pFSTtFRGdCSjtJQWtCUSxXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7SUFDViwyQ0FBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87RUE0Q2I7QUFDRjs7QUF2RUE7RUErQkksMkNBQTRCO0FBNENoQzs7QUEzRUE7RUFtQ00sV0FBVztBQTRDakI7O0FBL0VBO0VBc0NNLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsZ0NBQTBDO0VBVTFDLFFBQVE7RUFDUixTQUFTO0FBb0NmOztBQTlDTTtFQS9DTjtJQWdEUSxNQUFNO0lBQ04sY0FBYztJQUNkLDhCQUF3QztJQUN4QyxpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxrQkFBa0I7RUFrRHhCO0FBQ0Y7O0FBekdBO0VBNERNLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBbUM7RUFDbkMsV0FBVztBQWlEakI7O0FBaERNO0VBckVOO0lBc0VRLDZCQUE2QjtFQW9EbkM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3NpZmljYXRpb24vY2xhc3NpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgJy4uLy4uL2NvbW1vbi9jb2xvcnMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VtaS1ibGFjay0xO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGFzc2lmaWNhdGlvbiB7XG4gIGZsZXg6IGluaXRpYWw7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xuICAgIGZsZXg6IDAgMCAxNTBweDtcbiAgfVxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXmFzc2V0cy9pbWcvYXJyb3cuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB0b3A6IDFweDtcbiAgfVxufVxuXG4uZ3JvdXAge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBAbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgICBmbGV4OiAxIDEwMCU7XG4gIH1cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAuc2VsZWN0ZWQsIC5jb3VudCwgLnBlcmNlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIGZsZXg6IGluaXRpYWw7XG4gICAgICAmLnNlbGVjdGVkLFxuICAgICAgJi5jb3VudCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIGZsZXg6IGluaXRpYWw7XG4gICAgICAmLnNlbGVjdGVkLFxuICAgICAgJi5jb3VudCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnNlbGVjdGVkIHtcbiAgICBvcGFjaXR5OiAuNjtcbiAgfVxuICAuY291bnQsIC5wZXJjZW50IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICAuY291bnQge1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC5wZXJjZW50IHtcbiAgICBjb2xvcjogJG9yYW5nZTtcbiAgfVxufVxuXG4uZ3JvdXBzIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5cbi5ncm91cCB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xcyBlYXNlLWluLW91dDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG4gIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIEBpbmNsdWRlIHRhYmxldC1kZXNrdG9wIHtcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIC5ob2xkZXI6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBoZWlnaHQ6IDY1JTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh3aGl0ZSwgLjE1KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHdoaXRlLCAuMDMpXG4gIH1cbiAgJi5zZWxlY3RlZCB7XG4gICAgLnNlbGVjdGVkIHtcbiAgICAgIG9wYWNpdHk6IC45O1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIGRhcmtlbigkYmx1ZSwgMTMpO1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IGluaXRpYWw7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgZGFya2VuKCRibHVlLCAxMyk7XG4gICAgICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgfVxuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRibHVlLCAxMyk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJcbi8vIE1haW4gY29sb3JzXG4kYmctY29sb3I6IHJnYigwLDIyLDQwKTtcbiRzZW1pLXdoaXRlOiByZ2JhKHdoaXRlLCAuODUpO1xuJHNlbWktYmxhY2stMTogbGlnaHRlbigkYmctY29sb3IsIDUpO1xuJHNlbWktYmxhY2stMjogbGlnaHRlbigkYmctY29sb3IsIDgpO1xuJGhlYWRlci1ib3g6ICRzZW1pLWJsYWNrLTE7XG4kY29udGVudC1ib3g6ICRzZW1pLWJsYWNrLTI7XG5cbi8vIENvbG9yc1xuJGJsdWU6ICNlZjMzNDA7XG4kZ3JleTogI2QzZDNkMztcbiRvcmFuZ2U6IHJnYigyNDcsMTc0LDIxKTtcblxuLy8gQm9yZGVyc1xuJGJvcmRlci1yYWRpdXM6IDdweDtcblxuLy8gUHJpb3JpdGllc1xuJHByaW9yaXR5LWltbWVkaWF0ZTogI0MxMjcyRDtcbiRwcmlvcml0eS11cmdlbnQ6ICNGMTVBMjQ7XG4kcHJpb3JpdHktbm9ybWFsOiAjMjJCNTczO1xuJHByaW9yaXR5LWhpZ2g6ICNGNzkzMUU7XG5cbi8vIEdyYXBoaWNzXG4kZ3JhcGhpYy1ibHVlLWRhcms6ICMwMzliZTU7XG4kZ3JhcGhpYy1ibHVlOiAkYmx1ZTtcbiRncmFwaGljLW9yYW5nZTogI2VmMzM0MDtcbiRncmFwaGljLXRlYWw6ICM3ZTU3YzI7XG5cbi8vIFN0YXR1c2VzXG4kc3RhdHVzLWJhZDogI0U1MzkzNTtcbiRzdGF0dXMtbWVkaXVtOiAjRkZDQTI4O1xuJHN0YXR1cy1nb29kOiAjNENBRjUwO1xuXG4vLyBTaGFkb3dzXG4kYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLDAsMCwuMyk7XG5cbi8vIFRyYW5zaXRpb25zXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcGVydHkpIHtcbiAgICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgLjE1cyBlYXNlLWluLW91dDtcbn1cblxuLy8gTWl4aW5zXG5cbiR0cmlnZ2VyOiA2MDBweDtcbiR0YWJsZXQ6IDExMDBweDtcblxuQG1peGluIGllIHtcblx0QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4gZWRnZSB7XG4gICAgQHN1cHBvcnRzICgtbXMtYWNjZWxlcmF0b3I6dHJ1ZSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOmF1dG8pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gbW9iaWxlIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHRyaWdnZXIpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkgYW5kIChtaW4td2lkdGg6ICR0cmlnZ2VyKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG1vYmlsZS10YWJsZXQge1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQtZGVza3RvcCB7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59Il19 */"], changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_states_config_state__WEBPACK_IMPORTED_MODULE_7__["ConfigState"].getLanguage),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_8__["Observable"])
    ], ClassificationComponent.prototype, "language$", void 0);
    return ClassificationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClassificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'cism-classification',
                templateUrl: './classification.component.html',
                styleUrls: ['./classification.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, { language$: [] }); })();


/***/ }),

/***/ "qE0E":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @states/config.state */ "gGAk");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _components_report_info_report_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/report-info/report-info.component */ "BNfh");




















function AboutComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var lang_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r6.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r6.value);
} }
function AboutComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.enableExperimentalFeatures(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "about.betaFeatures"));
} }
function AboutComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.enableExperimentalFeatures(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "about.notBetaFeatures"));
} }
function AboutComponent_li_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "IBM Cognos Analytics 11: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Consumer License");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r3.config.portalLink[ctx_r3.config.scenario], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AboutComponent_report_info_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "report-info", 24);
} if (rf & 2) {
    var prop_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prop", prop_r11);
} }
function AboutComponent_li_91_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 27);
} if (rf & 2) {
    var desc_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", desc_r15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AboutComponent_li_91_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutComponent_li_91_ul_3_li_1_Template, 1, 1, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var change_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", change_r12.text);
} }
function AboutComponent_li_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutComponent_li_91_ul_3_Template, 2, 1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var change_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](change_r12.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", change_r12.text.length > 0);
} }
var AboutComponent = /** @class */ (function () {
    function AboutComponent(translate, snack, data, keyValue, _store) {
        this.translate = translate;
        this.snack = snack;
        this.data = data;
        this.keyValue = keyValue;
        this._store = _store;
        this.version = _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full;
        this.reports = [];
        this.config = this._store.selectSnapshot(function (state) { return state.config; });
        data.currentLevel = 1;
    }
    AboutComponent.prototype.enableExperimentalFeatures = function (tof) {
        localStorage.setItem('enableExperimentalFeatures', tof ? 'yes' : 'no');
        location.reload();
    };
    AboutComponent.prototype.ngOnInit = function () {
        var a = this.keyValue.transform(this.config.reports[this.config.scenario]);
        a = a.filter(function (item) { return item.key !== 'monthsSelector' && item.key !== 'months'; });
        this.reports = a;
    };
    AboutComponent.prototype.setLang = function (code) {
        localStorage.setItem('lang', code);
        this.translate.use(code);
        this._store.dispatch(new _states_config_state__WEBPACK_IMPORTED_MODULE_6__["UpdateConfig"]({ language: code }));
        this.snack.open('Language changed successfully!', 'OK', { duration: 3000 });
    };
    AboutComponent.prototype.reloadLang = function () {
        this.translate.reloadLang(this.config.language);
        this.snack.open('Language reloaded successfully!', 'OK', { duration: 3000 });
    };
    AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["cism-about"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]])], decls: 92, vars: 35, consts: [[3, "multi"], [2, "margin-right", "20px"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matTooltip", "Useful when the language files are cached and a refresh is needed.", "matTooltipPosition", "after", "matTooltipClass", "after", "mat-raised-button", "", 1, "reload-translations", 3, "click"], ["matTooltip", "Enables future (beta) features", "matTooltipPosition", "after", "matTooltipClass", "after", "class", "reload-translations", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["matTooltip", "Disables future (beta) features", "matTooltipPosition", "after", "matTooltipClass", "after", "class", "reload-translations", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["href", "https://material.io/", "target", "_blank"], ["href", "https://www.datec24.de/", "target", "_blank"], ["href", "https://angular.io/", "target", "_blank"], [1, "software"], [4, "ngIf"], ["href", "https://github.com/angular/angular/blob/master/LICENSE", "target", "_blank"], ["href", "https://github.com/ngx-translate/core/blob/master/LICENSE", "target", "_blank"], ["href", "https://github.com/ultrasonicsoft/ng-connection-service/blob/master/LICENSE", "target", "_blank"], ["href", "https://github.com/rintoj/ngx-virtual-scroller/blob/master/LICENSE", "target", "_blank"], ["href", "https://github.com/date-fns/date-fns/blob/master/LICENSE.md", "target", "_blank"], [3, "prop", 4, "ngFor", "ngForOf"], [1, "changelog"], [4, "ngFor", "ngForOf"], [3, "value"], ["matTooltip", "Enables future (beta) features", "matTooltipPosition", "after", "matTooltipClass", "after", "mat-raised-button", "", 1, "reload-translations", 3, "click"], ["matTooltip", "Disables future (beta) features", "matTooltipPosition", "after", "matTooltipClass", "after", "mat-raised-button", "", 1, "reload-translations", 3, "click"], ["target", "_blank", 3, "href"], [3, "prop"], [1, "change-title"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AboutComponent_Template_mat_select_selectionChange_10_listener($event) { return ctx.setLang($event.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AboutComponent_mat_option_11_Template, 2, 2, "mat-option", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_13_listener() { return ctx.reloadLang(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AboutComponent_button_16_Template, 3, 3, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AboutComponent_button_17_Template, 3, 3, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " We would like to thank Google for their UX Material design, which brings a new modern design and adaptable to any need. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "See Google Material Guidelines");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " We also thank IBM for providing Cognos Analytics to business departments as the tool of choice for data analysis, data exploration as well as fast dashboards and pixel perfect reporting. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "This mobile report has been developed by ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "datec24 AG");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " using ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "IBM Cognos Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Angular");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " The data queries were provided by the respective business department itself. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AboutComponent_li_53_Template, 4, 1, "li", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Angular: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "MIT License");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "ngx-translate: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "MIT License");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "ng-connection-service: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "MIT License");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "ngx-virtual-scroller: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "MIT License");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "date-fns: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "MIT License");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "All packages listed above uses the latest stable version.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, AboutComponent_report_info_83_Template, 1, 1, "report-info", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, AboutComponent_li_91_Template, 4, 2, "li", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 17, "about.config"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 19, "about.language"), ": ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.config.language);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 21, ctx.config.languageCodes));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 23, "about.reloadLanguageFiles"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.config.system.enable);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.system.enable);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 25, "about.thanks"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 27, "about.software"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 29, "about.licenses"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config.apiType === "cognos");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 31, "about.technical_information"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Version: ", ctx.config.version, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reports);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](88, 33, "about.changelog"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.config.changelog);
        } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _components_report_info_report_info_component__WEBPACK_IMPORTED_MODULE_13__["ReportInfoComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  max-width: 1000px;\n  margin-top: 20px;\n  box-sizing: border-box;\n}\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    padding: 0 20px;\n  }\n}\n@media (max-width: 1100px) and (min-width: 600px) {\n  [_nghost-%COMP%] {\n    padding: 0 20px;\n  }\n}\n.reload-translations[_ngcontent-%COMP%] {\n  padding: 0 10px !important;\n  line-height: 27px !important;\n  margin: 10px 0 15px !important;\n  display: block;\n}\n  cism-about .mat-select-value-text {\n  color: #ef3340;\n}\n  cism-about .mat-select-arrow {\n  color: #ef3340;\n}\n  cism-about .mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: #ef3340;\n}\n  cism-about .mat-form-field.mat-focused .mat-select-value-text {\n  color: white;\n}\n  cism-about .mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-left: 1em;\n}\n  cism-about .mat-expansion-panel-header {\n  border-bottom: 1px solid #ef3340;\n  margin-bottom: 1px;\n}\n  cism-about .mat-expansion-panel:not([class*='mat-elevation-z']) {\n  box-shadow: none;\n}\n.changelog[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  color: #ef3340;\n}\n.changelog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 30px;\n  list-style-type: none;\n  line-height: 30px;\n}\n.changelog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  padding-left: 15px;\n}\n.changelog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\u2022\";\n  color: #ef3340;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFaEI7RUFDSSxjQUFjO0VBQ2QsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQTFCO0FDOERJO0VEbkVKO0lBT1EsZUFBZTtFQUdyQjtBQUNGO0FDOERJO0VEekVKO0lBVVEsZUFBZTtFQU1yQjtBQUNGO0FBSEE7RUFDSSwwQkFBeUI7RUFDekIsNEJBQTJCO0VBQzNCLDhCQUE2QjtFQUM3QixjQUFjO0FBTWxCO0FBSEE7RUFDSSxjQ2RVO0FEb0JkO0FBSkE7RUFDSSxjQ2pCVTtBRHdCZDtBQUxBO0VBQ0kseUJDcEJVO0FENEJkO0FBTkE7RUFDSSxZQUFZO0FBU2hCO0FBUEE7RUFDSSxpQkFBaUI7QUFVckI7QUFQQTtFQUNJLGdDQzlCVTtFRCtCVixrQkFBa0I7QUFVdEI7QUFSQTtFQUNJLGdCQUFnQjtBQVdwQjtBQVJBO0VBQ0ksY0N0Q1U7QURpRGQ7QUFSRTtFQUNJLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBV3ZCO0FBZEU7RUFVTSxnQ0MxRGU7RUQyRGYsa0JBQWtCO0FBUTFCO0FBbkJFO0VBTVUsWUFBUztFQUNULGNDaERFO0VEaURGLGtCQUFrQjtBQWlCOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vY29tbW9uL2NvbG9ycyc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgIH1cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgfVxufVxuXG4ucmVsb2FkLXRyYW5zbGF0aW9uc3tcbiAgICBwYWRkaW5nOiAwIDEwcHghaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4IWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEwcHggMCAxNXB4IWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuOjpuZy1kZWVwIGNpc20tYWJvdXQgLm1hdC1zZWxlY3QtdmFsdWUtdGV4dCB7XG4gICAgY29sb3I6ICRibHVlO1xufVxuOjpuZy1kZWVwIGNpc20tYWJvdXQgLm1hdC1zZWxlY3QtYXJyb3d7XG4gICAgY29sb3I6ICRibHVlO1xufVxuOjpuZy1kZWVwIGNpc20tYWJvdXQgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xufVxuOjpuZy1kZWVwIGNpc20tYWJvdXQgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LXZhbHVlLXRleHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCBjaXNtLWFib3V0IC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG59XG5cbjo6bmctZGVlcCBjaXNtLWFib3V0IC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRibHVlO1xuICAgIG1hcmdpbi1ib3R0b206IDFweDtcbn1cbjo6bmctZGVlcCBjaXNtLWFib3V0IC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSl7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNoYW5nZWxvZyA+IHVsID4gbGkge1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgfVxuICBcbiAgLmNoYW5nZWxvZyB1bCBsaSB7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgbGkge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIuKAolwiO1xuICAgICAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGNvbG9yOiAkc2VtaS13aGl0ZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgfVxuICB9IiwiXG4vLyBNYWluIGNvbG9yc1xuJGJnLWNvbG9yOiByZ2IoMCwyMiw0MCk7XG4kc2VtaS13aGl0ZTogcmdiYSh3aGl0ZSwgLjg1KTtcbiRzZW1pLWJsYWNrLTE6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA1KTtcbiRzZW1pLWJsYWNrLTI6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA4KTtcbiRoZWFkZXItYm94OiAkc2VtaS1ibGFjay0xO1xuJGNvbnRlbnQtYm94OiAkc2VtaS1ibGFjay0yO1xuXG4vLyBDb2xvcnNcbiRibHVlOiAjZWYzMzQwO1xuJGdyZXk6ICNkM2QzZDM7XG4kb3JhbmdlOiByZ2IoMjQ3LDE3NCwyMSk7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItcmFkaXVzOiA3cHg7XG5cbi8vIFByaW9yaXRpZXNcbiRwcmlvcml0eS1pbW1lZGlhdGU6ICNDMTI3MkQ7XG4kcHJpb3JpdHktdXJnZW50OiAjRjE1QTI0O1xuJHByaW9yaXR5LW5vcm1hbDogIzIyQjU3MztcbiRwcmlvcml0eS1oaWdoOiAjRjc5MzFFO1xuXG4vLyBHcmFwaGljc1xuJGdyYXBoaWMtYmx1ZS1kYXJrOiAjMDM5YmU1O1xuJGdyYXBoaWMtYmx1ZTogJGJsdWU7XG4kZ3JhcGhpYy1vcmFuZ2U6ICNlZjMzNDA7XG4kZ3JhcGhpYy10ZWFsOiAjN2U1N2MyO1xuXG4vLyBTdGF0dXNlc1xuJHN0YXR1cy1iYWQ6ICNFNTM5MzU7XG4kc3RhdHVzLW1lZGl1bTogI0ZGQ0EyODtcbiRzdGF0dXMtZ29vZDogIzRDQUY1MDtcblxuLy8gU2hhZG93c1xuJGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwwLDAsLjMpO1xuXG4vLyBUcmFuc2l0aW9uc1xuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5KSB7XG4gICAgdHJhbnNpdGlvbjogJHByb3BlcnR5IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIE1peGluc1xuXG4kdHJpZ2dlcjogNjAwcHg7XG4kdGFibGV0OiAxMTAwcHg7XG5cbkBtaXhpbiBpZSB7XG5cdEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGVkZ2Uge1xuICAgIEBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG1vYmlsZSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0cmlnZ2VyKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIGFuZCAobWluLXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdGFibGV0IHtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0LWRlc2t0b3Age1xuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufSJdfQ== */"], changeDetection: 0 });
    return AboutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cism-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "qfzh":
/*!**********************************!*\
  !*** ./src/app/pipes/ru.pipe.ts ***!
  \**********************************/
/*! exports provided: RuPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuPipe", function() { return RuPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var RuPipe = /** @class */ (function () {
    function RuPipe() {
    }
    RuPipe.prototype.transform = function (value) {
        value = value.replace(/_/g, ' ');
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    RuPipe.ɵfac = function RuPipe_Factory(t) { return new (t || RuPipe)(); };
    RuPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ru", type: RuPipe, pure: true });
    return RuPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RuPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'ru' // Remove Underscores
            }]
    }], null, null); })();


/***/ }),

/***/ "tbm1":
/*!***********************************************************************!*\
  !*** ./src/app/components/ux/header/menu-icon/menu-icon.component.ts ***!
  \***********************************************************************/
/*! exports provided: MenuIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuIconComponent", function() { return MenuIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var MenuIconComponent = /** @class */ (function () {
    function MenuIconComponent() {
    }
    MenuIconComponent.ɵfac = function MenuIconComponent_Factory(t) { return new (t || MenuIconComponent)(); };
    MenuIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuIconComponent, selectors: [["cism-menu-icon"]], decls: 3, vars: 0, consts: [[1, "line", "top"], [1, "line", "middle"], [1, "line", "bottom"]], template: function MenuIconComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n  height: 25px;\n  width: 30px;\n  display: block;\n  cursor: pointer;\n}\n\n@media (min-width: 1100px) {\n  [_nghost-%COMP%] {\n    display: none;\n  }\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: rgba(255, 255, 255, 0.85);\n  position: absolute;\n  margin: auto;\n}\n\n.top[_ngcontent-%COMP%] {\n  top: 0;\n}\n\n.middle[_ngcontent-%COMP%] {\n  top: 0;\n  bottom: 0;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91eC9oZWFkZXIvbWVudS1pY29uL21lbnUtaWNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0FBRm5COztBQ3lESTtFRDVESjtJQU9RLGFBQWE7RUFDbkI7QUFDRjs7QUFFQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsMkNDZG1CO0VEZW5CLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2hCOztBQUVBO0VBQ0ksTUFBTTtBQUNWOztBQUVBO0VBQ0ksTUFBTTtFQUNOLFNBQVM7QUFDYjs7QUFFQTtFQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXgvaGVhZGVyL21lbnUtaWNvbi9tZW51LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2NvbW1vbi9jb2xvcnMnO1xuXG46aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4ubGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlbWktd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnRvcCB7XG4gICAgdG9wOiAwO1xufVxuXG4ubWlkZGxlIHtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xufVxuXG4uYm90dG9tIHtcbiAgICBib3R0b206IDA7XG59IiwiXG4vLyBNYWluIGNvbG9yc1xuJGJnLWNvbG9yOiByZ2IoMCwyMiw0MCk7XG4kc2VtaS13aGl0ZTogcmdiYSh3aGl0ZSwgLjg1KTtcbiRzZW1pLWJsYWNrLTE6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA1KTtcbiRzZW1pLWJsYWNrLTI6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA4KTtcbiRoZWFkZXItYm94OiAkc2VtaS1ibGFjay0xO1xuJGNvbnRlbnQtYm94OiAkc2VtaS1ibGFjay0yO1xuXG4vLyBDb2xvcnNcbiRibHVlOiAjZWYzMzQwO1xuJGdyZXk6ICNkM2QzZDM7XG4kb3JhbmdlOiByZ2IoMjQ3LDE3NCwyMSk7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItcmFkaXVzOiA3cHg7XG5cbi8vIFByaW9yaXRpZXNcbiRwcmlvcml0eS1pbW1lZGlhdGU6ICNDMTI3MkQ7XG4kcHJpb3JpdHktdXJnZW50OiAjRjE1QTI0O1xuJHByaW9yaXR5LW5vcm1hbDogIzIyQjU3MztcbiRwcmlvcml0eS1oaWdoOiAjRjc5MzFFO1xuXG4vLyBHcmFwaGljc1xuJGdyYXBoaWMtYmx1ZS1kYXJrOiAjMDM5YmU1O1xuJGdyYXBoaWMtYmx1ZTogJGJsdWU7XG4kZ3JhcGhpYy1vcmFuZ2U6ICNlZjMzNDA7XG4kZ3JhcGhpYy10ZWFsOiAjN2U1N2MyO1xuXG4vLyBTdGF0dXNlc1xuJHN0YXR1cy1iYWQ6ICNFNTM5MzU7XG4kc3RhdHVzLW1lZGl1bTogI0ZGQ0EyODtcbiRzdGF0dXMtZ29vZDogIzRDQUY1MDtcblxuLy8gU2hhZG93c1xuJGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwwLDAsLjMpO1xuXG4vLyBUcmFuc2l0aW9uc1xuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5KSB7XG4gICAgdHJhbnNpdGlvbjogJHByb3BlcnR5IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIE1peGluc1xuXG4kdHJpZ2dlcjogNjAwcHg7XG4kdGFibGV0OiAxMTAwcHg7XG5cbkBtaXhpbiBpZSB7XG5cdEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGVkZ2Uge1xuICAgIEBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG1vYmlsZSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0cmlnZ2VyKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIGFuZCAobWluLXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdGFibGV0IHtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0LWRlc2t0b3Age1xuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufSJdfQ== */"], changeDetection: 0 });
    return MenuIconComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cism-menu-icon',
                templateUrl: './menu-icon.component.html',
                styleUrls: ['./menu-icon.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "u7Z3":
/*!*******************************************!*\
  !*** ./src/app/pipes/date-format.pipe.ts ***!
  \*******************************************/
/*! exports provided: DateFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function() { return DateFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "b/SL");



var DateFormatPipe = /** @class */ (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (date, formato) {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(date, formato);
    };
    DateFormatPipe.ɵfac = function DateFormatPipe_Factory(t) { return new (t || DateFormatPipe)(); };
    DateFormatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateFormat", type: DateFormatPipe, pure: true });
    return DateFormatPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateFormatPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateFormat'
            }]
    }], null, null); })();


/***/ }),

/***/ "uOkz":
/*!***********************************!*\
  !*** ./src/app/paginator-intl.ts ***!
  \***********************************/
/*! exports provided: CismPaginatorIntl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CismPaginatorIntl", function() { return CismPaginatorIntl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




var CismPaginatorIntl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CismPaginatorIntl, _super);
    function CismPaginatorIntl() {
        var _this = _super.call(this) || this;
        _this.itemsPerPageLabel = 'Tickets per page: ';
        _this.nextPageLabel = 'Next page';
        _this.previousPageLabel = 'Previous page';
        _this.getRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0)
                return "0 of " + length;
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return startIndex + 1 + " - " + endIndex + " of " + length;
        };
        return _this;
    }
    CismPaginatorIntl.ɵfac = function CismPaginatorIntl_Factory(t) { return new (t || CismPaginatorIntl)(); };
    CismPaginatorIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CismPaginatorIntl, factory: CismPaginatorIntl.ɵfac });
    return CismPaginatorIntl;
}(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CismPaginatorIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vPOg":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(data) {
        this.data = data;
    }
    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
    LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["cism-loader"]], decls: 2, vars: 4, consts: [["mode", "indeterminate"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.data.loading) ? 1 : 0);
        } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: calc(100% - 80px);\n  position: absolute;\n  height: 3px;\n  top: 65px;\n  border-radius: 3px;\n  overflow: hidden;\n  left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFGWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCAnLi4vLi4vY29tbW9uL2NvbG9ycyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDNweDtcbiAgdG9wOiA2NXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxlZnQ6IDQwcHg7XG59Il19 */"] });
    return LoaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cism-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/pages/about/about.component */ "qE0E");
/* harmony import */ var _components_pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/pages/main/main.component */ "ZqKk");
/* harmony import */ var _components_pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/pages/tickets/tickets.component */ "LiT0");







var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _components_pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        data: { state: 'main' }
    },
    {
        path: 'tickets',
        component: _components_pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_4__["TicketsComponent"],
        data: { state: 'tickets' }
    },
    {
        path: 'tickets/:type/:filter',
        component: _components_pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_4__["TicketsComponent"],
        data: { state: 'tickets' }
    },
    {
        path: 'system',
        loadChildren: function () { return __webpack_require__.e(/*! import() | modules-system-module */ "modules-system-module").then(__webpack_require__.bind(null, /*! @modules/system.module */ "lWbp")).then(function (m) { return m.SystemModule; }); }
    },
    {
        path: "about", component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: "help",
        loadChildren: function () { return __webpack_require__.e(/*! import() | components-pages-help-help-module */ "components-pages-help-help-module").then(__webpack_require__.bind(null, /*! @components/pages/help/help.module */ "WKYI")).then(function (m) { return m.HelpModule; }); }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    paramsInheritanceStrategy: 'always'
                })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: true,
                        paramsInheritanceStrategy: 'always'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yw1n":
/*!******************************************************************!*\
  !*** ./src/app/components/graphics/stacked/stacked.component.ts ***!
  \******************************************************************/
/*! exports provided: StackedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackedComponent", function() { return StackedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/data.service */ "EnSQ");
/* harmony import */ var _services_tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/tools.service */ "6mc2");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _states_tickets_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @states/tickets.state */ "CVyY");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/Observable */ "Q1FS");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/combineLatest */ "yESu");
/* harmony import */ var rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @states/config.state */ "gGAk");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");


















var StackedComponent = /** @class */ (function () {
    function StackedComponent(router, data, _store) {
        this.router = router;
        this.data = data;
        this._store = _store;
        this.subs = new _services_tools_service__WEBPACK_IMPORTED_MODULE_4__["SubSink"]();
        this.multi = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"]([]);
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = false;
        this.showYAxisLabel = false;
        this.colorScheme = {
            domain: this._store.selectSnapshot(_states_config_state__WEBPACK_IMPORTED_MODULE_11__["ConfigState"].getColorScheme).map(function (item) { return item.color; })
        };
    }
    StackedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.sink = this.data.month.pipe(Object(rxjs_internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])(this._store.select(function (state) { return state.tickets.chart; }))).subscribe(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), month = _b[0], chart = _b[1];
            var barchartData = chart.filter(function (row) { return row[2] == month.month; });
            var length = barchartData.length;
            var series = [];
            var name = _this._store.selectSnapshot(_states_config_state__WEBPACK_IMPORTED_MODULE_11__["ConfigState"].getColorScheme).map(function (item) { return item.name; });
            for (var i = 0; i < length; i++) {
                var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["parse"])(barchartData[i][1], "yyyy'-'MM'-'dd", new Date());
                date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(date, 'd');
                series.push({
                    'name': date,
                    'series': [
                        {
                            'name': name[0],
                            'value': +barchartData[i][5]
                        },
                        {
                            'name': name[1],
                            'value': +barchartData[i][3]
                        },
                        {
                            'name': name[2],
                            'value': +barchartData[i][6]
                        },
                        {
                            'name': name[3],
                            'value': +barchartData[i][4]
                        }
                    ]
                });
            }
            series.sort(function (a, b) { return parseInt(a.name, 10) - parseInt(b.name, 10); });
            _this.multi.next(series);
        });
    };
    StackedComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    StackedComponent.prototype.go = function (e) {
        this.data.loading.next(true);
        this.router.navigate(['tickets', 'type', e.name]);
    };
    StackedComponent.ɵfac = function StackedComponent_Factory(t) { return new (t || StackedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
    StackedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StackedComponent, selectors: [["cism-stacked"]], decls: 2, vars: 10, consts: [[3, "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "scheme", "select"]], template: function StackedComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-charts-bar-vertical-stacked", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function StackedComponent_Template_ngx_charts_bar_vertical_stacked_select_0_listener($event) { return ctx.go($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("results", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 8, ctx.multi))("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("scheme", ctx.colorScheme);
        } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__["BarVerticalStackedComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: calc(100% - 170px);\n  max-height: 600px;\n  width: 100%;\n  margin-top: 50px;\n}\n\n@media (max-width: 1100px) and (min-width: 600px) {\n  [_nghost-%COMP%] {\n    height: 300px;\n  }\n}\n\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    display: none;\n  }\n}\n\n[_nghost-%COMP%]  ngx-charts-bar-vertical-stacked, [_nghost-%COMP%]  ngx-charts-chart {\n  display: block;\n  height: 100%;\n}\n\n  text {\n  fill: rgba(255, 255, 255, 0.4);\n}\n\n  .ngx-charts .gridline-path {\n  stroke: rgba(255, 255, 255, 0.2) !important;\n}\n\n  [ngx-charts-y-axis-ticks] g:nth-child(2) {\n  stroke: rgba(255, 255, 255, 0.1) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaGljcy9zdGFja2VkL3N0YWNrZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0FBRmxCOztBQ3FFSTtFRHhFSjtJQU9JLGFBQWE7RUFDZjtBQUNGOztBQ3lESTtFRGxFSjtJQVVJLGFBQWE7RUFJZjtBQUNGOztBQURBOztFQUVFLGNBQWM7RUFDZCxZQUFZO0FBSWQ7O0FBREE7RUFDRSw4QkNyQnFCO0FEeUJ2Qjs7QUFEQTtFQUNFLDJDQUF1QztBQUl6Qzs7QUFEQTtFQUNFLDJDQUF1QztBQUl6QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JhcGhpY3Mvc3RhY2tlZC9zdGFja2VkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICcuLi8uLi8uLi9jb21tb24vY29sb3JzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNzBweCk7XG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG4gIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG46aG9zdDo6bmctZGVlcCBuZ3gtY2hhcnRzLWJhci12ZXJ0aWNhbC1zdGFja2VkLFxuOmhvc3Q6Om5nLWRlZXAgbmd4LWNoYXJ0cy1jaGFydCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjo6bmctZGVlcCB0ZXh0IHtcbiAgZmlsbDogcmdiYSgkc2VtaS13aGl0ZSwuNCk7XG59XG5cbjo6bmctZGVlcCAubmd4LWNoYXJ0cyAuZ3JpZGxpbmUtcGF0aCB7XG4gIHN0cm9rZTogcmdiYSgkc2VtaS13aGl0ZSwuMikgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIFtuZ3gtY2hhcnRzLXktYXhpcy10aWNrc10gZzpudGgtY2hpbGQoMikge1xuICBzdHJva2U6IHJnYmEoJHNlbWktd2hpdGUsLjEpICFpbXBvcnRhbnQ7XG59IiwiXG4vLyBNYWluIGNvbG9yc1xuJGJnLWNvbG9yOiByZ2IoMCwyMiw0MCk7XG4kc2VtaS13aGl0ZTogcmdiYSh3aGl0ZSwgLjg1KTtcbiRzZW1pLWJsYWNrLTE6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA1KTtcbiRzZW1pLWJsYWNrLTI6IGxpZ2h0ZW4oJGJnLWNvbG9yLCA4KTtcbiRoZWFkZXItYm94OiAkc2VtaS1ibGFjay0xO1xuJGNvbnRlbnQtYm94OiAkc2VtaS1ibGFjay0yO1xuXG4vLyBDb2xvcnNcbiRibHVlOiAjZWYzMzQwO1xuJGdyZXk6ICNkM2QzZDM7XG4kb3JhbmdlOiByZ2IoMjQ3LDE3NCwyMSk7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItcmFkaXVzOiA3cHg7XG5cbi8vIFByaW9yaXRpZXNcbiRwcmlvcml0eS1pbW1lZGlhdGU6ICNDMTI3MkQ7XG4kcHJpb3JpdHktdXJnZW50OiAjRjE1QTI0O1xuJHByaW9yaXR5LW5vcm1hbDogIzIyQjU3MztcbiRwcmlvcml0eS1oaWdoOiAjRjc5MzFFO1xuXG4vLyBHcmFwaGljc1xuJGdyYXBoaWMtYmx1ZS1kYXJrOiAjMDM5YmU1O1xuJGdyYXBoaWMtYmx1ZTogJGJsdWU7XG4kZ3JhcGhpYy1vcmFuZ2U6ICNlZjMzNDA7XG4kZ3JhcGhpYy10ZWFsOiAjN2U1N2MyO1xuXG4vLyBTdGF0dXNlc1xuJHN0YXR1cy1iYWQ6ICNFNTM5MzU7XG4kc3RhdHVzLW1lZGl1bTogI0ZGQ0EyODtcbiRzdGF0dXMtZ29vZDogIzRDQUY1MDtcblxuLy8gU2hhZG93c1xuJGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwwLDAsLjMpO1xuXG4vLyBUcmFuc2l0aW9uc1xuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5KSB7XG4gICAgdHJhbnNpdGlvbjogJHByb3BlcnR5IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8vIE1peGluc1xuXG4kdHJpZ2dlcjogNjAwcHg7XG4kdGFibGV0OiAxMTAwcHg7XG5cbkBtaXhpbiBpZSB7XG5cdEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGVkZ2Uge1xuICAgIEBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG1vYmlsZSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0cmlnZ2VyKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIGFuZCAobWluLXdpZHRoOiAkdHJpZ2dlcikge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBtb2JpbGUtdGFibGV0IHtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0LWRlc2t0b3Age1xuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufSJdfQ== */"], changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_states_tickets_state__WEBPACK_IMPORTED_MODULE_7__["TicketsState"].StackedChart),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_8__["Observable"])
    ], StackedComponent.prototype, "chart$", void 0);
    return StackedComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StackedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'cism-stacked',
                templateUrl: './stacked.component.html',
                styleUrls: ['./stacked.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, { chart$: [] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers.js */ "L0ja");
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_parsers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zdZq":
/*!****************************************!*\
  !*** ./src/app/pipes/group-by.pipe.ts ***!
  \****************************************/
/*! exports provided: GroupByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPipe", function() { return GroupByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tools_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/tools.service */ "6mc2");




var GroupByPipe = /** @class */ (function () {
    function GroupByPipe(_tools) {
        this._tools = _tools;
    }
    GroupByPipe.prototype.transform = function (values, group) {
        if (!values)
            return [];
        return this._tools.chunkArray(values, group);
    };
    GroupByPipe.ɵfac = function GroupByPipe_Factory(t) { return new (t || GroupByPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tools_service__WEBPACK_IMPORTED_MODULE_1__["ToolsService"])); };
    GroupByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "groupBy", type: GroupByPipe, pure: true });
    return GroupByPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'groupBy'
            }]
    }], function () { return [{ type: _services_tools_service__WEBPACK_IMPORTED_MODULE_1__["ToolsService"] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map