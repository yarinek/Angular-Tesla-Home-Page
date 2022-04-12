import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() imp!: string;
  @Input() text!: string;
  @Input() link!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
