test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106,58 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // if 1 dolar are 106,58 yen, then 2 dollar should be ((2/1.2)* 127.9)
    const expected = (2/1.2)* 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(2)).toBe((2/1.2)* 127.9); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One yen should be 0,0062548866301798 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // if 1 yen are 0,00625488663017980 pounds, then 1000 should be ((1000/127.9)* 0.8)
    const expected = (1000/127.9)* 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(1000)).toBe((1000/127.9)* 0.8);
})