class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }

    static pickSubstituteTeachers(substituteTeachers) {
        let random = Math.floor(Math.random() * (substituteTeachers.length - 1));
        return substituteTeachers[random];
    }

    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === number) {
            this._numberOfStudents = newNumberOfStudents;
        } else {
            return 'Invalid input: numberOfStudents must be set to a Number.';
        }
    }
}

//QuickFacts Method Test
const binghamton = new School('Binghamton', 'high', 2000);
binghamton.quickFacts();

//PickSubstituteTeachers Method Test
let teachers = ['Jim', 'Suzy', 'Fred', 'Marlene', 'Heather'];
console.log(School.pickSubstituteTeachers(teachers));