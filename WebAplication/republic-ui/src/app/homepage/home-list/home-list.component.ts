import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeFilter, HomepageServic } from '../homepage.service';
import { Home } from '../model';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})

export class HomeListComponent {
  homes = []

  type?: string;
  address?: string;

  types = [
    { label: 'Republica',   value: 'REPUBLICA' },
    { label: 'Apartamento', value: 'APARTAMENTO' },
    { label: 'Casa',        value : 'CASA'},
    { label: 'Pensão',      value: 'PENSAO' },
    { label: 'Kitnet', value: 'KITNET' }
  ];

  constructor(
    private homepageService: HomepageServic,
    private router: Router
  ){}

   ngOnInit(): void {
    this.list();
   }

   search(): void {

    const filter: HomeFilter = {
      user: null,
      type: this.type,
      address: this.address
    }

    this.homepageService.search(filter)
      .then(result => {
        this.homes = result;
      })
      .catch(error => console.log(error));

   }


   limpar(): void{
    this.type = "";
    this.address = "";

    this.search();
   }

   list(): void{
    this.homepageService.list()
      .then(result => {
        this.homes = result;
      }).catch(error => console.log(error));
   }

   homeView(home : Home): void {
    this.router.navigate(['/homeView/', home.id]);
   }
}
