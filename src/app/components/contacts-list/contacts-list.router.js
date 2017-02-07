/*global angular */

angular.module('app.components.contacts-list.router', [])
    .config(['$stateProvider', 
    function($stateProvider) {
        'use strict';
        
        $stateProvider
            .state('contacts', {
                url:'/contacts',
                templateUrl: 'app/components/contacts-list/contacts-list.template.html',
                controller: 'ContactListController',
                controllerAs: 'vm'
            });
    }]);
