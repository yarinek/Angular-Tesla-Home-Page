import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() title!:string;
  @Input() desc!:string;
  @Input() descLink!:string;
  @Input() backgroundImg!: string;
  @Input() leftBtnLink!:string;
  @Input() leftBtnTxt!:string;
  @Input() rightBtnLink!:string;
  @Input() rightBtnTxt!:string;
  @Input() twoButtons!:boolean;
  @Input() first!:boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
