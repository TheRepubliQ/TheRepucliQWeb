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
export class Home {
  id!: number;
  descr?: string;
  tipo?: string;
  preco?: number;
  ofertado?: boolean;
  endereco?: {
    pais?: string;
    estado?: string;
    numero?: string;
    rua?: string;
    bairro?: string;
    cidade?: string;
    cep?: string;
    complemento?: string;
  };
  user: any;

  constructor(user_id: number){
    this.user = new User();
    this.user.id = user_id;
  }

  static toJson(home: Home): any {
    return {
      id: home.id,
      descr: home.descr,
      tipo: home.tipo,
      preco: home.preco,
      ofertado: home.ofertado,
      endereco: {
        pais: home.endereco?.pais,
        estado: home.endereco?.estado,
        numero: home.endereco?.pais,
        rua: home.endereco?.rua,
        bairro: home.endereco?.cidade,
        cidade: home.endereco?.cidade,
        cep: home.endereco?.cep,
        complemento: home.endereco?.complemento,
      },
      user: home.user
    }
  }
}

