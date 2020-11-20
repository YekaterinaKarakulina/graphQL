export default class SomeClass {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Age method says hi to ${this.name}`);
    return this.name;
  }
}
