import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditRecipe} from "../edit-recipe/edit-recipe";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  public onNewRecipe(){
    this.navCtrl.push(EditRecipe, {mode : 'New'});
  }

}
