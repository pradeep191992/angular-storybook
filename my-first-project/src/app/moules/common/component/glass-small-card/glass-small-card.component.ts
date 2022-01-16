import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-glass-small-card',
  templateUrl: './glass-small-card.component.html',
  styleUrls: ['./glass-small-card.component.scss']
})
export class GlassSmallCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() first = true;
  @Input() second = false;
  @Input() third = true;
  @Input() fourth = false;
  @Input() className: any;
  
}
