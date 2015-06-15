export class Greeting {
  constructor(name) {
    this.name = name;
  }
  say() {
    return `Hello ${this.name} !!`
  }
}

// console.log(new Greeting("John").say());