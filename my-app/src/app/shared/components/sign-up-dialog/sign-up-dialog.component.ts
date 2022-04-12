import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {
  confirmedValidator,
  emailValidator,
  passwordValidator,
} from '../../common/utils';
import { HeaderServiceService } from '../header/header-service.service';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.scss'],
})
export class SignUpDialogComponent implements OnInit {
  dialogForm = new FormGroup(
    {
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(passwordValidator),
      ]),
      repeatedPassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(passwordValidator),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(emailValidator),
      ]),
      acceptRules: new FormControl(null, Validators.required),
      acceptNotifications: new FormControl(null),
    },
    [confirmedValidator('password', 'repeatedPassword')]
  );

  constructor(
    private headerService: HeaderServiceService,
    public dialogRef: MatDialogRef<any>
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    localStorage.setItem(
      'UserRegisterDetails',
      JSON.stringify(this.dialogForm.value)
    );
    this.headerService.userLogin.next(this.dialogForm.value.login);
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
