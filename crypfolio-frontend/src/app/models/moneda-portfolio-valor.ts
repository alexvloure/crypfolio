import { MonedaPortfolio } from "./moneda-portfolio";

export class MonedaPortfolioValor {
    monedaPortfolio : MonedaPortfolio;
    costeMedio : number;
    precioActual : number;
    imagen : string;

    constructor(monedaPortfolio : MonedaPortfolio, costeMedio : number, precioActual : number, imagen : string){
        this.monedaPortfolio = monedaPortfolio;
        this.costeMedio = costeMedio;
        this.precioActual = precioActual;
        this.imagen = imagen;
    }
}
