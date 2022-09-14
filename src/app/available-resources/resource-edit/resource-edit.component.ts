import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Experience } from 'src/app/shared/experience.model';
import { AvailableResourcesService } from '../available-resources.service';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.css'],
})
export class ResourceEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm | undefined;
  private editItemSubscription: Subscription | undefined;
  editingItemIndex: number | undefined;
  editMode = false;
  editingItem: Experience | undefined;

  constructor(private alResources: AvailableResourcesService) {}

  ngOnInit() {
    this.editItemSubscription = this.alResources.editingItems.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editingItemIndex = index;
        this.editingItem = this.alResources.getExperience(index);
        this.slForm?.setValue({
          name: this.editingItem.skill,
          amount: this.editingItem.yearsOfExperience,
        });
      }
    );
  }

  onAddItem(f: NgForm) {
    var form = f.value;
    const newExperience = new Experience(form.name, form.amount);
    if (this.editMode) {
      this.alResources.updateExperience(this.editingItemIndex!, newExperience);
    } else {
      this.alResources.addExperience(newExperience);
    }
    this.slForm?.reset();
    this.editMode = false;
  }

  onClear() {
    this.slForm?.reset();
    this.editMode = false;
  }

  onDelete() {
    this.alResources.deleteExperience(this.editingItemIndex!);
    this.slForm?.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.editItemSubscription?.unsubscribe();
  }
}
