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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toilets></app-toilets>\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toilets_toilets_component__ = __webpack_require__("./src/app/toilets/toilets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toilets_toilet_service__ = __webpack_require__("./src/app/toilets/toilet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toilets_map_map_component__ = __webpack_require__("./src/app/toilets/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__toilets_toilet_search_reducer__ = __webpack_require__("./src/app/toilets/toilet-search.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__toilets_toilet_effects__ = __webpack_require__("./src/app/toilets/toilet.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__toilets_toilets_list_toilets_list_component__ = __webpack_require__("./src/app/toilets/toilets-list/toilets-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__toilets_map_map_reducer__ = __webpack_require__("./src/app/toilets/map/map.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// tslint:disable-next-line:max-line-length











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__toilets_toilets_component__["a" /* ToiletsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__toilets_map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_14__toilets_toilets_list_toilets_list_component__["a" /* ToiletsListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["h" /* ReactiveFormsModule */],
                // tslint:disable-next-line:max-line-length
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatDividerModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_11__ngrx_store__["c" /* StoreModule */].forRoot({
                    toilets: __WEBPACK_IMPORTED_MODULE_10__toilets_toilet_search_reducer__["c" /* toiletReducer */],
                    map: __WEBPACK_IMPORTED_MODULE_16__toilets_map_map_reducer__["b" /* mapReducer */]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["c" /* EffectsModule */].forRoot([
                    __WEBPACK_IMPORTED_MODULE_12__toilets_toilet_effects__["a" /* ToiletEffects */]
                ]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__toilets_toilet_service__["a" /* ToiletService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/toilets/map/map.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UPDATE_GPS_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UpdateGpsPosition; });
var UPDATE_GPS_POSITION = '[map] Update gps poistion';
var UpdateGpsPosition = /** @class */ (function () {
    function UpdateGpsPosition(payload) {
        this.payload = payload;
        this.type = UPDATE_GPS_POSITION;
    }
    return UpdateGpsPosition;
}());



/***/ }),

/***/ "./src/app/toilets/map/map.component.css":
/***/ (function(module, exports) {

module.exports = "#map {\r\n    width: 100%;\r\n    height: calc(100vh - 79px);\r\n  }"

/***/ }),

/***/ "./src/app/toilets/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>"

/***/ }),

/***/ "./src/app/toilets/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ol_map__ = __webpack_require__("./node_modules/ol/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ol_source_osm__ = __webpack_require__("./node_modules/ol/source/osm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ol_geom_point__ = __webpack_require__("./node_modules/ol/geom/point.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ol_style_style__ = __webpack_require__("./node_modules/ol/style/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ol_style_icon__ = __webpack_require__("./node_modules/ol/style/icon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ol_style_fill__ = __webpack_require__("./node_modules/ol/style/fill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ol_style_stroke__ = __webpack_require__("./node_modules/ol/style/stroke.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ol_style_circle__ = __webpack_require__("./node_modules/ol/style/circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ol_layer_vector__ = __webpack_require__("./node_modules/ol/layer/vector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ol_source_vector__ = __webpack_require__("./node_modules/ol/source/vector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ol_layer_tile__ = __webpack_require__("./node_modules/ol/layer/tile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ol_feature__ = __webpack_require__("./node_modules/ol/feature.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ol_view__ = __webpack_require__("./node_modules/ol/view.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ol_proj__ = __webpack_require__("./node_modules/ol/proj.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__toilet_actions__ = __webpack_require__("./src/app/toilets/toilet.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__toilet_search_reducer__ = __webpack_require__("./src/app/toilets/toilet-search.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__map_reducer__ = __webpack_require__("./src/app/toilets/map/map.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var MapComponent = /** @class */ (function () {
    function MapComponent(store) {
        this.store = store;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = new __WEBPACK_IMPORTED_MODULE_2_ol_source_osm__["a" /* default */]();
        this.layer = new __WEBPACK_IMPORTED_MODULE_11_ol_layer_tile__["a" /* default */]({
            source: this.source
        });
        this.view = new __WEBPACK_IMPORTED_MODULE_13_ol_view__["a" /* default */]({
            center: __WEBPACK_IMPORTED_MODULE_14_ol_proj__["a" /* default */].fromLonLat([16.610961, 49.195788]),
            zoom: 18,
        });
        this.vectorSource = new __WEBPACK_IMPORTED_MODULE_10_ol_source_vector__["a" /* default */]({
            features: []
        });
        this.positionVectorSource = new __WEBPACK_IMPORTED_MODULE_10_ol_source_vector__["a" /* default */]({
            features: []
        });
        var positionLayer = new __WEBPACK_IMPORTED_MODULE_9_ol_layer_vector__["a" /* default */]({
            source: this.positionVectorSource,
            style: new __WEBPACK_IMPORTED_MODULE_4_ol_style_style__["a" /* default */]({
                image: new __WEBPACK_IMPORTED_MODULE_8_ol_style_circle__["a" /* default */]({
                    radius: 9,
                    fill: new __WEBPACK_IMPORTED_MODULE_6_ol_style_fill__["a" /* default */]({
                        color: '#3f51b5'
                    }),
                    stroke: new __WEBPACK_IMPORTED_MODULE_7_ol_style_stroke__["a" /* default */]({
                        color: 'white',
                        width: 4
                    })
                })
            })
        });
        var vectorLayer = new __WEBPACK_IMPORTED_MODULE_9_ol_layer_vector__["a" /* default */]({
            source: this.vectorSource,
            style: new __WEBPACK_IMPORTED_MODULE_4_ol_style_style__["a" /* default */]({
                image: new __WEBPACK_IMPORTED_MODULE_5_ol_style_icon__["a" /* default */](({
                    anchor: [0.5, 1],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'fraction',
                    src: 'assets/toilet.png'
                }))
            })
        });
        this.map = new __WEBPACK_IMPORTED_MODULE_1_ol_map__["a" /* default */]({
            target: 'map',
            layers: [this.layer, vectorLayer, positionLayer],
            view: this.view
        });
        this.map.on('moveend', function (evt) {
            var map = evt.map;
            var extent = map.getView().calculateExtent(map.getSize());
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_16__toilet_actions__["d" /* ToiletSearch */]({ bbox: __WEBPACK_IMPORTED_MODULE_14_ol_proj__["a" /* default */].transformExtent(extent, 'EPSG:3857', 'EPSG:4326') }));
        });
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_16__toilet_actions__["d" /* ToiletSearch */]({ bbox: [16.5895, 49.2001, 16.6630, 49.1838] }));
        this.store.combineLatest(this.store.select(__WEBPACK_IMPORTED_MODULE_17__toilet_search_reducer__["b" /* getToiletSearchResults */]), this.store.select(__WEBPACK_IMPORTED_MODULE_17__toilet_search_reducer__["a" /* getNoFeesToiletResult */]), function (store, toilets, noFees) { return ({ toilets: toilets, noFees: noFees }); }).subscribe(function (state) {
            _this.vectorSource.clear();
            state.toilets.filter(function (toilet) {
                if (state.noFees && toilet.extratags && toilet.extratags.fee === 'yes') {
                    return false;
                }
                return true;
            }).forEach(function (toilet) {
                var point = new __WEBPACK_IMPORTED_MODULE_3_ol_geom_point__["a" /* default */](__WEBPACK_IMPORTED_MODULE_14_ol_proj__["a" /* default */].fromLonLat([parseFloat(toilet.lon), parseFloat(toilet.lat)]));
                _this.vectorSource.addFeature(new __WEBPACK_IMPORTED_MODULE_12_ol_feature__["a" /* default */]({
                    geometry: point
                }));
            });
        });
        this.store.select(__WEBPACK_IMPORTED_MODULE_20__map_reducer__["a" /* getGpsPosition */]).subscribe(function (position) {
            if (!position) {
                return;
            }
            position = __WEBPACK_IMPORTED_MODULE_14_ol_proj__["a" /* default */].fromLonLat(position);
            _this.view.setCenter(position);
            _this.positionVectorSource.clear();
            var point = new __WEBPACK_IMPORTED_MODULE_3_ol_geom_point__["a" /* default */](position);
            _this.positionVectorSource.addFeature(new __WEBPACK_IMPORTED_MODULE_12_ol_feature__["a" /* default */]({
                geometry: point
            }));
            console.log(_this.positionVectorSource);
        });
        setTimeout(function () {
            _this.map.updateSize();
        }, 200);
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("./src/app/toilets/map/map.component.html"),
            styles: [__webpack_require__("./src/app/toilets/map/map.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_15__ngrx_store__["b" /* Store */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/toilets/map/map.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = mapReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGpsPosition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_actions__ = __webpack_require__("./src/app/toilets/map/map.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    gpsPosition: null
};
function mapReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__map_actions__["a" /* UPDATE_GPS_POSITION */]:
            return __assign({}, state, { gpsPosition: action.payload.position });
        default:
            return state;
    }
}
var getGpsPosition = function (state) { return state.map.gpsPosition; };


/***/ }),

/***/ "./src/app/toilets/toilet-search.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["c"] = toiletReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getToiletSearchResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNoFeesToiletResult; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toilet_actions__ = __webpack_require__("./src/app/toilets/toilet.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    searchArea: [16.5896, 49.2001, 16.6630, 49.1838],
    searchResults: [],
    noFees: false
};
function toiletReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__toilet_actions__["a" /* TOILET_SEARCH */]:
            return __assign({}, state, { searchArea: action.payload.bbox });
        case __WEBPACK_IMPORTED_MODULE_0__toilet_actions__["b" /* TOILET_SEARCH_RESULT */]:
            return __assign({}, state, { searchResults: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__toilet_actions__["c" /* TOILET_TOGGLE_NO_FEES */]:
            return __assign({}, state, { noFees: !state.noFees });
        default:
            return state;
    }
}
var getToiletSearchResults = function (state) { return state.toilets.searchResults; };
var getNoFeesToiletResult = function (state) { return state.toilets.noFees; };


/***/ }),

/***/ "./src/app/toilets/toilet.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOILET_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOILET_SEARCH_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TOILET_TOGGLE_NO_FEES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ToiletSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ToiletSearchResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ToiletToggleNoFees; });
var TOILET_SEARCH = '[toilet] Search';
var TOILET_SEARCH_RESULT = '[toilet] Search Result';
var TOILET_TOGGLE_NO_FEES = '[toilet] Toggle no fees';
var ToiletSearch = /** @class */ (function () {
    function ToiletSearch(payload) {
        this.payload = payload;
        this.type = TOILET_SEARCH;
    }
    return ToiletSearch;
}());

var ToiletSearchResult = /** @class */ (function () {
    function ToiletSearchResult(payload) {
        this.payload = payload;
        this.type = TOILET_SEARCH_RESULT;
    }
    return ToiletSearchResult;
}());

var ToiletToggleNoFees = /** @class */ (function () {
    function ToiletToggleNoFees() {
        this.type = TOILET_TOGGLE_NO_FEES;
    }
    return ToiletToggleNoFees;
}());



/***/ }),

/***/ "./src/app/toilets/toilet.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToiletEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toilet_actions__ = __webpack_require__("./src/app/toilets/toilet.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toilet_service__ = __webpack_require__("./src/app/toilets/toilet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToiletEffects = /** @class */ (function () {
    function ToiletEffects(actions, toiletService) {
        var _this = this;
        this.actions = actions;
        this.toiletService = toiletService;
        this.getToilets = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_2__toilet_actions__["a" /* TOILET_SEARCH */])
            .map(function (action) { return action.payload.bbox; })
            .distinctUntilChanged()
            .switchMap(function (bbox) {
            return _this.toiletService.getToilets(bbox);
        })
            .map(function (toilets) { return new __WEBPACK_IMPORTED_MODULE_2__toilet_actions__["e" /* ToiletSearchResult */](toilets); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ToiletEffects.prototype, "getToilets", void 0);
    ToiletEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_3__toilet_service__["a" /* ToiletService */]])
    ], ToiletEffects);
    return ToiletEffects;
}());



/***/ }),

/***/ "./src/app/toilets/toilet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToiletService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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



var ToiletService = /** @class */ (function () {
    function ToiletService(http) {
        this.http = http;
        this.API_URL = 'https://nominatim.openstreetmap.org/search.php?q=toilet&format=jsonv2&extratags=1&bounded=1&limit=100';
    }
    ToiletService.prototype.getToilets = function (bbox) {
        bbox = bbox || [16.5896, 49.2001, 16.6630, 49.1838];
        return this.http
            .get(this.API_URL + "&viewbox=" + bbox[0] + "," + bbox[1] + "," + bbox[2] + "," + bbox[3])
            .map(function (res) { return res || []; });
    };
    ToiletService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ToiletService);
    return ToiletService;
}());



/***/ }),

/***/ "./src/app/toilets/toilets-list/toilets-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/toilets/toilets-list/toilets-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list>\n    <mat-list-item *ngFor=\"let toilet of getFilteredToilets()\">\n      \n      <img src=\"assets/toilet.png\" matListIcon/>\n      <h3 matLine> {{toilet.display_name}} </h3>\n      <p matLine style=\"font-weight: bold;\" *ngIf=\"toilet.distance\">{{toilet.distance | number: '0.0-2'}}m</p>\n      <p matLine>\n        <span> {{toilet.extratags.opening_hours}}</span>\n       \n      </p>\n      <mat-divider [inset]=\"true\" *ngIf=\"!last\"></mat-divider>\n    </mat-list-item>\n  </mat-list>"

/***/ }),

/***/ "./src/app/toilets/toilets-list/toilets-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToiletsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ol_sphere__ = __webpack_require__("./node_modules/ol/sphere.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToiletsListComponent = /** @class */ (function () {
    function ToiletsListComponent() {
    }
    ToiletsListComponent.prototype.ngOnInit = function () {
    };
    ToiletsListComponent.prototype.getDistance = function (toilet) {
        if (this.position) {
            var toiletPostion = [toilet.lon, toilet.lat];
        }
        return '';
    };
    ToiletsListComponent.prototype.getFilteredToilets = function () {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var sphere = new __WEBPACK_IMPORTED_MODULE_1_ol_sphere__["a" /* default */](6378137);
        return this.toilets.filter(function (toilet) {
            if (_this.noFees && toilet.extratags && toilet.extratags.fee === 'yes') {
                return false;
            }
            return true;
        }).map(function (toilet) {
            var toiletPostion = [toilet.lon, toilet.lat];
            var distance = null;
            if (_this.position) {
                distance = sphere.haversineDistance(toiletPostion, _this.position);
            }
            return __assign({}, toilet, { distance: distance });
        }).sort(function (a, b) {
            if (!a.distance || !b.distance) {
                return 0;
            }
            return a.distance - b.distance;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Array)
    ], ToiletsListComponent.prototype, "toilets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ToiletsListComponent.prototype, "noFees", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Array)
    ], ToiletsListComponent.prototype, "position", void 0);
    ToiletsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-toilets-list',
            template: __webpack_require__("./src/app/toilets/toilets-list/toilets-list.component.html"),
            styles: [__webpack_require__("./src/app/toilets/toilets-list/toilets-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToiletsListComponent);
    return ToiletsListComponent;
}());



/***/ }),

/***/ "./src/app/toilets/toilets.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/toilets/toilets.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\">\n    \n    Public toilets  \n    <span style=\"width: 100%\"> </span>\n    \n    <mat-slide-toggle [formControl]=\"toggleFormControl\">No fees</mat-slide-toggle>\n    \n    \n  </mat-toolbar>\n  <mat-sidenav-container>    \n    <mat-sidenav opened mode=\"side\" position=\"end\" fixedInViewport fixedTopGap=\"75\" style=\"width: 40%;\">\n      <app-toilets-list  [toilets]=\"toilets | async\" [noFees]=\"noFeesFilter | async\" [position]=\"position | async\"></app-toilets-list>\n        \n    </mat-sidenav>\n    <mat-sidenav-content >\n      <app-map></app-map>    \n    </mat-sidenav-content>\n  </mat-sidenav-container>"

/***/ }),

/***/ "./src/app/toilets/toilets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToiletsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toilet_search_reducer__ = __webpack_require__("./src/app/toilets/toilet-search.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toilet_actions__ = __webpack_require__("./src/app/toilets/toilet.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rx_dom__ = __webpack_require__("./node_modules/rx-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rx_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rx_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map_actions__ = __webpack_require__("./src/app/toilets/map/map.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map_reducer__ = __webpack_require__("./src/app/toilets/map/map.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ToiletsComponent = /** @class */ (function () {
    function ToiletsComponent(store) {
        this.store = store;
        this.toggleFormControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]();
        this.toilets = this.store.select(__WEBPACK_IMPORTED_MODULE_2__toilet_search_reducer__["b" /* getToiletSearchResults */]);
        this.noFeesFilter = this.store.select(__WEBPACK_IMPORTED_MODULE_2__toilet_search_reducer__["a" /* getNoFeesToiletResult */]);
        this.position = this.store.select(__WEBPACK_IMPORTED_MODULE_7__map_map_reducer__["a" /* getGpsPosition */]);
    }
    ToiletsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions = [
            this.toggleFormControl.valueChanges
                .subscribe(function (queryTitle) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__toilet_actions__["f" /* ToiletToggleNoFees */]());
            })
        ];
        var source = __WEBPACK_IMPORTED_MODULE_5_rx_dom__["DOM"].geolocation.getCurrentPosition();
        var subscription = source.subscribe((function (pos) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__map_map_actions__["b" /* UpdateGpsPosition */]({ position: [pos.coords.longitude, pos.coords.latitude] }));
        }).bind(this), function (err) {
            var message = '';
            switch (err.code) {
                case err.PERMISSION_DENIED:
                    message = 'Permission denied';
                    break;
                case err.POSITION_UNAVAILABLE:
                    message = 'Position unavailable';
                    break;
                case err.PERMISSION_DENIED_TIMEOUT:
                    message = 'Position timeout';
                    break;
            }
            console.log('Error: ' + message);
        }, function () {
            console.log('Completed');
        });
    };
    ToiletsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-toilets',
            template: __webpack_require__("./src/app/toilets/toilets.component.html"),
            styles: [__webpack_require__("./src/app/toilets/toilets.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], ToiletsComponent);
    return ToiletsComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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