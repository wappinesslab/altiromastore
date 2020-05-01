import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SliderHomeTopComponent } from './slider-home-top/slider-home-top.component';
import { DarkMenuHomeComponent } from './dark-menu-home/dark-menu-home.component';
import { MiddleSliderComponent } from './middle-slider/middle-slider.component';



@NgModule({
  declarations: [
    SliderHomeTopComponent,
    DarkMenuHomeComponent,
    MiddleSliderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SliderHomeTopComponent,
    DarkMenuHomeComponent,
    MiddleSliderComponent
  ]
})
export class SharedComponentsModule { }
