import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  exerciseChanged = new Subject<Exercise>();
  runningExercise!: Exercise;
  availableExercises: Exercise[] = [
    { id: 1, name: 'Crunches', duration: 30, calories: 8 },
    { id: 2, name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 3, name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 4, name: 'Burpees', duration: 60, calories: 8 }
  ]
  constructor() { }
  
  getTrainingExercise(){
    return this.availableExercises.slice();
  }
  startExercise(selectedId: any){
    this.runningExercise = this.availableExercises.find(ex => ex.id == selectedId) as Exercise;
    this.exerciseChanged.next({...this.runningExercise});
  }
  getRunningExercise(){
    return {...this.runningExercise};
  }
}
