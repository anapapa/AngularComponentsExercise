import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HelloComponent, WorldComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[HelloComponent, WorldComponent]
})
export class HelloWorldModule { }
