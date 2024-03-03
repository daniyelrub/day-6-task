class Person {
    constructor(name, nationality, birthDate, achievements, ratings) {
        this.name = name;
        this.nationality = nationality;
        this.birthDate = birthDate;
        this.achievements = achievements;
        this.ratings = ratings;
    }

    toString() {
        return `${this.name} (${this.nationality}): ${this.achievements}`;
    }
}

// Creating an instance of the Person class for Gennady Korotkevich
const gennady = new Person(
    "Gennady Korotkevich",
    ["Belarusian", "Russian"],
    new Date(1994, 8, 25), // Month is zero-indexed
    "Gennady Korotkevich is a Belarusian competitive programmer who has won major international competitions since the age of 11, as well as numerous national competitions. His top accomplishments include six consecutive gold medals in the International Olympiad in Informatics as well as the world championship in the 2013 and 2015 International Collegiate Programming Contest World Finals. As of October 2023, Gennady is the highest-rated programmer on Codeforces, CodeChef, Topcoder, AtCoder and HackerRank. In January 2022, he achieved a historic rating of 3979 on Codeforces, becoming the first to break the 3900 barrier."
);

console.log(gennady.toString());
