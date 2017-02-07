/*global angular */

angular.module('app.components.contacts-details.router', [])
    .config(['$stateProvider', 
    function($stateProvider) {
        'use strict';
        
        $stateProvider
            .state('contacts.details', {
                url: '/:id',
                templateUrl: 'app/components/contacts-details/contacts-details.template.html',
                controller: 'ContactsDetailsController',
                controllerAs: 'vm'
            });
    }]);
