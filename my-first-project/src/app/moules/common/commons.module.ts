import { RouterModule } from '@angular/router';
import { SvgIconModule } from './../svg-icon/svg-icon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './component/card/card.component';
import { BtnComponent } from './component/btn/btn.component';
import { GlassBigCardComponent } from './component/glass-big-card/glass-big-card.component';
import { GlassSmallCardComponent } from './component/glass-small-card/glass-small-card.component';
import { TroubleshootCardComponent } from './component/troubleshoot-card/troubleshoot-card.component';
import { TeamBadgeComponent } from './component/team-badge/team-badge.component';
import { OptionPickerComponent } from './component/option-picker/option-picker.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { ResetFormComponent } from './component/reset-form/reset-form.component';
import { AuthenticateFormComponent } from './component/authenticate-form/authenticate-form.component';
import { InputComponent } from './component/input/input.component';
import { StickyStackComponent } from './component/sticky-stack/sticky-stack.component';
import { AlertModalComponent } from './component/alert-modal/alert-modal.component';
import { CheckboxComponent } from './component/checkbox/checkbox.component';



@NgModule({
  declarations: [
    CardComponent,
    BtnComponent,
    GlassBigCardComponent,
    GlassSmallCardComponent,
    TroubleshootCardComponent,
    TeamBadgeComponent,
    OptionPickerComponent,
    SearchBarComponent,
    NavbarComponent,
    LoginFormComponent,
    ResetFormComponent,
    AuthenticateFormComponent,
    InputComponent,
    StickyStackComponent,
    AlertModalComponent,
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    SvgIconModule,
    RouterModule,
  ],
  exports: [
    CardComponent,
    BtnComponent,
    GlassBigCardComponent,
    GlassSmallCardComponent,
    TroubleshootCardComponent,
    TeamBadgeComponent,
    OptionPickerComponent,
    SearchBarComponent,
    NavbarComponent,
    LoginFormComponent,
    ResetFormComponent,
    AuthenticateFormComponent,
    InputComponent,
    StickyStackComponent,
    AlertModalComponent,
    CheckboxComponent,
  ]
})
export class CommonsModule { }
