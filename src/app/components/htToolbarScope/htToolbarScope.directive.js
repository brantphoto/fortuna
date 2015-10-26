export function htToolbarScope($mdSidenav) {
  'ngInject';

  let directive = {
    restrict: 'EA',
    scope: {},
    templateUrl: 'app/components/htToolbarScope/htToolbarScope.directive.html',
    controller: toolbarCtrl,
    controllerAs: 'nav'
  };

  return directive;
}

class toolbarCtrl {
  constructor ($mdSidenav) {
    'ngInject';
    this.$mdSidenav = $mdSidenav;
  }

  toggleMenu() {
    this.$mdSidenav('left')
      .toggle();
  }
}

