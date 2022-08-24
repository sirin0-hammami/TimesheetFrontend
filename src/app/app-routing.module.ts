import { TachesComponent } from './Pages/User-Interface/Taches/taches.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';

// DEMO PAGES

// Dashboards

import {AnalyticsComponent} from './TemplateComponents/Dashboards/analytics/analytics.component';

// Pages

import {ForgotPasswordBoxedComponent} from './TemplateComponents/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import {LoginBoxedComponent} from './Pages/login-boxed/login-boxed.component';



const routes: Routes = [
  {
    path:'',
    component: LoginBoxedComponent
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // Dashboads

      {path: 'dashboard', component: AnalyticsComponent, data: {extraParameter: ''}},

      {path: 'taches', component: TachesComponent, data: {extraParameter: ''}},

    ]

  },
  {
    path: 'dashboard',
    component: PagesLayoutComponent,
    children: [

      // User Pages

      {path: 'pages/forgot-password-boxed', component: ForgotPasswordBoxedComponent, data: {extraParameter: ''}},
    ]
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
