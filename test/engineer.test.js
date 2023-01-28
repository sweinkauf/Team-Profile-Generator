const Engineer = require('../lib/engineer');
const engineer = new Engineer('scott', '1', 'scott@gmail.com', 'sweinkauf');

test('should return constructor values for manager object', () => {
    expect(engineer.name).toBe('scott');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('scott@gmail.com');
    expect(engineer.github).toBe('sweinkauf')
});

test('should get name from getName() method', () => {
    expect(engineer.getName()).toBe('scott')
});

test('should get id from getId() method', () => {
    expect(engineer.getId()).toBe('1')
});

test('should get email from getEmail() method', () => {
    expect(engineer.getEmail()).toBe('scott@gmail.com')
});
test('should get github from getGithub() method', () => {
    expect(engineer.getGithub()).toBe('sweinkauf')
});

test('should get role from getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer')
})