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
}


module.exports = Scooter;
