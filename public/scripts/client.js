/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}



const createTweetElement = function(tweet) {
  let $tweet = `
  <article>
    <header>
      <div class="profile-info">
        <img src="${tweet.user.avatars}" height="60px">
        <p class= "name">${tweet.user.name}</p>
      </div>
      <p class="handle">${tweet.user.handle}</p>
    </header>
    <p class="tweet-content">${tweet.content.text}</p>
    <footer>
      <p class="time">${tweet.created_at} days ago</p>
      <div class="media">
        <div>🚩</div>
        <div>🔄</div>
        <div>💙</div>
      </div>
    </footer>
   </article>
  `
  return $tweet
}

const $tweet = createTweetElement(tweetData);
console.log($tweet);
$('article').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.