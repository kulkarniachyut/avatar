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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _components_Landing_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Landing/dashboard/dashboard.component */ "./src/app/components/Landing/dashboard/dashboard.component.ts");
/* harmony import */ var _components_Details_avatar_details_avatar_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Details/avatar-details/avatar-details.component */ "./src/app/components/Details/avatar-details/avatar-details.component.ts");
/* harmony import */ var _components_home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-landing/home-landing.component */ "./src/app/components/home-landing/home-landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    // Landing Page
    { path: 'avatarDetails', component: _components_Details_avatar_details_avatar_details_component__WEBPACK_IMPORTED_MODULE_4__["AvatarDetailsComponent"] },
    { path: 'dashBoard', component: _components_Landing_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: '', component: _components_home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_5__["HomeLandingComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
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

module.exports = "<app-nav-bar></app-nav-bar>\n<div class=\"mt-5\">\n    <router-outlet></router-outlet>\n</div>\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_Landing_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Landing/dashboard/dashboard.component */ "./src/app/components/Landing/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_Landing_avatar_view_avatar_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Landing/avatar-view/avatar-view.component */ "./src/app/components/Landing/avatar-view/avatar-view.component.ts");
/* harmony import */ var _components_Global_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Global/nav-bar/nav-bar.component */ "./src/app/components/Global/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_Details_avatar_details_avatar_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Details/avatar-details/avatar-details.component */ "./src/app/components/Details/avatar-details/avatar-details.component.ts");
/* harmony import */ var _components_Details_avatar_section_avatar_section_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Details/avatar-section/avatar-section.component */ "./src/app/components/Details/avatar-section/avatar-section.component.ts");
/* harmony import */ var _components_Details_points_section_points_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Details/points-section/points-section.component */ "./src/app/components/Details/points-section/points-section.component.ts");
/* harmony import */ var _components_Details_community_section_community_section_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/Details/community-section/community-section.component */ "./src/app/components/Details/community-section/community-section.component.ts");
/* harmony import */ var _components_Details_buy_section_buy_section_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/Details/buy-section/buy-section.component */ "./src/app/components/Details/buy-section/buy-section.component.ts");
/* harmony import */ var _components_Details_rate_section_rate_section_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/Details/rate-section/rate-section.component */ "./src/app/components/Details/rate-section/rate-section.component.ts");
/* harmony import */ var _components_Details_community_section_posts_posts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/Details/community-section/posts/posts.component */ "./src/app/components/Details/community-section/posts/posts.component.ts");
/* harmony import */ var _components_home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/home-landing/home-landing.component */ "./src/app/components/home-landing/home-landing.component.ts");
/* harmony import */ var _components_Details_community_section_e_bay_choice_e_bay_choice_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/Details/community-section/e-bay-choice/e-bay-choice.component */ "./src/app/components/Details/community-section/e-bay-choice/e-bay-choice.component.ts");
/* harmony import */ var _components_Details_community_section_community_choice_community_choice_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/Details/community-section/community-choice/community-choice.component */ "./src/app/components/Details/community-section/community-choice/community-choice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Angular material









// Components















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_Landing_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _components_Landing_avatar_view_avatar_view_component__WEBPACK_IMPORTED_MODULE_15__["AvatarViewComponent"],
                _components_Global_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_16__["NavBarComponent"],
                _components_Details_avatar_details_avatar_details_component__WEBPACK_IMPORTED_MODULE_17__["AvatarDetailsComponent"],
                _components_Details_avatar_section_avatar_section_component__WEBPACK_IMPORTED_MODULE_18__["AvatarSectionComponent"],
                _components_Details_points_section_points_section_component__WEBPACK_IMPORTED_MODULE_19__["PointsSectionComponent"],
                _components_Details_community_section_community_section_component__WEBPACK_IMPORTED_MODULE_20__["CommunitySectionComponent"],
                _components_Details_buy_section_buy_section_component__WEBPACK_IMPORTED_MODULE_21__["BuySectionComponent"],
                _components_Details_rate_section_rate_section_component__WEBPACK_IMPORTED_MODULE_22__["RateSectionComponent"],
                _components_Details_community_section_posts_posts_component__WEBPACK_IMPORTED_MODULE_23__["PostsComponent"],
                _components_home_landing_home_landing_component__WEBPACK_IMPORTED_MODULE_24__["HomeLandingComponent"],
                _components_Details_community_section_e_bay_choice_e_bay_choice_component__WEBPACK_IMPORTED_MODULE_25__["EBayChoiceComponent"],
                _components_Details_community_section_community_choice_community_choice_component__WEBPACK_IMPORTED_MODULE_26__["CommunityChoiceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                // Material Design
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                // Forms
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/Details/avatar-details/avatar-details.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/Details/avatar-details/avatar-details.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContent{\n  border-right: 1px solid black;\n}\n.buyReview{\n  margin: 50px auto;\n\n}\n.buySecion{\n\n}\n.reviewSecion{\n  margin-top:30px;\n}"

/***/ }),

/***/ "./src/app/components/Details/avatar-details/avatar-details.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/Details/avatar-details/avatar-details.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-8 mainContent\">\n    <div class=\"col-sm-12 row\">\n      <div class=\"col-sm-7\">\n        <app-avatar-section></app-avatar-section>\n      </div>\n      <div class=\"col-sm-5\">\n        <app-points-section></app-points-section>\n      </div>\n    </div>\n    <div class=\"col-sm-12 buyReview\">\n      <div class=\"col-sm-12 buySecion\">\n        <app-buy-section></app-buy-section>\n      </div>\n      <div class=\"col-sm-12 reviewSecion\">\n        <app-rate-section></app-rate-section>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n      <app-community-section></app-community-section>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/Details/avatar-details/avatar-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/Details/avatar-details/avatar-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AvatarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarDetailsComponent", function() { return AvatarDetailsComponent; });
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

var AvatarDetailsComponent = /** @class */ (function () {
    function AvatarDetailsComponent() {
    }
    AvatarDetailsComponent.prototype.ngOnInit = function () {
    };
    AvatarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avatar-details',
            template: __webpack_require__(/*! ./avatar-details.component.html */ "./src/app/components/Details/avatar-details/avatar-details.component.html"),
            styles: [__webpack_require__(/*! ./avatar-details.component.css */ "./src/app/components/Details/avatar-details/avatar-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AvatarDetailsComponent);
    return AvatarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/Details/avatar-section/avatar-section.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/Details/avatar-section/avatar-section.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatarContainer{\n  margin: 0 auto;\n}\n.avatar{\n  text-align: center;\n  margin: auto;\n}\n.avatarImage{\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n}\n.avatarImageSelected{\n  height: 120px;\n  width: 120px;\n  margin: 0 auto;\n}\n.avatarImageNotSelected{\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n}\n.image{\n  cursor: pointer;\n  height: inherit;\n  width: inherit;\n  overflow: hidden;\n  border-radius:15%;\n}\n.avatarDesc{\n  margin: 10px 0px auto auto; \n}\n.avatarPercent{\n  margin: 0px auto;\n}\n"

/***/ }),

/***/ "./src/app/components/Details/avatar-section/avatar-section.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/Details/avatar-section/avatar-section.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 avatarContainer\">\n  <div class=\"avatarContent row\">\n    <div class=\"avatar ml-1 mr-0 \" *ngFor=\"let avatar of avatars\" (click)=\"redirectToAvatar(avatar)\">\n      <div *ngIf=\"avatar.serialNumber == selectedAvatar\">\n        <div class=\" avatarImageSelected\">\n          <img class=\"image \" src=\"{{avatar.image}}\" alt=\"Image\">\n        </div>\n        <div class=\"col-sm-12 avatarDesc\">\n          <h5>{{avatar.content.name}} </h5>\n        </div>\n        <div class=\"col-sm-12 avatarPercent\">\n            <h5>{{avatar.content.percentage}} %</h5>\n          </div>\n      </div>\n      <div *ngIf=\"avatar.serialNumber != selectedAvatar\">\n        <div class=\" avatarImageNotSelected\">\n          <img class=\"image \" src=\"{{avatar.image}}\" alt=\"Image\">\n        </div>\n        <div class=\"col-sm-12 avatarDesc\">\n          <h5>{{avatar.content.name}} </h5>\n        </div>\n        <div class=\"col-sm-12 avatarPercent\">\n          <h5>{{avatar.content.percentage}} %</h5>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/Details/avatar-section/avatar-section.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/Details/avatar-section/avatar-section.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AvatarSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarSectionComponent", function() { return AvatarSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_avatar_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/avatar-selection.service */ "./src/app/services/avatar-selection.service.ts");
/* harmony import */ var _services_community_avatar_community_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/community/avatar-community.service */ "./src/app/services/community/avatar-community.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvatarSectionComponent = /** @class */ (function () {
    function AvatarSectionComponent(avatarSelection, route, router, avatarCommunity) {
        this.avatarSelection = avatarSelection;
        this.route = route;
        this.router = router;
        this.avatarCommunity = avatarCommunity;
        this.avatars = [];
    }
    AvatarSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            // console.log('Params are ', data );
            _this.avatarSelection.getAvatars().subscribe(function (avatarData) {
                // console.log(data.length);
                _this.avatars = avatarData;
                _this.selectedAvatar = _this.route.snapshot.params.id;
                _this.avatarCommunity.generateResults(_this.avatars[_this.selectedAvatar]);
            });
        });
    };
    AvatarSectionComponent.prototype.redirectToAvatar = function (avatar) {
        // console.log(avatar.serialNumber);
        this.router.navigate(['avatarDetails', { id: avatar.serialNumber }]);
    };
    AvatarSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avatar-section',
            template: __webpack_require__(/*! ./avatar-section.component.html */ "./src/app/components/Details/avatar-section/avatar-section.component.html"),
            styles: [__webpack_require__(/*! ./avatar-section.component.css */ "./src/app/components/Details/avatar-section/avatar-section.component.css")]
        }),
        __metadata("design:paramtypes", [_services_avatar_selection_service__WEBPACK_IMPORTED_MODULE_2__["AvatarSelectionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_community_avatar_community_service__WEBPACK_IMPORTED_MODULE_3__["AvatarCommunityService"]])
    ], AvatarSectionComponent);
    return AvatarSectionComponent;
}());



/***/ }),

/***/ "./src/app/components/Details/buy-section/buy-section.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/Details/buy-section/buy-section.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".objectData{\n  width: 150px;\n  text-align: center;\n  display: inline-block;\n}\n.avatarImage{\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n}\n.image{\n  cursor: pointer;\n  height: inherit;\n  width: inherit;\n  overflow: hidden;\n  border-radius:15%;\n}\n.icon{\n  color:black;\n}\n.carousalInnerMargin{\n  margin : 0 auto;\n}"

/***/ }),

/***/ "./src/app/components/Details/buy-section/buy-section.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/Details/buy-section/buy-section.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <h3>Suggestions </h3>\n  </div>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner  carousalInnerMargin col-sm-offset-2 col-sm-10\">\n    <div class=\"carousel-item active row \" >\n      <div class=\"objectData\" *ngFor=\"let avatar of Suggestions\" >\n          <div class=\"col-sm-12 avatarImage\">\n              <img class=\"image \" src=\"{{avatar.data.image}}\" alt=\"Image\">\n            </div>\n            <div class=\"col-sm-12 avatarDesc\">\n              <span><strong>{{avatar.data.name}} </strong></span>\n            </div>\n            <div class=\"col-sm-12 avatarDesc\">\n                <span><strong>{{avatar.data.price}} </strong></span>\n            </div>\n            <div class=\"col-sm-12 avatarDesc\">\n                <button class=\"btn btn-primary\">Add to Cart </button>\n            </div>\n      </div>\n    </div>\n    <!-- <div class=\"carousel-item row \" >\n        <div class=\"objectData\" *ngFor=\"let avatar of Suggestions2\" >\n            <div class=\"col-sm-12 avatarImage\">\n                <img class=\"image \" src=\"{{avatar.data.image}}\" alt=\"Image\">\n              </div>\n              <div class=\"col-sm-12 avatarDesc\">\n                <span>{{avatar.data.name}} </span>\n              </div>\n              <div class=\"col-sm-12 avatarDesc\">\n                  <span>{{avatar.data.price}} </span>\n              </div>\n        </div>\n      </div> -->\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"icon\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"icon\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/Details/buy-section/buy-section.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/Details/buy-section/buy-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: BuySectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuySectionComponent", function() { return BuySectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuySectionComponent = /** @class */ (function () {
    function BuySectionComponent(route, router) {
        this.route = route;
        this.router = router;
        this.Suggestions = [
            { avatar: 'abc', data: { image: '../../../assets/dad.jpeg', price: '$10', name: 'item One' } },
            { avatar: 'abc', data: { image: '../../../assets/dad.jpeg', price: '$10', name: 'item Two' } },
            { avatar: 'abc', data: { image: '../../../assets/dad.jpeg', price: '$10', name: 'item Three' } },
            { avatar: 'abc', data: { image: '../../../assets/dad.jpeg', price: '$10', name: 'item Four' } }
        ];
        this.Suggestions2 = [
            { avatar: 'abc', data: { image: '../../../assets/gamer_male.jpg', price: '$10', name: 'item One' } },
            { avatar: 'abc', data: { image: '../../../assets/gamer_male.jpg', price: '$10', name: 'item Two' } },
            { avatar: 'abc', data: { image: '../../../assets/dad.jpeg', price: '$10', name: 'item Three' } },
            { avatar: 'abc', data: { image: '../../../assets/gamer_male.jpg', price: '$10', name: 'item Four' } }
        ];
        this.dataSet = {
            1: [
                { avatar: 'abc', data: { image: '../../../assets/Gaming/graphic2.jpg', price: '$480', name: 'gTx 560' } },
                { avatar: 'abc', data: { image: '../../../assets/Gaming/graphicCard.jpg', price: '$400', name: 'gTx500' } },
                { avatar: 'abc', data: { image: '../../../assets/Gaming/mouse.jpeg', price: '$40', name: 'Mouse' } },
                { avatar: 'abc', data: { image: '../../../assets/Gaming/tech_male.jpeg', price: '$55', name: 'KeyBoard' } }
            ],
            2: [
                { avatar: 'abc', data: { image: '../../../assets/Athlete/AdidasShoes.jpg', price: '$30', name: 'Shoe' } },
                { avatar: 'abc', data: { image: '../../../assets/Athlete/bike.png', price: '$100', name: 'Bike' } },
                { avatar: 'abc', data: { image: '../../../assets/Athlete/bikeMount.png', price: '$10', name: 'mount' } },
                { avatar: 'abc', data: { image: '../../../assets/Athlete/compressionWear.jpg', price: '$70', name: 'compression' } },
                { avatar: 'abc', data: { image: '../../../assets/Athlete/football.jpg', price: '$26', name: 'football' } }
            ],
            3: [
                { avatar: 'abc', data: { image: '../../../assets/techie/8plus.png', price: '$800', name: '8 Plus' } },
                { avatar: 'abc', data: { image: '../../../assets/techie/algorithms.jpg', price: '$32', name: 'Algorithms' } },
                { avatar: 'abc', data: { image: '../../../assets/techie/desk.jpg', price: '$63', name: 'Desk' } },
                { avatar: 'abc', data: { image: '../../../assets/techie/dualMonitor.jpg', price: '$70', name: 'Monitor' } },
                { avatar: 'abc', data: { image: '../../../assets/techie/goPro.jpg', price: '$226', name: 'GoPro' } }
            ],
            4: [
                { avatar: 'abc', data: { image: '../../../assets/dad/cap.jpg', price: '$10', name: 'Cap' } },
                { avatar: 'abc', data: { image: '../../../assets/dad/grill.jpg', price: '$32', name: 'Grill' } },
                { avatar: 'abc', data: { image: '../../../assets/dad/mug.jpg', price: '$6', name: 'Mug' } },
                { avatar: 'abc', data: { image: '../../../assets/dad/shaver.jpg', price: '$70', name: 'Shaver' } },
                { avatar: 'abc', data: { image: '../../../assets/dad/shirt.jpg', price: '$23', name: 'Shirt' } }
            ],
            5: [
                { avatar: 'abc', data: { image: '../../../assets/rave/berrBong.jpg', price: '$20', name: 'Beer Bong' } },
                { avatar: 'abc', data: { image: '../../../assets/rave/galsses.jpg', price: '$7', name: 'Glasses' } },
                { avatar: 'abc', data: { image: '../../../assets/rave/hooka.jpg', price: '$63', name: 'Hooka ' } },
                { avatar: 'abc', data: { image: '../../../assets/rave/mask.jpg', price: '$25', name: 'Mask' } },
                { avatar: 'abc', data: { image: '../../../assets/rave/partySticks.jpg', price: '$22', name: 'Sticks' } }
            ]
        };
    }
    BuySectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.Suggestions = _this.dataSet[_this.route.snapshot.params.id];
        });
    };
    BuySectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buy-section',
            template: __webpack_require__(/*! ./buy-section.component.html */ "./src/app/components/Details/buy-section/buy-section.component.html"),
            styles: [__webpack_require__(/*! ./buy-section.component.css */ "./src/app/components/Details/buy-section/buy-section.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BuySectionComponent);
    return BuySectionComponent;
}());



/***/ }),

/***/ "./src/app/components/Details/community-section/community-choice/community-choice.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/Details/community-section/community-choice/community-choice.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/Details/community-section/community-choice/community-choice.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/Details/community-section/community-choice/community-choice.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm12\">\n    <div class=\"card mt-4\">\n        <div class=\"card-body row \">\n          <div class=\"col-sm-4\">\n              <img class=\"card-img-top\" src = \"{{ imageSource }}\" alt=\"Card image cap\">\n          </div>\n          <div class=\"col-sm-8\">\n              <h5 class=\"card-title\">{{title}}</h5>\n              <p class=\"card-text\">The revolutionary camera that adapts like the human eye..</p>\n              <a href=\"\" class=\"btn btn-primary\">Add to Cart</a>\n          </div>\n          \n        </div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/components/Details/community-section/community-choice/community-choice.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/Details/community-section/community-choice/community-choice.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CommunityChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityChoiceComponent", function() { return CommunityChoiceComponent; });
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

var CommunityChoiceComponent = /** @class */ (function () {
    function CommunityChoiceComponent() {
        this.title = 'S 9';
        this.imageSource = '../../../../assets/eBayChoice/s9.jpg';
    }
    CommunityChoiceComponent.prototype.ngOnInit = function () {
    };
    CommunityChoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-community-choice',
            template: __webpack_require__(/*! ./community-choice.component.html */ "./src/app/components/Details/community-section/community-choice/community-choice.component.html"),
            styles: [__webpack_require__(/*! ./community-choice.component.css */ "./src/app/components/Details/community-section/community-choice/community-choice.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommunityChoiceComponent);
    return CommunityChoiceComponent;
}());



/***/ }),

/***/ "./src/app/components/Details/community-section/community-section.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/Details/community-section/community-section.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spanHeading{\n  text-align: center;\n}\n.avatarImage{\n  height: 30px;\n  width: 30px;\n  margin: 0 auto;\n}\n.image{\n  cursor: pointer;\n  height: inherit;\n  width: inherit;\n  overflow: hidden;\n  border-radius:15%;\n}\n.matGroupContent{\n  width: 100%;\n}\n.navSection{\n  margin-top: 50px;\n}\n.lableFont{\n  font-weight: bold;\n  color: black !important;\n}"

/***/ }),

/***/ "./src/app/components/Details/community-section/community-section.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/Details/community-section/community-section.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"PostSection col-sm-12\">\n    <div class=\"spanHeading\">\n      <h3>{{presentUser.content.name}} Community</h3>\n    </div>\n    <div class=\" col-sm-12\">\n      <form #postForm=\"ngForm\" (ngSubmit)=\"localStoragePost(postForm)\">\n        <div class=\"form-group\">\n          <textarea name=\"comment\" class=\"form-control\" rows=\"3\" id=\"comment\" [(ngModel)]=\"comment\" placeholder=\"Say Something {{presentUser.content.name}}\"></textarea>\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" value=\"Submit\" class=\"btn btn-primary pull-right\">Post</button>\n          </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"navSection col-sm-12 \">\n    <div class=\"matGroupContent\">\n      <mat-tab-group class=\"col-sm-12\">\n        <mat-tab label=\"Posts\">\n          <div class=\"col-sm-12 tabContent mt-3\">\n            <app-posts></app-posts>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"eBay Choice-Hot! lableFont\">\n          <div class=\"col-sm-12 tabContent\">\n            <app-e-bay-choice></app-e-bay-choice>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Community Choice-Hot! \">\n          <div class=\"col-sm-12 tabContent\">\n            <app-community-choice></app-community-choice>\n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/Details/community-section/community-section.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/Details/community-section/community-section.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CommunitySectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunitySectionComponent", function() { return CommunitySectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_community_avatar_community_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/community/avatar-community.service */ "./src/app/services/community/avatar-community.service.ts");
/* harmony import */ var _services_avatar_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/avatar-selection.service */ "./src/app/services/avatar-selection.service.ts");
/* harmony import */ var _services_localStorage_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/localStorage/posts.service */ "./src/app/services/localStorage/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommunitySectionComponent = /** @class */ (function () {
    function CommunitySectionComponent(route, router, avatarCommunity, avatarSelection, postService) {
        this.route = route;
        this.router = router;
        this.avatarCommunity = avatarCommunity;
        this.avatarSelection = avatarSelection;
        this.postService = postService;
        this.avatarCommuntiy = [];
        this.presentUser = null;
        this.comment = '';
        this.posts = [];
        this.presentCommunity = '';
    }
    CommunitySectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.avatarSelection.getAvatars().subscribe(function (avatarData) {
            _this.presentUser = avatarData[_this.route.snapshot.params.id - 1];
            _this.avatarCommunity.sendAvatar(avatarData[_this.route.snapshot.params.id]);
        });
        this.avatarCommunity.getResults().subscribe(function (data) {
            console.log(data);
            _this.avatarCommuntiy = data;
        });
    };
    CommunitySectionComponent.prototype.localStoragePost = function (_a) {
        var value = _a.value, valid = _a.valid;
        this.postService.setHistoryData({ comment: this.comment, avatar: this.presentUser });
        this.comment = '';
    };
    CommunitySectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-community-section',
            template: __webpack_require__(/*! ./community-section.component.html */ "./src/app/components/Details/community-section/community-section.component.html"),
            styles: [__webpack_require__(/*! ./community-section.component.css */ "./src/app/components/Details/community-section/community-section.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_community_avatar_community_service__WEBPACK_IMPORTED_MODULE_2__["AvatarCommunityService"], _services_avatar_selection_service__WEBPACK_IMPORTED_MODULE_3__["AvatarSelectionService"],
            _services_localStorage_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]])
    ], CommunitySectionComponent);
    return CommunitySectionComponent;
}());



/***/ }),

/***/ "./src/app/components/Details/community-section/e-bay-choice/e-bay-choice.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/Details/community-section/e-bay-choice/e-bay-choice.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/Details/community-section/e-bay-choice/e-bay-choice.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/Details/community-section/e-bay-choice/e-bay-choice.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm12 \">\n    <div class=\"card mt-4\">\n        <div class=\"card-body row \">\n          <div class=\"col-sm-4\">\n              <img class=\"card-img-top\" src = \"{{ imageSource }}\" alt=\"Card image cap\">\n          </div>\n          <div class=\"col-sm-8\">\n              <h5 class=\"card-title\">{{title}}</h5>\n              <p class=\"card-text\">Say hello to the future.</p>\n              <a href=\"\" class=\"btn btn-primary\">Add to Cart</a>\n          </div>\n          \n        </div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/components/Details/community-section/e-bay-choice/e-bay-choice.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/Details/community-section/e-bay-choice/e-bay-choice.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EBayChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EBayChoiceComponent", function() { return EBayChoiceComponent; });
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

var EBayChoiceComponent = /** @class */ (function () {
    function EBayChoiceComponent() {
        this.title = 'I Phone 10';
        this.imageSource = '../../../../assets/eBayChoice/iPhone.jpg';
    }
    EBayChoiceComponent.prototype.ngOnInit = function () {
    };
    EBayChoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-e-bay-choice',
            template: __webpack_require__(/*! ./e-bay-choice.component.html */ "./src/app/components/Details/community-section/e-bay-choice/e-bay-choice.component.html"),
            styles: [__webpack_require__(/*! ./e-bay-choice.component.css */ "./src/app/components/Details/community-section/e-bay-choice/e-bay-choice.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EBayChoiceComponent);
    return EBayChoiceComponent;
}());



/***/ }),

/***/ "./src/app/components/Details/community-section/posts/posts.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/Details/community-section/posts/posts.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/Details/community-section/posts/posts.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/Details/community-section/posts/posts.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-2\" *ngFor = \"let post of postDataOfMe\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{post.avatar.content.name}}</h5>\n      <p class=\"card-text\">{{post.comment}}</p>\n      <!-- <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a> -->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/Details/community-section/posts/posts.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/Details/community-section/posts/posts.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_localStorage_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/localStorage/posts.service */ "./src/app/services/localStorage/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService) {
        this.postService = postService;
        this.postDataOfMe = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getHistoryData().subscribe(function (data) {
            console.log('data is ', data);
            _this.postDataOfMe = data;
            console.log('Array is ', _this.postDataOfMe);
        });
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/components/Details/community-section/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/components/Details/community-section/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [_services_localStorage_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/components/Details/points-section/points-section.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/Details/points-section/points-section.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item{\n  height: 60px;\n  width: 80px;\n  border-radius: 50%;\n}\n.buyItem{\n  background-color: #D2423F;\n}\n.sellItem{\n  background-color: #90B43C;\n}\n.reviewItem{\n  background-color: #EAB03D;\n}\n.itemContainer{\n  margin: 0 auto;\n}\n.spanCentered{\n  margin: auto\n}\n.centered{\n  text-align: center;\n  margin: 14px 0px;\n}\n.rating{\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/Details/points-section/points-section.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/Details/points-section/points-section.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 row\">\n  <div class=\"col-sm-4\">\n    <div class=\" itemContainer\">\n      <div class=\"buy item buyItem ml-4 mr-4 \">\n        <div class=\"centered\">\n          <div>\n            <span class=\"lead \">BUY</span>\n          </div>\n\n          <div>\n            <span>\n              <strong>50+</strong>\n            </span>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"sell item  sellItem ml-4 mr-4 \">\n        <div class=\"centered\">\n          <div>\n            <span class=\"lead\">Sell</span>\n          </div>\n\n          <div>\n            <span>\n              <strong>40+</strong>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"review item  reviewItem ml-4 mr-4 \">\n        <div class=\"centered\">\n          <div>\n            <span class=\"lead\">Review </span>\n          </div>\n          <div>\n            <span>\n              <strong>45+</strong>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-8 row\">\n    <div class=\"rating\"><h4>Rating</h4></div>\n    <div class=\"col-sm-12\">\n      <span>\n        <i class=\"fa fa-star-half\" aria-hidden=\"true\"></i><strong>  10,000 </strong></span>\n    </div>\n    <div class=\"col-sm-12\">\n      <span>\n        <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i><strong>  100,000 </strong></span>\n    </div>\n    <div class=\"col-sm-12\">\n      <span>\n        <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i><strong> 1,000,000</strong> </span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/Details/points-section/points-section.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/Details/points-section/points-section.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PointsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsSectionComponent", function() { return PointsSectionComponent; });
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

var PointsSectionComponent = /** @class */ (function () {
    function PointsSectionComponent() {
    }
    PointsSectionComponent.prototype.ngOnInit = function () {
    };
    PointsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-points-section',
            template: __webpack_require__(/*! ./points-section.component.html */ "./src/app/components/Details/points-section/points-section.component.html"),
            styles: [__webpack_require__(/*! ./points-section.component.css */ "./src/app/components/Details/points-section/points-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PointsSectionComponent);
    return PointsSectionComponent;
}());



/***/ }),

/***/ "./src/app/components/Details/rate-section/rate-section.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/Details/rate-section/rate-section.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".suggestionBar{\n  margin:0 auto;\n}\n.objectData{\n  width: 150px;\n  text-align: center;\n  display: inline-block;\n}\n.avatarImage{\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n}\n.image{\n  cursor: pointer;\n  height: inherit;\n  width: inherit;\n  overflow: hidden;\n  border-radius:15%;\n}\n"

/***/ }),

/***/ "./src/app/components/Details/rate-section/rate-section.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/Details/rate-section/rate-section.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n    <div>\n      <h3>Review</h3>\n    </div>\n    <div class=\"col-sm-offset-2 col-sm-10 suggestionBar\">\n        <div class=\"objectData\" *ngFor=\"let avatar of Suggestions\" >\n            <div class=\"col-sm-12 avatarImage\">\n                <img class=\"image \" src=\"{{avatar.data.image}}\" alt=\"Image\">\n              </div>\n              <div class=\"col-sm-12 avatarDesc\">\n                <span><strong>{{avatar.data.name}} </strong></span>\n              </div>\n              <div class=\"col-sm-12 avatarDesc\">\n                  <span><strong>{{avatar.data.price}} </strong></span>\n              </div>\n              <div>\n                <dir class=\"btn btn-primary\">Review </dir>\n              </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/Details/rate-section/rate-section.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/Details/rate-section/rate-section.component.ts ***!
  \***************************************************************************/
/*! exports provided: RateSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateSectionComponent", function() { return RateSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RateSectionComponent = /** @class */ (function () {
    function RateSectionComponent(route, router) {
        this.route = route;
        this.router = router;
        this.Suggestions = [];
        this.dataSet = {
            1: [
                { avatar: 'abc', data: { image: '../../../assets/Gaming/mouse.jpeg', price: '$24', name: 'Mouse' } },
                { avatar: 'abc', data: { image: '../../../assets/Gaming/graphicCard.jpg', price: '$480', name: 'gTx 560' } },
                { avatar: 'abc', data: { image: '../../../assets/Gaming/tech_male.jpeg', price: '$55', name: 'KeyBoard' } },
                { avatar: 'abc', data: { image: '../../../assets/Gaming/graphic2.jpg', price: '$400', name: 'gTx 500' } },
            ],
            2: [
                { avatar: 'abc', data: { image: '../../../assets/Athlete/bikeMount.png', price: '$10', name: 'mount' } },
                { avatar: 'abc', data: { image: '../../../assets/Athlete/AdidasShoes.jpg', price: '$30', name: 'Shoe' } },
                { avatar: 'abc', data: { image: '../../../assets/Athlete/compressionWear.jpg', price: '$70', name: 'compression' } }
            ],
            3: [
                { avatar: 'abc', data: { image: '../../../assets/techie/desk.jpg', price: '$63', name: 'Desk' } },
                { avatar: 'abc', data: { image: '../../../assets/techie/8plus.png', price: '$800', name: '8 Plus' } },
                { avatar: 'abc', data: { image: '../../../assets/techie/dualMonitor.jpg', price: '$70', name: 'Monitor' } }
            ],
            4: [
                { avatar: 'abc', data: { image: '../../../assets/dad/grill.jpg', price: '$32', name: 'Grill' } },
                { avatar: 'abc', data: { image: '../../../assets/dad/shaver.jpg', price: '$70', name: 'Shaver' } },
                { avatar: 'abc', data: { image: '../../../assets/dad/mug.jpg', price: '$6', name: 'Mug' } },
            ],
            5: [
                { avatar: 'abc', data: { image: '../../../assets/rave/berrBong.jpg', price: '$20', name: 'Beer Bong' } },
                { avatar: 'abc', data: { image: '../../../assets/rave/galsses.jpg', price: '$7', name: 'Glasses' } },
                { avatar: 'abc', data: { image: '../../../assets/rave/hooka.jpg', price: '$63', name: 'Hooka ' } },
                { avatar: 'abc', data: { image: '../../../assets/rave/mask.jpg', price: '$25', name: 'Mask' } },
                { avatar: 'abc', data: { image: '../../../assets/rave/partySticks.jpg', price: '$22', name: 'Sticks' } }
            ]
        };
    }
    RateSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.Suggestions = _this.dataSet[_this.route.snapshot.params.id];
        });
    };
    RateSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rate-section',
            template: __webpack_require__(/*! ./rate-section.component.html */ "./src/app/components/Details/rate-section/rate-section.component.html"),
            styles: [__webpack_require__(/*! ./rate-section.component.css */ "./src/app/components/Details/rate-section/rate-section.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RateSectionComponent);
    return RateSectionComponent;
}());



/***/ }),

/***/ "./src/app/components/Global/nav-bar/nav-bar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/Global/nav-bar/nav-bar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/Global/nav-bar/nav-bar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/Global/nav-bar/nav-bar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-light bg-light col-sm-12\">\n    <div class=\"container\">\n        <a routerLink=\"/\" class=\"navbar-brand \">eBay Avatar</a>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/components/Global/nav-bar/nav-bar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/Global/nav-bar/nav-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
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

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/Global/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/Global/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/Landing/avatar-view/avatar-view.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/Landing/avatar-view/avatar-view.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item{\n  background-color: grey;\n}\n.avatarContainer{\n  margin: 200px auto;\n}\n.avatarContent{\n  bottom: 0;\n  margin: auto;\n}\n.avatar{\n  text-align: center;\n}\n.avatarImage{\n  height: 200px;\n  width: 200px;\n  margin: 0 auto;\n}\n.image{\n  cursor: pointer;\n  height: inherit;\n  width: inherit;\n  overflow: hidden;\n  border-radius:15%;\n}\n.avatarDesc{\n  margin: 0 auto; \n}"

/***/ }),

/***/ "./src/app/components/Landing/avatar-view/avatar-view.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/Landing/avatar-view/avatar-view.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-offset-2 col-sm-10 avatarContainer\">\n  <div class=\"avatarContent row\">\n    <div class=\"avatar ml-4 mr-4 \" *ngFor=\"let avatar of avatars\" (click)=\"redirectToAvatar(avatar)\">\n          <div class=\" avatarImage\">\n              <img class=\"image \" src=\"{{avatar.image}}\" alt=\"Image\">\n            </div>\n            <div class=\"col-sm-12 avatarDesc\">\n              <div> \n                 <span class=\"lead\"> <strong>{{avatar.content.name}} </strong></span>\n              </div>\n              <div> \n                  <span>{{avatar.content.percentage}} %</span>\n              </div>\n            </div>\n    </div>\n  </div>\n</div>\n<!-- <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item \" *ngFor=\"let avatar of avatars\" (click)=\"redirectToAvatar(avatar)\">\n      <div class=\"col-sm-12 avatarImage\">\n        <img class=\"image \" src=\"{{avatar.image}}\" alt=\"Image\">\n      </div>\n      <div class=\"col-sm-12 avatarDesc\">\n        <span>{{avatar.content.name}} </span>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div> -->"

/***/ }),

/***/ "./src/app/components/Landing/avatar-view/avatar-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/Landing/avatar-view/avatar-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: AvatarViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarViewComponent", function() { return AvatarViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_avatar_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/avatar-selection.service */ "./src/app/services/avatar-selection.service.ts");
/* harmony import */ var _services_community_avatar_community_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/community/avatar-community.service */ "./src/app/services/community/avatar-community.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvatarViewComponent = /** @class */ (function () {
    function AvatarViewComponent(avatarSelection, route, router, avatarCommunity) {
        this.avatarSelection = avatarSelection;
        this.route = route;
        this.router = router;
        this.avatarCommunity = avatarCommunity;
        this.avatars = [];
    }
    AvatarViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.avatarSelection.getAvatars().subscribe(function (data) {
            console.log(data.length);
            _this.avatars = data;
        });
    };
    AvatarViewComponent.prototype.redirectToAvatar = function (avatar) {
        console.log(avatar.serialNumber);
        this.avatarCommunity.generateResults(avatar);
        this.router.navigate(['avatarDetails', { id: avatar.serialNumber }]);
    };
    AvatarViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avatar-view',
            template: __webpack_require__(/*! ./avatar-view.component.html */ "./src/app/components/Landing/avatar-view/avatar-view.component.html"),
            styles: [__webpack_require__(/*! ./avatar-view.component.css */ "./src/app/components/Landing/avatar-view/avatar-view.component.css")]
        }),
        __metadata("design:paramtypes", [_services_avatar_selection_service__WEBPACK_IMPORTED_MODULE_2__["AvatarSelectionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_community_avatar_community_service__WEBPACK_IMPORTED_MODULE_3__["AvatarCommunityService"]])
    ], AvatarViewComponent);
    return AvatarViewComponent;
}());



/***/ }),

/***/ "./src/app/components/Landing/dashboard/dashboard.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/Landing/dashboard/dashboard.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/Landing/dashboard/dashboard.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/Landing/dashboard/dashboard.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\n  <div class=\"cols-sm-12\">\n    <app-avatar-view></app-avatar-view>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/Landing/dashboard/dashboard.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/Landing/dashboard/dashboard.component.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/Landing/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/Landing/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home-landing/home-landing.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/home-landing/home-landing.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\n  height: inherit;\n  width: inherit;\n}\n.imageConatiner{\n  height: inherit;\n  width: inherit;\n}"

/***/ }),

/***/ "./src/app/components/home-landing/home-landing.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/home-landing/home-landing.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 col-sn-offset-2 homelanding\">\n  <div class=\"imageConatiner\" (click) = \"redirect()\">\n      <img class=\"image \" src=\"{{imageSource}}\" alt=\"Image\">\n  </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/components/home-landing/home-landing.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-landing/home-landing.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLandingComponent", function() { return HomeLandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeLandingComponent = /** @class */ (function () {
    function HomeLandingComponent(router) {
        this.router = router;
        this.imageSource = '../../../assets/landing.png';
    }
    HomeLandingComponent.prototype.ngOnInit = function () {
    };
    HomeLandingComponent.prototype.redirect = function () {
        this.router.navigate(['dashBoard']);
    };
    HomeLandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-landing',
            template: __webpack_require__(/*! ./home-landing.component.html */ "./src/app/components/home-landing/home-landing.component.html"),
            styles: [__webpack_require__(/*! ./home-landing.component.css */ "./src/app/components/home-landing/home-landing.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeLandingComponent);
    return HomeLandingComponent;
}());



/***/ }),

/***/ "./src/app/services/avatar-selection.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/avatar-selection.service.ts ***!
  \******************************************************/
/*! exports provided: AvatarSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarSelectionService", function() { return AvatarSelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var avatar = [{
        serialNumber: null,
        image: null,
        content: null
    }];
var AvatarSelectionService = /** @class */ (function () {
    function AvatarSelectionService(http) {
        this.http = http;
        this.postUrl = 'http://localhost:3003/api/getAvatarPercentages';
        this.percentageData = [];
        this.initialAvatars = [
            { serialNumber: 1, image: '../../../../assets/gamer_male.jpg', content: { 'name': 'Gamer', 'percentage': 0 } },
            { serialNumber: 2, image: '../../../../assets/athlete_male.png', content: { 'name': 'Athlete', 'percentage': 0 } },
            { serialNumber: 3, image: '../../../../assets/tech_male.jpeg', content: { 'name': 'Techie', 'percentage': 0 } },
            { serialNumber: 4, image: '../../../../assets/dad.jpeg', content: { 'name': 'Dad', 'percentage': 0 } },
            { serialNumber: 5, image: '../../../../assets/rave_male.jpg', content: { 'name': 'Party Animal', 'percentage': 0 } }
        ];
        this.avatars = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](avatar);
        this.avatarObservable = this.avatars.asObservable();
    }
    AvatarSelectionService.prototype.httpCall = function (httpBody) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.postUrl, httpBody, httpOptions);
    };
    AvatarSelectionService.prototype.getAvatars = function () {
        var _this = this;
        this.avatars.next(this.initialAvatars);
        this.httpCall(JSON.stringify({ 'userId': 9 })).toPromise().then(function (data) {
            _this.percentageData = data;
            _this.avatars.next(_this.managePercentages(_this.initialAvatars, _this.percentageData));
        });
        return this.avatarObservable;
    };
    AvatarSelectionService.prototype.managePercentages = function (avatarArray, percentageArray) {
        for (var i = 0; i < avatarArray.length; i++) {
            avatarArray[i].content.percentage = percentageArray[i];
        }
        return avatarArray;
    };
    AvatarSelectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AvatarSelectionService);
    return AvatarSelectionService;
}());



/***/ }),

/***/ "./src/app/services/community/avatar-community.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/community/avatar-community.service.ts ***!
  \****************************************************************/
/*! exports provided: AvatarCommunityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarCommunityService", function() { return AvatarCommunityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var initialResultresultSubject = [{
        person: null,
        data: null
    }];
var AvatarCommunityService = /** @class */ (function () {
    function AvatarCommunityService(http) {
        this.http = http;
        this.tempData = [
            { person: 'Avatar X', data: { 'level': 'pro', image: '../../../../assets/gamer_female.jpg' } },
            { person: 'Avatar Y', data: { 'level': 'Advanced', image: '../../../../assets/rave_female.jpg' } },
            { person: 'Avatar Z', data: { 'level': 'Intermediate', image: '../../../../assets/mom.jpg' } },
        ];
        this.postUrl = 'http://localhost:3003/api/data/';
        this.result = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](initialResultresultSubject);
        this.resultObservable = this.result.asObservable();
    }
    AvatarCommunityService.prototype.httpCall = function (httpBody) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.postUrl, httpBody, httpOptions);
    };
    AvatarCommunityService.prototype.generateResults = function (param) {
        this.result.next(this.tempData);
        // this.httpCall(param).toPromise().then( data => {
        //   this.result.next(data);
        // });
    };
    AvatarCommunityService.prototype.getResults = function () {
        return this.resultObservable;
    };
    AvatarCommunityService.prototype.sendAvatar = function (avatar) {
        console.log('SEND');
    };
    AvatarCommunityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AvatarCommunityService);
    return AvatarCommunityService;
}());



/***/ }),

/***/ "./src/app/services/localStorage/posts.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/localStorage/posts.service.ts ***!
  \********************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
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


var PostsService = /** @class */ (function () {
    function PostsService() {
        this.initialData = [];
        this.postsData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.initialData);
        this.DataObservable = this.postsData.asObservable();
    }
    PostsService.prototype.setHistoryData = function (postData) {
        var localStorageData = [];
        if (localStorage.getItem('posts') === null) {
            localStorage.setItem('posts', JSON.stringify([postData]));
            this.postsData.next([postData]);
        }
        else {
            localStorageData = JSON.parse(localStorage.getItem('posts'));
            localStorageData.unshift(postData);
            this.postsData.next(localStorageData);
            localStorage.setItem('posts', JSON.stringify(localStorageData));
        }
    };
    PostsService.prototype.getHistoryData = function () {
        this.postsData.next(JSON.parse(localStorage.getItem('posts')));
        return this.DataObservable;
    };
    PostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PostsService);
    return PostsService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akuchibotla/Documents/HackWeek/GitReo/ebay_avatar/src/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map