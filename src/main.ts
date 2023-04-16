import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { registerLazyComponent } from './register-lazy-component';
import { LazyLoaderDirective } from './lazy-loader.directive';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, LazyLoaderDirective],
  providers: [
    registerLazyComponent(import('./lazy-component/lazy-component.component').then(c => c.LazyComponentComponent))
  ],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <div *appLazyLoader>123asd</div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
