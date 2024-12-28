class User {
    constructor(name, role) {
      this.name = name;
      this.role = role;
    }
  
    getInfo() {
      return `${this.name} is a ${this.role}`;
    }
  }
  
  class UserFactory {
    static createUser(name, role) {
      return new User(name, role);
    }
  }
  
  module.exports = UserFactory;