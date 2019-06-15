import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Option } from '../../common/system.interface';

@Component({
  selector: 'remove-host-dialog',
  providers: [
  ],
  styleUrls: ['./removeHostDialog.component.scss'],
  templateUrl: './removeHostDialog.component.html',
})

export class RemoveHostDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RemoveHostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public host: Option ) {

  }

  public onDoneClick(host) {
    this.dialogRef.close(host);
  }

  public onCancelClick() {
    this.dialogRef.close();
  }
}
