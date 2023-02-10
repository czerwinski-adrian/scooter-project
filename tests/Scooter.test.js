const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter class integrity checks', () => {
  test('scooter class has correct properties', () => {
    // edit this to be a real test!
    let scooter = new Scooter({station: 'Manchester', user: null});

    expect(scooter.station).toBe('Manchester', null);
    expect(scooter).toHaveProperty('user', null);
    expect(scooter).toHaveProperty('serial');
    expect(scooter).toHaveProperty('charge');
    expect(typeof scooter.isBroken).toBe('boolean');
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  let scooter = new Scooter();
  //rent method
  test('rent scooter', () => {
    expect(scooter.station).toBe(null);
    expect(scooter.charge).toBeGraterThan(20);
    expect(typeof scooter.isBroken).toBe(false);
    expect(scooter.user).toBe('user');
  })
  //dock method
  test('dock scooter', () => {
    expect(scooter.station).toBe('new station')
    expect(scooter.user).toBe(null);
  })
  //requestRepair method

  //charge method
  test('charge scooter', () => {
    expect(scooter.charge).toBe(100);
  })
})
