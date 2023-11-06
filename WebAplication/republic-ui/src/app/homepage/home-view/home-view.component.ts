import { Component } from '@angular/core';
import { HomepageServic } from '../homepage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {

  home: any = {}
  homes: any = []

  constructor(
    private service: HomepageServic,
    private router: Router
  ) { }

  ngOnInit() : void{
    this.getHomeView();
  }

  getHomeView(): void {
    this.service.homeView()
      .then(result => {
        this.home = result;
      }).catch(error => console.log(error))
  }


}
