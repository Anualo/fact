import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AcccountManagementComponent } from './layout/pages/acccount-management/acccount-management.component';
import { AccountsReportComponent } from './layout/pages/accounts-report/accounts-report.component';
import { AddNewPlotsComponent } from './layout/pages/add-new-plots/add-new-plots.component';
import { AuditReportComponent } from './layout/pages/audit-report/audit-report.component';
import { CmsComponent } from './layout/pages/cms/cms.component';
import { CustomerManagementSystemComponent } from './layout/pages/customer-management-system/customer-management-system.component';
import { DashboardComponent } from './layout/pages/dashboard/dashboard.component';
import { MapComponent } from './layout/pages/map/map.component';
import { NewTransactionComponent } from './layout/pages/new-transaction/new-transaction.component';
import { OverDueCustomersComponent } from './layout/pages/over-due-customers/over-due-customers.component';
import { PlotStatusReportComponent } from './layout/pages/plot-status-report/plot-status-report.component';
import { PlotsComponent } from './layout/pages/plots/plots.component';
import { RecentTransactionComponent } from './layout/pages/recent-transaction/recent-transaction.component';
import { SearchPlotsComponent } from './layout/pages/search-plots/search-plots.component';
import { UsermanagementAddNewComponent } from './layout/pages/usermanagement-add-new/usermanagement-add-new.component';
import { UserManagementComponent } from './layout/pages/user_management/user-management.component';


import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
  component:LoginComponent,
 
},
{
  path:'layout',
  component:LayoutComponent,
children:[{
  path:'',
  redirectTo:'dashboard',
  pathMatch:'full'
},
{
    path:'dashboard',
    component:DashboardComponent,
},
{ 
  path:'customer_management_system',
  component:CustomerManagementSystemComponent,
},
{ 
  path:'map',
  component:MapComponent,
},
{ 
  path:'user_management',
  component:UserManagementComponent,
},
{ 
  path:'audit_report',
  component:AuditReportComponent,
},
{ 
  path:'account_management',
  component:AcccountManagementComponent,
},
{ 
  path:'Villa_Management/plots',
  component:PlotsComponent,
},
{ 
  path:'Villa_Management/add_new_plots',
  component:AddNewPlotsComponent,
},
{ 
  path:'Villa_Management/search_plots',
  component:SearchPlotsComponent,
},
{ 
  path:'Download_Reports/plot_status_report',
  component:PlotStatusReportComponent,
},
{ 
  path:'Download_Reports/accounts_report',
  component:AccountsReportComponent,
},
{ 
  path:'dashboard/recent_transaction',
  component:RecentTransactionComponent,
},
{ 
  path:'dashboard/over_due_customers',
  component:OverDueCustomersComponent,
},
{ 
  path:'customer_management_system/cms',
  component:CmsComponent,
},
{ 
  path:'user_management/usermanagement_add_new',
  component:UsermanagementAddNewComponent,
},
{ 
  path:'account_management/new_transaction',
  component:NewTransactionComponent,
},


]
     
      
},

  



  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
