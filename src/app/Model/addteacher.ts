import { DatePipe } from "@angular/common";
import { MatDateFormats } from "@angular/material/core";

export class addteacher{
    constructor(
        public Fname: String,
        public Lname: String,
        public DOB: String ,
        public Gender: String,
        public EXP: Number,
        public subject: String,
        public status: String,
    ){}
}
