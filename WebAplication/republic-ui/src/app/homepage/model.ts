
export class Address {
  pais?: string;
  estado?: string;
  numero?: string;
  rua?: string;
  bairro?: string;
  cidade?: string;
  cep?: string;
  complemento?: string;
}


export class Home {
  id?: number;
  titulo?: string;
  descr?: string;
  tipo?: string;
  preco?: number;
  ofertado?: boolean;
  endereco = new Address();
  user?: {
    id: number;
    email: string;
    telefone: string;
  };


  static toJson(home: Home): any {
    return {
      id: home.id,
      titulo: home.titulo,
      descr: home.descr,
      tipo: home.tipo,
      preco: home.preco,
      ofertado: home.ofertado,
      endereco: {
        pais: home.endereco?.pais,
        estado: home.endereco?.estado,
        numero: home.endereco?.pais,
        rua: home.endereco?.rua,
        bairro: home.endereco?.bairro,
        cidade: home.endereco?.cidade,
        cep: home.endereco?.cep,
        complemento: home.endereco?.complemento,
      },
      user: {
        id: home.user?.id,
        email: home.user?.email,
        telefelone: home.user?.telefone
      }
    }
  }

}

export class HomeRegister {
  id?: number;
  titulo?: string;
  descr?: string;
  tipo?: string;
  preco?: number;
  ofertado?: boolean;
  endereco = new Address();
  user?: number;


  static toJson(home: HomeRegister): any {
    return {
      id: home.id,
      titulo: home.titulo,
      descr: home.descr,
      tipo: home.tipo,
      preco: home.preco,
      ofertado: true,
      endereco: {
        pais: home.endereco?.pais,
        estado: home.endereco?.estado,
        numero: home.endereco?.pais,
        rua: home.endereco?.rua,
        bairro: home.endereco?.bairro,
        cidade: home.endereco?.cidade,
        cep: home.endereco?.cep,
        complemento: home.endereco?.complemento,
      },
      user: home.user
    }
  }

}

