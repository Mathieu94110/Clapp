import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient, RecipeInfo } from 'src/app/models/models';
import { SpoonacularApiService } from 'src/services/spoonacular-api.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  recipesDetails: RecipeInfo;
  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private spoonacularService: SpoonacularApiService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.spoonacularService.getRecipeInfo(id).subscribe((data) => {
      this.recipesDetails = data;
      console.log(this.recipesDetails);
    });
  }
  goBack() {
    this.router.navigate(['recipes']);
  }

  showIngredients(ingredients: Ingredient[]): string {
    return ingredients.reduce(
      (prev, curr) => `${prev ? prev + ', ' : ''}${curr.name}`,
      ''
    );
  }
}
