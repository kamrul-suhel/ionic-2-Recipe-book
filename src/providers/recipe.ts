import {Injectable, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {RecipeModal} from "../models/recipesModal";
import {Ingredient} from "../models/ingredient";

/*
  Generated class for the Recipe provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RecipeService implements OnInit {
  private recipes: RecipeModal[] = [];


  addRecipe(title:string, description: string, difficulty: string, ingredient:Ingredient[]){
    this.recipes.push(new RecipeModal(title, description, difficulty, ingredient));
  }

  getRecipe(){
    return this.recipes.slice();
  }

  getRecipeById(id: number){
    return this.recipes[id];
  }

  updateRecipe(index: number, title: string, description: string, difficulty: string, ingridents: Ingredient[]){
    this.recipes[index] = new RecipeModal(title, description, difficulty, ingridents);
  }

  updateRecipeWithObj(index: number, recipe: RecipeModal){
      this.recipes[index] = recipe;
  }

  removeRecipe(index: number){
    this.recipes.splice(index,1);
  }

  constructor() {
    let ingredients : Ingredient[] = [];
    ingredients.push(new Ingredient('Ingredient 1',2));
    this.addRecipe('Recipe 1','Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.','Medium',ingredients);
    this.addRecipe('Recipe 2','Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.','Easy',ingredients);
    this.addRecipe('Recipe 3','Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.','Hard',ingredients);
  }

  onAddIngredient(){

  }


  //default value load for test
  ngOnInit(){
   //recipe 1

  }
}
