/**
 * analytics.js
 * This is a sample function to interact with Google Analytics.
 * 
 * Description: 
 *  Displays active users on a website
 * 
 * Commands:
 *  hubot users - displays the websites active users
 *
 * @license MIT
 * @version 0.14
 * @author  Steffan Brown, https://github.com/skbrown333/hubot-analytics
 * @updated 2018-02-16
*/

const GAPI = require('gapitoken');
const GA = require('googleanalytics');

const serviceEmail = process.env.HUBOT_GOOGLE_SERVICE_EMAIL;
const keyFilePath = process.env.HUBOT_GOOGLE_KEY_PATH;
const HUBOT_SITE_NAME = process.env.HUBOT_SITE_NAME;
const HUBOT_GOOGLE_ANALYTICS_ID = process.env.HUBOT_GOOGLE_ANALYTICS_ID;

module.exports = function(robot) {
	robot.respond(/users/, getAnalytics);
};

function getAnalytics (res) {
	const gapi = new GAPI({
		iss: serviceEmail,
		scope: 'https://www.googleapis.com/auth/analytics.readonly',
		keyFile: keyFilePath,
	}, function(err) {
        
        gapi.getToken(function(err, token) { 
            let util = require('util');
			let config = {
				'token': token,
			};
			let ga = new GA.GA(config);

            
			const metrics = [
				'rt:activeUsers',
			];

			const options = {
				'ids': `ga:${ HUBOT_GOOGLE_ANALYTICS_ID }`,
				'metrics': metrics.join(','),
			};


			ga.get(options, function(err, entries) {
				if(!entries || !entries[0]) {
					res.reply(`${ HUBOT_SITE_NAME } currently has 0 active users`);
					return;
				}
				res.reply(`${ HUBOT_SITE_NAME } currently has ${entries[0].metrics[0]['rt:activeUsers']} active users`);
			});

		});     
	});
}