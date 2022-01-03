import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  @Input() iconHashTag: string | undefined;
  svgIconPath = '/assets/icons/icon.svg';
  svgHashTag = '';
  constructor() { }

  ngOnInit(): void {
    this.svgHashTag = `${this.svgIconPath}${this.iconHashTag}`;
  }

}
