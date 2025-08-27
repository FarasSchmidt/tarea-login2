import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig = {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(BrowserAnimationsModule),
    provideHttpClient(),
  ],
};
