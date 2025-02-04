import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectCategoryComponent } from "../../components/select-category/select-category.component";
import { BlogService } from '../../services/blog.service';
import { ICategory } from '../../interfaces/icategory.interface';

@Component({
  selector: 'app-new-post',
  imports: [ReactiveFormsModule, SelectCategoryComponent],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
  @Input() categoriaRecibida!: ICategory;
  newPostForm: FormGroup;

  postsService = inject(BlogService);

  constructor() {
    this.newPostForm = new FormGroup({
      title: new FormControl("", [
        Validators.required
      ]
      ),
      author: new FormControl("", [
        Validators.required
      ]),
      text: new FormControl("", [
        Validators.required
      ]),
      image: new FormControl("", [
        Validators.required,
        Validators.pattern(/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?$/
        )
      ]
      ),
      date: new FormControl(),
      category: new FormControl()
    }, []);
  }
  recibirCategoria(event: ICategory) {
    this.categoriaRecibida = event;

    if (event === null) {
      alert('No se ha capturado ninguna categoría');
    } else {
      console.log('Categoría recibida:', this.categoriaRecibida);
      this.newPostForm.patchValue({ category: this.categoriaRecibida });
    }

  }
  getDataPost() {
    const respuesta = this.postsService.insertPost(this.newPostForm.value);
    // // alert(respuesta.message)
    //console.log(this.newPostForm.value)
    this.newPostForm.reset();
  }
  checkFieldError(field: string, error: string): boolean {
    if (this.newPostForm.get(field)?.hasError(error) && this.newPostForm.get(field)?.touched) {
      return true;
    }
    return false;
  }

}
