/*global angular */

angular.module('app.components.contacts-list.controller', [])
    .controller('ContactListController', ['ContactsService',
        function(ContactsService) {
            'use strict';

            var vm = this;
            vm.isLoading = false;
            vm.contacts = null;

             ContactsService.getContacts()
                .then(function(contacts) {
                    vm.contacts = contacts;
                    vm.isLoading = false;
                    vm.isLoadingError = false;
                }, function(error) {
                    vm.isLoading = false;
                    vm.isLoadingError = true;
                });
        }
    ]);
