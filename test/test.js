var chai = require('chai');

describe('a first test to check the integration with jenkins', function() {

    it('should be always true', function() {
        chai.assert.equal(true, true);
    });

    it('should be also always true', function() {
        chai.expect(true).to.equal(false);
    });

});