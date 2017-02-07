/*global angular */

angular.module('app.services.contacts', [])
    .service('ContactsService', ['$http', '$q', 'API',
        function($http, $q, API) {
            'use strict';

            var contacts = [];

            var getContacts = function() {
                if (contacts && contacts.length > 0) {
                    var def = $q.defer();
                    def.resolve(contacts);
                    return def.promise;
                }

                return $http.jsonp(API.contactsURL).then(function(response) {
                    if (typeof response.data === 'object') {
                        contacts = response.data;

                        contacts.forEach(function(contact, index) {
                            contact.id = index;
                        });

                        return contacts;
                    }
                    else {
                        return $q.reject(response.data);
                    }
                }, function(response) {
                    return $q.reject(response.data);
                });
            };

            var addContact = function(newContact) {
                newContact.id = contacts.length;
                newContact.avatar = API.defaultAvatarURL;
                contacts.push(newContact);

                return newContact;
            };

            return {
                getContacts: getContacts,
                addContact: addContact
            };
        }
    ]);
