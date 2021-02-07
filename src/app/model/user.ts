import { ResolveStart } from "@angular/router";
import { Role } from "./role";

export class User {
    id:number;
    username:string;
    password:string;
    enabled: boolean;
    roles:Set<Role>;


}
