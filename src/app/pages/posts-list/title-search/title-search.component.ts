import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-title-search',
  imports: [],
  templateUrl: './title-search.component.html',
  styleUrl: './title-search.component.css'
})
export class TitleSearchComponent {
  @Output() busquedaEmitida: EventEmitter<string> = new EventEmitter();

  getInputTitle(event: any) {
    this.busquedaEmitida.emit(event.target.value)
  }
}
