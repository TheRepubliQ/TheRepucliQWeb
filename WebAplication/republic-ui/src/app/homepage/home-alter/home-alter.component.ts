import { Component } from '@angular/core';
import { HomeRegister } from '../model';
import { HomepageServic } from '../homepage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-alter',
  templateUrl: './home-alter.component.html',
  styleUrls: ['./home-alter.component.css']
})
export class HomeAlterComponent {
  home = new HomeRegister();


  homeType = [
    { label: 'Republica',   value: 'REPUBLICA' },
    { label: 'Apartamento', value: 'APARTAMENTO' },
    { label: 'Casa',        value : 'CASA'},
    { label: 'Pensão',      value: 'PENSAO' },
    { label: 'Kitnet', value: 'KITNET' }
  ];

  constructor(
    private registerService: HomepageServic,
    private router: Router,
    private route: ActivatedRoute,
    private service: HomepageServic,
    ) {}

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.getHomeView(id);
  }

  getHomeView(id : number): void {
    this.service.homeView(id)
      .then(result => {
        this.home = result;
      }).catch(error => console.log(error))
  }

  save(homeRegister: NgForm){
    // Chama metódo para pegar dados do usuário de acordo com o id;
    this.registerService.update(this.home, this.route.snapshot.params['id'])
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => error);
  }


}
