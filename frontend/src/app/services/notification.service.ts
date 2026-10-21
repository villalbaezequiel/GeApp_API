import { Injectable } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar, MatLegacySnackBarConfig as MatSnackBarConfig } from '@angular/material/legacy-snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  config:MatSnackBarConfig = {duration: 3000, horizontalPosition: 'center', verticalPosition:'top'};
  
  error(msg){
     //this.config['panelClass'] = ['notification','error']
     this.snackBar.open(msg, '', this.config);
  }

  info(msg){
    this.snackBar.open(msg, '', this.config);
  }

}
