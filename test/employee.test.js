const Employee = require('../lib/Employee');
const employee = new Employee('scott', '1', 'scott@gmail.com');

test('should return constructor values for employee object', () => {
    expect(employee.name).toBe('scott');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('scott@gmail.com');
});

test('should get name from getName() method', () => {
    expect(employee.getName()).toBe('scott')
});

test('should get id from getId() method', () => {
    expect(employee.getId()).toBe('1')
});

test('should get email from getEmail() method', () => {
    expect(employee.getEmail()).toBe('scott@gmail.com')
});

test('should get role from getRole() method', () => {
    expect(employee.getRole()).toBe('Employee')
})