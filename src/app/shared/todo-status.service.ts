import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoStatusService {

  private selectedFilter: string = "All Todos";
  private searchKey: string = '';

  private fSdata = [this.selectedFilter, this.searchKey]

  fSdataUpdated = new Subject();


  todofSdata(fSdata) {
    this.fSdata = fSdata;
    this.fSdataUpdated.next();
  }

  getfSdata() {
    return this.fSdata;
  }

  constructor() { }
}
