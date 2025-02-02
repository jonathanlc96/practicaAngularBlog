import { Component, EventEmitter, inject, Output } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ICategory } from '../../interfaces/icategory.interface';

@Component({
  selector: 'app-select-category',
  imports: [],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css'
})
export class SelectCategoryComponent {

  @Output() seleccionEmitida: EventEmitter<string> = new EventEmitter();
  categoriesList: ICategory[] = [];
  categoriesService = inject(PostsService)

  ngOnInit() {
    //llamando al servicio
    this.categoriesList = this.categoriesService.getAllCategories();
  }


  getCategory(event: any) {
    //aqui tengo la seleccion la mando al padre 
    this.seleccionEmitida.emit(event.target.value)
  }
}
