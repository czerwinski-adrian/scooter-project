class Scooter{
  // scooter code here
  static nextSerial = 1;

  constructor(station){
    this.station = station;
    this.user = user;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }
// rent method
  rent(){
    if (this.charge > 20 && !this.isBroken){
      this.user = config.user;
      this.station = null; 
    }else if(this.charge <= 20){
      throw new Error('Scooter needs to charge');
    }else if(this.isBroken = true){
      throw new Error('Scooter needs repair');
    }
  }
// dock method
  dock(station){
    if(this.user = null){
      return this.station = station;
    }
  }
// recharge method
async charge(){
  console.log('Starting charge');
  await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
  this.charge = 100
  console.log('Charge complete');   
}

// repair method
  async repair(){
    if(this.isBroken = true){
      await new Promise(resolve => setTimeout(resolve));
    this.isBroken = false;
    console.log('Repair completed');
  }
}
}

module.exports = Scooter;
