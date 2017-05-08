import {Component, OnInit} from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipe implements OnInit{

  mode : string = 'New';
  selectOptions : string[] = ['Easy', 'Medium', 'Hard'];
  recipeForm : FormGroup;

  constructor(
    private navParam : NavParams,
    private actionSheetCtl : ActionSheetController,
    private alertController : AlertController
  ){
    this.initializeForm();
  }

  ngOnInit(){
    this.mode = this.navParam.get('mode');
  }

  private initializeForm(){
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required)
    });
  }

  public onSubmit(){
    console.log(this.recipeForm);
  }

  public onManageIngredient(){
    let actionSheet = this.actionSheetCtl.create({
      title:'What do you want to do',
      buttons:[
        {
          text: 'Add Ingredient',
          handler: ()=>{

          }
        },
        {
          text: 'Remove All Ingredient',
          role: 'destructive',
          handler:()=>{

          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    })
  }

  private createNewIngredientAlert(){
    const alert = this.alertController.create({
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

            }

            

          }
        }
      ]
    })
  }

}
