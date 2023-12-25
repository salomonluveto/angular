import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { ArticleService } from '../article.service';
import { NgFor } from '@angular/common';
import { Article } from '../article';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [ArticleComponent,NgFor],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
articleService:ArticleService = inject(ArticleService)
articles!:Article[]

constructor(){
this.articleService.findAll().then((response:Article[]) =>{
  this.articles = response
})
}
}
