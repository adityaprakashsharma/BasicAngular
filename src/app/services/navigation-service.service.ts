import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {

  
  constructor() { };
  private subject$ = new Subject<boolean>();

  getSideNavState(): Observable<boolean> {
    return this.subject$.asObservable();
  }

  setSideNavState(isOpen: boolean){
    this.subject$.next(isOpen);
  }


}
