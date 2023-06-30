import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GenericDialogComponent } from 'src/app/components/generic-dialog/generic-dialog.component';
import { Profile } from 'src/app/models/test-data.model';
import { Network } from 'src/app/services/backend-data.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private network: Network,
    private router: Router
  ) {}

  public profileData: Profile = {
    id: 0,
    fullname: '',
    email: '',
    phone: '',
    platform: '',
  };

  ngOnInit(): void {
    this.getProfile();
  }

  openGenericDialog() {
    let testText: string =
      'Estás a punto de cerrar la sesión, ¿quieres continuar?';
    let titleText: string = 'Cerrar sesión';
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      width: '312px',
      panelClass: 'custom-dialog',
      data: { testText, titleText, cancel: true },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog logout: ', result);
      if (result.acceptDialog == true) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    });
  }

  async getProfile() {
    const httpMethod = 'GET';
    let response = await this.network.call(
      `/api/users/profile/`,
      httpMethod,
      true
    );

    if (response !== false) {
      console.log('profile response', response);
      this.profileData = response as Profile;
    }
  }
}
