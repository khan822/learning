import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {AuthService} from '../providers/auth.service'
import {Router} from '@angular/router'
import {FileUploadModule} from 'primeng/fileupload';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {
	data :any;
userid:any
	deletedata: any;
 base64textString: string;
  public encryptimg :any;
	image:any
  constructor(public alertController: AlertController,public auth:AuthService,public router:Router) { }

  changeListener(even) {
  

    var files = even.files;

    var file = files[0];

    if (files && file) {

      var reader = new FileReader();

      reader.onload =this.handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);

    }
    
  }
 handleReaderLoaded(readerEvt) {
  
    var binaryString = readerEvt.target.result;
           this.base64textString= btoa(binaryString);
           //console.log(btoa(binaryString));
      this.encryptimg = btoa(binaryString);
//       this.registerForm.get('image').setValue(this.encryptimg)
	this.image=this.encryptimg;
     //  console.log("--------"+this.image);
 
  this.auth.sendimage(this.image).then(result=>{
console.log("imageresult====="+result)

});
  }



  ngOnInit() {
	
	this.selectemp()

  }

 selectemp(){
  this.auth.getemp().then(result=>{

	console.log(JSON.stringify(result))
	this.data=result
	
		  })
		} 









send(id){
this.userid=id;
//alert(JSON.stringify(this.userid));
this.router.navigate(['/home',this.userid])


}






async presentAlertPrompt() {

	const alert = await this.alertController.create({
		header: 'Prompt!',
		inputs: [
			{
			  name: 'username',
			  type: 'text',
			  placeholder: 'username'
			},

			{
				name: 'firstname',
				type: 'text',
				placeholder: 'firstname'
			  },
			  {
				name: 'lastname',
				type: 'text',
				placeholder: 'lastname'
			  },

                         ],


			 buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () => {
					  console.log('Confirm Cancel');
					}
				  },{
					text: 'Ok',
					handler:data  => {
					 // console.log("data==========="+JSON.stringify(data));
					  this.auth.insertemployee(data).then(result=>{
						console.log("TS RESULT========"+JSON.stringify(result))
						this.selectemp()

					  })
					}
				  } ]
	});

	await alert.present();
}

Delete(id){
//alert(JSON.stringify(id))
this.auth.delete(id).then(result=>{
console.log("TS RESULT========"+JSON.stringify(result))
this.deletedata=result['affectedRows'];
if(this.deletedata == 1){
alert("delete successfully");
this.selectemp()
	}

})


}
}




