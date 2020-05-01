import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/user/auth.service";
import { LoadingController, AlertController } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Toast } from '@ionic-native/toast/ngx';
import { LanguagesService } from '../services/languages.service';


@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage implements OnInit {
  public signupForm: FormGroup;
  public loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private router: Router,
    public toast: Toast,
    public lang: LanguagesService
  ) {
    this.signupForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: [
        "",
        Validators.compose([Validators.minLength(6), Validators.required])
      ],
      nickname: [
        "",
        Validators.compose([Validators.minLength(4), Validators.required])
      ],
      fullname: [
        "",
        Validators.compose([Validators.maxLength(30), Validators.required])
      ]
    });
  }

  ngOnInit() {}

  async signupUser(signupForm: FormGroup): Promise<void> {
    if (!signupForm.valid) {
      console.log(
        "Need to complete the form, current value: ",
        signupForm.value
      ); 
    } else {
      const email: string = signupForm.value.email;
      const password: string = signupForm.value.password;
      const nickname: string = signupForm.value.nickname;
      const fullname: string = signupForm.value.fullname;

      this.authService.signupUser(email, password, nickname, fullname).then(
        () => {
          this.loading.dismiss().then(() => {
            this.router.navigateByUrl("/profile");
            this.toast.show(`Inscription réussie. Bienvenue!!!`, '5000', 'top').subscribe(
              toast => {
                console.log(toast);
              }
            );
          });
        },
        error => {
          this.loading.dismiss().then(async () => {
            const alert = await this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: "Ok", role: "cancel" }]
            });
            await alert.present();
          });
        }
      );
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
    }
  }
}
