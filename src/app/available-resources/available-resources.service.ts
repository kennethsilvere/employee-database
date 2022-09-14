import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Experience } from '../shared/experience.model';

@Injectable({
  providedIn: 'root',
})
export class AvailableResourcesService {
  experiencesChanged = new Subject<Experience[]>();
  editingItems = new Subject<number>();

  private experiences: Experience[] = [
    new Experience('Angular', '5'),
    new Experience('Java', '10'),
  ];

  getExperiences() {
    return this.experiences.slice();
  }

  getExperience(index: number) {
    return this.experiences[index];
  }

  addExperience(experience: Experience) {
    this.experiences.push(experience);
    this.experiencesChanged.next(this.experiences.slice());
  }

  addExperiences(experiences: Experience[]) {
    this.experiences.push(...experiences);
    this.experiencesChanged.next(this.experiences.slice());
  }

  updateExperience(index: number, experience: Experience) {
    this.experiences[index] = experience;
    this.experiencesChanged.next(this.experiences.slice());
  }

  deleteExperience(index: number) {
    this.experiences.splice(index, 1);
    this.experiencesChanged.next(this.experiences.slice());
  }
}
