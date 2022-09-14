import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableResourcesComponent } from './available-resources/available-resources.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeStartComponent } from './employees/employee-start/employee-start.component';
import { EmployeesComponent } from './employees/employees.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  {
    path: 'employees',
    component: EmployeesComponent,
    children: [
      { path: '', component: EmployeeStartComponent },
      { path: 'new', component: EmployeeEditComponent },
      { path: ':id', component: EmployeeDetailsComponent },
      { path: ':id/edit', component: EmployeeEditComponent },
    ],
  },
  { path: 'available-resources', component: AvailableResourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
