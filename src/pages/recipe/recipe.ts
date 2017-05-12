import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RecipeService} from "../../providers/recipe";
import {RecipeModal} from "../../models/recipesModal";

/**
 * Generated class for the Recipe page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class Recipe implements OnInit{
  recipe: RecipeModal;
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipeServices: RecipeService) {
  }

  ionViewDidLoad() {}

  ngOnInit(){
      this.id = this.navParams.get('id');
      this.recipe = this.recipeServices.getRecipeById(this.id);
  }

}
