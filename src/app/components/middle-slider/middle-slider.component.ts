import { Component, OnInit } from '@angular/core';
import { WebsitePage } from 'src/app/pages/website/website.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-middle-slider',
  templateUrl: './middle-slider.component.html',
  styleUrls: ['./middle-slider.component.scss'],
})
export class MiddleSliderComponent implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
      delay: 3000,
    }
  };

  constructor(
    private modalCtlr: ModalController
  ) { }

  ngOnInit() {}

  async websiteModal(url) {
    const modal = await this.modalCtlr.create({
      component: WebsitePage,
      componentProps: {
        'url' : url
      },
      cssClass: 'custom-modal-css',
      backdropDismiss: true
    })
    await modal.present();
  }

}
