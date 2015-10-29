export function config ($logProvider,
                        $mdThemingProvider,
                        $mdIconProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  $mdThemingProvider.definePalette('gold', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'f5a623',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light'    // whether, by default, text (contrast)
  });
  // default theme
  $mdThemingProvider
    .theme('default')
    .primaryPalette('teal', {
     'default': '600',
     'hue-1': 'A200'
    })
    .accentPalette('gold', {
      'default': '500'
    });

  // sidebar alt theme
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('teal', {
    'default': '600',
    'hue-1': 'A200'
    })
    .backgroundPalette('teal', {
      'default': '600'
    })
    .dark();

  // icons provided, wrapped by Angular Material system
  $mdIconProvider
    .icon('menu', 'assets/images/menu.svg');
}
