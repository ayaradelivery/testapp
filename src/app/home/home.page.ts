import { Component, OnInit } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x';
import { ModalController } from '@ionic/angular';
import { AlertPage } from '../modals/alert/alert.page';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  payloads = null;
  constructor(

    public modalCtrl: ModalController,
    public router: Router,
  ) {
    FirebaseX.onMessageReceived()
      .pipe(
        tap(data => {
          this.payloads = data;
          console.log(data);
        })
      );
  }

  ngOnInit() {

  }

  /* async presentModal() {
    const modal = await this.modalCtrl.create({
      component: AlertPage,
      componentProps: this.payloads,
      cssClass: ['']
    });
    modal.present();
  } */
}
