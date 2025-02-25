import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
        path: 'student/course',
        component: LayoutComponent,
        loadChildren: () => import('../app/components/student/course/course.module').then(m => m.CourseModule)
    },
    {
        path: 'instractor/course',
        component: LayoutComponent,
        loadChildren: () => import('../app/components/instractor/course/course.module').then(m => m.CourseModule)
    },
    {
        path: 'user',
        loadChildren: () => import('../app/components/user/user.module').then(m => m.UserModule)
    },
    {
        path: 'rxjs',
        loadChildren: () => import('../app/components/rxjs/rxjs.module').then(m => m.RxjsModule)
    }
];
