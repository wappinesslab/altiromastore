import { Component } from '@angular/core';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { WebsitePage } from '../pages/website/website.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public segmentShowFirst: string;
  public url: string;

  constructor(
    private iab: InAppBrowser,
    public router: Router,
    public modalCtlr: ModalController
  ) {
    this.segmentShowFirst = "home";
  }

  openURL() {
    const browser = this.iab.create('https://www.altiromastore.com/', "_self");
    browser.close();
  }

  openPage(e) {
    this.router.navigateByUrl(e);
  }

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
