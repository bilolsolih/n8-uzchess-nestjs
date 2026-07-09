import {RegisterRequest} from "./register.request";

export class RegisterCommand {
    constructor(public payload: RegisterRequest) {
    }
}