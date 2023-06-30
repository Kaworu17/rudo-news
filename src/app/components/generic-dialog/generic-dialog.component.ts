import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.less'],
})
export class GenericDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<GenericDialogComponent>
  ) {}

  public acceptDialog: boolean = false;

  onSave(): void {
    this.dialogRef.close({
      acceptDialog: true,
    });
  }

  onClose(): void {
    this.dialogRef.close({
      acceptDialog: false,
    });
  }
}
