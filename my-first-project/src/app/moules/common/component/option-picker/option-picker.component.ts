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

  @Input() twoOption = false;

  @Input() threeOption = false;

  @Input() fourOption = false;

  @Input() fiveOption = true;

  @Input() className: any;

  addingEffect(event: any) {
    const item = document.body.querySelectorAll('.pick-item');
    item.forEach(ele => {
      ele.classList.remove('active');
      event.target.classList.add('active');
    })
  }

}
