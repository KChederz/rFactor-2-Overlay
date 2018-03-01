import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';
import { DriverNamePipe } from './pipes/driver-name.pipe';
import { SessionNamePipe } from './pipes/session-name.pipe';
import { ToMinutesPipe } from './pipes/to-minutes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DriverNamePipe,
    SessionNamePipe,
    ToMinutesPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }