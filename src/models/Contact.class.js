import { MARK } from "./mark.enum";

export class Contact {
    name = '';
    tel = '';
    conected = false;
    status = MARK.NORMAL;

    constructor (name, tel, conected, status) {
        this.name = name;
        this.tel = tel;
        this.conected = conected;
        this.status = status;
    }
}