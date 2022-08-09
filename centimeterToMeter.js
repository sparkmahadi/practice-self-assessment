function centimeterToMeter(centimeter){
    let meter = centimeter/100;
    return meter;
}

const cmAmount = 500;
const meterAmount = centimeterToMeter(cmAmount);
console.log(meterAmount);