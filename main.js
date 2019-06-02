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

/***/ "./src/app/about-me/about-me.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-me/about-me.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about{\r\n    box-sizing: border-box;\r\n    padding: 36px;\r\n    min-height: 493px;\r\n}\r\n\r\nhr{\r\n    padding: 0;\r\n    margin: 0 0 8px 0;\r\n}\r\n\r\nh3{\r\n    padding: 0;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n    color: #5DA4D9;\r\n    display: inline-block;\r\n}\r\n\r\n.interests-heading{\r\n    padding-top: 25px !important;\r\n}\r\n\r\np{\r\n    font-size: 0.92em;\r\n    line-height: 1.5em;\r\n    color: rgb(99, 99, 99);\r\n}\r\n\r\n.icons{\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n\r\n.description, .interest{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.interest .material-icons, .description .material-icons{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    padding: 0px 12px 5px 0px;\r\n    font-size: 36px;\r\n    color: #5DA4D9;\r\n}\r\n\r\n.icons .material-icons{\r\n    font-size: 39px;\r\n    padding: 10px 25px;\r\n    color: #f15a22;\r\n}"

/***/ }),

/***/ "./src/app/about-me/about-me.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\">\n  <div class=\"description\">\n      <i class=\"material-icons\">description</i>\n      <h3>Description</h3>\n      <hr>\n\n      <p>I am a programmer with a DEC in Computer Science.</p>\n      <p>I have a passion for creating unique, innovative and user-friendly applications that delivers, \n        not just a robust working product, but an attractive web design to engage the users.\n      </p>\n      <p>I am currently seeking an employment in the field of Computer Science. \n        My passion and zeal for coding has enabled me to excel in many different aspects of my field. \n        I am confident as a developer to bring a well-polished level of skill and an immense amount of effort to\n        any company.\n      </p>\n    </div>\n    <div class=\"interest\">\n      <i class=\"material-icons\">stars</i>\n      <h3 class=\"interests-heading\">Interests</h3>\n      <hr>\n      <div class=\"icons mat-elevation-z2\">\n          <i class=\"material-icons\" matTooltip=\"Home\">home</i>\n          <i class=\"material-icons\" matTooltip=\"Travel\">flight</i>\n          <i class=\"material-icons\" matTooltip=\"Coding\">computer</i>\n          <i class=\"material-icons\" matTooltip=\"Reading\">library_books</i>\n          <i class=\"material-icons\" matTooltip=\"Fast Food\">fastfood</i>\n          <i class=\"material-icons\" matTooltip=\"Weekend\">weekend</i>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
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

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Raleway');\r\n\r\n*{\r\n    font-family: 'Raleway';\r\n    box-sizing: border-box;\r\n}\r\n\r\n#main{\r\n    padding: 40px 110px;\r\n}\r\n\r\napp-contact, app-cover-letter, app-projects, app-resume, app-about-me{\r\n    display: none;\r\n    background-color: #fff;\r\n    -webkit-transform-origin: top;\r\n            transform-origin: top;\r\n    -webkit-perspective: 1000px;\r\n            perspective: 1000px\r\n\r\n}\r\n\r\n.isShowing{\r\n    display: block !important;\r\n  }\r\n\r\n/* Animations */\r\n\r\n.animateOut{\r\n    -webkit-animation: out 300ms ease-out forwards;\r\n            animation: out 300ms ease-out forwards;\r\n  }\r\n\r\n.animateIn{\r\n    -webkit-animation: in 300ms ease-in forwards;\r\n            animation: in 300ms ease-in forwards;\r\n  }\r\n\r\n@-webkit-keyframes out {\r\n    0%{\r\n        opacity: 1;\r\n    }\r\n  \r\n    100%{\r\n      opacity: 0;\r\n    }\r\n  }\r\n\r\n@keyframes out {\r\n    0%{\r\n        opacity: 1;\r\n    }\r\n  \r\n    100%{\r\n      opacity: 0;\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes in {\r\n    0%{\r\n      opacity: 0;\r\n    }\r\n  \r\n    70%{\r\n      opacity: 1;    \r\n    }\r\n  \r\n    100%{\r\n        opacity: 1;\r\n    }\r\n  }\r\n\r\n@keyframes in {\r\n    0%{\r\n      opacity: 0;\r\n    }\r\n  \r\n    70%{\r\n      opacity: 1;    \r\n    }\r\n  \r\n    100%{\r\n        opacity: 1;\r\n    }\r\n  }\r\n\r\n.user-content{\r\n   float: right; width: 70%;\r\n  }\r\n\r\n/* Media Queries */\r\n\r\n@media only screen and (max-width: 1069px) {\r\n  .user-content {\r\n    width: 63%;\r\n  }\r\n  \r\n  #main{\r\n    padding: 40px 50px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .user-content {\r\n    float: none;\r\n    width: 100%;\r\n  }\r\n\r\n  #main{\r\n    padding: 40px 80px;\r\n  }\r\n\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n  <app-user-profile></app-user-profile>\n  <div class=\"user-content\">\n      <app-navbar (sendSelectedItem)=\"changeSection($event)\" ></app-navbar>\n      <app-about-me class=\"mat-elevation-z8 isShowing\" id=\"about-me\" ></app-about-me>\n      <app-resume class=\"mat-elevation-z8\" id=\"resume\" ></app-resume>\n      <app-projects class=\"mat-elevation-z8\" id=\"projects\" ></app-projects>\n      <app-contact class=\"mat-elevation-z8\" id=\"contact\" ></app-contact>\n      <app-cover-letter class=\"mat-elevation-z8\" id=\"cover-letter\"></app-cover-letter>\n  </div>\n</div>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.changeSection = function ($event) {
        this.selectedNav = $event.active;
        var activeComponent = document.querySelector("#" + this.selectedNav);
        if ($event.inactive != $event.active) {
            var inactiveComponent_1 = document.querySelector("#" + $event.inactive);
            inactiveComponent_1.classList.add('animateOut');
            setTimeout(function () {
                inactiveComponent_1.classList.remove('animateOut');
                inactiveComponent_1.classList.remove('isShowing');
                activeComponent.classList.add("animateIn");
                activeComponent.classList.add("isShowing");
            }, 300);
            setTimeout(function () {
                activeComponent.classList.remove('animateIn');
            }, 600);
        }
        else {
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cover-letter/cover-letter.component */ "./src/app/cover-letter/cover-letter.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"],
                _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__["AboutMeComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _cover_letter_cover_letter_component__WEBPACK_IMPORTED_MODULE_12__["CoverLetterComponent"]
            ],
            imports: [
                _material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"].forRoot({
                    apiKey: ''
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact{\r\n    padding: 28px;\r\n    min-height: 493px;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n.email, .location, .linkedin, .github{\r\n    padding: 16px;\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    width: 43%;\r\n    margin: 3%;\r\n}\r\n\r\n.material-icons, i{\r\n    color: #5DA4D9;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    padding-right: 8px;\r\n    padding-bottom: 2px;\r\n}\r\n\r\nh4{\r\n    display: inline-block;\r\n    color: #5DA4D9;\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-top: 5px;\r\n    text-transform: uppercase;\r\n}\r\n\r\nhr{\r\n    padding: 0;\r\n    margin: 7px 0 0 0;\r\n}\r\n\r\np{\r\n    font-size: 0.85em;\r\n    color: rgb(99, 99, 99);\r\n    line-height: 1.6em;\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\">\n    <div class=\"mat-elevation-z2 email\">\n        <i class=\"material-icons\">email</i>\n        <h4>Email</h4>\n        <hr>\n        <p>rehmansamee13@gmail.com</p>\n    </div>\n    <div class=\"mat-elevation-z2 location\">\n        <i class=\"material-icons\">location_on</i>\n        <h4>Location</h4>\n        <hr>\n        <p>Montreal, Quebec Canada</p>\n    </div>\n    <div class=\"mat-elevation-z2 github\">\n        <i style=\"font-size: 24px;\" class=\"fab fa-github-square\"></i>            \n        <h4>GitHub</h4>\n        <hr>\n        <p>Visit my <a href=\"https://github.com/SameeRehman123\">GitHub page</a> to view some of my projects and applications I have worked on.</p>\n    </div>\n    <div class=\"mat-elevation-z2 linkedin\">\n        <i style=\"font-size: 24px;\" class=\"fab fa-linkedin\"></i>\n        <h4>LinkedIn</h4>\n        <hr>\n        <p>To learn more about myself and my credentials, check out my <a href=\"https://www.linkedin.com/in/samee-rehman-829028152/\">Linkedin page.</a></p>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/cover-letter/cover-letter.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cover-letter/cover-letter.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lobster|Raleway');\r\n\r\n\r\n#cover-letter{\r\n    position: relative;\r\n    padding: 30px;\r\n}\r\n\r\n\r\n.heading p{\r\n    margin: 0;\r\n    padding: 6px 0 0 0;\r\n    font-size: 0.80em;\r\n    color: rgb(99, 99, 99);\r\n}\r\n\r\n\r\n.heading h3{\r\n    margin: 0;\r\n    color: #5DA4D9;\r\n    padding: 0;\r\n}\r\n\r\n\r\n.main{\r\n    padding-top: 15px;\r\n}\r\n\r\n\r\n.main h4{\r\n    color: rgb(99, 99, 99);\r\n}\r\n\r\n\r\n.main p{\r\n    font-size: 0.84em;\r\n    line-height: 1.6em;\r\n    color: rgb(83, 83, 83);\r\n\r\n}\r\n\r\n\r\n.signature{\r\n    font-family: 'Lobster';\r\n    font-weight: 100;\r\n    font-size: 1.6em;\r\n    color: rgb(99, 99, 99);\r\n}\r\n\r\n\r\n.download{\r\n    position: absolute;\r\n    left: 80%;\r\n    top: 85%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n.download button{\r\n    background: #5DA4D9;\r\n    color: #fff;\r\n    padding: 8px 14px;\r\n}\r\n\r\n\r\n.conclusion p{\r\n    padding: 0;\r\n    margin: 0;\r\n}"

/***/ }),

/***/ "./src/app/cover-letter/cover-letter.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cover-letter/cover-letter.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cover-letter\">\n  <div class=\"download\">\n        <a href=\"assets/img/CoverLetter.pdf\" download>\n            <button mat-button class=\"mat-elevation-z1\">Download Cover Letter</button>\n        </a>\n        <br/>\n  </div>\n  <div class=\"heading\">\n      <h3>Samee Rehman</h3>\n      <p>Developer / Programmer / Designer</p>\n      <p>Montreal Quebec, Canada</p>\n      <p>(514)-274-3411</p>\n  </div>\n  <div class=\"main\">\n      <h4>Dear Sir/Madam</h4>\n      <p>Upon graduating from Vanier College with a DEC in Computer Science, \n          I worked as an intern for four months at a software firm, Tecsys Inc. \n          As my role as a Customer Care Representative, my main responsibility included the \n          following: \n      </p>\n      <p>\n        My internship at Tecsys Inc. allowed me to implement my knowledge in Java, SQL and gave me \n        the opportunity to learn how industries and corporations operate in the IT industry. \n        In addition to the technical aspect of my role, I learned how to deal with clients and their \n        concerns. My time and experience at Tecsys Inc. have given me a strong understanding of the\n         professional behavior and courtesy that is required.\n      </p>\n      <p>Over and above my industry experience, I love working within the field of web development and \n          this is where I believe my skills and abilities will be valuable for this position. \n          I have a few web design tasks and projects I have worked on that can be viewed on my \n          GitHub account. I have created a full-stack photography website using the Laravel framework \n          as well as many other technologies such as AJAX and JavaScript. I am personally very proud of \n          this project as I believe it demonstrates my ability to create a unique, innovative and \n          user-friendly applications that delivers, not just a robust working product, \n          but an attractive web design to engage the users.\n      </p>\n      <p>\n        Aside from my academic background and experience, the one aspect that differentiates \n        myself from other candidates is my love and zeal for programming. I have always been a \n        self-motivated programmer mainly because Computer Science is not solely a career but a \n        passion. \n      </p>\n      <p>\n        I am confident that my background and knowledge in the field of Computer Science coupled \n        with my zeal and passion will prove a strong asset to your organization and will be a \n        positive contribution. I appreciate your consideration and I hope we can meet to further \n        discuss this opportunity.\n      </p>\n      <p>Your Sincerely</p>\n      <h4 class=\"signature\">Samee Rehman</h4>\n      <div class=\"conclusion\">\n        <p>Samee </p>\n        <p>Montreal, Canada</p>\n    </div>\n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/cover-letter/cover-letter.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cover-letter/cover-letter.component.ts ***!
  \********************************************************/
/*! exports provided: CoverLetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverLetterComponent", function() { return CoverLetterComponent; });
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

var CoverLetterComponent = /** @class */ (function () {
    function CoverLetterComponent() {
    }
    CoverLetterComponent.prototype.ngOnInit = function () {
    };
    CoverLetterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cover-letter',
            template: __webpack_require__(/*! ./cover-letter.component.html */ "./src/app/cover-letter/cover-letter.component.html"),
            styles: [__webpack_require__(/*! ./cover-letter.component.css */ "./src/app/cover-letter/cover-letter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoverLetterComponent);
    return CoverLetterComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    box-sizing: border-box;\r\n}\r\n\r\n#navbar{\r\n    background: #fff;\r\n    border-bottom: 1.3px solid rgb(224, 224, 224);\r\n}\r\n\r\n#navbar div{\r\n    display: inline-block;\r\n    border-right: 1px solid rgb(224, 224, 224);\r\n    padding: 27px 0px;\r\n    width: 24.9%;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n#navbar div:last-child{\r\n    border-right: none;\r\n}\r\n\r\n#navbar div h4{\r\n    color: rgb(75, 75, 75);\r\n    font-size: 0.90em;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    text-decoration: none;\r\n}\r\n\r\n.dynamicBGColor{\r\n    background: #5DA4D9 !important;\r\n}\r\n\r\n.dynamicColor{\r\n    color: #fff !important;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar\" class=\"mat-elevation-z8\">\n  <div (click)=\"sendNavToParent('about-me')\" [ngClass]=\"{'dynamicBGColor':selectedNav == 'about-me'}\" class=\"about-me\">\n    <h4 [ngClass]=\"{'dynamicColor':selectedNav == 'about-me'}\" >About Me</h4>\n  </div>\n  <div (click)=\"sendNavToParent('resume')\" [ngClass]=\"{'dynamicBGColor':selectedNav == 'resume'}\" class=\"resume\">\n      <h4 [ngClass]=\"{'dynamicColor':selectedNav == 'resume'}\" >Resume</h4>\n  </div>\n  <!-- <div [ngClass]=\"{'dynamicBGColor':selectedNav == 'projects'}\" class=\"projects\">\n      <h4 [ngClass]=\"{'dynamicColor':selectedNav == 'projects'}\" (click)=\"sendNavToParent('projects')\">Projects</h4>\n  </div> -->\n  <div (click)=\"sendNavToParent('cover-letter')\" [ngClass]=\"{'dynamicBGColor':selectedNav == 'cover-letter'}\" class=\"contact\">\n        <h4 [ngClass]=\"{'dynamicColor':selectedNav == 'cover-letter'}\" >Cover Letter</h4>\n  </div>\n  <div (click)=\"sendNavToParent('contact')\" [ngClass]=\"{'dynamicBGColor':selectedNav == 'contact'}\" class=\"contact\">\n      <h4 [ngClass]=\"{'dynamicColor':selectedNav == 'contact'}\">Contact</h4>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.oldNavSelected = null;
        this.sendSelectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.selectedNav = 'about-me';
        this.sendNavToParent(this.selectedNav);
    };
    NavbarComponent.prototype.sendNavToParent = function (navItem) {
        this.oldNavSelected = this.selectedNav;
        this.selectedNav = navItem;
        this.sendSelectedItem.emit({
            active: this.selectedNav,
            inactive: this.oldNavSelected
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NavbarComponent.prototype, "sendSelectedItem", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#projects{\r\n    padding: 32px;\r\n}\r\n\r\nh3{\r\n    text-transform: uppercase;\r\n    margin: 0;\r\n    padding: 0;\r\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"projects\">\n  <h3>Projects</h3>\n  <hr>\n  \n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
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

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".work{\r\n    padding: 36px;\r\n}\r\n\r\nsmall{\r\n    color: #E74C3C;\r\n}\r\n\r\nhr{\r\n    padding: 0;\r\n    margin: 0 0 8px 0;\r\n}\r\n\r\np{\r\n    font-size: 0.96em;\r\n    line-height: 1.5em;\r\n    color: rgb(99, 99, 99);\r\n}\r\n\r\nh5{\r\n    padding: 10px 0px 4px 0px;\r\n    margin: 0;\r\n    color: rgb(99, 99, 99);\r\n}\r\n\r\n#experience, #education{\r\n    padding-bottom: 20px;\r\n}\r\n\r\n#experience h3{\r\n    color: #5DA4D9;\r\n    display: inline-block;\r\n    padding: 0;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#skills h3, #education h3{\r\n    color: #5DA4D9;\r\n    display: inline-block;\r\n    padding-top: 18px;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\nul{\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n\r\nul li{\r\n    font-size: 0.90em;\r\n    display: inline-block;\r\n    padding: 5px;\r\n    margin: 5px;\r\n    border: 1px solid rgb(161, 161, 161);\r\n    color: rgb(99, 99, 99);\r\n    border-radius: 3px;\r\n        \r\n}\r\n\r\n.material-icons{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    padding: 0px 12px 5px 0px;\r\n    font-size: 36px;\r\n    color: #5DA4D9;\r\n}\r\n\r\n.eVision li, .tecsys li{\r\n    font-size: 0.94em;\r\n}"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"work\">\n  <div id=\"experience\">\n    <i class=\"material-icons\">work</i>\n    <h3>Work Experience</h3>\n    <hr>\n    <div class=\"eVision\">\n        <h5>Junior Software Developer</h5>\n        <small>OCT 2018 - </small>\n        <p style=\"padding-left: 8px; font-size: 0.89em;\">\n          <li>Build both front-end and back-end functionalities for the client's software.</li>\n          <li>Debug and resolve any issues or bugs that appear in the system.</li>\n          <li>Primary languages used: Angularjs, Scala and the Oracle DBMS</li>\n        </p>\n    </div>\n    <div class=\"tecsys\">\n        <h5>Customer Care Representative</h5>\n        <small>AUG 2017 - NOV 2017</small>\n        <p style=\"padding-left: 8px; font-size: 0.89em;\">\n            <li>Analyze, debug and find solutions for existing bugs and errors within the Tecsys \n                software using Java and SQL as the programming language.\n            </li>\n            <li>My core responsibility was to listen to the concerns of the client and take \n              the necessary steps to find a solution.\n            </li>\n        </p>\n    </div>\n  </div>\n  <div id=\"education\">\n      <i class=\"material-icons\">school</i>\n      <h3>Education</h3>\n      <hr>\n      <div class=\"college mat-elevation-z2\" style=\"margin-bottom: 18px; padding: 10px;\">\n          <h5>Computer Science and Technology DEC</h5>\n          <small>2014 - 2017</small>\n      </div>\n      <div class=\"high-school mat-elevation-z2\" style=\"padding: 10px;\">\n          <h5>High School Diploma</h5>\n          <small>2009 - 2014</small>\n      </div>\n    </div>\n    <div id=\"skills\">\n        <i class=\"material-icons\">code</i>\n        <h3>Skills</h3>\n        <hr>\n        <div class=\"front\">\n            <ul>\n              <li>HTML5</li>\n              <li>CSS3 / SASS</li>\n              <li>JavaScript / Jquery</li>\n              <li>Bootstrap</li>\n              <li>Web Animations</li>\n              <li>Responsive Design</li>\n              <li>Mobile Web Design</li>\n              <li>AJAX / JSON</li>\n              <li>Adobe Photoshop</li>\n            </ul>\n          </div>\n          <div class=\"back\">\n            <ul>\n              <li>Java / JSP</li>\n              <li>C# - ASP.NET</li>\n              <li>PHP / Laravel</li>\n              <li>RESTful API's</li>\n              <li>Android Mobile Development</li>\n              <li>Oracle Database</li>\n              <li>SQL / MySQL / SQLite</li>\n              <li>JDBC</li>\n              <li>GIT Version Control</li>\n              <li>MVC Structure</li>\n              <li>Data Structures</li>\n            </ul>\n  \n          </div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
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

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-profile{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 20px;\r\n    float: left;\r\n    background: #fff;\r\n    width: 28%;\r\n    min-height: 565px;\r\n}\r\n\r\n.intro {\r\n    text-align: center;\r\n}\r\n\r\n.intro h3{\r\n    padding: 10px 0 3px 0;\r\n    margin: 0;\r\n    font-size: 1.4em;\r\n    text-transform: uppercase;\r\n    color: rgb(90, 90, 90);\r\n}\r\n\r\nsmall{\r\n    display: inline-block;\r\n    padding: 0 0 10px 0;\r\n    margin: 0;\r\n}\r\n\r\n.statement p{\r\n    font-size: 0.90em;\r\n    color: rgb(99, 99, 99);\r\n    line-height: 1.5em;\r\n}\r\n\r\n.box{\r\n    box-sizing: border-box;\r\n    border-radius: 3px;\r\n    width: 95%;\r\n    background: #5DA4D9;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.english, .french, .urdu{\r\n    border-radius: 3px;\r\n    color: #fff;\r\n    font-size: 0.80em;\r\n    padding: 7px;\r\n    width: 90%;\r\n    background: #E74C3C;\r\n}\r\n\r\n.french{\r\n    width: 85%;\r\n}\r\n\r\n.urdu{\r\n    width: 75%;\r\n}\r\n\r\n.languages .box:nth-child(1){\r\n    margin-top: 20px;\r\n}\r\n\r\n.material-icons{\r\n    float: left;\r\n    padding-top: 8px;\r\n    font-size: 30px;\r\n}\r\n\r\n.languages h3{\r\n    padding: 5px 0 10px 0;\r\n    margin: 0;\r\n    font-size: 0.97em;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#downloadCV{\r\n    text-align: center;\r\n    padding: 12px;\r\n}\r\n\r\n#downloadCV button{\r\n    color: #fff;\r\n    background: #5DA4D9;\r\n}\r\n\r\n.social-media{\r\n    text-align: center;\r\n    padding-top: 32px;\r\n}\r\n\r\n.social-media i{\r\n    font-size: 32px;\r\n    margin-right: 16px;\r\n    color: rgb(21, 133, 219);\r\n}\r\n\r\n@media only screen and (max-width: 1069px) {\r\n    .user-profile{\r\n        width: 35%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .user-profile{\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8 user-profile\">\n        <div class=\"intro\">\n            <h3>Samee Rehman</h3>\n            <small>Developer & Designer</small>\n        </div>\n        <div id=\"downloadCV\">\n            <a href=\"assets/img/CV_REHMAN_SAMEE.pdf\" download>\n                <button mat-button class=\"mat-elevation-z1\">Download CV</button>\n            </a>\n            <br/>\n        </div>\n        <hr>\n        <div class=\"statement\">\n            <p>I am a young developer with a love for programming and technology. \n                I have a deep passion for web development and I am constantly creating new and \n                innovative projects.\n            </p>\n        </div>\n        \n        <hr>\n        <div class=\"languages\">\n            <div class=\"box\">\n                <div class=\"english\">\n                English <span>[Professional]</span>\n                </div>\n            </div>\n            <div class=\"box\">\n                <div class=\"french\">\n                French <span>[Proficient]</span>\n                </div>\n            </div>\n            <div class=\"box\">\n                <div class=\"urdu\">\n                Urdu <span>[Moderate]</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"social-media\">\n            <a href=\"https://github.com/SameeRehman123\" target=\"_blank\"> <i class=\"fab fa-github-square\"></i> </a>\n            <a href=\"https://www.facebook.com/samee.rehman.1\" target=\"_blank\"><i class=\"fab fa-facebook-square\"></i></a>\n            <a href=\"https://www.linkedin.com/in/samee-rehman-829028152/\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
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

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Samee_Rehman\Desktop\PersonalWebsite\Personal_Website(2)\personal-website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map