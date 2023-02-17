const Intern = require('../lib/Intern');
const intern = new Intern('scott', '1', 'scott@gmail.com', 'KU');

test('should return constructor values for manager object', () => {
    expect(intern.name).toBe('scott');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('scott@gmail.com');
    expect(intern.school).toBe('KU')
});

test('should get name from getName() method', () => {
    expect(intern.getName()).toBe('scott')
});

test('should get id from getId() method', () => {
    expect(intern.getId()).toBe('1')
});

test('should get email from getEmail() method', () => {
    expect(intern.getEmail()).toBe('scott@gmail.com')
});
test('should get school from getSchool() method', () => {
    expect(intern.getSchool()).toBe('KU')
});

test('should get role from getRole() method', () => {
    expect(intern.getRole()).toBe('Intern')
})