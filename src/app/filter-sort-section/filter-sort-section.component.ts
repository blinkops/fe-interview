import { PatientsService } from './../services/patients.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-filter-sort-section',
  templateUrl: './filter-sort-section.component.html',
  styleUrls: ['./filter-sort-section.component.scss']
})
export class FilterSortSectionComponent implements OnInit {
  constructor(public patientsService: PatientsService,) { }

  ngOnInit(): void {
  }
  // this function sets if sorting is descending or ascending.
  changeSortDirection(){
    this.patientsService.sortDirection === 'desc' ? this.patientsService.sortDirection = 'asce' : this.patientsService.sortDirection = 'desc';
  }
  // this function sets the filtered patient according to the current filters.
  onSubmitFilter(){
    this.patientsService.filteredPatients =  this.patientsService.patients.filter((patient: Patient) => {
        return  patient.age > this.patientsService.rangeOptions.minAge && 
                patient.age < this.patientsService.rangeOptions.maxAge &&
                patient.averageReplyTime > this.patientsService.rangeOptions.minReply &&
                patient.averageReplyTime < this.patientsService.rangeOptions.maxReply;
    })
  }

}
