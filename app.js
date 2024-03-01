
const tasa  = 1;
const years = 20;
let dinero  = 100000;

const calcularInteresCompuesto = ( tasa, dinero, years ) => {
    
    for (let i = 1; i <= years; i++) {
        let rendimiento = dinero * tasa /100;
        dinero = dinero + rendimiento;
        let dineroD = dinero.toFixed(2);
        let dineroM = dinero.toLocaleString("en");
        console.log(` año: ${ i } - ganancia: ${ rendimiento.toFixed(2) } - dinero: $${ dineroM } `);
    }
}
    
calcularInteresCompuesto( tasa, dinero, years );

    







