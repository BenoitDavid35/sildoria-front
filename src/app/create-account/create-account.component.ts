import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EncrDecrService } from '../../service/encrdecrService/encr-decr.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { UploadService } from '../../service/upload/upload.service';
import { ApiCallService } from '../../service/api-call/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  fileData: File;
  url: string = 'create-account/';
  display: string = '';
  userImageError: string = '';
  passwordMissMatch: string = '';
  userPasswordConfirmError: string = '';
  userPasswordError: string = '';
  userEmailError: string = '';
  userSILA_ID: string = '';
  userNameError: string = '';

  constructor(private EncrDecr: EncrDecrService, private router: Router, private httpService: HttpClient, private upload: UploadService, private apiService: ApiCallService) { }

  ngOnInit(): void  {
  }

  fileInput(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }

  onSubmit(form: any){

    this.display = '';
    this.userImageError = '';
    this.passwordMissMatch = '';
    this.userPasswordConfirmError = '';
    this.userPasswordError = '';
    this.userEmailError = '';
    this.userSILA_ID = '';
    this.userNameError= '';

    var fileName = this.upload.upload(this.fileData);
    var userNameError = form.value.userSILA_ID;
    var password = this.EncrDecr.set(form.value.userPassword);
    var password_confirm = this.EncrDecr.set(form.value.userPasswordConfirm);

    if(userNameError != ''){
      if(password){
        if(password_confirm){
          if(fileName){
            if(form.value.userSILA_ID){
              if(form.value.userEmail){
                if(password === password_confirm){
                  var valueArray = [
                    form.value.userSILA_ID,
                    form.value.userEmail,
                    password,
                    fileName
                  ]
                  console.log('valuearray');
                  console.log(valueArray);
                  this.apiService.callServer(this.url,valueArray)
                  .subscribe(resp => {
                    console.log(resp);
                    if(resp == 'TRUE'){
                      this.router.navigate(['/mail_confirmation']);
                    }else if(resp == 'FALSE'){
                      this.display = 'Erreur lors de la création de votre compte.';
                    }else if(resp == 'ALREADY_EXIST'){
                      this.display = 'Ce compte existe déjà.';
                    }
                  });
                }
              }else{
                this.userEmailError = 'TRUE';
              }
            }else{
              this.userSILA_ID = 'TRUE';
            }
          }else{
            this.userImageError = 'TRUE';
          }
        }else{
          this.userPasswordConfirmError = 'TRUE';
        }
      }else{
        this.userPasswordError = 'TRUE';
      }
    }else{
      this.userNameError = 'TRUE';
    }
  }

}
