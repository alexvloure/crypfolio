export class InfoMoneda {
    id: string;
    moneda : string;
    symbol : string;

    constructor( id: string, moneda : string, symbol : string){
        this.id = id;
        this.moneda = moneda;
        this.symbol = symbol;
    }
}
