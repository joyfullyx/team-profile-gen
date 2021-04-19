// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'intern';
    }

    getRole(role) {
        return 'Intern'
    }

    getSchool() {
        return this.school
    }
}

// needs school
// getSchool()
// getRole - overridden to return 'Intern'

module.exports = Intern;