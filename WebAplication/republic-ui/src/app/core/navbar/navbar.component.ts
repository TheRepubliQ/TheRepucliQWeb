import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { RegisterService } from 'src/app/register/register.service';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  displayingMenu = true;
  isLoged = false;
  items!: MenuItem[];

  constructor(
    public auth: AuthService,
    private router: Router,
    private service: RegisterService
  ) { }

  ngOnInit() {
    this.isLoged = this.isLog();
    if(this.isLoged){
      this.isProp();
    }
  }

  isProp(): void{
    this.service.getUserById()
    .then(response =>{
      if(response.prop){
        this.itemProp();
      }else{
        this.itemUser();
      }
    })
  }

  itemProp(): void {
    this.items = [
      {
        label: this.auth.jwtPayload?.user_name,
        items: [{
          label: 'Meus dados',
          icon: 'pi pi-fw pi-plus',
          routerLink: ['/alterarDados']

        },
        {
          label: 'Meus interesses',
          icon: 'pi pi-fw pi-plus',
          routerLink: ['/interest']
        },
        {
          label: 'Minhas moradias',
          icon: 'pi pi-fw pi-plus',
          routerLink: ['/myHomes']

        },

        {
          label: 'Moradias com interesse',
          icon: 'pi pi-fw pi-plus',
          routerLink: ['/interestOwner']
        }

        ]

      }

    ];
  }

  itemUser(): void{
    this.items = [
      {
        label: this.auth.jwtPayload?.user_name,
        items: [{
          label: 'Meus dados',
          icon: 'pi pi-fw pi-plus',
          routerLink: ['/alterarDados']

        },
        {
          label: 'Meus interesses',
          icon: 'pi pi-fw pi-plus',
          routerLink: ['/interest']
        }

        ]

      }

    ];
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
