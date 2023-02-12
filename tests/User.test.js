const User = require('../src/User')

// User tests here
// test username
// test password
// test age

describe('user class integrity checks', () => {
    test('user class has correct properties', () =>{

    let user = new User({username: 'user', password: 'password', age: 24});

        expect(user.username).toHaveProperty('user');
        expect(user.password).toHaveProperty('password');
        expect(user.age).toHaveProperty('age');
        expect(typeof user.loggedIn).toBe('boolean');
    }
    )
})

// Method tests 
// test login
test('login user', () =>{
    expect(user.password).toBe('password');
})
// test logout
test('logout user', () =>{
    expect(typeof user.loggedIn).toBe(false);
})