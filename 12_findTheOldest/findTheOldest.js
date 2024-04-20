const findTheOldest = function(people) {
    let oldest = people[0];

    for (let person of people) {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let personAge = getAge(person.yearOfBirth, person.yearOfDeath);
        if (personAge > oldestAge) {
            oldest = person;
        }
    }
    return oldest;
};
// input is bunch of objects with keys
// finding the oldest so need to get subtract death - birth for age
//     skip if no death date 
// set up var to first person, compare with each one to see if age is greater, 
// if so then set curr to oldest before checking all

// Do not edit below this line
const getAge = function(birth, death) {

    if (!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}
module.exports = findTheOldest;
