import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { AvailableResourcesComponent } from './available-resources/available-resources.component';
import { ResourceEditComponent } from './available-resources/resource-edit/resource-edit.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, EmployeesComponent, EmployeeDetailsComponent, EmployeeEditComponent, EmployeeListComponent, AvailableResourcesComponent, ResourceEditComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
