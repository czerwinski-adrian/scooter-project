class User {
  // User code here
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
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
