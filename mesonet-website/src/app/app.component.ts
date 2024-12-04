import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { DataDisplayComponent } from './data-display/data-display.component';



@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
