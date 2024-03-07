const findTheOldest = function (people) {
    let oldestPerson;
    let longestLife = 0;

    for (let person of people) {
        let lifeSpan;

        if (!person.yearOfDeath) {
            const todaysYear = new Date().getFullYear();
            lifeSpan = todaysYear - person.yearOfBirth;
        }
        else {
            lifeSpan = person.yearOfDeath - person.yearOfBirth;
        }

        if (lifeSpan > longestLife) {
            oldestPerson = person;
            longestLife = lifeSpan;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
