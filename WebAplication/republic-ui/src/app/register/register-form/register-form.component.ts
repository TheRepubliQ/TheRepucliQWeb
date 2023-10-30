import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.form = this.formBuilder.group( {
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
      dataNascimento: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      Cpf: ['', [Validators.pattern('^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$')]]
    });
  }

  onSubmit(registro : NgForm) {

  }


}
