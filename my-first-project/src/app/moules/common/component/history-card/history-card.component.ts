import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss']
})
export class HistoryCardComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }
  @Input() className: any;
  @Input() warning = false;
}
