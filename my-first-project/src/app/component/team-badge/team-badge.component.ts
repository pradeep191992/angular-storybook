import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-badge',
  templateUrl: './team-badge.component.html',
  styleUrls: ['./team-badge.component.scss']
})
export class TeamBadgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() primary = true;

}
