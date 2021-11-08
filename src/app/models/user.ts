import { Escolaridade } from "./escolaridade";

export interface User {
    Id : number;
    Nome: string;
    Sobrenome: string;
    Email: string;
    DataNascimento: Date;
    Escolaridade: Escolaridade;
}
