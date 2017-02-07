/*global angular */

angular.module('app.components.contacts-details.controller', [])
    .controller('ContactsDetailsController', ['$stateParams', 'ContactsService',
        function($stateParams, ContactsService) {
            'use strict';
            
            var vm = this;
            vm.contact = null;
            
              ContactsService.getContacts()
                .then(function(contacts) {
                    vm.contact = contacts[$stateParams.id];
                }, function(error) {

                });
        }]);
