import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { BlogService } from '../../services/blog.service';
import { PostCardComponent } from "../../components/post-card/post-card.component";

@Component({
  selector: 'app-posts-list',
  imports: [PostCardComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  arrPosts: IPost[] = [];
  postsService = inject(BlogService);

  ngOnInit() {
    this.arrPosts = this.postsService.getAllPosts();
    console.log(this.arrPosts);
  }
}
