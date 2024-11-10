import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'StuCard', loadChildren:'./stucard/stucard#StuCardModule'},
  { path: 'TeaCard', loadChildren:'./teacard/teacard#TeaCardModule'},
  { path: 'CourseCard', loadChildren:'./coursecard/coursecard#CourseCardModule'},
  { path: 'StudentCourseCard', loadChildren:'./studentcoursecard/studentcoursecard#StudentCourseCardModule'},
  { path: 'Student', loadChildren:'./student/student#StudentModule'},
  { path: 'Teacher', loadChildren:'./teacher/teacher#TeacherModule'},
  { path: 'Course', loadChildren:'./course/course#CourseModule'},
  { path: 'StudentCourse', loadChildren:'./studentcourse/studentcourse#StudentCourseModule'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }