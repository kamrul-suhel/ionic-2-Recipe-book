import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {EditRecipe} from "../pages/edit-recipe/edit-recipe";
import {Recipe} from "../pages/recipe/recipe";
import {Recipes} from "../pages/recipes/recipes";
import {ShoppingList} from "../pages/shopping-list/shopping-list";
import {Tabs} from "../pages/tabs/tabs";
import {ShopingListService} from "../services/shoping-list";
import {RecipeService} from "../providers/recipe";

@NgModule({
  declarations: [
    MyApp,
    EditRecipe,
    Recipe,
    Recipes,
    ShoppingList,
    Tabs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditRecipe,
    Recipe,
    Recipes,
    ShoppingList,
    Tabs

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShopingListService,
    RecipeService
  ]
})
export class AppModule {}
