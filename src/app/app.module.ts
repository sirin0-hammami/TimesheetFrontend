import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, ArchitectUIState } from './ThemeOptions/store';
import { ConfigActions } from './ThemeOptions/store/config.actions';
import { AppRoutingModule } from './app-routing.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptorService } from './services/Auth-service/basic-auth-interceptor.service';


import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

// BOOTSTRAP COMPONENTS

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// LAYOUT

import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';
import { PageTitleComponent } from './Layout/Components/page-title/page-title.component';

// HEADER

import { HeaderComponent } from './Layout/Components/header/header.component';
import { SearchBoxComponent } from './Layout/Components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from './Layout/Components/header/elements/user-box/user-box.component';

// SIDEBAR

import { SidebarComponent } from './Layout/Components/sidebar/sidebar.component';
import { LogoComponent } from './Layout/Components/sidebar/elements/logo/logo.component';

// FOOTER

import { FooterComponent } from './Layout/Components/footer/footer.component';

// DEMO PAGES

// Dashboards

import { AnalyticsComponent } from './TemplateComponents/Dashboards/analytics/analytics.component';

// Pages

import { ForgotPasswordBoxedComponent } from './TemplateComponents/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './Pages/login-boxed/login-boxed.component';
import { RegisterBoxedComponent } from './TemplateComponents/UserPages/register-boxed/register-boxed.component';

// Elements

import { StandardComponent } from './TemplateComponents/Elements/Buttons/standard/standard.component';
import { DropdownsComponent } from './TemplateComponents/Elements/dropdowns/dropdowns.component';
import { CardsComponent } from './TemplateComponents/Elements/cards/cards.component';
import { ListGroupsComponent } from './TemplateComponents/Elements/list-groups/list-groups.component';
import { TimelineComponent } from './TemplateComponents/Elements/timeline/timeline.component';
import { IconsComponent } from './TemplateComponents/Elements/icons/icons.component';

// Components

import { AccordionsComponent } from './TemplateComponents/Components/accordions/accordions.component';
import { TabsComponent } from './TemplateComponents/Components/tabs/tabs.component';
import { CarouselComponent } from './TemplateComponents/Components/carousel/carousel.component';
import { ModalsComponent } from './TemplateComponents/Components/modals/modals.component';
import { ProgressBarComponent } from './TemplateComponents/Components/progress-bar/progress-bar.component';
import { PaginationComponent } from './TemplateComponents/Components/pagination/pagination.component';
import { TooltipsPopoversComponent } from './TemplateComponents/Components/tooltips-popovers/tooltips-popovers.component';
import { ProfileImageComponent } from './Layout/Components/profile-image/profile-image.component';

// Tables

import { RegularComponent } from './TemplateComponents/Tables/regular/regular.component';
import { TablesMainComponent } from './TemplateComponents/Tables/tables-main/tables-main.component';

// Widgets

import { ChartBoxes3Component } from './TemplateComponents/Widgets/chart-boxes3/chart-boxes3.component';

// Forms Elements

import { ControlsComponent } from './TemplateComponents/Forms/Elements/controls/controls.component';
import { LayoutComponent } from './TemplateComponents/Forms/Elements/layout/layout.component';

// Charts

import { ChartjsComponent } from './TemplateComponents/Charts/chartjs/chartjs.component';

// Chart.js Examples

import { LineChartComponent } from './TemplateComponents/Charts/chartjs/examples/line-chart/line-chart.component';
import { BarChartComponent } from './TemplateComponents/Charts/chartjs/examples/bar-chart/bar-chart.component';
import { ScatterChartComponent } from './TemplateComponents/Charts/chartjs/examples/scatter-chart/scatter-chart.component';
import { RadarChartComponent } from './TemplateComponents/Charts/chartjs/examples/radar-chart/radar-chart.component';
import { PolarAreaChartComponent } from './TemplateComponents/Charts/chartjs/examples/polar-area-chart/polar-area-chart.component';
import { BubbleChartComponent } from './TemplateComponents/Charts/chartjs/examples/bubble-chart/bubble-chart.component';
import { DynamicChartComponent } from './TemplateComponents/Charts/chartjs/examples/dynamic-chart/dynamic-chart.component';
import { DoughnutChartComponent } from './TemplateComponents/Charts/chartjs/examples/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './TemplateComponents/Charts/chartjs/examples/pie-chart/pie-chart.component';

//Pages 

import { TachesComponent } from './Pages/User-Interface/Taches/taches.component';
import { UsersComponent } from './Pages/admin-interface/users/users.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [

    // LAYOUT

    AppComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,
    PageTitleComponent,

    // HEADER

    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent,

    // SIDEBAR

    SidebarComponent,
    LogoComponent,

    // FOOTER

    FooterComponent,

    // DEMO PAGES

    // Dashboards

    AnalyticsComponent,

    // User Pages

    ForgotPasswordBoxedComponent,
    LoginBoxedComponent,
    RegisterBoxedComponent,

    // Elements

    StandardComponent,
    IconsComponent,
    DropdownsComponent,
    CardsComponent,
    ListGroupsComponent,
    TimelineComponent,

    // Components

    AccordionsComponent,
    TabsComponent,
    CarouselComponent,
    ModalsComponent,
    ProgressBarComponent,
    PaginationComponent,
    TooltipsPopoversComponent,
    ProfileImageComponent,

    // Tables

    RegularComponent,
    TablesMainComponent,

    // Dashboard Boxes

    ChartBoxes3Component,

    // Form Elements

    ControlsComponent,
    LayoutComponent,

    // CHARTS

    ChartjsComponent,

    // Chart.js Examples

    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    DynamicChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
    //pages
    TachesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgReduxModule,
    CommonModule,
    LoadingBarRouterModule,

    // Angular Bootstrap Components

    PerfectScrollbarModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Charts

    ChartsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptorService, multi: true },

    {
      provide:
        PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue:
        DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      // DEFAULT_DROPZONE_CONFIG,
    },
    ConfigActions,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<ArchitectUIState>,
    private devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as ArchitectUIState,
      [],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}
