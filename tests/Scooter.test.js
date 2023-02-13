const Scooter = require('../src/Scooter').default
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
  const scooter1 = new Scooter(station1);
  const station1 = "Crewe";
  //rent method
  test('rent scooter', () => {
    expect(scooter1.station).toBe(null);
    expect(scooter1.charge).toBeGraterThan(20);
    expect(typeof scooter1.isBroken).toBe(false);
    expect(scooter1.user).toBe('user');
  });
  //dock method
  test('dock scooter', () => {
    expect(scooter.station).toBe('new station')
    expect(scooter.user).toBe(null);
  });
  //requestRepair method
  test('repair scooter', async () => {
    expect(this.isBroken).toBe(false);
  });

  //charge method
  test("charge", async () => {
    await scooter.charge(); // we need to wait for the charge!
    expect(newScooter.charge).toBe(100);
  });
})
