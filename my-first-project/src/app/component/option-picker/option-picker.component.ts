import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-picker',
  templateUrl: './option-picker.component.html',
  styleUrls: ['./option-picker.component.scss']
})
export class OptionPickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() primary = true;
}
