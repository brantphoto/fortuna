export class MainController {
  constructor (webDevTec, $timeout) {
    'ngInject';

    this.$timeout = $timeout;
    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1445625485763;
    this.greeting = '';
    this.commentArray = Array(50);
    this.sayGreeting();
  }

  sayGreeting() {
    this.$timeout(() => this.greeting = this.creationDate, 5000);
  }

}
