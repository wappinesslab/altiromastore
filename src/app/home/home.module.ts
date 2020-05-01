import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SharedComponentsModule } from '../components/shared-components.module';
import { WebsitePage } from '../pages/website/website.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    WebsitePage
  ],
  entryComponents: [
    WebsitePage
  ],
  exports: [
    WebsitePage
  ]
})
export class HomePageModule {}
