import { Component } from '@angular/core';
import { InterestService } from '../interest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interest-contacts',
  templateUrl: './interest-contacts.component.html',
  styleUrls: ['./interest-contacts.component.css']
})
export class InterestContactsComponent {
  contacts = [];


  constructor(
    private interestService: InterestService,
    private route: ActivatedRoute,

  ){}

   ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.list(id);


   }

   list(id: number): void{
    this.interestService.listForHomeId(id)
      .then(result => {
        this.contacts = result;
      }).catch(error => console.log(error));
   }

}
