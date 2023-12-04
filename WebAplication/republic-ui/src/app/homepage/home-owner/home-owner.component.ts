import { Component } from '@angular/core';
import { HomepageServic } from '../homepage.service';

@Component({
  selector: 'app-home-owner',
  templateUrl: './home-owner.component.html',
  styleUrls: ['./home-owner.component.css']
})
export class HomeOwnerComponent {
  homes = [];

  constructor(
    private service: HomepageServic ){}

   ngOnInit(): void {
    this.list();
   }

   list(): void{
    this.service.listForUserId()
      .then(result => {
        this.homes = result;
      }).catch(error => console.log(error));
   }

   deleteHome(homeid : number): void{
    console.log('Método interestRemove() foi acionado.');
    this.service.remove(homeid)
      .then(() => {
        console.log("excluiu");
        this.list();
      })
      .catch(error => {
        console.error("Erro ao excluir", error);
      });
   }
}
