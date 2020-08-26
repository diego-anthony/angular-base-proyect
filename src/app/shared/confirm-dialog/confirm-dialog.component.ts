import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialog, ConfirmType } from '@core/models/confirm-dialog.model';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  isTypeWaring = this.data.type === ConfirmType.WARNING;
  isTypeInfo = this.data.type === ConfirmType.INFO;
  isTypeError = this.data.type === ConfirmType.ERROR;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialog,
  ) {
   }

  ngOnInit() {
  }
}
