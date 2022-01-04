import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: any;
  @Input() active: any;
  @Input() type: any;
  passwordIcon = 'showpass_icon';
  constructor() { }

  ngOnInit(): void {
  }

  showPassword() {
    if (this.type === 'password') {
      this.type = 'text';
      this.passwordIcon = 'hidepass_icon';
    } else{
      this.type = 'password';
      this.passwordIcon = 'showpass_icon';
    }
  }

}
