/*global angular */

angular.module('app.components.contacts-add.router', [])
    .config(['$stateProvider', 
    function($stateProvider) {
        'use strict';
        
        $stateProvider
            .state('contacts.add', {
                url: '/add',
                templateUrl: 'app/components/contacts-add/contacts-add.template.html',
                controller: 'ContactsAddController',
                controllerAs: 'vm'
            });
    }]);
