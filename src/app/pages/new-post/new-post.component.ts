import { Component, inject, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectCategoryComponent } from "../../components/select-category/select-category.component";
import { BlogService } from '../../services/blog.service';
import { ICategory } from '../../interfaces/icategory.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  router = inject(Router);

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
        Validators.pattern(/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?\.(jpg|jpeg|png|gif|webp)$/i
        )
      ]
      ),
      date: new FormControl(),
      category: new FormControl()
    },);
  }
  recibirCategoria(event: ICategory) {
    this.categoriaRecibida = event;

    if (event === null) {
      alert('No se ha capturado ninguna categoría');
    } else {
      this.newPostForm.patchValue({ category: this.categoriaRecibida });
    }

  }
  getDataPost() {
    const respuesta = this.postsService.insertPost(this.newPostForm.value);

    Swal.fire({
      title: respuesta.message,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })

    this.newPostForm.reset();
    this.router.navigate(['/home'])
  }
  checkFieldError(field: string, error: string): boolean {
    if (this.newPostForm.get(field)?.hasError(error) && this.newPostForm.get(field)?.touched) {
      return true;
    }
    return false;
  }

}
