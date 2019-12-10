var number = 0;

function loadWebsite(number) {
  randomMessage();
  randomTheme(number);
}

function loadBreak() {
  var messages = ['Listen to this.',
  'Drink water.',
  'Go up and down the stairs.',
  'Pray a short prayer.',
  'Stare at an object 20 feet away for 20 seconds.',
  'Look away from the screen for about 30 seconds.',
  'Eat something if it has been 3 hours since you ate something.',
  'Take a shower if you hadn\'t today or yesterday.',
  'Walk around for about 1-2 minutes.',
  'Listen to your own music, and don\'t be afraid to dance to it.',
  'Compliment someone you know in person or online.',
  'Breathe slowly.',
  'Stretch.',
  'Change your clothes if they\'re dirty.',
  'Digitize a paragraph from your journal.',
  'Watch AFV',
  'Say out loud the thing you need to get done.',
  'Declutter your room.'];
  //Get random message index from messages array
  var index = Math.floor(Math.random() * messages.length);
  if(index === 0)
    document.getElementById("message").innerHTML = "<a href=\"https://open.spotify.com/album/7Cff6vcc5DQ51FZ0DPLqXD\">" + messages[index] + "</a>";
  else
    document.getElementById("message").innerHTML = messages[index];
  randomTheme();
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
  /*The links are, in order,
  A breaktime page
  A breaktime page
  My gTask list for the week
  My repeating tasks list on Microsoft To Do
  A function for returning an anime-related task
  My Google Sheets anime watching queue
  My VRV watchlist
  My Funimation queue
  The next anime episodes I need to watch*/
  var linkMessages = ["Here's how you can take a short break.",
  "Here's how you can take a short break.",
  "Check your gTasks list, please.",
  "Check your repeating tasks on To-Do.",
  "Check your anime queue spreadsheet.",
  "Here's your VRV watchlist.",
  "Here's your Funimation queue."];
  for (var i = 7; i <= 8; i++)
    linkMessages.push("Here's the anime episode you need to watch.");
  //Get random link from array
  //var index = Math.floor(Math.random() * 5);
  var index = Math.floor(Math.random() * linkMessages.length);
  //For getting back on task
  if (message > 5 && message < 8)
    index = Math.floor(Math.random() * (linkMessages.length - 2)) + 2;
  //For taking breaks
  if (message === 11)
    index = Math.floor(Math.random() * 2);
  //For checking tasks
  if (message === 12)
    index = Math.floor(Math.random() * 2) + 2;
  //If it lands on the anime option
  /*if (index === 4)
    index = Math.floor(Math.random() * (links.length - 4)) + 4;*/
  switch(index) {
    case 0:
    case 1:
      link = "breaktime.html";
      break;
    case 5:
      link = "https://vrv.co/watchlist/";
      break;
    case 6:
      link = "https://www.funimation.com/#queue";
      break;
    case 7:
      link = "https://www.funimation.com/shows/pani-poni-dash/there-are-no-classes-among-humans-but-there-are-in-humans-hearts/?qid=undefined";
      break;
    case 8:
      link = "https://vrv.co/watch/GY9PJG03R/Hayate-the-Combat-Butler-Season-1-2:Our-Destination"
      break;
    default:
      link = "Blank";
  }
  //Put link message and to screen using the index value of the array
  if (link === "Blank")
    document.getElementById("link").innerHTML = linkMessages[index];
  else
    document.getElementById("link").innerHTML = "<a href=" + link + ">" + linkMessages[index] + "</a>";
  //Put index value to the console
  console.log("Link " + index);
}

function randomTheme(number) {
  //Pick a random theme
  console.log(typeof number);
  if (number !== 404)
  {
    var theme = Math.floor(Math.random() * 5) + 1;
    switch (theme) {
      case 1:
        document.getElementById("theme").innerHTML = "Brought to you by the green theme.";
        break;
      case 2:
        document.getElementById("theme").innerHTML = "Brought to you by the blue theme.";
        break;
      case 3:
        document.getElementById("theme").innerHTML = "Brought to you by the purple theme.";
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
    var theme = Math.floor(Math.random() * 5) + 5;
    switch(theme) {
      case 5:
        document.getElementById("theme").innerHTML = "Brought to you by the gray theme.";
        break;
      case 6:
        document.getElementById("theme").innerHTML = "Brought to you by the sea green theme.";
        break;
      case 7:
        document.getElementById("theme").innerHTML = "Brought to you by the blue theme.";
        break;
      case 8:
        document.getElementById("theme").innerHTML = "Brought to you by the red theme.";
        break;
      case 9:
        document.getElementById("theme").innerHTML = "Brought to you by the yellow theme.";
        break;
      default:
        document.getElementById("theme").innerHTML = "Brought to you by the black theme.";
    }
  }
  document.body.className = "theme" + theme.toString();
  console.log("Theme " + theme);
}

function getWidth() {
  document.getElementById("width").innerHTML = window.innerWidth;
}
