import { Component, EventEmitter, Output } from '@angular/core';
import { HomepageServic } from '../homepage.service';
import { Router } from '@angular/router';
import { Home } from '../model';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})

export class HomeListComponent {
  homes = []

  constructor(
    private homepageService: HomepageServic,
    private router: Router
  ){}

   ngOnInit(): void {
    this.list();
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
