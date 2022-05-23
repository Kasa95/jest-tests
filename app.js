
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(a) {
    let usd = a/oneEuroIs.USD
    return usd*oneEuroIs.JPY
}
function fromEuroToDollar(a) {
    return a*oneEuroIs.USD
}
function fromYenToPound(a) {
    let yen = a/oneEuroIs.JPY
    return yen*oneEuroIs.GBP
}



// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};