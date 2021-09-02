export class MonedaPortfolio {
    nombreUsuario: string;
    idMoneda: string;
    moneda: string;
    symbol : string;
    cantidad: number;
    precio: number;

    constructor(nombreUsuario: string, idMoneda: string, moneda: string, symbol: string, cantidad: number, precio: number){
        this.nombreUsuario = nombreUsuario;
        this.idMoneda = idMoneda;
        this.moneda = moneda;
        this.symbol = symbol;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}
