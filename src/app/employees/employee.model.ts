import { Experience } from '../shared/experience.model';

export class Employee {
  public name: string;
  public description: string;
  public imagePath: string;
  public experience: Experience[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    experience: Experience[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.experience = experience;
  }
}
