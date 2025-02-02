import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectCategoryComponent } from "../../components/select-category/select-category.component";

@Component({
  selector: 'app-new-post',
  imports: [ReactiveFormsModule, SelectCategoryComponent],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
  newPostForm: FormGroup;

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
      image: new FormControl(),
      date: new FormControl("2025/01/01"),
      category: new FormControl()
    }, []);
  }
  getDataPost() {

  }
}
