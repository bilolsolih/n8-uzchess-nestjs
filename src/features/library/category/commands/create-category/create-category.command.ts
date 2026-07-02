export class CreateCategoryCommand {
  constructor(public title: string) {
  }

  doSomething() {
    console.log('Doing something');
  }

  static doItAgain() {
    console.log('Doing it again...');
  }
}