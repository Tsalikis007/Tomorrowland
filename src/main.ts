import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Verifique o caminho
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Verifique o caminho

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});