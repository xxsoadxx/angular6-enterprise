import { Injectable } from '@angular/core';
import * as json from 'assets/workFlow.json';

@Injectable({
  providedIn: 'root'
})
export class ScopeService {
  private scope: any;

  constructor() { 
   
  }
  
  getScope() {
    return this.scope;
  }

  setScope(scope: any) {
      this.scope = scope;
  }
}