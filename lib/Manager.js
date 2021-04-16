// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name, id, email, officeNum, role) {
        super(name, id, email);
        this.officeNum = officeNum;
        this.role = role;
    }
    getRole() {
        return this.role
    }
    
    getOfficeNum() {
        return this.officeNum
    }
}   

// needs officeNumber and
// getRole() - overridden to return 'Manager'

module.exports = Manager;