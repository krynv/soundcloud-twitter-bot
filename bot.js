const Twit = require('twit');
const path = require('path');

const config = require(path.join(__dirname, 'bot.config.js'));

var T = new Twit(config);

//sendTweet(statusToSend);

setInterval(() => {
    sendTweet(generateNewTweet())
}, 1000 * 20); // send every 20 seconds

function generateNewTweet() {
    return {
        status: `#HashTag ${Math.floor(Math.random() * 100)}`
    };
}

function sendTweet(givenStatus) {
    if (givenStatus.length > 140) {
        console.log(`Wasn't able to post tweet\n${givenStatus}\nAs it exceeds the 140 character limit.`)
    }
    else {
        T.post('statuses/update', givenStatus, (err, data, response) => {
            // console.log(data);
            console.log(`tweet sent`);
        });
    }
}

