import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee | undefined;
  id: number | undefined;

  constructor(
    private employeeService: EmployeesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.employee = this.employeeService.getEmployee(this.id);
    });
  }

  onAddToShoppingList() {
    this.employeeService.addSkillToAvailableResources(
      this.employee!.experience
    );
  }

  onEditEmployee() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteEmployee() {
    this.employeeService.deleteEmployee(this.id!);
    this.router.navigate(['employees']);
  }
}
