import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-troubleshoot-card',
  templateUrl: './troubleshoot-card.component.html',
  styleUrls: ['./troubleshoot-card.component.scss']
})
export class TroubleshootCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() primary = true;
}
