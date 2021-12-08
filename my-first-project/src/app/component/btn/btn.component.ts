import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  primary = false;

  @Input() className:any;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' | 'xlarge' = 'large';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'primary-btn' : 'secondary-btn';

    console.log(this.size)
    return ['btn', `btn-${this.size}`, mode];
  }
}
