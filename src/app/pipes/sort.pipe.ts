import { Patient } from './../models/patient.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Patient[], sortBy: string, sortDirection: string): Patient[] {
    console.log(sortBy, !sortBy)
    if(!value || !sortBy || !sortDirection){
      return value;
    }
    if (sortDirection === 'desc') {
      return value.sort((patientA: Patient, patientB: Patient) => {
          return ('' + patientA[sortBy]).localeCompare(patientB[sortBy]);
        ;
      })
    }
    if (sortDirection === 'asce') {
      return value.sort((patientA: Patient, patientB: Patient) => {
        return ('' + patientB[sortBy]).localeCompare(patientA[sortBy]);
      ;
    })
    }
    return value;
  } 

}
