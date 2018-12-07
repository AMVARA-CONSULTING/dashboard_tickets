// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
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
import { MomentModule } from 'ngx-moment';
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

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    RuPipe
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
    MomentModule,
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
    SolveTicket,
    DataNotFound
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
