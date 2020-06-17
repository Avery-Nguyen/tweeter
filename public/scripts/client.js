/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  //function to render created tweet onto page
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const newTweet = createTweetElement(tweet);
      $('#tweets-container').prepend(newTweet);
    }
  };
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  //create html template from the data
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
      date = days.toFixed(0) + ' days ago';
    }
    //html element
    let $tweet = $(`
    <article class="tweeter-container">
      <header>
        <div class="profile-info">
          <img src="${tweet.user.avatars}" height="60px">
          <p class= "name">${tweet.user.name}</p>
        </div>
        <p class="handle">${tweet.user.handle}</p>
      </header>
      <p class="tweet-content">${escape(tweet.content.text)}</p>
      <footer>
        <p class="time">${date}</p>
        <div class="media">
          <div>🚩</div>
          <div>🔄</div>
          <div>💙</div>
        </div>
      </footer>
     </article>
    `);
    return $tweet;
  };
  //validate correct input in textarea
  const validateTweet = function(string){
    if ((string === "") || (string === null)){
      alert('ERROR: Please enter a message!')
      return true;
    } else if (string.length > 140){
      alert('ERROR: Exceed character limit')
      return true;
    }
  };

  //AJAX post request from forms
  $('#post-tweet').submit(function(event) {
    event.preventDefault();
    const text = $('#tweet-text').val()
    const validate = validateTweet(text);
    if (validate){
      return;
    }
    const data = $(this).serialize();
    $.post('/tweets', data)
      .then(() => {
        loadTweets();
        $('#tweet-text').val('')
        $('.counter').text(140);
      });
  });

  //function to load database to html
  const loadTweets = function() {
    $.getJSON('/tweets')
      .then(function(data) {
        $('#tweets-container').empty();
        renderTweets(data);
        hoverShadow();
        
      }); 
  };

  loadTweets();

});
