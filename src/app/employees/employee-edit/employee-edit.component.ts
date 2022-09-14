import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  id: number | undefined;
  editMode = false;
  employeeForm: FormGroup | undefined;
  employeeImagePath: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    const employee = this.employeeService.getEmployee(this.id!);
    let employeeName = '';
    let employeeImagePath = '';
    let employeeDescription = '';
    let experience = new FormArray([]);

    if (this.editMode) {
      employeeName = employee.name;
      employeeImagePath = employee.imagePath;
      employeeDescription = employee.description;

      if (employee['experience']) {
        for (let ingredient of employee.experience) {
          experience.push(
            new FormGroup({
              skill: new FormControl(ingredient.skill, Validators.required),
              yearsOfExperience: new FormControl(ingredient.yearsOfExperience, Validators.required),
            })
          );
        }
      }
    }

    this.employeeForm = new FormGroup({
      name: new FormControl(employeeName, Validators.required),
      imagePath: new FormControl(employeeImagePath, Validators.required),
      description: new FormControl(employeeDescription, Validators.required),
      experience: experience,
    });
  }

  get employeeExperienceList() {
    return (<FormArray>this.employeeForm?.get('experience')!);

  }

  onAddExperience() {
    (<FormArray>this.employeeForm?.get('experience'))?.push(
      new FormGroup({
        skill: new FormControl(null, Validators.required),
        yearsOfExperience: new FormControl(null, Validators.required),
      })
    );
  }

  onCancelExperience(index: number) {
    (<FormArray>this.employeeForm?.get('experience'))?.removeAt(index);
  }

  onCancelEditEmployee() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    if (this.editMode) {
      this.employeeService.updateEmployee(this.id!, this.employeeForm.value);
    } else {
      this.employeeService.addEmployee(this.employeeForm.value);
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
