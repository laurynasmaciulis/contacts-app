/*global inject, expect*/

describe('ContactsDetailsController', function() {
    var $controller;
    var $scope = {};
    
    beforeEach(module('app'));
    
    beforeEach(inject(function(_$controller_, $injector) {
        $controller = _$controller_;
    }));

    it('should exist', function() {
        var vm = $controller('ContactsDetailsController as vm', {
            $scope: $scope
        });
        expect(vm).toBeDefined();
    });
});
