import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [LandingComponent]
})
export class AppComponent {
  title = 'Tomorrowland Landing Page';
 }