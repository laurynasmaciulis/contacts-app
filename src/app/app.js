/*global angular */

angular.module('app', [
    'ngRoute',
    'ui.router',
    'app.components.contacts-list.router',
    'app.components.contacts-list.controller',
    'app.components.contacts-details.router',
    'app.components.contacts-details.controller',
    'app.components.contacts-add.router',
    'app.components.contacts-add.controller',
    'app.constants.api',
    'app.services.contacts',
]).config(['$urlRouterProvider', '$sceDelegateProvider', 'API', function($urlRouterProvider, $sceDelegateProvider, API) {
    $urlRouterProvider.otherwise('/contacts');

    $sceDelegateProvider.resourceUrlWhitelist([
        'self', // Allow same origin resource loads
        API.contactsURL // Allow api domain
    ]);
}]);
