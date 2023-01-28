const Manager = require('../lib/manager');
const manager = new Manager('scott', '1', 'scott@gmail.com', '911');

test('should return constructor values for manager object', () => {
    expect(manager.name).toBe('scott');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('scott@gmail.com');
    expect(manager.officeNumber).toBe('911')
});

test('should get name from getName() method', () => {
    expect(manager.getName()).toBe('scott')
});

test('should get id from getId() method', () => {
    expect(manager.getId()).toBe('1')
});

test('should get email from getEmail() method', () => {
    expect(manager.getEmail()).toBe('scott@gmail.com')
});
test('should get officeNumber from getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('911')
});

test('should get role from getRole() method', () => {
    expect(manager.getRole()).toBe('Manager')
})