import {Ingredient} from "../models/ingredient";
export class ShopingListService{

  private ingredients: Ingredient[] = [];

  addItem(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  addItems(items: Ingredient[]){
    this.ingredients.push(...items);
  }

  removeItemByObject(ingredient: Ingredient){
    const position = this.ingredients.findIndex((ingredientEle) =>{
      return ingredientEle.name == ingredient.name;
    });
    this.ingredients.splice(position,1);
  }

  removeItem(index: number){
    this.ingredients.splice(index, 1);
  }

  getAllIngredients(){
    return this.ingredients.slice();
  }

}
