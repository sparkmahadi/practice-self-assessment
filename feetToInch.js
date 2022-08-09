function feetToInch(feet){
    let inches = feet*12;
    return inches;
}

const feetAmount=2;
const inchAmount = feetToInch(feetAmount);
console.log(inchAmount);