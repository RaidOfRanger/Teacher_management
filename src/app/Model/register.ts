import { DatePipe } from "@angular/common";
import { MatDateFormats } from "@angular/material/core";


export class RegisterService{
    constructor(
        public Username: String,
        public Email: String,
        public Role: String,
        public Pass: String
    ){}
}
