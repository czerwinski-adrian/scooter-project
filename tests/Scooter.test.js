const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter integrity checks', () => {
  test('scooter has correct properties', () => {
    // edit this to be a real test!
    expect(Scooter.station).toBe('Manchester', null)
    expect(Scooter).toHaveProperty('user', null);
    expect(Scooter).toHaveProperty('serial');
    expect(Scooter).toHaveProperty('charge');
    expect(typeof Scooter.isBroken).toEqual('boolean');
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method

})
