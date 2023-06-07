import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'forgotten-password-dialog',
  templateUrl: './forgotten-password-dialog.component.html',
  styleUrls: ['./forgotten-password-dialog.component.less'],
})
export class ForgottenPasswordDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<ForgottenPasswordDialogComponent>
  ) {
    this.isMailExisting();
  }

  public mailGiven: string = this.data;
  public mailDB: string[] = [
    'alejandro@rudo.com',
    'rafa@rudo.com',
    'william@rudo.com',
  ];

  isMailExisting(): boolean {
    if (this.mailDB.includes(this.mailGiven)) {
      return true;
    } else return false;

    /* console.log('Prueba; ', this.test);
    console.log('Prueba2; ', this.mailDB); */
  }

  onSave(): void {
    this.dialogRef.close();
  }
}
