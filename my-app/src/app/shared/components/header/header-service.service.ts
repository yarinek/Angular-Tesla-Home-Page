import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderServiceService {
  userLogin = new BehaviorSubject<string>('');
  constructor() {}
}
