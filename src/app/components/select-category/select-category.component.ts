import { Component, EventEmitter, inject, Output } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ICategory } from '../../interfaces/icategory.interface';

@Component({
  selector: 'app-select-category',
  imports: [],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.css'
})
export class SelectCategoryComponent {

  @Output() seleccionEmitida: EventEmitter<ICategory> = new EventEmitter();
  categoriesList: ICategory[] = [];
  categoriesService = inject(BlogService)

  ngOnInit() {
    this.categoriesList = this.categoriesService.getAllCategories();
  }

  categorySelected(event: any) {
    const categoryTitle = event.target.value;
    const selectedCategory = this.categoriesList.find(cat => cat.titleC === categoryTitle);

    if (selectedCategory) {
      this.seleccionEmitida.emit(selectedCategory);
      console.log(selectedCategory)
    }
  }

}
