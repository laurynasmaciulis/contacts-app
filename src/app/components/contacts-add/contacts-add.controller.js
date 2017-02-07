/*global angular */

angular.module('app.components.contacts-add.controller', [])
    .controller('ContactsAddController', ['ContactsService', '$state',
        function(ContactsService, $state) {
            'use strict';

            var vm = this;
            vm.newContact = null;

            vm.addContact = function() {
                var newContact = ContactsService.addContact(vm.newContact);
                $state.go('contacts.details', {'id': newContact.id});
            };
        }
    ]);
