import { Unidade } from "./unidade.model"

export class Matricula {
    constructor(
        public anoLectivo: string,
        public validade: Boolean,
        public unidades: String[],
        public id_user: string) { }

}