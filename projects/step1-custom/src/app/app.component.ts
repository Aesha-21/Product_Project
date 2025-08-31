import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>

    
  `,
  standalone: false,
  styles: []
})
export class AppComponent {
  title = 'step1-custom';
}
