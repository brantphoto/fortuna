export function config ($logProvider,
                        $mdThemingProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  $mdThemingProvider
    .theme('default')
    .primaryPalette('teal', {
     'default': '600',
     'hue-1': 'A200'
    })
    .accentPalette('pink', {
      'default': '100'
    });

}
