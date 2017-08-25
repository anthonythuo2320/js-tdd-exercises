function convertToNewRoman(number) {
    // ToDo: do the proper implementation using TDD
   /* var result = ""
    for (d=0; d <number;d++){
        result = 'I' + result; 
    }

    return result*/

    
}


//create a for loop for x to loop over a number

/* write the tests */
test('convertToNewRoman should return I for 1', function() {
    var result = convertToNewRoman(1);
    expect(result).toBe('I');
});

test ('convertToNewRoman should return II for 2', function () {
    var result = convertToNewRoman(2);
    expect(result).toBe("II");
});

test ('convertToNewRoman should return III for 3',function (){
    var result =  convertToNewRoman (3);
    expect (result).toBe("III");
} )