import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent } from 'src/app/components/generic-dialog/generic-dialog.component';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent {
  constructor(public dialog: MatDialog) {}
  openGenericDialog() {
    let testText: string =
      'Estás a punto de cerrar la sesión, ¿quieres continuar?';
    let titleText: string = 'Cerrar sesión';
    this.dialog.open(GenericDialogComponent, {
      width: '312px',
      panelClass: 'custom-dialog',
      data: { testText, titleText, cancel: true },
    });
  }
}
