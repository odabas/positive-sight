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
import { ChartsModule } from "ng2-charts";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
