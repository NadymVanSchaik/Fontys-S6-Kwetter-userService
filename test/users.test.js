const createUser = require('../functions/createUser')

test('test create and save user', () => {
    const newUser = createUser({
        name: "user",
    })
    expect(newUser.name).toBe("user");
    expect(newUser.kweetCounter).toBe(0);
});