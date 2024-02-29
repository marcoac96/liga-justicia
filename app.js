
const tasa  = 15;
const years = 20;
let dinero  = 200000;

const calcularInteresCompuesto = ( tasa, dinero, years ) => {
    
    let rendimiento;

    for (let i = 1; i <= years; i++) {
        rendimiento = dinero * tasa /100;
        dinero = dinero + rendimiento;
        let dineroD = dinero.toFixed(2);
        let dineroM = dinero.toLocaleString("en");
        console.log(` año: ${ i } - dinero: $${ dineroM } `);
    }
}
    
calcularInteresCompuesto( tasa, dinero, years );

    







