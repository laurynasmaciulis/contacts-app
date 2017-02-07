/*global angular */

angular.module('app', [
    'ngRoute',
    'ui.router',
    'app.components.contacts-list.router',
    'app.components.contacts-list.controller',
]).config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/contacts');
}]);
