import { Component, inject } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  articleService:ArticleService = inject(ArticleService)
  route:ActivatedRoute = inject(ActivatedRoute)
  articleid = -1
  article!: Article | undefined 
  produitservice:ArticleService = inject(ArticleService)
  produits!:Article[]|undefined

  constructor(){
    this.articleid = Number(this.route.snapshot.params['id'])// Number permet de convertir en nombre
    this.article = this.articleService.getOne(this.articleid)
    
  }
}
