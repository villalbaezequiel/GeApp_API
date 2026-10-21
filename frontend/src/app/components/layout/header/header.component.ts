import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from "../../../auth/services/auth.service";
import { AuthModule } from 'src/app/auth/auth.module';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  isAuthenticated():boolean{
    return this.authService.isAuthenticated();
  }

  logout():void{
    this.authService.logout();
  }

}
