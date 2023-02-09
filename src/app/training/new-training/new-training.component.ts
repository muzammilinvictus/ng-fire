import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  exerciseData: Exercise[] = [];
  trainingSubscription!: Subscription;

  constructor(private trainingSevice: TrainingService) { }

  ngOnInit() {
   this.exerciseData = this.trainingSevice.getTrainingExercise();
  }

  onStartTraining(form: NgForm) {
    this.trainingSevice.startExercise(form.value.exercise);
    this.trainingStart.emit();
  }
}

