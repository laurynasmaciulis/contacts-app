/*global angular */

angular.module('app.components.contacts-list.controller', [])
    .controller('ContactListController', [
        function() {
            'use strict';

            var vm = this;
            vm.isLoading = false;
            vm.contacts = null;
        }
    ]);
