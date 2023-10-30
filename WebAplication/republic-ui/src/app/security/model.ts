
export class User{
  name?: string;
  email?: string;
  password?: string;
  telefone?: string;
  dataNascimento?: string;
  gender?: string;
  login?: string;
  cpf?: string;


  static toJson(user : User):any{
    return{
      name: user.name,
      email: user.email,
      password: user.password,
      telefone: user.telefone,
      dataNascimento: user.dataNascimento,
      gender: user.gender,
      login: user.login,
      cpf: user.cpf
    }
  }
}

export class Home {
  id!: number;
  descr?: string;
  tipo?: string;
  preco?: number;
  ofertado?: boolean;
  pais?: string;
  estado?: string;
  numero?: string;
  rua?: string;
  bairro?: string;
  cidade?: string;
  cep?: string;
  complemento?: string;
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
      pais: home.pais,
      estado: home.estado,
      numero: home.numero,
      rua: home.rua,
      bairro: home.bairro,
      cidade: home.cidade,
      cep: home.cep,
      complemento: home.complemento,
      user: home.user
    }
  }
}

