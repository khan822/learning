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









    body {
    font-family: Arial;
   
    background-color: #9e9e9e1c;
    }
  
    .login-screen {
    background-color: #FFF;
    padding: 20px;
  
    }
    
    .app-title {
    text-align: center;
    color: #777;
    }
    
    .login-form {
    text-align: center;
    }
    .control-group {
    margin-bottom: 10px;
    }
    
    input {
    
    text-indent:10px;
    background-color: #ECF0F1;
    border: 2px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 200;
    padding: 10px 0;
    width: 250px;
    transition: border .5s;
    }
    
    input:focus {
    border: 2px solid #3498DB;
    box-shadow: none;
    }
    
    .btn {
      border: 2px solid transparent;
      background: #3498DB;
      color: #ffffff;
      font-size: 16px;
      line-height: 25px;
      padding: 10px 0;
      text-decoration: none;
      text-shadow: none;
      border-radius: 3px;
      box-shadow: none;
      transition: 0.25s;
      display: block;
      width: 250px;
      margin: 0 auto;
    }
    
    .btn:hover {
      background-color: #2980B9;
    }
    
    .login-link {
      font-size: 12px;
      color: #444;
      display: block;
        margin-top: 12px;
    }

    .fileInput {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
    .fileInput   label {
        color: #717171;
        background-color: white;
        display: inline-block;
        cursor: pointer;
        padding: .5em 1em;
        border: 1px solid #ccc;
        cursor: pointer;
    }

  /*   .yourClassName{

        color: red
    }
 */
    .text-input::-moz-placeholder {
        color: red;
      }
      
      .text-input:-ms-input-placeholder {
        color: red;
      }
      
      .text-input::-webkit-input-placeholder {
        color: red;
      }
