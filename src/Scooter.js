class Scooter{
  // scooter code here
  static nextSerial = 1;

  constructor(config){
    this.station = config.station;
    this.user = config.user;
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
      throw new Error('scooter needs to charge');
    }else if(this.isBroken = true){
      throw new Error('scooter needs repair')
    }
  }
// dock method
  dock(station){
    if(this.user = null){
      return this.station = config.station;
    }
  }
// recharge method
  recharge(){

  }

// repair method
  repair(){
    
  }

}


module.exports = Scooter;
