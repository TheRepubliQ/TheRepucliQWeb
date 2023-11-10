import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/security/model';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent {
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
    ) {}

    save(userForm: NgForm) {
      this.registerService.add(this.user)
        .then(() => {
          this.router.navigate(['/login']);
        })
        .catch(error => error);
    }


}
