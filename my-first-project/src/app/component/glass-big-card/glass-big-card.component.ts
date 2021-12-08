import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-glass-big-card',
  templateUrl: './glass-big-card.component.html',
  styleUrls: ['./glass-big-card.component.scss']
})
export class GlassBigCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() first = true;
  @Input() second = false;
  @Input() third = true;
  @Input() fourth = false;

}
