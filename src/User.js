class User {
  // User code here
  constructor(config){
    this.username = config.username;
    this.password = config.password;
    this.age = config.age;
    this.loggedIn = false;
  }

//logIn method 
  logIn(password){
    if(password === this.password){
      this.loggedIn = true;
    }else {
      throw new Error ('Incorrect password');
    }
  }

//logOut method
  logOut(){
    this.loggedIn = false;
  }
}

module.exports = User
