const Scooter = require('../src/Scooter').default
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('scooterApp class integrity checks', () => {
    test('scooterApp clss has correct properties', () => {

    let scooterApp = new ScooterApp();
//station
    expect(scooterApp).toHaveProperty('stations');
    expect(typeof scooterApp.stations).toBe('object');
//registeredUser
    expect(scooterApp).toHaveProperty('registeredUsers');
    expect(typeof scooterApp.registeredUsers).toBe('onject');
    })

// register user

// log in

// log out

// rent scooter

// dock scooter
})