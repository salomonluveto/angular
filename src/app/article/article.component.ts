import { Component,OnInit ,Input} from '@angular/core';
import { Article,Rating } from '../article';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

// pour recuperer la valeur de l'attribut
@Input() article!:Article; // article attribut qu'on récupere dans la boucke ngfor et Article est une interface(on verifie seulement si l'attribut est conforme au modèle)
  }
 

