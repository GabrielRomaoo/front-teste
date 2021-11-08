import { Escolaridade } from "./escolaridade";

export interface updateUserRequest {
    Nome: string;
    Sobrenome: string;
    Email: string;
    DataNascimento: Date;
    Escolaridade: Escolaridade;

}
