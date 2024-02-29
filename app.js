

const tasa = 15;
let dinero = 100000;
const years = 80;



const calcularInteresCompuesto = ( tasa, dinero, years ) => {
    
    let rendimiento;

    for (let i = 1; i <= years; i++) {
        rendimiento = dinero * tasa /100;
        dinero = dinero + rendimiento;
        
        console.log(` año: ${i } - dinero: $ ${ dinero.toFixed(2) } `);
        
    }
}
    
calcularInteresCompuesto( tasa, dinero, years );
    
    







