// write a function findByAge that finds people over a certain age (age is a parameter)
// signature: findByAge(age) example: findByAge(60) returns every person over 60
function findByAge(persons, age) {
    //am going to create an empty array to push the people with `age` in  to it.
    //push people over `age` into the new array.
    // go over the persons array
    //for each object in `persons` 1.if the over age is 60 push into new array.
    //return the new array 
    var newpersons = []

    for (i = 0; i < persons.length; i++) {

        var person = persons[i]
        
        if (person.age >= age) {
            newpersons.push(person)

        }
    }
    
    return newpersons
};



test('It finds people over a certain age', function () {
    var persons = [
        {
            firstName: "Virginia",
            lastName: "Woolf",
            occupation: "writer",
            age: 59,
            alive: false
        },
        {
            firstName: "Zadie",
            lastName: "Smith",
            occupation: "writer",
            age: 41,
            alive: true
        },
        {
            firstName: "Jane",
            lastName: "Austen",
            occupation: "writer",
            age: 41,
            alive: false
        },
        {
            firstName: "bell",
            lastName: "hooks",
            occupation: "writer",
            age: 64,
            alive: true
        },
    ];
    var result = findByAge(persons, 60);
    expect(result).toEqual([
        {
            firstName: "bell",
            lastName: "hooks",
            occupation: "writer",
            age: 64,
            alive: true
        },
    ]);var result = findByAge(persons, 50);
    expect(result).toEqual([
        {
            firstName: "Virginia",
            lastName: "Woolf",
            occupation: "writer",
            age: 59,
            alive: false
        },
        {
            firstName: "bell",
            lastName: "hooks",
            occupation: "writer",
            age: 64,
            alive: true
        },
    ]);
    
});
