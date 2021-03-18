//oz to ml conversion with 2 decimal places
export const ozToMl = (volumeOz) => {
    let volumeMl = (volumeOz * 29.5735296 ).toFixed(2);
    return volumeMl;
    
}

//inches to cm conversion with 2 decimal places
export const inToCm = (heightInches) => {
    let heightCm = (heightInches * 2.54).toFixed(2) ;
    return heightCm;
    
}

//pound to kg conversion with 2 decimal places
export const lbsToKg = (weightPound) => {
    let weightKg = (weightPound * 0.45359237).toFixed(2) ;
    return weightKg;
    
}

//ml to oz conversion with 2 decimal places
export const mlToOz = (volumeMl) => {
    let volumeOz = ( volumeMl * 0.0338 ).toFixed(2);
    return volumeOz;
    
}

//cm to inches conversion with 2 decimal places
export const cmToIn = (heightCm) => {
    let heightInches = ( heightCm * 0.3937007874 ).toFixed(2) ;
    return heightInches;
    
}

//kg to pound conversion with 2 decimal places
export const kgToLbs = (weightKg) => {
    let weightPound = ( weightKg * 2.20462 ).toFixed(2) ;
    return weightPound;
    
}