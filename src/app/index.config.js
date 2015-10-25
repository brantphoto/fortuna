export function config ($logProvider,
                        $mdThemingProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  $mdThemingProvider
    .theme('default')
    .primaryPalette('teal', {
     'default': '600'
    });

}
