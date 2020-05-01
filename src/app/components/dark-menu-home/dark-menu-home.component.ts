import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { WebsitePage } from 'src/app/pages/website/website.page';

@Component({
  selector: 'app-dark-menu-home',
  templateUrl: './dark-menu-home.component.html',
  styleUrls: ['./dark-menu-home.component.scss'],
})
export class DarkMenuHomeComponent implements OnInit {

  constructor(
    private router: Router,
    public modalCtlr: ModalController
  ) { }

  ngOnInit() {}

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
