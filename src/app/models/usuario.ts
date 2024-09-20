
export class Usuario{

    constructor(
        public nombre: string,
        public correo: string,
        public rol: string,
        public estado: boolean,
        public password?: string,
        public uid?: string,
    ) {}

}