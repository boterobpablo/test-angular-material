import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './angular-material/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular-material';

  valueSlider = 50;

  constructor(public dialog: MatDialog) {}

  /* dialog */
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: 'Juan Pablo Botero' }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /* button pull request */
  showInConsole() {
    console.log('Button clicked');
  }
}
