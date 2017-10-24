import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dataSet : any[];

  eventId : any;
  email : any;

  isAdd = false ;

  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController) {
      this.dataSet = [];
  }

  addUser(){
    this.isAdd = true ;
  }

  pushUser(){

    this.dataSet.push({
      email : this.email,
      eventId : this.eventId
    });

    this.email = '';
    this.eventId = '';
    this.isAdd = false;
  }


}
