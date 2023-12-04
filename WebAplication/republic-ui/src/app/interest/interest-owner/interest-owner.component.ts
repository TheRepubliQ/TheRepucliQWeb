import { Component } from '@angular/core';
import { InterestService } from '../interest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interest-owner',
  templateUrl: './interest-owner.component.html',
  styleUrls: ['./interest-owner.component.css']
})
export class InterestOwnerComponent {
  homes = [];

  constructor(
    private interestService: InterestService

  ){}

   ngOnInit(): void {
    this.list();
   }

   list(): void{
    this.interestService.listForOwnerId()
      .then(result => {
        this.homes = result;
      }).catch(error => console.log(error));
   }


}
