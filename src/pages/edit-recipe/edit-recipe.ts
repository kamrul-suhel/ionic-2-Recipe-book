import {Component, OnInit} from '@angular/core';
import {
  ActionSheetController, AlertController, IonicPage, NavController, NavParams,
  ToastController
} from 'ionic-angular';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../../providers/recipe";
import {Ingredient} from "../../models/ingredient";
import {RecipeModal} from "../../models/recipesModal";


@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipe implements OnInit{

  mode          : string = 'New';
  selectOptions : string[] = ['Easy', 'Medium', 'Hard'];
  recipeForm    : FormGroup;
  recipe        : RecipeModal;
  index         : number;

  constructor(
    private navParam : NavParams,
    private navController: NavController,
    private actionSheetCtl : ActionSheetController,
    private alertController : AlertController,
    private toastController : ToastController,
    private recipeService : RecipeService,
  ){
  }

  ngOnInit(){
    this.mode = this.navParam.get('mode');
    if (this.mode == 'Edit'){
      this.recipe = this.navParam.get('recipe');
      this.index  = this.navParam.get('id');
    }
    this.initializeForm();

  }

  private initializeForm(){
    let title = null;
    let description = null;
    let difficulty = 'Medium';
    let ingredients = [];

    if (this.mode == 'Edit'){
      title = this.recipe.title;
      description = this.recipe.description;
      difficulty = this.recipe.difficulty;
      for(let ingredient of this.recipe.ingredients){
        ingredients.push(new FormControl(ingredient.name, Validators.required));
      }
    }

    this.recipeForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'difficulty': new FormControl(difficulty, Validators.required),
      'ingredients': new FormArray(ingredients)
    });
  }

  public onSubmit(){
    let frmValue = this.recipeForm.value;
    let ingredient : Ingredient[]=[];
    if(frmValue.ingredients.length > 0){
      ingredient = frmValue.ingredients.map(name =>{
        return {name: name, amount:1};
      });
    }

    if(this.mode == 'Edit'){
      this.recipeService.updateRecipe(this.index, frmValue.title, frmValue.description, frmValue.difficulty, ingredient);
    }else{
      this.recipeService.addRecipe(frmValue.title, frmValue.description, frmValue.difficulty, ingredient);
    }
    this.recipeForm.reset();
    this.navController.popToRoot();

  }

  public onManageIngredient(){
    let actionSheet = this.actionSheetCtl.create({
      title:'What do you want to do',
      buttons:[
        {
          text: 'Add Ingredient',
          handler: ()=>{
            this.createNewIngredientAlert().present();
          }
        },
        {
          text: 'Remove All Ingredient',
          role: 'destructive',
          handler:()=>{
            const fArray : FormArray = <FormArray> this.recipeForm.get('ingredients');
            const len = fArray.length;

            if(len > 0){
              for(var i = len - 1; i >=0; i--){
                fArray.removeAt(i);
              }
              this.createMessage('All ingredients was deleted successfully')
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    })
    actionSheet.present();
  }

  private createNewIngredientAlert(){
    return this.alertController.create({
      title: "Add Ingredient",
      inputs:[
        {
          name: 'name',
          placeholder: 'name'
        }
      ],
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data =>{
            if(data.name == '' || data.name == null){
              this.createMessage('Name can not be empty');
              return;
            }
            (<FormArray> this.recipeForm.get('ingredients')).push(new FormControl(data.name, Validators.required));
            this.createMessage(data.name +' was added into your recipe')
          }
        }
      ]
    });
  }

  private createMessage(message : string){
    const toast = this.toastController.create({
      message:message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

}
