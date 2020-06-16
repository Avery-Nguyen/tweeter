/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const newTweet = createTweetElement(tweet);
      $('#tweets-container').append(newTweet);
    }
  }
  
  
  const createTweetElement = function(tweet) {
    //time ago
    const current = new Date();
    const past = tweet.created_at;
    const differenceInTime = current.getTime() - past;

    const days = differenceInTime / (1000 * 60 * 60 * 24);
    const years = Math.floor(days / 365);
    const hours = days * 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;
    let date;
    if (days > 365) {
      date = years.toFixed(0) + ' years ago';
    } else if (seconds < 60) {
      date = seconds.toFixed(0) + ' seconds ago';
    } else if (minutes < 60) {
      date = minutes.toFixed(0) + ' minutes ago';
    } else if (hours < 24) {
      date = hours.toFixed(0) + ' hours ago';
    } else {
      date = days.toFixed(0) + ' days ago'
    }
    
    let $tweet = $(`
    <article id="tweets-container">
      <header>
        <div class="profile-info">
          <img src="${tweet.user.avatars}" height="60px">
          <p class= "name">${tweet.user.name}</p>
        </div>
        <p class="handle">${tweet.user.handle}</p>
      </header>
      <p class="tweet-content">${tweet.content.text}</p>
      <footer>
        <p class="time">${date}</p>
        <div class="media">
          <div>🚩</div>
          <div>🔄</div>
          <div>💙</div>
        </div>
      </footer>
     </article>
    `)
    return $tweet
  }
  
  renderTweets(data);

});
