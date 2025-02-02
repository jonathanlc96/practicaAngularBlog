import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  @Input() miPost!: IPost;
}
