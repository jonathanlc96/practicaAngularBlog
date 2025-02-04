import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interface';
import { CATEGORIES, POSTS } from '../db/blog.db';
import { ICategory } from '../interfaces/icategory.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private postslist: IPost[] = POSTS;
  private categoriesList: ICategory[] = CATEGORIES;
  private id: number = 1;

  insertPost(newPost: IPost): any {
    if (this.postslist.length > 0) {
      newPost.id = this.postslist[this.postslist.length - 1].id + 1;
    } else {
      newPost.id = this.id;
    }

    this.postslist.push(newPost);
    console.log(this.postslist)
    return { message: 'post insertado correctamente' }
  }

  getAllPosts(): IPost[] {
    return this.postslist;
  }
  getAllCategories(): ICategory[] {
    return this.categoriesList;
  }
  getPostById(idPost: number): IPost | undefined {
    return this.postslist.find(post => post.id === idPost)
  }



}
