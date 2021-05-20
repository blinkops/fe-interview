import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Patient } from '../models/patient.model';
import { RangeOptions } from '../models/rangeOptions.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  rangeOptions = new RangeOptions();
  sortBy: string ;
  sortDirection: string = "desc";
  patients: Patient[];
  filteredPatients: Patient[];
  rangeOptionsSubject$: BehaviorSubject<RangeOptions> = new BehaviorSubject<RangeOptions>(null);
  constructor(private httpClient: HttpClient) { }
  // this function return an Observable that gets the patients data from the server and initialize properties.
  getPatients(){
    return this.httpClient.get<Patient[]>('https://raw.githubusercontent.com/blinkops/blink-fe-interview/main/sample-data/patients.json').pipe(
      tap((patients: Patient[]) => {
        this.rangeOptions.minAge = this.getMinAndMaxReplayTimeAndAge(patients,'age','min');
        this.rangeOptions.maxAge = this.getMinAndMaxReplayTimeAndAge(patients,'age','max');
        this.rangeOptions.minReply = this.getMinAndMaxReplayTimeAndAge(patients,'averageReplyTime','min');
        this.rangeOptions.maxReply = this.getMinAndMaxReplayTimeAndAge(patients,'averageReplyTime','max');
        this.rangeOptionsSubject$.next(JSON.parse(JSON.stringify(this.rangeOptions)));
      })
    );
  }
  // this function gets an array of patients, a property name and if the search min or max.
  // this function return the min/max of the chosen property value.
  getMinAndMaxReplayTimeAndAge(arr:Patient[], propName: string, minOrMax:string){
    if (minOrMax === 'min') {
      return arr.reduce((prev, curr) => {
        return prev[propName] < curr[propName] ? prev : curr;
      })[propName];
    }
    if (minOrMax === 'max') {
      return arr.reduce((prev, curr) => {
        return prev[propName] > curr[propName] ? prev : curr;
      })[propName];
    }
  }
}
