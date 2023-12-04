import { Component } from '@angular/core';
import { InterestService } from '../interest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent {
  homes = [];

  constructor(
    private interestService: InterestService,
    private router: Router
  ){}

   ngOnInit(): void {
    this.list();
   }

   list(): void{
    this.interestService.listForUserId()
      .then(result => {
        this.homes = result;
      }).catch(error => console.log(error));
   }

   deleteHome(homeid : number): void{
    console.log('Método interestRemove() foi acionado.');
    this.interestService.removeByHomeId(homeid)
      .then(() => {
        console.log("excluiu");
        this.list();
      })
      .catch(error => {
        console.error("Erro ao excluir", error);
      });
   }

}
