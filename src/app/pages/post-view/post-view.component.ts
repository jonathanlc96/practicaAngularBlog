import { Component, inject, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { BlogService } from '../../services/blog.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-view',
  imports: [RouterLink],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent {

  @Input() idPost: string = "";
  postsService = inject(BlogService)
  router = inject(Router);
  post!: IPost;

  ngOnInit() {
    let id: number = Number(this.idPost);
    let response = this.postsService.getPostById(id)
    if (response) {
      this.post = response
    } else {
      alert('Id del post no existe')
      this.router.navigate(['/home']);
    }
  }
}
