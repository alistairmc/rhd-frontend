"use strict";
/* global RHDPSearchBox */
// Test rhdp-search-box component
describe('Search Box', function() {
    
    var wc;
    
    beforeEach(function() {
        wc = document.createElement('rhdp-search-box');
        document.body.insertBefore(wc, document.body.firstChild);
    });

    afterEach(function() {
        document.body.removeChild(wc);
    });
    
    it('should be true', function() {
        expect(wc.querySelector('span').innerText).toEqual("SEARCH");
    });

});