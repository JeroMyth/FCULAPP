export class Cadeira {
    constructor(
        public codigo: string,
        public nome: string,
        public curso: string,
        public ects?: string,
        public semestre?: string,
        public ano?:string,
        public professor?: string,
        public duvidas?: string) { }
}
