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

  @Input() primary = false;

  @Input() disabled = false;

  @Input() className:any;

  /**
   * What background color to use
   */
  @Input() backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input() size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input() label = 'Button Text';

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const defaultClasses: any = this.primary ? 'primary-btn' : 'secondary-btn';
    const disabledClass: any = this.disabled ? 'btn-disabled' : '';
    return ['btn', `btn-${this.size}`, defaultClasses, disabledClass];
  }
}
