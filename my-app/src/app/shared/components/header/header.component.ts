import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';
import { HeaderServiceService } from './header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  modelNames = [
    'Model S',
    'Model 3',
    'Model X',
    'Model Y',
    'Soler Roof',
    'Solar Panels',
  ];
  login!: string;

  constructor(
    private dialog: MatDialog,
    private headerService: HeaderServiceService
  ) {}

  ngOnInit(): void {
    const userDetails = localStorage.getItem('UserRegisterDetails');
    if (userDetails) {
      this.login = JSON.parse(userDetails).login;
    }

    this.headerService.userLogin
      .pipe(tap((login) => {
        if(login) {
          this.login = login;
        }
      }))
      .subscribe();
  }

  openSignInDialog(): void {
    this.dialog.open(SignUpDialogComponent);
  }
}
