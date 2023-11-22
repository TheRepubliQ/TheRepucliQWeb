import { Component } from '@angular/core';
import { HomepageServic } from '../homepage.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {

  home: any = {}

  constructor(
    private service: HomepageServic,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() : void{
    const id = this.route.snapshot.params['id'];
    this.getHomeView(id);
  }

  getHomeView(id : number): void {
    this.service.homeView(id)
      .then(result => {
        this.home = result;
      }).catch(error => console.log(error))
  }


}
