// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, RouterOutlet } from '@angular/router';
// // import { DataDisplayComponent } from './data-display/data-display.component';



// @Component({
//     selector: 'app-root',
//     standalone: true,
//     imports: [CommonModule, RouterModule, RouterOutlet],
//     templateUrl: './app.component.html',
//     styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
// }

import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Current route:', event.url);
      }
    });
  }
}
