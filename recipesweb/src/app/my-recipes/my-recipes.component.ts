import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css'],
})
export class MyRecipesComponent implements OnInit {
  recipes$ = new Observable<Recipe[]>();

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.recipes$ = this.httpClient.get<Recipe[]>(
      'http://localhost:3000/recipes'
    );
  }
}
