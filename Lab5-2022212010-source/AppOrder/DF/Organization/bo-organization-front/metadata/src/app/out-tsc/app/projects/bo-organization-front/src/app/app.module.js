import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoaderConfig, LOCALE_ID, NgModuleFactoryLoader, COMPILER_OPTIONS, CompilerFactory, Compiler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CacheService, HttpService, SessionService } from '@ecp-caf/caf-common';
import { FrameworkService, FrmEventBus, LoadingService, AppService, FuncsService } from '@gsp-sys/rtf-common';
import { CommonModule } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SystemjsLcModuleloaderGenerator } from './systemjs-lc-moduleloader';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { NavigateGuard } from './navigate-guard';
export function createCompiler(compilerFactory) {
    return compilerFactory.createCompiler();
}
var ɵ0 = localStorage.getItem('languageCode') || 'zh-CHS', ɵ1 = {}, ɵ2 = {
    factoryPathPrefix: '',
    factoryPathSuffix: '.js'
};
var AppModule = /** @class */ (function () {
    function AppModule(router) {
        var _this = this;
        this.router = router;
        // 截获路由事件
        router.events
            .pipe(filter(function (event) { return event instanceof NavigationStart; }))
            .subscribe(function (event) {
            // 读取当前路由Url地址
            var uriHash = event.url;
            var pathArr = uriHash.split("?");
            if (pathArr[1]) {
                var queryStringMap = _this.getQueryStringMap(pathArr[1]);
                var dim1 = queryStringMap.get('dim1');
                var dim2 = queryStringMap.get('dim2');
                var formConfigId = queryStringMap.get('formConfigId');
                var basicRoutePath_1 = pathArr[0].substr(1);
                if (dim1 && dim2) { //维度1维度2一定会成对出现
                    var basicRouteIndex = _this.router.config.findIndex(function (config) { return config.path == basicRoutePath_1; }); //设计器生成表单，默认一个表单一个主路由Path
                    var basicRoute = _this.router.config[basicRouteIndex];
                    var basicLoadPath = basicRoute.loadChildren.toString(); //"./cgddcard/cgddcard#cgddcardModule" 设计器生成的路径都是这样的格式
                    var lpa = basicLoadPath.split("/");
                    basicRoute.loadChildren = lpa[0] + "/" + lpa[1] + "/" + dim1.toLowerCase() + "/" + dim2.toLowerCase() + "/" + lpa[2];
                    basicRoute.canLoad = [NavigateGuard];
                    if (!basicRoute.data) {
                        basicRoute.data = {};
                    }
                    basicRoute.data["navigateGuardParameter"] = queryStringMap;
                }
                else if (formConfigId) {
                    var prefix = '_' + formConfigId.substr(0, 8);
                    var basicRouteIndex = _this.router.config.findIndex(function (config) { return config.path == basicRoutePath_1; }); //设计器生成表单，默认一个表单一个主路由Path
                    var basicRoute = _this.router.config[basicRouteIndex];
                    var basicLoadPath = basicRoute.loadChildren.toString(); //"./cgddcard/cgddcard#cgddcardModule" 设计器生成的路径都是这样的格式
                    var lpa = basicLoadPath.split("#");
                    _this.router.config.splice(basicRouteIndex, 1, {
                        path: basicRoute.path,
                        loadChildren: lpa[0] + prefix + "#" + lpa[1]
                    });
                }
            }
        });
    }
    /**
     * 把URL的queryParam转换为Map
    */
    AppModule.prototype.getQueryStringMap = function (queryString) {
        var queryStringMap = new Map();
        queryString.split('&').forEach(function (pair) {
            queryStringMap.set(pair.split('=')[0], pair.split('=')[1]);
        });
        return queryStringMap;
    };
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                AppRoutingModule,
                CommonModule,
                HttpClientModule,
            ],
            providers: [
                CacheService,
                SessionService,
                FrmEventBus,
                HttpService,
                FuncsService,
                AppService,
                LoadingService,
                NavigateGuard,
                { provide: LOCALE_ID, useValue: ɵ0 },
                { provide: COMPILER_OPTIONS, useValue: ɵ1, multi: true },
                { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
                { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] },
                FrameworkService,
                {
                    provide: SystemJsNgModuleLoaderConfig, useValue: ɵ2
                },
                { provide: NgModuleFactoryLoader, useClass: SystemjsLcModuleloaderGenerator }
            ],
            bootstrap: [AppComponent]
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AppModule);
    return AppModule;
}());
export { AppModule };
export { ɵ0, ɵ1, ɵ2 };
