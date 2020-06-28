import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

//@ APPLICATION COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuDropdownComponent } from './header/menu-dropdown/menu-dropdown.component';
import { MenuButtonComponent } from './header/menu-button/menu-button.component';
import { MenuRightComponent } from './header/menu-right/menu-right.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ListEditComponent } from './shopping-list/list-edit/list-edit.component';
import { UIComponent } from './ui/ui.component';
import { UiButtonGroupComponent } from './ui/ui-button-group/ui-button-group.component';
import { UiDropdownButtonComponent } from './ui/ui-dropdown-button/ui-dropdown-button.component';
import { UiModalComponent } from './ui/ui-modal/ui-modal.component';
import { HighlightElementDirective } from './directives/highlight-element.directive';
import { DangerElementDirective } from './directives/danger-element.directive';
import { MouseOverStylingDirective } from './directives/mouse-over-styling.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuDropdownComponent,
    MenuButtonComponent,
    MenuRightComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ListEditComponent,
    UIComponent,
    UiButtonGroupComponent,
    UiDropdownButtonComponent,
    UiModalComponent,
    HighlightElementDirective,
    DangerElementDirective,
    MouseOverStylingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
