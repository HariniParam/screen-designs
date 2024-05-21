import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeLink: string = 'dashboard';

  setActive(link: string) {
    this.activeLink = link;
  }
}
