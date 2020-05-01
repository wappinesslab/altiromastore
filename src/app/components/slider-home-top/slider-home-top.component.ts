import { Component, OnInit } from '@angular/core';
import { WebsitePage } from 'src/app/pages/website/website.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slider-home-top',
  templateUrl: './slider-home-top.component.html',
  styleUrls: ['./slider-home-top.component.scss'],
})
export class SliderHomeTopComponent implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
      delay: 3000,
    }
  };

  constructor(
    public modalCtlr: ModalController
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
