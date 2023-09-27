import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CustomngifDirective } from './directives/customngif.directive';
import { DropdownDirective } from './directives/dropdown.directive';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HighlightDirective,
    CustomngifDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    HighlightDirective,
    CustomngifDirective,
    DropdownDirective
  ]
})
export class SharedModule { }
