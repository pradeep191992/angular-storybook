import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.scss']
})
export class NotificationPanelComponent implements OnInit {

  constructor() { }
  isVisible = false;
  classes = 'right-6';
  ngOnInit(): void {
  }
  showModal (){
    this.isVisible = !this.isVisible;
    this.classes = this.isVisible ? 'right-1/2 translate-x-1/2 w-[566px]' : 'right-6';
  }

}
