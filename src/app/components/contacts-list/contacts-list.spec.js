/*global inject, expect*/

describe('ContactListController', function() {
    var $controller;
    var $scope = {};
    
    beforeEach(module('app'));
    
    beforeEach(inject(function(_$controller_, $injector) {
        $controller = _$controller_;
    }));

    it('should exist', function() {
        var vm = $controller('ContactListController as vm', {
            $scope: $scope
        });
        expect(vm).toBeDefined();
    });
});
