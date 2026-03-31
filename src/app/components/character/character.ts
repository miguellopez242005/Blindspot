import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character',
  standalone:false,
  templateUrl: './character.html',
  styleUrl: './character.scss',
})
export class CommentCardComponent {
  @Input() character: Character;
}
