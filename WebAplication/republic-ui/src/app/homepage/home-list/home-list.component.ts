import { Component } from '@angular/core';
import { HomepageServic } from '../homepage.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})

export class HomeListComponent {
  homes = []


  constructor(
    private homepageService: HomepageServic,
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
}
