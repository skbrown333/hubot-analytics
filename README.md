# hubot-google-analytics

A simple function that allows hubot to interact with Google Analytics.

See [`src/analytics.js`](src/analytics.js) for full documentation.

## Installation

Follow these instructions for setting up your .pem key https://www.npmjs.com/package/gapitoken.

You will need an environment variable called GOOGLE_SERVICE_EMAIL to store a path to your .pem file and another environment variable GOOGLE_KEY_PATH to store the path to your keyfil.e

In hubot project repo, run:

`npm install hubot-google-analytics --save`

Then add **hubot-google-analytics** to your `external-scripts.json`:

```json
[
  "hubot-google-analytics"
]
```

## Sample Interaction

```
user1>> users
hubot>> SomeWebSite has 1 active user
```

## NPM Module

https://www.npmjs.com/package/hubot-google-analytics
