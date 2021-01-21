import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    //setting our listener
    this.recipeService.recipeSelected
    .subscribe( //on recipe selected, we can subscribe to it & get informed about any changes
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    ) 
  }

}
