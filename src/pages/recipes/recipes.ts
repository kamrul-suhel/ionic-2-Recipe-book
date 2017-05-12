import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditRecipe} from "../edit-recipe/edit-recipe";
import {RecipeService} from "../../providers/recipe";
import {RecipeModal} from "../../models/recipesModal";
import {Recipe} from "../recipe/recipe";

/**
 * Generated class for the Recipes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class Recipes {

  recipes : RecipeModal[] =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipeServices: RecipeService) {
  }

  ionViewWillEnter(){
    this.recipes = this.recipeServices.getRecipe();
  }

  ionViewDidLoad() {
  }

  public onNewRecipe(){
    this.navCtrl.push(EditRecipe, {mode : 'New'});
  }

  onLoadRecipe(recipe, i){
    this.navCtrl.push(Recipe, {recipe : recipe, id: i});
  }

}
