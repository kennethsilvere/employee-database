import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AvailableResourcesService } from '../available-resources/available-resources.service';
import { Experience } from '../shared/experience.model';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  EmployeesChanged = new Subject<Employee[]>();

  private Employees: Employee[] = [
    new Employee(
      'Employee 1',
      'AWS Certified Cloud Architect',
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      [new Experience('AWS', '5'), new Experience('Python', '5')]
    ),
    new Employee(
      'Employee 2',
      'Seasoned Angular Developer',
      'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      [
        new Experience('Angular', '5'),
        new Experience('TypeScript', '5'),
        new Experience('JavaScript', '5'),
      ]
    ),
    new Employee(
      'Employee 3',
      'Project Manager',
      'https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      [
        new Experience('Project Management', '10'),
        new Experience('Scrum Certified', '5'),
      ]
    ),
    new Employee(
      'Employee 4',
      'Full Stack Java Developer',
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      [
        new Experience('Java', '9'),
        new Experience('Spring', '9'),
        new Experience('SQL', '8'),
      ]
    ),
  ];

  constructor(private aResources: AvailableResourcesService) {}

  getEmployees() {
    return this.Employees.slice();
  }

  getEmployee(index: number) {
    return this.Employees[index];
  }

  addSkillToAvailableResources(Experiences: Experience[]) {
    this.aResources.addExperiences(Experiences);
  }

  addEmployee(newEmployee: Employee) {
    this.Employees.push(newEmployee);
    this.EmployeesChanged.next(this.Employees.slice());
  }

  updateEmployee(index: number, Employee: Employee) {
    this.Employees[index] = Employee;
    this.EmployeesChanged.next(this.Employees.slice());
  }

  deleteEmployee(index: number) {
    this.Employees.splice(index, 1);
    this.EmployeesChanged.next(this.Employees.slice());
  }
}
