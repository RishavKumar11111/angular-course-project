import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://i.ytimg.com/vi/xkMbJCtaaqA/maxresdefault.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://zaykarecipes.com/eng/wp-content/uploads/2019/08/chili-chicken-1280x720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
