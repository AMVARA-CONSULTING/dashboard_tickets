// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

// Angular Material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Internal
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/ux/header/header.component';
import { FooterComponent } from './components/ux/footer/footer.component';
import { MenuIconComponent } from './components/ux/header/menu-icon/menu-icon.component';
import { AboutComponent } from './components/pages/about/about.component';
import { MainComponent, DataNotFound } from './components/pages/main/main.component';
import { MonthSelectorComponent } from './components/month-selector/month-selector.component';
import { OverallBoxComponent } from './components/overall-box/overall-box.component';
import { TicketsComponent, SolveTicket } from './components/pages/tickets/tickets.component';
import { ClassificationComponent } from './components/classification/classification.component';
import { StadisticBoxComponent } from './components/stadistic-box/stadistic-box.component';
import { StackedComponent } from './components/graphics/stacked/stacked.component';
import { LegendComponent } from './components/legend/legend.component';
import { ColorComponent } from './components/legend/color/color.component';
import { SiltComponent } from './components/silt/silt.component';
import { LimitTextPipe } from './pipes/limit-text.pipe';
import { SidenavComponent } from './components/sidenav/sidenav.component';

// Services
import { ConfigService } from './services/config.service';
import { DataService } from './services/data.service';
import { ToolsService } from './tools.service';
import { ReportsService } from '@services/reports.service';

// Plugins
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CismPaginatorIntl } from './paginator-intl';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { LoaderComponent } from './components/loader/loader.component';
import { ToStringPipe } from './pipes/to-string.pipe';
import { environment } from 'environments/environment.prod';
import { MatSortModule } from '@angular/material/sort';
import { GroupByPipe } from './pipes/group-by.pipe';
import { RuPipe } from './pipes/ru.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DateParsePipe } from './pipes/date-parse.pipe';
import { DateLocalePipe } from './pipes/date-locale.pipe';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { ReportInfoComponent } from './components/report-info/report-info.component';
import { APP_BASE_HREF } from '@angular/common';
import { FixFilterPipe } from './pipes/fix-filter.pipe';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const componentsUsed = [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  MenuIconComponent,
  AboutComponent,
  MainComponent,
  MonthSelectorComponent,
  OverallBoxComponent,
  StackedComponent,
  StadisticBoxComponent,
  LegendComponent,
  ColorComponent,
  SiltComponent,
  TicketsComponent,
  ClassificationComponent,
  SolveTicket,
  SidenavComponent,
  DataNotFound,
  LoaderComponent
]

const pipesUsed = [
  ToStringPipe,
  GroupByPipe,
  RuPipe,
  DateFormatPipe,
  DateParsePipe,
  DateLocalePipe,
  DateAgoPipe,
  LimitTextPipe
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuIconComponent,
    AboutComponent,
    MainComponent,
    MonthSelectorComponent,
    OverallBoxComponent,
    StackedComponent,
    StadisticBoxComponent,
    LegendComponent,
    ColorComponent,
    SiltComponent,
    TicketsComponent,
    ClassificationComponent,
    SolveTicket,
    LimitTextPipe,
    SidenavComponent,
    DataNotFound,
    LoaderComponent,
    ToStringPipe,
    GroupByPipe,
    RuPipe,
    DateFormatPipe,
    DateParsePipe,
    DateLocalePipe,
    DateAgoPipe,
    LimitTextPipe,
    ReportInfoComponent,
    FixFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    NgxChartsModule,
    NgxJsonViewerModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatMenuModule,
    MatBottomSheetModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatRippleModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuIconComponent,
    AboutComponent,
    MainComponent,
    MonthSelectorComponent,
    OverallBoxComponent,
    StackedComponent,
    StadisticBoxComponent,
    LegendComponent,
    ColorComponent,
    SiltComponent,
    TicketsComponent,
    ClassificationComponent,
    SolveTicket,
    SidenavComponent,
    DataNotFound,
    LoaderComponent
  ],
  providers: [
    ConfigService,
    DataService,
    ToolsService,
    TranslateService,
    ReportsService,
    {
      provide: MatPaginatorIntl,
      useClass: CismPaginatorIntl
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (reportsService: ReportsService) => () => reportsService.loadInitialReport(),
      deps: [ReportsService, DataService, ConfigService],
      multi: true,
    },
    {
      // This loads the config.json file before the App is initialized
      provide: APP_INITIALIZER,
      useFactory: (configService: ConfigService) => () => configService.load(),
      deps: [ConfigService, DataService, ToolsService],
      multi: true
    },
    {
      provide: APP_BASE_HREF,
      useValue: window.location.pathname || '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(
    private injector: Injector
  ) { }

  ngDoBootstrap() {
    const elements: any[] = [
      [MainComponent, 'cism-main'],
      [TicketsComponent, 'cism-tickets'],
      [AppComponent, 'cism-root'],
      [HeaderComponent, 'cism-header'],
      [FooterComponent, 'cism-footer'],
      [MenuIconComponent, 'cism-menu-icon'],
      [AboutComponent, 'cism-about'],
      [MainComponent, 'cism-main'],
      [MonthSelectorComponent, 'cism-month-selector'],
      [OverallBoxComponent, 'cism-overall-box'],
      [StackedComponent, 'cism-stacked'],
      [StadisticBoxComponent, 'cism-stadistic-box'],
      [LegendComponent, 'cism-legend'],
      [ColorComponent, 'cism-color'],
      [SiltComponent, 'cism-silt'],
      [TicketsComponent, 'cism-tickets'],
      [ClassificationComponent, 'cism-classification'],
      [SolveTicket, 'cism-solve'],
      [SidenavComponent, 'cism-sidenav'],
      [DataNotFound, 'data-unavailable'],
      [LoaderComponent, 'cism-loader'],
    ]

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector })
      customElements.define(name, el)
    }
  }
}
