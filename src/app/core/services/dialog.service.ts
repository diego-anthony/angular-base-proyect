import { Injectable } from '@angular/core';

import { ConfirmDialogComponent, ConfirmType } from '@shared/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialog } from '@shared/confirm-dialog/confirm-dialog.component';

@Injectable({ providedIn: 'root' })
export class DialogService {

    constructor(
        private _dialog: MatDialog) { }

    openConfirm(message: string, title: string = 'ESSI Paciente') {
        const data: ConfirmDialog = { title, message, type: ConfirmType.WARNING };
        const config: MatDialogConfig = { data };
        return this._dialog.open(ConfirmDialogComponent, config).afterClosed();
    }
}
