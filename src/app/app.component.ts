import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-01';
  activeLink: string = 'overview';

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}
