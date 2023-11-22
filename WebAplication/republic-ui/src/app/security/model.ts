import * as moment from 'moment';

export class User{
  name?: string;
  email?: string;
  password?: string;
  telefone?: string;
  dataNascimento?: string;
  gender?: string;
  login?: string;
  cpf?: string;
  prop?: boolean;



  static toJson(user : User):any{
    return{
      name: user.name,
      email: user.email,
      password: user.password,
      telefone: user.telefone,
      dataNascimento: moment(user.dataNascimento).format('DD/MM/YYYY'),
      gender: user.gender,
      login: user.login,
      cpf: user.cpf,
      prop: user.prop
    }
  }
}



