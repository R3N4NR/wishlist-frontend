export type Cartinhas = {
    id: string;
    nome: string;
    endereco: string;
    estado: string;
    cidade: string;
    cep: string;
}
export type Pedidos = {
        id: string;
        descricao: string;
        ano: number; 
}

export type Rotas = {
    id: string;
    cidade: string;
}