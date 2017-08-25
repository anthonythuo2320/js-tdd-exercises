function findMultipleNeedles(haystackArray) {
    // ToDo: Implement this function to make all the tests below pass
    // DO NOT Change the tests (you can add more tests though)
    var result=[];
    for (i = 0; i < haystackArray.length; i++){
        if (haystackArray[i]==='needle'){
            result.push(i);
        }

    } return result;
}


test('the function returns an array of positions where a needle is found', function () {
    var haystack = ['needle', 'hay', 'rabbit', 'needle', 'hat'];
    var position = findMultipleNeedles(haystack);
    expect(position).toEqual([0, 3]);
});

test('the function returns an array of one element if the needle is found once', function () {
    var haystack = ['needle', 'hay', 'rabbit', 'hat'];
    var position = findMultipleNeedles(haystack);

    expect(position).toEqual([0]);
});


test('the function can find an element at the end of the haystack', function () {
    var haystack = ['hay', 'rabbit', 'hat', 'needle'];
    var position = findMultipleNeedles(haystack);

    expect(position).toEqual([3]);
});

test('the function returns an empty array if the element is not found', function () {
    var haystack = ['stack', 'hay', 'rabbit', 'hat'];
    var position = findMultipleNeedles(haystack);

    expect(position).toEqual([]);
});
