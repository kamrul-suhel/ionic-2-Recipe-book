import { NgModule } from '@angular/core';
import { EditRecipe } from './edit-recipe';
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [
    EditRecipe,
  ],
  imports: [
    IonicPageModule.forChild(EditRecipe),
  ],
  exports: [
    EditRecipe
  ]
})
export class EditRecipeModule {}
