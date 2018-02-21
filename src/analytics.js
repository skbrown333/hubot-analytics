/**
 * analytics.js
 * This is a sample function to interact with Google Analytics.
 *
 * @license MIT
 * @version 0.14
 * @author  Steffan Brown, https://github.com/skbrown333/hubot-analytics
 * @updated 2018-02-16
 */

const GAPI = require('gapitoken');
const GA = require('googleanalytics');

const serviceEmail = process.env.GOOGLE_SERVICE_EMAIL;
const keyFilePath = process.env.GOOGLE_KEY_PATH;
const SITE_NAME = process.env.SITE_NAME;
const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID;

module.exports = function(robot) {
    robot.hear(/^users/, getAnalytics);
}

function getAnalytics (res) {
    const gapi = new GAPI({
        iss: serviceEmail,
        scope: 'https://www.googleapis.com/auth/analytics.readonly',
        keyFile: keyFilePath,
    }, function(err) {
        if (err) { return console.log(err); }

        gapi.getToken(function(err, token) {
            if (err) { return console.log(err); }    
            util = require('util'),
            config = {
            "token": token,
        },
        ga = new GA.GA(config);

            
        const metrics = [
            'rt:activeUsers',
        ];

        const options = {
            'ids': `ga:${ GOOGLE_ANALYTICS_ID }`,
            'metrics': metrics.join(','),
        };


        ga.get(options, function(err, entries) {
            if(!entries || !entries[0]) {
                res.reply(`${ SITE_NAME } currently has 0 active users`);
                return;
            }
            res.reply(`${ SITE_NAME } currently has ${entries[0].metrics[0]['rt:activeUsers']} active users`);
        });

        });     
    });
}