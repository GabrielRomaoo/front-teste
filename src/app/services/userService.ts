import { Injectable } from "@angular/core";
import { createUserRequest } from "../models/createUserRequest";
import { HttpClient } from '@angular/common/http';
import { ContractResult } from "../models/contractResult";
import { getUserByIdRequest } from "../models/getUserByIdRequest";
import { deleteUserRequest } from "../models/deleteUserRequest";
import { updateUserRequest } from "../models/updateUserRequest";

@Injectable()
export class UserService {

    apiUrl: 'https://localhost:44360/';

    constructor(private http: HttpClient) {

    }

    createUser(request: createUserRequest) {

        return this.http.post<ContractResult>(`${this.apiUrl}/api/User/Create`, request);
    }

    deleteUser(request: deleteUserRequest) {

        return this.http.post<ContractResult>(`${this.apiUrl}/api/User/Delete`, request);
    }

    updateUser(request: updateUserRequest) {

        return this.http.post<ContractResult>(`${this.apiUrl}/api/User/Update`, request);
    }

    listUsers() {

        return this.http.get<ContractResult>(`${this.apiUrl}/api/User/List`);
    }

    getByIdUsers(request: getUserByIdRequest) {

        return this.http.post<ContractResult>(`${this.apiUrl}/api/User/List`, request);
    }

}
