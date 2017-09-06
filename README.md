# A twitter bot to post updates when a new track is added to my soundcloud playlist

## To run:
Clone repo.

Create a `bot.config.js` file containing all of your Twitter appliction information in the root of this project. 

Example format:

    module.exports = {
        consumer_key:           '...',
        consumer_secret:        '...',
        access_token:           '...',
        access_token_secret:    '...',
    } 

Execute with:

    npm start