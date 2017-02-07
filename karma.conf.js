module.exports = function(config) {
  config.set({
    basePath: '',
    
    frameworks: ['jasmine'],
    
    files: [
      // vendor files
      'https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular-route.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular-mocks.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.0-rc.1/angular-ui-router.min.js',
  
      'src/**/*.js',
      'src/**/*.template.html'
    ],

    exclude: [],
    
    preprocessors: {
      'src/**/*.template.html': 'ng-html2js'
    },
    
    reporters: ['progress'],
    
    ngHtml2JsPreprocessor: {
      moduleName: 'app.templates'
    },
    
    port: 9876,
    
    colors: true,
    
    logLevel: config.LOG_INFO,
    
    autoWatch: false,
    
    browsers: ['PhantomJS'],
    
    captureTimeout: 60000,
    
    singleRun: true,
    
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-ng-html2js-preprocessor'
    ]
  });
};
