import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-options',
  templateUrl: './control-options.component.html',
  styleUrls: ['./control-options.component.css']
})
export class ControlOptionsComponent {
  @Input() activeLink: string = 'overview';
  @Output() linkChange = new EventEmitter<string>();

  setActiveLink(link: string) {
    this.linkChange.emit(link);
  }
}
