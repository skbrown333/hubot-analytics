# hubot-active-users

A simple function that allows hubot to interact with Google Analytics.

See [`src/analytics.js`](src/analytics.js) for full documentation.

## Installation

Follow these instructions for setting up your .pem key https://www.npmjs.com/package/gapitoken.

You will need an environment variable called GOOGLE_SERVICE_EMAIL to store a path to your .pem file, one called SITE_NAME to store the name of your site, GOOGLE_ANALYTICS_ID to store the view id, and another environment variable GOOGLE_KEY_PATH to store the path to your keyfile.pem

```
export GOOGLE_SERVICE_EMAIL=''
export GOOGLE_KEY_PATH=''
export SITE_NAME=''
export GOOGLE_ANALYITCIS_ID=''
```


In hubot project repo, run:

`npm install hubot-active-users --save`

Then add **hubot-active-users** to your `external-scripts.json`:

```json
[
  "hubot-active-users"
]
```

## Sample Interaction

```
user1>> users
hubot>> SomeWebSite has 1 active user
```

## NPM Module

https://www.npmjs.com/package/hubot-active-users
