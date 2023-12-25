import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { ProduitsComponent } from './produits/produits.component';

export const routes: Routes = [
    {
    path:'',
    component:ArticleListComponent,
    title:"Articles"
    },
    {
        path:'about',
        component:AboutComponent,
        title:"A propos"
        },
        {
            path:'detail/:id',
            component:DetailComponent,
            title:"Detail"
            },
            {
                path:'create',
                component:CreateComponent,
                title:"create"
                },
                {
                    path:'produits',
                    component:ProduitsComponent,
                    title:"produits"
                    },
            
];
