import { Patient } from './../models/patient.model';
import { PatientsService } from './../services/patients.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import {  Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { RangeOptions } from '../models/rangeOptions.model';
@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaitingListComponent implements OnInit {
  startIndex: number;
  endtIndex: number;
  filters: RangeOptions;
  constructor(public patientsService: PatientsService,
              private cf: ChangeDetectorRef) { }

  ngOnInit(): void {
    // getting the patients data from server and setting initial values.
    this.patientsService.getPatients().subscribe((patients: Patient[])=> {
      this.patientsService.patients = patients;
      this.patientsService.filteredPatients = patients;
      this.cf.markForCheck();
    })
    this.startIndex = 0;
    this.endtIndex = 20;
  }

  // this function sets which patients are displayed.
  onChangePage(event: PageEvent){
    this.startIndex = event.pageIndex * event.pageSize;
    this.endtIndex = this.startIndex + event.pageSize; 
  }
}


