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

  ionViewWillEnter(){
    this.loadItem();
  }

  onAddItem(form : NgForm){
    let name = form.value.ingredientName;
    let amount = form.value.amount;
    const ingredient = new Ingredient(name, amount);

    this.shopingListService.addItem(ingredient);
    form.reset();
    this.loadItem();
  }

  private loadItem(){
    this.shopingListItems = this.shopingListService.getAllIngredients();
  }

  public onDeleteItem(item : Ingredient){
    this.shopingListService.removeItemByObject(item);
    this.loadItem();
  }

}
