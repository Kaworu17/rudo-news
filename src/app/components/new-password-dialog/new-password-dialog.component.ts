import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password-dialog',
  templateUrl: './new-password-dialog.component.html',
  styleUrls: ['./new-password-dialog.component.less'],
})
export class NewPasswordDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: boolean,
    private dialogRef: MatDialogRef<NewPasswordDialogComponent>,
    private router: Router
  ) {}

  onSave(): void {
    if (this.data) {
      this.router.navigateByUrl('/login');
    }

    this.dialogRef.close();
  }
}
