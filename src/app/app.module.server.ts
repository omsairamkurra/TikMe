import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { IonicModule } from '@ionic/angular';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, IonicModule.forRoot(), ServerModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
