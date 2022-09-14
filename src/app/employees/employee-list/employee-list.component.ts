import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] | undefined;
  private subscription: Subscription | undefined;

  constructor(
    private employeeService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.employeeService.EmployeesChanged.subscribe(
      (employeesList: Employee[]) => {
        this.employees = employeesList;
      }
    );
    this.employees = this.employeeService.getEmployees();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
