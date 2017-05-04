import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ShopingListService} from "../../services/shoping-list";
import {Ingredient} from "../../models/ingredient";

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingList {

  shopingListItems : Ingredient[] = [];

  constructor(private shopingListService : ShopingListService){
  }

  onAddItem(form : NgForm){
    let name = form.value.ingredientName;
    let amount = form.value.amount;
    const ingredient = new Ingredient(name, amount);

    this.shopingListService.addItem(ingredient);
    this.shopingListItems = this.shopingListService.getAllIngredients();
    form.reset();
  }

}
