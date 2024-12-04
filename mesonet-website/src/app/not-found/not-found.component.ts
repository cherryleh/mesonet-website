import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a routerLink="/">Go Back to Home</a>
  `,
  styles: [`
    h1 { color: red; }
  `]
})
export class NotFoundComponent {}