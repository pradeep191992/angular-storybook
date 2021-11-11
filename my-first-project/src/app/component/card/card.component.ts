import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @Input()
  // primary = false;

  /**
   * What background color to use
   */
  // @Input()
  // backgroundColor?: string;

  // /**
  //  * How large should the button be?
  //  */
  // @Input()
  // size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input() buttonLabel = 'Button';
  @Input() cardClasses: any;
  @Input() title: any;

  /**
   * Optional click handler
   */
  // @Output()
  // onClick = new EventEmitter<Event>();

  // public get classes(): string[] {
  //   const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  //   return ['storybook-button', `storybook-button--${this.size}`, mode];
  // }

}
