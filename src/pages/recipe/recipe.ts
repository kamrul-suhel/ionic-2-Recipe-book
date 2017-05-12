import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {RecipeService} from "../../providers/recipe";
import {RecipeModal} from "../../models/recipesModal";
import {EditRecipe} from "../edit-recipe/edit-recipe";
import {ShopingListService} from "../../services/shoping-list";


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

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private recipeServices: RecipeService,
        private shopingListService : ShopingListService,
        private toastAlert : ToastController,
    ) {
    }

    ionViewDidLoad() {}

    ngOnInit(){
      this.id = this.navParams.get('id');
      this.recipe = this.recipeServices.getRecipeById(this.id);
    }

    onEditRecipe(){
    this.navCtrl.push(EditRecipe, {mode:'Edit', id:this.id, recipe: this.recipe});
    }

    onAddIngredient(){
        this.shopingListService.addItems(this.recipe.ingredients);
        this.createMessage('Items is added into shoping list')
    }

    onDeleteRecipe(){
        this.recipeServices.removeRecipe(this.id);
        this.navCtrl.popToRoot();
    }

    private createMessage(message : string){
        let toastAlert = this.toastAlert.create({
            message: message,
            duration: 2000
        });
        toastAlert.present();
    }


}
