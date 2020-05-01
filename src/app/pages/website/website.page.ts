import { Component, OnInit, SecurityContext } from '@angular/core';
import { NavParams, ModalController, LoadingController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-website',
  templateUrl: './website.page.html',
  styleUrls: ['./website.page.scss'],
})
export class WebsitePage implements OnInit {

  public urlSafe: SafeResourceUrl;

  constructor(
    private navParams: NavParams,
    private sanitizer: DomSanitizer,
    public modalCtlr: ModalController,
    private loadingCtlr: LoadingController
  ) {
    
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.navParams.get('url'));
    //this.url = this.sanitizer.sanitize(SecurityContext.URL, this.navParams.get('url'))
    console.log(this.urlSafe);
    
  }

  async ngOnInit() {

    const loading: HTMLIonLoadingElement = await this.loadingCtlr.create({
      message: 'Loading...',
      duration: 4000
    });
    await loading.present();
    await loading.dismiss();
  }

  async closeModal() {
    await this.modalCtlr.dismiss();
  }
}
