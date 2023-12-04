import { Component } from '@angular/core';
import { HomepageServic } from '../homepage.service';
import { ActivatedRoute} from '@angular/router';
import { InterestService } from 'src/app/interest/interest.service';
import { AuthService } from 'src/app/security/auth.service';
import { Interest } from 'src/app/interest/modelInterest';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {

  home: any = {}
  prop?: number;
  interested!: number;
  isLoged?: boolean;

  constructor(
    private service: HomepageServic,
    private route: ActivatedRoute,
    private interestService: InterestService,
    private auth: AuthService
  ) { }

  ngOnInit() : void{
    const id = this.route.snapshot.params['id'];
    this.isLoged = this.isLog()
    this.getHomeView(id);
  }

  isLog(): boolean {
    return this.auth.jwtPayload?.user_id;
  }

  getHomeView(id : number): void {
    this.service.homeView(id)
      .then(result => {
        this.home = result;
        this.prop = result.user.id;
      }).catch(error => console.log(error))

      this.isInterest();

  }

  isInterest(): void {
    this.service.isInterested(this.route.snapshot.params['id'], this.auth.jwtPayload?.user_id)
      .then(result => {
        if (result) {
          this.interested = result.id;
        } else {
          console.error('O resultado retornado é nulo.');
        }
      })
      .catch(error => {
        console.error('Erro ao verificar interesse:', error);
      });
  }


  interestRemove(): void {
    console.log('Método interestRemove() foi acionado.');
    this.interestService.remove(this.interested)
      .then(() => {
        this.getHomeView(this.route.snapshot.params['id']);
        console.log("excluiu");
      })
      .catch(error => {
        console.error("Erro ao remover interesse:", error);
        this.getHomeView(this.route.snapshot.params['id']);
      });
  }

  interest(): void{
    const interest = new Interest();
    interest.homeId = this.route.snapshot.params['id'];
    interest.userId = this.auth.jwtPayload?.user_id;
    interest.userProp = this.prop;

    this.interestService.add(interest)
      .then(() => {
      // Após adicionar o interesse com sucesso, recarrega os dados
      this.getHomeView(this.route.snapshot.params['id']); // Obtém novamente os dados atualizados
      })
      .catch(error => console.error(error));

  }


}
