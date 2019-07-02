import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { 

this.test()

}



test(){
let httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Access-Control-Allow-Origin','*')
  let options = {
    headers: httpHeaders
}; 

let data = {
  "uid":"12355"
}

this.http.post('http://pcswwor1.heliohost.org/api/login',data,options)
.subscribe(res => {
        
         alert("service result========"+JSON.stringify(res));
       // resolve(res);
      }, (err) => {
       // alert("service error========"+JSON.stringify(err));
        //reject(err);
      });

}




/* 

sendrequest(input,username){
alert(input+'________'+username)

 //let postData = new FormData();

let postData={

"messages":input,
"username":username

}
alert(JSON.stringify(postData));
   return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
     this.http.post('http://192.168.16.77:9000/messages',postData)
          .subscribe(res => {
            
             alert(JSON.stringify(res));
            resolve(res);
          }, (err) => {
            alert(JSON.stringify(err));
            reject(err);
          });
    }); */

    insertemployee(data){
    //  alert("service data========"+JSON.stringify(data))
      let postData = {"firstname":data.firstname, "lastname":data.lastname, "username":data.username}

return new Promise((resolve, reject) => {

   let headers = new Headers();

  headers.append('Content-Type', 'application/json'); 
 this.http.post('http://192.168.16.77:9000/insert',postData)
      .subscribe(res => {
        
        // alert("service result========"+JSON.stringify(res));
        resolve(res);
      }, (err) => {
       // alert("service error========"+JSON.stringify(err));
        reject(err);
      });
});

}





getemp(){

  let postData = new FormData();
 return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
   this.http.post('http://192.168.16.77:9000/select',postData)
        .subscribe(res => {
          alert(JSON.stringify(res));
          resolve(res);
        }, (err) => {
          alert(JSON.stringify(err));
          reject(err);
        });
  });

} 



delete(id){
  
  let postData = {"id":id}

return new Promise((resolve, reject) => {

let headers = new Headers();

headers.append('Content-Type', 'application/json'); 
this.http.post('http://192.168.16.77:9000/delete',postData)
  .subscribe(res => {
    
    // alert("service result========"+JSON.stringify(res));
    resolve(res);
  }, (err) => {
    alert("service error========"+JSON.stringify(err));
    reject(err);
  });
});

}


userprofiledetials (id){
 let postData = {"id":id}

return new Promise((resolve, reject) => {

let headers = new Headers();

headers.append('Content-Type', 'application/json'); 
this.http.post('http://192.168.16.77:9000/selectid',postData)
  .subscribe(res => {
    
    // alert("service result========"+JSON.stringify(res));
    resolve(res);
  }, (err) => {
    alert("service error========"+JSON.stringify(err));
    reject(err);
  });
});

}


sendimage(image){
 let postData = {"img":image}

return new Promise((resolve, reject) => {

let headers = new Headers();

headers.append('Content-Type', 'application/json'); 
this.http.post('http://192.168.16.77:9000/imagefile',postData)
  .subscribe(res => {
    
    // alert("service result========"+JSON.stringify(res));
    resolve(res);
  }, (err) => {
    alert("service error========"+JSON.stringify(err));
    reject(err);
  });
});


}
}//End Class













 

