import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './Wrapper/wrapper.component';
import { HeaderComponent } from './Wrapper/Header/header.component';
import { NavComponent } from './Wrapper/Nav/nav.component';
import { ContentComponent } from './Wrapper/Content/content.component';
import { FooterComponent } from './Wrapper/Footer/footer.component';



@NgModule({
  declarations: [WrapperComponent, HeaderComponent, NavComponent, ContentComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports :[WrapperComponent, HeaderComponent, NavComponent, ContentComponent, FooterComponent]
})
export class WrapperModule { }
