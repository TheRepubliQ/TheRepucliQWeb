import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { User } from 'src/app/security/model';
import { RegisterService } from '../register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alter-form',
  templateUrl: './alter-form.component.html',
  styleUrls: ['./alter-form.component.css']
})
export class AlterFormComponent {
  user = new User();

  genders = [
    { label: 'Masculino', value: 'MASCULINO' },
    { label: 'Feminino', value: 'FEMININO' },
    { label: 'Outro', value: 'OUTRO' },
    { label: 'Prefiro não dizer', value: 'PREFIRO_NAO_DIZER' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }


  getUserInfo() {
    this.registerService.getUserById()
      .then(result => {
        this.user = result;
      }).catch(error => console.log(error))
  }


  save() {
    // Chama metódo para pegar dados do usuário de acordo com o id;
    this.registerService.update(this.user)
      .then(() => {
        console.log("Alteração feita!");
      })
      .catch(error => error);
  }

}
