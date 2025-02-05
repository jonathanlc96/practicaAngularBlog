import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { BlogService } from '../../services/blog.service';
import { PostCardComponent } from "../../components/post-card/post-card.component";
import { SelectCategoryComponent } from "../../components/select-category/select-category.component";
import { ICategory } from '../../interfaces/icategory.interface';
import { TitleSearchComponent } from "./title-search/title-search.component";

@Component({
  selector: 'app-posts-list',
  imports: [PostCardComponent, SelectCategoryComponent, TitleSearchComponent],
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

  searchByTitle(event: string) {
    this.arrPosts = this.postsService.getByTitle(event)
  }

  selectByCategory(event: ICategory) {

    this.arrPosts = this.postsService.getByCategory(event);
  }
  selectByTitleCategory(event1: string, event2: ICategory) {
    this.arrPosts = this.postsService.getByTitleCategory(event1, event2);
  }
}
