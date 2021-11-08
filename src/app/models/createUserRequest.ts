import { Escolaridade } from "./escolaridade";


export interface createUserRequest {

    Nome: string;
    Sobrenome: string;
    Email: string;
    DataNascimento: Date;
    Escolaridade: Escolaridade;

}
