import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SectionSalesComponent } from "./sections/section-sales/section-sales.component";
import { SectionOrdersComponent } from "./sections/section-orders/section-orders.component";
import { SectionHealthComponent } from "./sections/section-health/section-health.component";
import { appRoutes } from "src/routes";
import { PieChartComponent } from "./charts/pie-chart/pie-chart.component";
import { LineChartComponent } from "./charts/line-chart/line-chart.component";
import { BarChartComponent } from "./charts/bar-chart/bar-chart.component";
import { ServerComponent } from "./server/server.component";
import { ChartsModule } from "ng2-charts";
import { PaginationComponent } from "./pagination/pagination.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { SalesDataService } from "./services/sales-data.service";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
    ServerComponent,
    ServerComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [SalesDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
