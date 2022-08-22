const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

//dollarToYen
test ("One dollar should be 106.583 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    //use the function like its supposed to be used
    const yen = fromDollarToYen(3.5)

    // if 1 dollar is supposed to be 106.583 yen, then 3.5 dollars should be (3.5 * 106.583)
    const expected = 3.5 * 106.58;

    // this is the comparison for the unit test
    expect(fromDollarToYen(3.5)).toBe(373.03);
})

//yenToPound
test ("One yen should be 0.0078 pounds", function() {
    const { fromYenToPound } = require('./app.js')
    const pound = fromYenToPound(3.5)
    const expected = 3.5 * 0.00781861;
    expect(fromYenToPound(3.5)).toBe(0.027365135);
})