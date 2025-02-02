import { PostViewComponent } from './pages/post-view/post-view.component';
import { Routes } from '@angular/router';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';

export const routes: Routes = [

    { path: "", pathMatch: 'full', redirectTo: 'home' },
    { path: "home", component: PostsListComponent },
    { path: "new", component: NewPostComponent },
    { path: 'post/:idPost', component: PostViewComponent },
    { path: "**", redirectTo: 'home' }
];
