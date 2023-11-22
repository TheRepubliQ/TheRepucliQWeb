import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';
import { Home } from '../model';
import { HomepageServic } from '../homepage.service';

@Component({
  selector: 'app-home-register',
  templateUrl: './home-register.component.html',
  styleUrls: ['./home-register.component.css']
})
export class HomeRegisterComponent {
  home = new Home();

  homeType = [
    { label: 'Republica',   value: 'REPUBLICA' },
    { label: 'Apartamento', value: 'APARTAMENTO' },
    { label: 'Casa',        value : 'CASA'},
    { label: 'Pensão',      value: 'PENSAO' },
    { label: 'Kitnet', value: 'KITNET' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private registerService: HomepageServic,
    private route: ActivatedRoute,
    private router: Router
    ) {}



  save(homeRegister: NgForm){
    // Chama metódo para pegar dados do usuário de acordo com o id;
    this.registerService.add(this.home)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => error);
  }

}
