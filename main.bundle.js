webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container_custom\">\r\n\r\n    <div class=\"home_page\">\r\n     <app-nav class=\"menu wide_responsive \"></app-nav> \r\n      <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->\r\n      <div id=\"main\" class=\"wide_responsive\">\r\n        <div class=\"wide\">\r\n        <app-banner class=\"banner wide_responsive\" ></app-banner>\r\n        <div class=\"gallery wide_responsive\">\r\n            <div class=\"grid_wrap sticky \">\r\n          <router-outlet></router-outlet>\r\n          <div class=\"push\"></div> \r\n          </div>\r\n          <app-footer class=\"col-xs-12 footer\"></app-footer> \r\n        </div>\r\n        \r\n        \r\n        \r\n      </div>\r\n      \r\n    </div>\r\n    <div id='back2Top'>To The Top</div>\r\n   \r\n  </div>\r\n\r\n  <app-modal id=\"myModal\" class=\"modal fade\" role=\"dialog\"></app-modal>\r\n  </div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_nav_nav_component__ = __webpack_require__("./src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_gallry_gallry_component__ = __webpack_require__("./src/app/components/gallry/gallry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_banner_banner_component__ = __webpack_require__("./src/app/components/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ring_ring_component__ = __webpack_require__("./src/app/components/ring/ring.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_service_Basic_service__ = __webpack_require__("./src/app/components/service/Basic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_modal_modal_component__ = __webpack_require__("./src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__components_gallry_gallry_component__["a" /* GallryComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'ring', component: __WEBPACK_IMPORTED_MODULE_10__components_ring_ring_component__["a" /* RingComponent */] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_gallry_gallry_component__["a" /* GallryComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_ring_ring_component__["a" /* RingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_modal_modal_component__["a" /* ModalComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__components_service_Basic_service__["a" /* BasicService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n<h3 class=\"title\"><span>about</span></h3>\n<p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"overlay\">\n  <div class=\"wrap_ban_data\">\n     <span>nt inside this div if you want the side nav to push pag</span>\n    <ul>\n      <li>\n        <a href=\"#\">\n          <i class=\"fab fa-facebook-f\"></i>\n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n          <i class=\"fab fa-twitter\"></i>\n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n          <i class=\"fab fa-pinterest-p\"></i>\n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n          <i class=\"fab fa-google-plus-g\"></i>\n        </a>\n      </li>\n    </ul>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/banner/banner.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-banner',
            template: __webpack_require__("./src/app/components/banner/banner.component.html"),
            styles: [__webpack_require__("./src/app/components/banner/banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 scroll\">\n<h3 class=\"title\"><span>Contact</span></h3>\n<p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p><p>\n  Neon Gems Inc. established in 1983 \n\nIt all began with zeal to live the American Dream. The founders of Neon Gems, Nirmal and Neena Jain, came from overseas with the skillset and drive to craft the finest jewelry. Based in Los Angeles, Neon Gems makes occasions memorable—from weddings to beautiful engagements, any joyous occasion, Neon Gems can be part of the celebration—pouring love into each and every piece. Here at Neon Gems, we make you sparkle. \n\nWe are a one-stop-shop for fine jewelry. Our foundation is built on refined skill, exemplary service, and ultimate sourcing. Each and every piece is crafted with soul, dedication, and precision. Our aim is to design timeless pieces of art that can be passed down from one generation to another, with a compelling and heartfelt story attached to it. \n\nTogether, we have perfected this art form and take great pride in our ability to discern impeccable quality and acquire the purest diamonds from the best sources worldwide. In doing so, we have had the honor of receiving the JCK Jeweler’s Choice Awards in 2015, 2017, 2018 & a finalist spot in 2016. \n\nOur jewelry, like fine wine, gains value as it ages. At Neon Gems, we consistently strive to foster a strong and warm rapport with our customers. Our success is intertwined with our customers’ delight. \n\n“We can never sell a piece that we are not 110% happy with,” the cofounders contend. Every piece of jewelry is like a biography—it has its own story to tell. At Neon Gems, we would love to create a precious piece of art that will tell yours.\n</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, email, sendCatalog, addressType, street1, street2, city, state, zip) {
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (email === void 0) { email = ''; }
        if (sendCatalog === void 0) { sendCatalog = false; }
        if (addressType === void 0) { addressType = 'home'; }
        if (state === void 0) { state = ''; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.sendCatalog = sendCatalog;
        this.addressType = addressType;
        this.street1 = street1;
        this.street2 = street2;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-8\">\n          <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a routerLink=\"/home\">Home</a></li>\n          <li><a routerLink=\"/about\">about</a></li>\n          <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">products<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/ring\" >Rings</a></li>\n            <li><a >Bracelet</a></li>\n            <li><a >Earrings</a></li>\n            <li><a >Necklaces</a></li>\n            </ul>\n          </li>\n         \n          <li><a routerLink=\"/contact\">contact</a></li>\n          <li><a routerLink=\"/ring\" >Rings</a></li>\n          </ul>\n</div>\n<div class=\"col-xs-4 text-left copy\">copyright @neongems 2018</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/gallry/gallry.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  \n<h3 class=\"title\"><span>Featured Products</span></h3>\n<div class=\"grid\">\n  <!-- width of .grid-sizer used for columnWidth -->\n  <div class=\"col-xs-6 grid-item nopadding\">\n    <div class=\"wrap\">\n      <img src=\"assets/images/Ring.jpg\" class=\"img-responsive \" >\n      <div class=\"pos\">\n        \n        <a routerLink=\"/ring\" target=\"_blank\"><h3>RINGs</h3></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 grid-item nopadding\">\n    <div class=\"wrap\">\n      <img src=\"assets/images/Bracelet.jpg\" class=\"img-responsive \">\n      <div class=\"pos\">\n        \n        <a href=\"bracelet.php\" target=\"_blank\"><h3>BRACELETs</h3></a>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-xs-6 grid-item nopadding\">\n    <div class=\"wrap\">\n      <img src=\"assets/images/Earrings.jpg\" class=\"img-responsive \">\n      <div class=\"pos\">\n        \n        <a href=\"earring.php\" target=\"_blank\"><h3>EARRINGS</h3></a>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-xs-6 grid-item nopadding\">\n    <div class=\"wrap\">\n      <img src=\"assets/images/Necklace.jpg\" class=\"img-responsive \">\n      <div class=\"pos\">\n      \n        <a href=\"necklace.php\" target=\"_blank\"><h3>NECKLACEs</h3></a>\n      </div>\n    </div>\n  </div>\n \n  <div class=\"col-xs-6 grid-item nopadding\">\n    <div class=\"wrap\">\n      <img src=\"assets/images/Ring.jpg\" class=\"img-responsive \" >\n      <div class=\"pos\">\n        \n        <a routerLink=\"/ring\" target=\"_blank\"><h3>RINGs</h3></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-6 grid-item nopadding\">\n    <div class=\"wrap\">\n      <img src=\"assets/images/Bracelet.jpg\" class=\"img-responsive \">\n      <div class=\"pos\">\n        \n        <a href=\"bracelet.php\" target=\"_blank\"><h3>BRACELETs</h3></a>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-xs-6 grid-item nopadding\">\n    <div class=\"wrap\">\n      <img src=\"assets/images/Earrings.jpg\" class=\"img-responsive \">\n      <div class=\"pos\">\n        \n        <a href=\"earring.php\" target=\"_blank\"><h3>EARRINGS</h3></a>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-xs-6 grid-item nopadding\">\n    <div class=\"wrap\">\n      <img src=\"assets/images/Necklace.jpg\" class=\"img-responsive \">\n      <div class=\"pos\">\n      \n        <a href=\"necklace.php\" target=\"_blank\"><h3>NECKLACEs</h3></a>\n      </div>\n    </div>\n  </div>\n \n\n\n</div>\n<div class=\"push\"></div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/gallry/gallry.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gallry/gallry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GallryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GallryComponent = /** @class */ (function () {
    function GallryComponent() {
    }
    GallryComponent.prototype.ngOnInit = function () {
    };
    GallryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallry',
            template: __webpack_require__("./src/app/components/gallry/gallry.component.html"),
            styles: [__webpack_require__("./src/app/components/gallry/gallry.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GallryComponent);
    return GallryComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n               <h3 class=\"title\" ><span>Sign Up!</span> <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button></h3>\n            \n           \n          </div>\n          <div class=\"modal-body\">\n          \n            <div class=\"panel panel-primary\">\n               \n            \n                <div class=\"panel-body\">\n                    <form class=\"form-horizontal\"\n                          novalidate\n                          (ngSubmit)=\"save()\"\n                          [formGroup]=\"customerForm\">\n                        <fieldset>\n                            <div class=\"form-group\"\n                                [ngClass]=\"{'has-error': (customerForm.get('firstName').touched || \n                                                          customerForm.get('firstName').dirty) &&\n                                                          !customerForm.get('firstName').valid }\">\n                                <label class=\"col-md-3 control-label\" \n                                       for=\"firstNameId\">First Name</label>\n            \n                                <div class=\"col-md-7\">\n                                    <input class=\"form-control\" \n                                           id=\"firstNameId\" \n                                           type=\"text\" \n                                           placeholder=\"First Name (required)\" \n                                           formControlName=\"firstName\" />\n                                    <span class=\"help-block\" *ngIf=\"(customerForm.get('firstName').touched || \n                                                                     customerForm.get('firstName').dirty) && \n                                                                     customerForm.get('firstName').errors\">\n                                        <span *ngIf=\"customerForm.get('firstName').errors.required\">\n                                            Please enter your first name.\n                                        </span>\n                                        <span *ngIf=\"customerForm.get('firstName').errors.minlength\">\n                                            The first name must be longer than 3 characters.\n                                        </span>\n                                    </span>\n                                </div>\n                            </div>\n            \n                            <div class=\"form-group\"\n                                [ngClass]=\"{'has-error': (customerForm.get('lastName').touched || customerForm.get('lastName').dirty) && !customerForm.get('lastName').valid }\">\n                                <label class=\"col-md-3 control-label\" \n                                    for=\"lastNameId\">Last Name</label>\n            \n                                <div class=\"col-md-7\">\n                                    <input class=\"form-control\" \n                                           id=\"lastNameId\" \n                                           type=\"text\" \n                                           placeholder=\"Last Name (required)\" \n                                           formControlName=\"lastName\" />\n                                    <span class=\"help-block\" *ngIf=\"(customerForm.get('lastName').touched || customerForm.get('lastName').dirty) && customerForm.get('lastName').errors\">\n                                        <span *ngIf=\"customerForm.get('lastName').errors.required\">\n                                            Please enter your last name.\n                                        </span>\n                                         <span *ngIf=\"customerForm.controls.lastName.errors.maxlength\">\n                                            The last name must be less than 50 characters.\n                                        </span>\n                                   </span>\n                                </div>\n                            </div>\n            \n                            <div formGroupName=\"emailGroup\"\n                                 [ngClass]=\"{'has-error': customerForm.get('emailGroup').errors }\">\n                                 \n                                <div class=\"form-group\"\n                                     [ngClass]=\"{'has-error': emailMessage}\">\n                                    <label class=\"col-md-3 control-label\" \n                                        for=\"emailId\">Email</label>\n            \n                                    <div class=\"col-md-7\">\n                                        <input class=\"form-control\" \n                                            id=\"emailId\" \n                                            type=\"email\" \n                                            placeholder=\"Email (required)\" \n                                            formControlName = \"email\" />\n                                        <span class=\"help-block\" *ngIf=\"emailMessage\">\n                                            {{ emailMessage }}\n                                        </span>\n                                    </div>\n                                </div>\n            \n                                <div class=\"form-group\"\n                                    [ngClass]=\"{'has-error': (customerForm.get('emailGroup.confirmEmail').touched || \n                                                              customerForm.get('emailGroup.confirmEmail').dirty) && \n                                                              !customerForm.get('emailGroup.confirmEmail').valid }\">\n                                    <label class=\"col-md-3 control-label\" \n                                        for=\"confirmEmailId\">Confirm Email</label>\n            \n                                    <div class=\"col-md-7\">\n                                        <input class=\"form-control\" \n                                            id=\"confirmEmailId\" \n                                            type=\"email\" \n                                            placeholder=\"Confirm Email (required)\" \n                                            formControlName = \"confirmEmail\" />\n                                        <span class=\"help-block\" *ngIf=\"(customerForm.get('emailGroup.confirmEmail').touched || \n                                                                        customerForm.get('emailGroup.confirmEmail').dirty) && \n                                                                        (customerForm.get('emailGroup.confirmEmail').errors ||\n                                                                         customerForm.get('emailGroup').errors)\">\n                                            <span *ngIf=\"customerForm.get('emailGroup.confirmEmail').errors?.required\">\n                                                Please confirm your email address.\n                                            </span>\n                                            <span *ngIf=\"customerForm.get('emailGroup').errors?.match\">\n                                                The confirmation does not match the email address.\n                                            </span>                          \n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n            \n                            <div class=\"form-group\"\n                                [ngClass]=\"{'has-error': !customerForm.get('phone').valid }\">\n                                <label class=\"col-md-3 control-label\" \n                                    for=\"phoneId\">Phone</label>\n            \n                                <div class=\"col-md-7\">\n                                    <input class=\"form-control\" \n                                           id=\"phoneId\" \n                                           type=\"tel\" \n                                           placeholder=\"Phone\" \n                                           formControlName = \"phone\" />\n                                    <span class=\"help-block\" *ngIf=\"customerForm.get('phone').errors\">\n                                        <span *ngIf=\"customerForm.get('phone').errors.required\">\n                                            Please enter your phone number.\n                                        </span>\n                                    </span>\n                                </div>\n                            </div>\n                            \n                            <div class=\"form-group\" >\n                                <label class=\"col-md-3 control-label\">Send Notifications</label>\n                                <div class=\"col-md-7\">\n                                        <label class=\"radio-inline\">\n                                            <input type=\"radio\" \n                                                   value=\"email\" \n                                                   formControlName = \"notification\">Email\n                                        </label>\n                                        <label class=\"radio-inline\">\n                                            <input type=\"radio\" \n                                                   value=\"text\" \n                                                   formControlName = \"notification\">Text\n                                        </label>\n                                </div>\n                            </div>\n            \n                            <div class=\"form-group\"\n                                [ngClass]=\"{'has-error': (customerForm.get('rating').touched || \n                                                          customerForm.get('rating').dirty) && \n                                                          !customerForm.get('rating').valid }\">\n                                <label class=\"col-md-3 control-label\" \n                                    for=\"ratingId\">Rating</label>\n            \n                                <div class=\"col-md-7\">\n                                    <input class=\"form-control\" \n                                           id=\"ratingId\" \n                                           type=\"number\" \n                                           formControlName = \"rating\" />\n                                    <span class=\"help-block\" *ngIf=\"(customerForm.get('rating').touched \n                                                                     || customerForm.get('rating').dirty) && \n                                                                     customerForm.get('rating').errors\">\n                                         <span *ngIf=\"customerForm.get('rating').errors.range\">\n                                            Please rate your experience from 1 to 5.\n                                        </span>\n                                   </span>\n                                </div>\n                            </div>\n                            \n                            <div class=\"form-group\">\n                                <div class=\"col-md-offset-1 col-md-8 checkbox\" >\n                                    <label>\n                                        <input id=\"sendCatalogId\"\n                                               type=\"checkbox\"\n                                               formControlName = \"sendCatalog\" >\n                                        Send me your catalog\n                                    </label>\n                                </div>\n                            </div>\n            \n                            <div *ngIf=\"customerForm.get('sendCatalog').value\">\n                                <div class=\"form-group\">\n                                    <div class=\"col-md-4 col-md-offset-2\">\n                                        <span>\n                                            <button class=\"btn btn-primary\"\n                                                    type=\"button\"\n                                                    [disabled]=\"!addresses.valid\"\n                                                    (click)=\"addAddress()\">\n                                                Add Another Address\n                                            </button>\n                                        </span>\n                                    </div>\n                                </div>\n            \n                                <div formArrayName=\"addresses\" *ngFor=\"let address of addresses.controls; let i=index\">\n                                    <div [formGroupName]=\"i\">\n                                        <div class=\"form-group\" >\n                                            <label class=\"col-md-3 control-label\"\n                                                   attr.for=\"{{'addressType1Id' + i}}\">Address Type</label>\n                                            <div class=\"col-md-7\">\n                                                <label class=\"radio-inline\">\n                                                    <input type=\"radio\" id=\"{{'addressType1Id' + i}}\" value=\"home\"\n                                                    formControlName=\"addressType\">Home\n                                                </label>\n                                                <label class=\"radio-inline\">\n                                                    <input type=\"radio\" id=\"{{'addressType1Id' + i}}\" value=\"work\"\n                                                    formControlName=\"addressType\">Work\n                                                </label>\n                                                <label class=\"radio-inline\">\n                                                    <input type=\"radio\" id=\"{{'addressType1Id' + i}}\" value=\"other\"\n                                                    formControlName=\"addressType\">Other\n                                                </label>\n                                            </div>\n                                        </div>\n            \n                                        <div class=\"form-group\"\n                                             [ngClass]=\"{'has-error': (address.controls.street1.touched || \n                                                                  address.controls.street1.dirty) && \n                                                                  !address.controls.street1.valid }\">\n                                            <label class=\"col-md-3 control-label\"\n                                                   attr.for=\"{{'street1Id' + i}}\">Street Address 1</label>\n                                            <div class=\"col-md-7\">\n                                                <input type=\"text\" \n                                                    class=\"form-control\" \n                                                    id=\"{{'street1Id' + i}}\" \n                                                    placeholder=\"Street address\"\n                                                    formControlName=\"street1\">\n                                                <span class=\"help-block\" *ngIf=\"(address.controls.street1.touched || address.controls.street1.dirty) && address.controls.street1.errors\">\n                                                  <span *ngIf=\"address.controls.street1.errors.required\">\n                                                      Please enter your street address.\n                                                  </span>\n                                                </span>\n                                            </div>\n                                        </div>\n            \n                                        <div class=\"form-group\">\n                                            <label class=\"col-md-3 control-label\" \n                                                   attr.for=\"{{'street2Id' + i}}\">Street Address 2</label>\n                                            <div class=\"col-md-7\">\n                                                <input type=\"text\" \n                                                    class=\"form-control\" \n                                                    id=\"{{'street2Id' + i}}\"\n                                                    placeholder=\"Street address (second line)\"\n                                                    formControlName=\"street2\">\n                                            </div>\n                                        </div>\n            \n                                        <div class=\"form-group\">\n                                            <label class=\"col-md-3 control-label\" \n                                                attr.for=\"{{'cityId' + i}}\">City, State, Zip Code</label>\n                                            <div class=\"col-md-3\">\n                                                <input type=\"text\" \n                                                    class=\"form-control\" \n                                                    id=\"{{'cityId' + i}}\" \n                                                    placeholder=\"City\"\n                                                    formControlName=\"city\">\n                                            </div>\n                                            <div class=\"col-md-3\">\n                                                <select class=\"form-control\"\n                                                        id=\"{{'stateId' + i}}\"\n                                                        formControlName=\"state\">\n                                                    <option value=\"\" disabled selected hidden>Select a State...</option>\n                                                    <option value=\"AL\">Alabama</option>\n                                                    <option value=\"AK\">Alaska</option>\n                                                    <option value=\"AZ\">Arizona</option>\n                                                    <option value=\"AR\">Arkansas</option>\n                                                    <option value=\"CA\">California</option>\n                                                    <option value=\"CO\">Colorado</option>\n                                                    <option value=\"WI\">Wisconsin</option>\n                                                    <option value=\"WY\">Wyoming</option>\n                                                </select>\n                                            </div>\n                                            <div class=\"col-md-2\">\n                                            <input type=\"number\"\n                                                    class=\"form-control\" \n                                                    id=\"{{'zipId' + i}}\"\n                                                    placeholder=\"Zip Code\"\n                                                    formControlName=\"zip\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n            \n                            <div class=\"form-group\">\n                                <div class=\"col-md-4 col-md-offset-2\">\n                                    <span>\n                                        <button class=\"btn btn-primary\"\n                                                type=\"submit\"\n                                                [disabled]=\"!customerForm.valid\">\n                                            Save\n                                        </button>\n                                    </span>\n                                    <span>\n                                        <button class=\"btn btn-default\"\n                                                type=\"button\"\n                                                (click)=\"populateTestData()\">\n                                            Test Data\n                                        </button>\n                                    </span>\n                                </div>\n                            </div>\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n            <br>Dirty: {{ customerForm.dirty }} \n            <br>Touched: {{ customerForm.touched }}\n            <br>Valid: {{ customerForm.valid }}\n            <br>Value: {{ customerForm.value | json }}\n            <br>Street: {{ addresses.get('0.street1')?.value }}\n               \n\n\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n  \n      </div>\n  \n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer__ = __webpack_require__("./src/app/components/customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function emailMatcher(c) {
    var emailControl = c.get('email');
    var confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}
function ratingRange(min, max) {
    return function (c) {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        }
        ;
        return null;
    };
}
var ModalComponent = /** @class */ (function () {
    function ModalComponent(fb) {
        this.fb = fb;
        this.customer = new __WEBPACK_IMPORTED_MODULE_2__customer__["a" /* Customer */]();
        this.validationMessages = {
            required: 'Please enter your email address.',
            pattern: 'Please enter a valid email address.'
        };
    }
    Object.defineProperty(ModalComponent.prototype, "addresses", {
        get: function () {
            return this.customerForm.get('addresses');
        },
        enumerable: true,
        configurable: true
    });
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerForm = this.fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3)]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(50)]],
            emailGroup: this.fb.group({
                email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
                confirmEmail: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            }, { validator: emailMatcher }),
            phone: '',
            notification: 'email',
            rating: ['', ratingRange(1, 5)],
            sendCatalog: true,
            addresses: this.fb.array([this.buildAddress()])
        });
        this.customerForm.get('notification').valueChanges
            .subscribe(function (value) { return _this.setNotification(value); });
        var emailControl = this.customerForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(function (value) {
            return _this.setMessage(emailControl);
        });
    };
    ModalComponent.prototype.addAddress = function () {
        this.addresses.push(this.buildAddress());
    };
    ModalComponent.prototype.buildAddress = function () {
        return this.fb.group({
            addressType: 'home',
            street1: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            street2: '',
            city: '',
            state: '',
            zip: ''
        });
    };
    ModalComponent.prototype.populateTestData = function () {
        this.customerForm.patchValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            emailGroup: { email: 'jack@torchwood.com', confirmEmail: 'jack@torchwood.com' }
        });
    };
    ModalComponent.prototype.save = function () {
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    };
    ModalComponent.prototype.setMessage = function (c) {
        var _this = this;
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(function (key) {
                return _this.validationMessages[key];
            }).join(' ');
        }
    };
    ModalComponent.prototype.setNotification = function (notifyVia) {
        var phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modal',
            template: __webpack_require__("./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__("./src/app/components/modal/modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div id=\"mySidenav\" class=\"sidenav \">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a>\n    <a href=\"#\">\n      <img src=\"assets/images/logo.jpg\" alt=\"logo\"> </a>\n    <ul class=\"nav\">\n      <li>\n        <a  routerLinkActive=\"active\"  routerLink=\"/home\">HOme</a>\n      </li>\n      <li>\n        <a  routerLinkActive=\"active \" routerLink=\"/about\">About</a>\n      </li>\n      <li>\n        <a routerLinkActive=\"active \" routerLink=\"/contact\">Contact</a>\n      </li>\n    </ul>\n\n    <ul class=\"social\">\n      <li>\n        <a href=\"#\">\n          <i class=\"fab fa-facebook-f\"></i>\n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n          <i class=\"fab fa-twitter\"></i>\n            \n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n          <i class=\"fab fa-pinterest-p\"></i>\n        </a>\n      </li>\n      <li>\n        <a href=\"#\">\n          <i class=\"fab fa-google-plus-g\"></i>\n        </a>\n      </li>\n    </ul>\n    <div id=\"copyright\">Stellar Photography</div>\n  </div>\n  <!-- Use any element to open the sidenav -->\n  <div onclick=\"openNav()\" class=\"click\">\n    <div></div>\n    <div></div>\n    <div></div>\n    Menu\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/components/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/ring/ring.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 innerpage sticky\" >\n  <h3 class=\"title\">\n    <span>Rings</span>\n  </h3>\n  <div class=\"col-md-4 col-xs-6 btm_padding\" *ngFor=\"let item of data\">\n    <figure>\n      <img src=\"https://s3.ap-south-1.amazonaws.com/gw-media/uploads/cms-media/listing/{{item.image_path_listing}}\" class=\"img-responsive\">\n    </figure>\n    <h4>{{item.package_name}}</h4>\n    <a href=\"javascript:void(0);\" class=\"read\" data-toggle=\"modal\" data-target=\"#myModal\">Know more</a>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/ring/ring.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/ring/ring.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_Basic_service__ = __webpack_require__("./src/app/components/service/Basic.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RingComponent = /** @class */ (function () {
    function RingComponent(MyService) {
        var _this = this;
        this.MyService = MyService;
        this.name = "Angular Service";
        //this.MyService.GetPosts().subscribe(posts => { console.log(posts)}); 
        this.MyService.GetPosts().subscribe(function (posts) { _this.data = posts; });
    }
    RingComponent.prototype.ngOnInit = function () {
    };
    RingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ring',
            template: __webpack_require__("./src/app/components/ring/ring.component.html"),
            styles: [__webpack_require__("./src/app/components/ring/ring.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_Basic_service__["a" /* BasicService */]])
    ], RingComponent);
    return RingComponent;
}());



/***/ }),

/***/ "./src/app/components/service/Basic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicService = /** @class */ (function () {
    //private _productUrl = 'http://api.gemtravels.com/domestic_packages.php?api_key=abcd12345&domain_name=gem_tours';
    function BasicService(http) {
        this.http = http;
    }
    BasicService.prototype.GetPosts = function () {
        return this.http.get('http://api.gemtravels.com/domestic_packages.php?api_key=abcd12345&domain_name=gem_tours')
            .map(function (result) { return result.json(); });
    };
    BasicService.prototype.GetPostAsPerId = function (Id) {
        return this.http.get('http://api.gemtravels.com/domestic_packages.php?api_key=abcd12345&domain_name=gem_tours' + Id)
            .map(function (result) { return result.json(); });
    };
    BasicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BasicService);
    return BasicService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map