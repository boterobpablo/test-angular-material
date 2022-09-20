import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService } from 'primeng/api';
import { DialogComponent } from './angular-material/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular-material';

  valueSlider = 50;

  constructor(
    public dialog: MatDialog,
    private confirmationService: ConfirmationService
  ) {}

  /* dialog */
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: 'Juan Pablo Botero' }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /* button pull request */
  showInConsole(): void {
    console.log('Button clicked');
  }

  confirm(): void {
    this.confirmationService.confirm({
      message: `Archivo Siiuuu ya cargado`,
      acceptLabel: 'Ok',
      rejectVisible: false
    });
  }
}
