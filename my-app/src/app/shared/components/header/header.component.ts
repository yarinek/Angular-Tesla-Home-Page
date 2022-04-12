import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modelNames = ['Model S', 'Model 3', 'Model X', 'Model Y', 'Soler Roof', 'Solar Panels']

  constructor() { }

  ngOnInit(): void {
  }

}
