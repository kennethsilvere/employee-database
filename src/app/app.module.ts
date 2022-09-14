import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { AvailableResourcesComponent } from './available-resources/available-resources.component';
import { ResourceEditComponent } from './available-resources/resource-edit/resource-edit.component';
import { EmployeeItemComponent } from './employees/employee-list/employee-item/employee-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeStartComponent } from './employees/employee-start/employee-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    AvailableResourcesComponent,
    ResourceEditComponent,
    EmployeeItemComponent,
    DropdownDirective,
    EmployeeStartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
