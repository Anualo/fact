import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/Component/sidebar/sidebar.component';
import { HeaderComponent } from './layout/Component/header/header.component';
import { DashboardComponent } from './layout/pages/dashboard/dashboard.component';
import { CustomerManagementSystemComponent } from './layout/pages/customer-management-system/customer-management-system.component';
import { MapComponent } from './layout/pages/map/map.component';
import { AcccountManagementComponent } from './layout/pages/acccount-management/acccount-management.component';
import { AuditReportComponent } from './layout/pages/audit-report/audit-report.component';

import { CHANGEPASSWORDComponent } from './layout/pages/change-password/change-password.component';
import { LogoutComponent } from './layout/pages/logout/logout.component';
import { UserManagementComponent } from './layout/pages/user_management/user-management.component';
import { PlotsComponent } from './layout/pages/plots/plots.component';
import { AddNewPlotsComponent } from './layout/pages/add-new-plots/add-new-plots.component';
import { SearchPlotsComponent } from './layout/pages/search-plots/search-plots.component';
import { PlotStatusReportComponent } from './layout/pages/plot-status-report/plot-status-report.component';
import { AccountsReportComponent } from './layout/pages/accounts-report/accounts-report.component';
import { RecentTransactionComponent } from './layout/pages/recent-transaction/recent-transaction.component';
import { OverDueCustomersComponent } from './layout/pages/over-due-customers/over-due-customers.component';
import { CmsComponent } from './layout/pages/cms/cms.component';
import { UsermanagementAddNewComponent } from './layout/pages/usermanagement-add-new/usermanagement-add-new.component';
import { NewTransactionComponent } from './layout/pages/new-transaction/new-transaction.component';
import { FooterComponent } from './layout/Component/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    CustomerManagementSystemComponent,
    MapComponent,
    AcccountManagementComponent,
    AuditReportComponent,
    UserManagementComponent,
    CHANGEPASSWORDComponent,
    LogoutComponent,
    PlotsComponent,
    AddNewPlotsComponent,
    SearchPlotsComponent,
    PlotStatusReportComponent,
    AccountsReportComponent,
    RecentTransactionComponent,
    OverDueCustomersComponent,
    CmsComponent,
    UsermanagementAddNewComponent,
    NewTransactionComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
