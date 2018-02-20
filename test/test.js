const Helper = require('hubot-test-helper');
const chai = require('chai');
const expect = chai.expect;
const GA = require('googleanalytics');


let helper = new Helper('../src/analytics.js');

describe('class:analytics', () => {
	let room; 

	beforeEach(() => {
		room = helper.createRoom();
	});

	afterEach(() => {
        room.destroy();
	});

    it('should do nothing if users is not said', (done) => {
        room.user.say('bob', 'google what are my analytics').then(() => {
            expect(room.messages.length).to.equal(1);
            done();
        }).catch(done);
    });
	
});