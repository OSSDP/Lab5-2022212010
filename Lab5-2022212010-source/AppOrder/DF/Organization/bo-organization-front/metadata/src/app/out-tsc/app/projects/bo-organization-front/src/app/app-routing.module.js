import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: 'StuCard', loadChildren: './stucard/stucard#StuCardModule' },
    { path: 'TeaCard', loadChildren: './teacard/teacard#TeaCardModule' },
    { path: 'CourseCard', loadChildren: './coursecard/coursecard#CourseCardModule' },
    { path: 'StudentCourseCard', loadChildren: './studentcoursecard/studentcoursecard#StudentCourseCardModule' },
    { path: 'Student', loadChildren: './student/student#StudentModule' },
    { path: 'Teacher', loadChildren: './teacher/teacher#TeacherModule' },
    { path: 'Course', loadChildren: './course/course#CourseModule' },
    { path: 'StudentCourse', loadChildren: './studentcourse/studentcourse#StudentCourseModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { useHash: true })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
