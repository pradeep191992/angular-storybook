import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { BtnComponent } from './component/btn/btn.component';
import { GlassBigCardComponent } from './component/glass-big-card/glass-big-card.component';
import { GlassSmallCardComponent } from './component/glass-small-card/glass-small-card.component';
import { TroubleshootCardComponent } from './component/troubleshoot-card/troubleshoot-card.component';
import { TeamBadgeComponent } from './component/team-badge/team-badge.component';
import { OptionPickerComponent } from './component/option-picker/option-picker.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BtnComponent,
    GlassBigCardComponent,
    GlassSmallCardComponent,
    TroubleshootCardComponent,
    TeamBadgeComponent,
    OptionPickerComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
