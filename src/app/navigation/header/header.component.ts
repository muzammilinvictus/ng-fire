import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth!: boolean;
  authSubscription!: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(x => {
      this.isAuth = x;
    })
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  onLogout(){
    this.authService.logOut();
  }

  ngOnDestroy(): void {
      this.authSubscription.unsubscribe();
  }

}
