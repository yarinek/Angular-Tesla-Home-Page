import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  itemDict = [
    {
          title:'Lowest Cost Solar Panels in America',
          desc:'Money-back guarantee',
          descLink:'',
          backgroundImg:'SolarPanels',
          leftBtnTxt:'ORDER NOW',
          leftBtnLink:'',
          rightBtnTxt:'LEARN MORE',
          rightBtnLink:'',
          twoButtons:true,
          first: true
    },
    {
          title:'Model S',
          desc:'$69,420',
          descLink:'',
          backgroundImg:'ModelS',
          leftBtnTxt:'CUSTOM ORDER',
          leftBtnLink:'',
          rightBtnTxt:'LEARN MORE',
          rightBtnLink:'',
          twoButtons:true,
          first: false
    },
    {
          title:'Model 3',
          desc:'Money-back guarantee',
          descLink:'',
          backgroundImg:'Model3',
          leftBtnTxt:'CUSTOM ORDER',
          leftBtnLink:'',
          rightBtnTxt:'LEARN MORE',
          rightBtnLink:'',
          twoButtons:true,
          first: false
    },
    {
          title:'Model X',
          desc:'Money-back guarantee',
          descLink:'',
          backgroundImg:'ModelX',
          leftBtnTxt:'CUSTOM ORDER',
          leftBtnLink:'',
          rightBtnTxt:'LEARN MORE',
          rightBtnLink:'',
          twoButtons:true,
          first: false
        }
  ]
}
