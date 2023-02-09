import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  exerciseChanged = new Subject<Exercise>();
  private runningExercise!: Exercise;
  private exercises: Exercise[] = [];
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
  completeExercise(){
    this.exercises.push({...this.runningExercise, date: new Date(), state: 'completed'});
    this.runningExercise = null as any;
    this.exerciseChanged.next(null as any);
  }

  cancelExercise(progress: number){
    this.exercises.push({...this.runningExercise,
        duration: (this.runningExercise.duration as any) * (progress / 100),
        calories: (this.runningExercise.calories as any) * (progress / 100),
       date: new Date(), 
       state: 'cancelled'});
    this.runningExercise = null as any;
    this.exerciseChanged.next(null as any);
  }

  startExercise(selectedId: any){
    this.runningExercise = this.availableExercises.find(ex => ex.id == selectedId) as Exercise;
    this.exerciseChanged.next({...this.runningExercise});
  }
  getRunningExercise(){
    return {...this.runningExercise};
  }
  getCancelledCompletedExercises(){
    return this.exercises.slice();
  }
}
