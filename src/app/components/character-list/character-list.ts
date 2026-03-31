import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-character-list',
  standalone:false,
  templateUrl: './character-list.html',
  styleUrl: './character-list.scss',
})
export class CommentListComponent {
  @Input() episodes: any[];
  @Input() seasons: number[] = [];
  @Output() onFilter = new EventEmitter<string>();

  filtrar(event: any) {
    this.onFilter.emit(event.target.value);
  }
openEpisode(url: string): void {
  window.open(url, '_blank');
}
}
