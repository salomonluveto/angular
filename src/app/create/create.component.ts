import { Component,inject } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from '../article.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf], //pour valider l'enregistrement
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  isOpen : boolean = false
articleService:ArticleService = inject(ArticleService);
applyForm = new FormGroup({ // créé pour controler le formulaire
  title: new FormControl(''),
  price: new FormControl(0),
  description:new FormControl(''),
  category: new FormControl(''),
  image : new FormControl(''),
  rate: new FormControl(0),
  count : new FormControl(0)

})
save(){
  this.articleService.store(
    this.applyForm.value.title??"",
    this.applyForm.value.price??0,
    this.applyForm.value.description??"",
    this.applyForm.value.category??"",
    this.applyForm.value.image??"",
    this.applyForm.value.rate??0,
    this.applyForm.value.count??0,
  )
  this.applyForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(0),
    description:new FormControl(''),
    category: new FormControl(''),
    image : new FormControl(''),
    rate: new FormControl(0),
    count : new FormControl(0)
  
  })
  this.isOpen = true
}
close(){
  this.isOpen = false
}
}
