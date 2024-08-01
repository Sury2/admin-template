import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';


bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

// platformBrowserDynamic().bootstrapModule(AppModule, {
//   ngZoneEventCoalescing: true
// })
//   .catch(err => console.error(err));
