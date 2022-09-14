import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Experience } from '../shared/experience.model';
import { AvailableResourcesService } from './available-resources.service';

@Component({
  selector: 'app-available-resources',
  templateUrl: './available-resources.component.html',
  styleUrls: ['./available-resources.component.css'],
})
export class AvailableResourcesComponent implements OnInit {
  experience: Experience[] | undefined;
  private subscription: Subscription | undefined;

  constructor(private alResources: AvailableResourcesService) {}

  ngOnInit() {
    this.experience = this.alResources.getExperiences();
    this.subscription = this.alResources.experiencesChanged.subscribe(
      (experience: Experience[]) => {
        this.experience = experience;
      }
    );
  }

  onEditItem(index: number) {
    this.alResources.editingItems.next(index);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
