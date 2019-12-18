var number = 0;

function loadWebsite(number) {
  if (number === 2)
    document.getElementById("message").innerHTML = loadBreak2();
  else if (number === 4)
    document.getElementById("message").innerHTML = "☢THAT UNSAFE WEBSITE IS BLOCKED!☢";
  else
    randomMessage();
  randomTheme(number);
}

function loadBreak() {
  var messages = ['Listen to this.',
  'Pray a short prayer.',
  'Look away from the screen for about 30 seconds.',
  'Compliment someone you know online.',
  'Breathe slowly.',
  'Digitize a paragraph from your journal.',
  'Watch AFV',
  'Say out loud the thing you need to get done.',
  'Learn how to make trance, even if it costs you a lot in lessons, software, and sound packages.',
  'Think of a goal. Any one. Set that as your break message.',
  'Refill your bottle and drink water.',
  'Go up and down the stairs.',
  'Stare at an object 20 feet away for 20 seconds.',
  'Eat something if it has been 3 hours since you ate something.',
  'Strip and take a shower if you hadn\'t today or yesterday.',
  'Listen to your own music, and don\'t be afraid to dance to it.',
  'Stretch.',
  'Change your clothes if they\'re dirty.',
  'If it\'s the evening, change to your pajamas. No socks.',
  'Declutter your room.',
  'Walk around for about 1-2 minutes.',
  'Go on a journey. A Kino\'s Journey if you wish.'];
  //Get random message index from messages array
  var index = Math.floor(Math.random() * messages.length);
  if(index === 0)
    return "<a href=\"https://open.spotify.com/album/7Cff6vcc5DQ51FZ0DPLqXD\">" + messages[index] + "</a>";
  else if (index >= messages.indexOf("Refill your bottle and drink water."))
    return "Get your laptop off your lap, and stand up.<br>" + messages[index];
  else if (index >= messages.indexOf("Walk around for about 1-2 minutes."))
    return "Get your laptop off your lap, and stand up.<br>Change to appropriate clothes if necessary.<br>" + messages[index];
  else
    return messages[index];
}

function loadBreak2() {
  var messages = ['Refill your bottle and drink water.',
  'Go up and down the stairs.',
  'Stare at an object 20 feet away for 20 seconds.',
  'Eat something if it has been 3 hours since you ate something.',
  'Strip and take a shower if you hadn\'t today or yesterday.',
  'Listen to your own music, and don\'t be afraid to dance to it.',
  'Compliment someone you know in person.',
  'Stretch.',
  'Change your clothes if they\'re dirty.',
  'If it\'s the evening, change to your pajamas. No socks.',
  'Declutter your room.',
  'Walk around for about 1-2 minutes.',
  'Go on a journey. A Kino\'s Journey if you wish.'];
  //Get random message index from messages array
  var index = Math.floor(Math.random() * messages.length);
  if (index >= messages.indexOf("Walk around for about 1-2 minutes."))
    return "Change to appropriate clothes if necessary.<br>" + messages[index];
  else
    return messages[index];
}

function randomMessage() {
  var messages = [
  'You were redirected from a blacklisted website.',
  'You shouldn\'t access that website now.',
  'This website is blocked.',
  'Don\'t waste time getting distracted on blocked websites.',
  'Hey! You aren\'t supposed to do that!',
  'Don\'t you have anything better to do with your time?',
  'Get back to whatever you should be doing!',
  'Today will be a great day to catch up with your schedule and tasks.',
  'You might regret visiting that blocked website.',
  'Be productive! Don\'t go to time-wasting websites!',
  'No going to blocked websites. You understand?',
  'May this page suggest you take a short break?',
  'It is a good idea to check your tasks for the day.',
  'Your mind must be wandering off, isn\'t it?',];
  //Get random message index from messages array
  var index = Math.floor(Math.random() * messages.length);
  //Put message to screen using the index value of the array
  document.getElementById("message").innerHTML = messages[index];
  //Put index value to the console
  console.log("Message " + index);
  randomLink(index);
}

function randomLink(message) {
  /*The linkMessages are, in order
  A prompt to check my gTasks list.
  A prompt to check my repeating tasks.
  A prompt to check my anime queue spreadsheet.
  A link to the nextanime page containing links to episodes.
  A randomly generated break message.*/
  var linkMessages = ["Check your gTasks list, please.",
  "Check your repeating tasks on To-Do.",
  "Check your anime queue spreadsheet."];
  for (var i = 3; i <= 8; i++)
    linkMessages.push("Here are some anime episodes you need to watch.");
  //These variables are needed so that the loop doesn't become an infinite loop.
  var onehundredten = linkMessages.length + 1;
  var onehundredeleven = linkMessages.length * 2;
  for (i = onehundredten; i <= onehundredeleven; i++)
    linkMessages.push(loadBreak());
  //Get random link from array
  var index = Math.floor(Math.random() * linkMessages.length);
  //For getting back on task
  if (message > 5 && message < 8)
    index = Math.floor(Math.random() * 7);
  //For taking breaks
  if (message === 11)
      index = Math.floor(Math.random() * (linkMessages.length - 9)) + 9;
  //For checking tasks
  if (message === 12)
    index = Math.floor(Math.random() * 2);
  //Put link message and to screen using the index value of the array
  if (index >= 3 && index <= 8)
    document.getElementById("link").innerHTML = "<a href=\"nextanime.html\">" + linkMessages[index] + "</a>";
  else
    document.getElementById("link").innerHTML = linkMessages[index];
  //Put index value to the console
  console.log("Link " + index);
}

function randomTheme(number) {
  //Pick a random theme
  var theme;
  if (number === 4)
  {
    document.body.className = "danger";
  }
  else
  {
    if (number !== 404)
    {
      theme = Math.floor(Math.random() * 5) + 1;
      switch (theme)
      {
        case 1:
          document.getElementById("theme").innerHTML = "Brought to you by the moss green theme.";
          break;
        case 2:
          document.getElementById("theme").innerHTML = "Brought to you by the blue theme.";
          break;
        case 3:
          document.getElementById("theme").innerHTML = "Brought to you by the violet theme.";
          break;
        case 4:
          document.getElementById("theme").innerHTML = "Brought to you by the sand theme.";
          break;
        case 5:
          document.getElementById("theme").innerHTML = "Brought to you by the gray theme.";
          break;
        default:
          document.getElementById("theme").innerHTML = "Brought to you by the black theme.";
      }
    }
    else
    {
      theme = Math.floor(Math.random() * 5) + 5;
      switch(theme)
      {
        case 5:
          document.getElementById("theme").innerHTML = "Brought to you by the gray theme.";
          break;
        case 6:
          document.getElementById("theme").innerHTML = "Brought to you by the slate green theme.";
          break;
        case 7:
          document.getElementById("theme").innerHTML = "Brought to you by the purple theme.";
          break;
        case 8:
          document.getElementById("theme").innerHTML = "Brought to you by the hot & dry theme.";
          break;
        case 9:
          document.getElementById("theme").innerHTML = "Brought to you by the green theme.";
          break;
        default:
          document.getElementById("theme").innerHTML = "Brought to you by the black theme.";
      }
    }
    document.body.className = "theme" + theme.toString();
    console.log("Theme " + theme);
  }
}

function getWidth() {
  document.getElementById("width").innerHTML = window.innerWidth;
}
