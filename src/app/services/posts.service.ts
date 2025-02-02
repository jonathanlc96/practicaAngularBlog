import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interface';
import { CATEGORIES, POSTS } from '../db/blog.db';
import { ICategory } from '../interfaces/icategory.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postslist: IPost[] = POSTS;
  private categoriesList: ICategory[] = CATEGORIES;

  getAllPosts(): IPost[] {
    return this.postslist;
  }
  getAllCategories(): ICategory[] {
    return this.categoriesList;
  }

}
