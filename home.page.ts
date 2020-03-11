import { Component } from '@angular/core';
import { AuthService } from '../providers/auth.service'
import { ActivatedRoute } from '@angular/router';
import { Events } from '@ionic/angular';


@Component({

  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public userid: any;

  public userlist = [];
  meunuid: any;
  ismenu = false;
  malename: any;
  femalename: any;
  date: any;
  showselected = 'view';
  imageupload = "Upload Images";
  image: any;

  constructor(private route: ActivatedRoute, public auth: AuthService, public events: Events, ) {

   

    this.get_menu_data();
    this.get_submit_data();
    this.userlist = [{ "name": "imran" }, { "name": "kumar" }, { "name": "satheesh" }, { "name": "sharafath" },]

  }


  get_menu_data() {

    this.events.subscribe('userLogged', (data) => {

      this.meunuid = data['id'];
      if (this.meunuid == 1) {
        this.ismenu = false
        this.userlist = [{ "name": "imran" }, { "name": "kumar" }, { "name": "satheesh" }, { "name": "sharafath" },]
      } else {

        this.ismenu = true
        this.meunuid = data['id'];
        this.malename = '';
        this.femalename = '';
        this.date = '';
        this.color = "";
        this.showselected = 'view';

      }

    });

  }

  add() {
    this.showselected = 'add'
    this.get_menu_data();

  }


  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {


    var file: File = inputValue.files[0];


    this.imageupload = file.name;

    var myReader: FileReader = new FileReader();


    myReader.onloadend = (e) => {

      this.image = myReader.result;




    }
    myReader.readAsDataURL(file);
  }
  color: string = "";

  submit_timeline() {


    if (this.malename == '' || this.femalename == '' || this.date == '') {
      this.color = "text-input";

    } else {
      this.color = "";



      let params = {

        "malename": this.malename,
        "femalename": this.femalename,
        "date": this.date,
        "image": this.image,
      }
      this.auth.insert_timeline(params).then(result => {

        if (result['status'] == true) {

          //    alert(JSON.stringify(result['result']));
          this.showselected = 'view';

        }
        /// {"status":true,"result":"insert sucess"}
      });



    }

  }


  get_submit_data() {


    let params = {

      "malename": '1',
      "femalename": '1',
      "date": '1',
      "image": '1',
    }
    this.auth.insert_timeline(params).then(result => {

      if (result['status'] == true) {

        //    alert(JSON.stringify(result['result']));
        this.showselected = 'view';

      }
      /// {"status":true,"result":"insert sucess"}
    });

  }

}
