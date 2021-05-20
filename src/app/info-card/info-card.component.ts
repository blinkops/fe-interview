import { Patient } from './../models/patient.model';
import { Component, Input, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoCardComponent implements OnInit {
  @Input() patient: Patient;
  constructor() { }

  ngOnInit(): void {
  }

}
