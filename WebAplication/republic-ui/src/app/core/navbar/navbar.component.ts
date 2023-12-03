import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  displayingMenu = true;
  isLoged = false;

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

    ngOnInit(){
      this.isLoged = this.isLog();
    }

  isLog(): boolean {
    return this.auth.jwtPayload?.user_id;
  }

  logout(): void {
    this.auth.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => console.log(erro));
  }

}
