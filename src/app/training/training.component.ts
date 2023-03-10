import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  ongoingTraining = false;
  trainingSubscription!: Subscription
  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.trainingSubscription = this.trainingService.exerciseChanged.subscribe(ex => {
      if(ex){
        this.ongoingTraining = true;
      } else {
        this.ongoingTraining = false;
      }
    })
  }

}
