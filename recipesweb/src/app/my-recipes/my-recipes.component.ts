import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css'],
})
export class MyRecipesComponent implements OnInit {
  recipes$ = new Observable<MyRecipe[]>();

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.recipes$ = this.httpClient
      .get<Recipe[]>('http://localhost:3000/recipes')
      .pipe(
        map((r) => {
          // enrich recipe with url to detail page
          return r.map((r) => ({
            ...r,
            url: '/recipe/' + r.id,
          }));
        })
      );
  }
}

export interface MyRecipe extends Recipe {
  url: string;
}
