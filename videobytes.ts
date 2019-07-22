import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoreMainMenuProvider } from '../../core/mainmenu/providers/mainmenu';

import { DomSanitizer } from '@angular/platform-browser';

import * as $ from 'jquery';

import { tracerwindow } from '../../assets/tracerwindow';


import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { File } from '@ionic-native/file';

import { LoadingController, ToastController, AlertController, } from 'ionic-angular';

import { Platform } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';

@IonicPage()
@Component({
  selector: 'page-videobytes',
  templateUrl: 'videobytes.html',
})
export class VideobytesPage {


  // private fileTransfer: FileTransferObject; https://www.npmjs.com/package/cordova-plugin-progress-notification
  //https://github.com/vasani-arpit/cordova-plugin-downloadmanager/blob/master/README.md



  tabs = ["All", "soft skill", "stress management"];

  pageTitle: any;

  siteurl: any;
  pageParams: any;

  newarr = [];
  //newarray :any;
  totaldata: any;


  languagesKeys = { en: "English", hi: "Hindi", ta_lk: "Tamil", te: "Telugu" };




  currentVideoUrl: any = null;


  constructor(public navCtrl: NavController, public navParams: NavParams, private mainMenuProvider: CoreMainMenuProvider, public sanitizer: DomSanitizer, public toastCtrl: ToastController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private transfer: FileTransfer, private file: File, public zone: NgZone, private platform: Platform, private localNotifications: LocalNotifications) {





// Schedule delayed notification
this.localNotifications.schedule({
  title: 'Sync in progress',
    text: 'downloading',
    led: 'green',
    progressBar: { value: 50 }
});



    this.pageParams = this.navParams.get('params');

    this.pageTitle = this.pageParams['custommenu'];

    this.mainMenuProvider.getSitePolicy().then(result => {

      this.siteurl = result;
    });


    this.getvideobytesfulldata();


  }




  ionViewDidLoad() {

  }





  istoShowVideo = false;

  ionViewWillLeave() {
    

    this.istoShowVideo = false;

    $('iframe').attr('src', '');

    if (this.isloaderOn == 1) {
      this.loadingToast.dismiss();
    }

    this.isloaderOn = 0;


  }


  videodata = [];

  sectionSelectedVideo = [];




  getvideobytesfulldata() {
    this.mainMenuProvider.getvideobytesdata().then(result => {

      tracerwindow('videodataBEFORE', result);

      let obj = result;

      for (let i in obj) {

        obj[i]['language'] = this.languagesKeys[obj[i]['language']];




        if (obj[i]['base_lang'] == '0') {

          obj[i]['download'] = Math.random() >= 0.5;

          this.sectionSelectedVideo.push(obj[i]);

          this.videodata[this.videodata.length] = [];

        }

        this.videodata[this.videodata.length - 1].push(obj[i]);

      }

      tracerwindow('videodataMODIFIED', this.videodata);

    });
  }

  callVideo(i) {


    this.istoShowVideo = true;

    this.currentVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.sectionSelectedVideo[i]['vimeo']);

  }




  loadingToast: any;

  isloaderOn = 0;


  progress = -1;




  downloadVideo(i) {
/* 
    this.loadingToast = this.loadingCtrl.create({
      content: ' Downloading...',

    });

    this.loadingToast.present();
 
    this.isloaderOn = 1;
*/




    this.progress = -1;

    let targetPath = this.file.externalRootDirectory;

    let folderName = "myCoach@2"

    let getUrl = this.sectionSelectedVideo[i]['vimeo'];

    let downloadFileName = getUrl.substr(getUrl.lastIndexOf('/') + 1);




    ////////////////////////////// plz chk

/*     let isFolderExisting = false;

    this.file.checkDir(targetPath, folderName).then(_ =>


      isFolderExisting = true


    ).catch(

      err => console.log('Directory doesn\'t exist')

    );


    if (!isFolderExisting) { 


     } */

      this.file.createDir(targetPath, folderName, true)

        .then((res) => console.log('createDir ' + folderName + ' res', res))
        .catch((err) => console.log('createDir ' + folderName + ' err', err));

  

//////////////////////////////


    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = getUrl;
    var URL = encodeURI(url);
    fileTransfer.onProgress((progressEvent) => {


      var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
      this.progress = perc;


    });
    fileTransfer.download(URL, targetPath + folderName + '/' + downloadFileName, true).then((entry) => {
      alert('download complete: ' + entry.toURL());
      //this.isloaderOn = 0;


/*       this.loadingToast.dismiss();
      let toast = this.toastCtrl.create({
        message: 'download successfully completed go to file /storage ' + folderName,
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present(); */


    }, (error) => {
      alert("download Error---------->" + JSON.stringify(error));
     /*  if(error){
      //this.loadingToast.dismiss();
      alert("download Error---------->" + JSON.stringify(error));

      let toast = this.toastCtrl.create({
        message: 'download failed',
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }

 */




    });

  }












  /*
  
  
    downloadVideo2(i) { 
      this.progress = -1;
  
      let targetPath = this.file.documentsDirectory;
  
  
  
  
  
      let getUrl = this.sectionSelectedVideo[i]['vimeo'];
     // alert(JSON.stringify(getUrl));
      let downloadFileName = getUrl.substr(getUrl.lastIndexOf('/') + 1); 
      this.file.createDir(targetPath,'video',true)
  
      .then((res) => console.log('createDir video res',res))
      .catch((err) => console.log('createDir video err',err));
    
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url =   getUrl;
    var URL = encodeURI(url);
    fileTransfer.onProgress((progressEvent) => {
  
    var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
      this.progress = perc;
    //  alert("progress result------>"+this.progress);
  
    });
    
  
    fileTransfer.download(URL, this.file.externalDataDirectory +'video/'+ downloadFileName ,true).then((entry) => {
      alert('download complete: ' + entry.toURL());
  
    }, (error) => {
      // handle error
      alert("download Error---------->"+JSON.stringify(error));
    });
  
    
    }
  */

}

