var number = 0;

function loadWebsite(number) {
  if (number === 2)
    loadBreak();
  else if (number === 4)
    document.getElementById("message").innerHTML = "THAT UNSAFE WEBSITE IS BLOCKED";
  else
    randomMessage();
  if(number === 4)
    document.body.className = "danger";
  else if(number < 4 || number > 5)
    randomTheme(number);
}

function loadBreak() {
  var messages = ['Listen to this.',
  'Check your tasks for the day.',
  'Check your gTasks list, please.',
  'Check your gTasks list, please.',
  'Check your gTasks list, please.',
  'Check your gTasks list, please.',
  'Check your repeating tasks on To-Do.',
  'Check your repeating tasks on To-Do.',
  'Check your repeating tasks on To-Do.',
  'Check your repeating tasks on To-Do.',
  'Check your anime queue spreadsheet.',
  'Create tasks for today.',
  'Make a plan for today or tomorrow.',
  'Determine what you need to do and what you want to do today.',
  'List everything you\'re currently doing, and order them by priority.',
  'Close tabs and programs.',
  'Pray a short prayer.',
  'Look away from the screen for about 30 seconds.',
  'Compliment someone you know online.',
  'Take a deep breath.',
  'Digitize a paragraph from your journal.',
  'Say out loud the thing you need to get done.',
  'Learn how to make trance music.',
  'Try not to fap for 30 days straight, even if you stream all kinds of anime.',
  'How can you build an everlasting romantic relationship from scratch?',
  'Think of a goal. Any one. Set that as your break message.',
  'Watch anime.',
  'Watch anime.',
  'Watch anime.',
  'Watch anime.',
  'Watch anime.',
  'Watch anime.',
  'Refill your bottle and drink water.',
  'Go up and down the stairs.',
  'Stare at an object 20 feet away for 20 seconds.',
  'Eat something if it has been 3 hours since you ate something.',
  'Take off all your clothes.<br>Take a shower if you hadn\'t today or yesterday.',
  'Listen to your own music, and don\'t be afraid to dance to it.',
  'Stretch.',
  'Change your clothes if they\'re dirty.',
  'If it\'s the evening, change to your pajamas. No socks.',
  'Declutter your room.',
  'Walk around for about 1-2 minutes.',
  'Drive for as long as you want to get your mind off of things.'];
  //Get random message index from messages array
  var index = Math.floor(Math.random() * messages.length);
  var message = document.getElementById("break");
  if (index === 0)
    message.href = "https://open.spotify.com/album/7Cff6vcc5DQ51FZ0DPLqXD";
  if (index === messages.indexOf("Look away from the screen for about 30 seconds."))
    message.href = "https://www.google.com/search?q=30+second+timer";
  if (index === messages.indexOf("Take a deep breath."))
    message.href = "https://www.google.com/search?q=breathing+exercise";
  if (index === messages.indexOf("Learn how to make trance music."))
    message.href = "trancelessons";
  if (index === messages.indexOf("Learn how to make trance music.") + 1)
    message.href = "https://emergency.nofap.com/redirect?religious=true&cat=em";
  if (index >= messages.indexOf("Watch anime.") && index <= messages.lastIndexOf("Watch anime."))
    message.href = "nextanime";
  if (index >= messages.indexOf("Walk around for about 1-2 minutes."))
    message.innerHTML = "Get your laptop off your lap, and stand up.<br>Change to appropriate clothes if necessary.<br>" + messages[index];
  else if (index >= messages.indexOf("Refill your bottle and drink water."))
    message.innerHTML = "Get your laptop off your lap, and stand up.<br>" + messages[index];
  else
    message.innerHTML = messages[index];
  console.log("Message " + index);
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
  'It is a good idea to get things done.',
  'Your mind must be wandering off, isn\'t it?',
  'That website could have hurt you emotionally.',
  'This is a webpage. And it intercepted your internet access!',
  'Stop typing in addresses of distracting websites!',
  'Break unhealthy habits that aren\'t dietary.',
  'You\'re wasting your time! Come on!',
  'Ehem. You need to stop procrastinating.'];
  //Get random message index from messages array
  var index = Math.floor(Math.random() * messages.length);
  //Put message to screen using the index value of the array
  document.getElementById("message").innerHTML = messages[index];
  //Put index value to the console
  console.log("Message " + index);
  randomLink(index);
}

function randomLink(message) {
  var linkMessages = ["Immediately close this tab."];
  //These variables are needed so that the loop doesn't become an infinite loop.
  for (i = 1; i <= 10; i++)
    linkMessages.push("Ready to do something else?");
  for (i = 11; i <= 30; i++)
    linkMessages.push("Got something you need to do?");
  //Get random link from array
  var index = Math.floor(Math.random() * linkMessages.length);
  if (message === 6)
    index = 0;
  else if (message === 11)
    index = 1;
  //Put link message and to screen using the index value of the array
  if (index >= 11)
    document.getElementById("link").innerHTML = "<a href=\"custom\">" + linkMessages[index] + "</a>";
  else if (index > 0)
    document.getElementById("link").innerHTML = "<a href=\"breaktime\">" + linkMessages[index] + "</a>";
  else
    document.getElementById("link").innerHTML = linkMessages[index];
  //Put index value to the console
  console.log("Link " + index);
}

function randomTheme(number) {
  //Pick a random theme
  var theme;
  var themeText = document.getElementById("theme");
  if (number !== 404) {
    theme = Math.floor(Math.random() * 5) + 1;
    switch (theme)
    {
      case 1:
        themeText.innerHTML = "Brought to you by the moss green theme.";
        break;
      case 2:
        themeText.innerHTML = "Brought to you by the blue theme.";
        break;
      case 3:
        themeText.innerHTML = "Brought to you by the violet theme.";
        break;
      case 4:
        themeText.innerHTML = "Brought to you by the sand theme.";
        break;
      case 5:
        themeText.innerHTML = "Brought to you by the gray theme.";
        break;
      default:
        themeText.innerHTML = "Brought to you by the black theme.";
    }
  } else {
    theme = Math.floor(Math.random() * 5) + 5;
    switch(theme)
    {
      case 5:
        themeText.innerHTML = "Brought to you by the gray theme.";
        break;
      case 6:
        themeText.innerHTML = "Brought to you by the slate green theme.";
        break;
      case 7:
        themeText.innerHTML = "Brought to you by the purple theme.";
        break;
      case 8:
        themeText.innerHTML = "Brought to you by the hot & dry theme.";
        break;
      case 9:
        themeText.innerHTML = "Brought to you by the green theme.";
        break;
      default:
        themeText.innerHTML = "Brought to you by the black theme.";
    }
  }
  document.body.className = "theme" + theme.toString();
  console.log("Theme " + theme);
}

class Anime {
  constructor(title,link) {
    this.title = title;
    this.link = link;
  }
}

function getTitle(id) {
  if (id === "24")
    return "Pani Poni Dash! ";
  if (id === "35")
    return "GJ-Bu ";
  if (id === "138-2")
    return "Hayate the Combat Butler!! ";
  if (id === "149")
    return "Re:Zero ";
  if (id === "145-2")
    return "Saki: The Nationals ";
  if (id === "153")
    return "Plastic Memories ";
}

function loadAnime() {
  var anime = [];
  anime.push(new Anime(getTitle("149") + "Episode 24","https://vrv.co/watch/GY4PXWX16/ReZERO-Starting-Life-in-Another-World-:The-Self-Proclaimed-Knight-and-the-Greatest-Knight"));
  anime.push(new Anime(getTitle("153") + "Episode 11","https://vrv.co/watch/GYJQVX336/Plastic-Memories:Rice-Omelette-Day"));
  anime.push(new Anime(getTitle("24") + "Episode 24","https://www.funimation.com/shows/pani-poni-dash/you-are-responsible-for-your-own-death"));
  anime.push(new Anime(getTitle("145-2") + "Episode 12","https://vrv.co/watch/G62P4E596/Saki:Hand-12-Truth"));
  anime.push(new Anime(getTitle("149") + "Episode 25","https://vrv.co/watch/GYJ0M4M26/ReZERO-Starting-Life-in-Another-World-:Thats-All-This-Story-Is-About"));
  anime.push(new Anime(getTitle("24") + "Episode 25","https://www.funimation.com/shows/pani-poni-dash/a-time-of-crisis"));
  anime.push(new Anime(getTitle("153") + "Episode 12","https://vrv.co/watch/GYK534M8R/Plastic-Memories:Filling-Up-with-Memories"));
  anime.push(new Anime(getTitle("145-2") + "Episode 13","https://vrv.co/watch/G6ZXJD4MR/Saki:Hand-13-Old-Friends"));
  anime.push(new Anime(getTitle("24") + "Episode 26","https://www.funimation.com/shows/pani-poni-dash/no-one-knows-what-may-happen-tomorrow"));
  anime.push(new Anime(getTitle("153") + "Episode 13","https://vrv.co/watch/G6VN35ZPR/Plastic-Memories:I-Hope-One-Day-Youll-be-Reunited"));
  anime.push(new Anime(getTitle("35") + "Episode 1","https://vrv.co/watch/GR8VMM18R/GJ-CLUB:I-am-the-GJ-Club"));
  anime.push(new Anime(getTitle("35") + "Episode 2","https://vrv.co/watch/G6DQVVDGR/GJ-CLUB:Friendship-Love-Her-Abnormality"));
  var list = document.getElementById("animelist");
  for (var i in anime)
  {
    var y = document.createElement("li");
    var z = document.createElement("a");
    z.innerHTML = anime[i].title;
    z.href = anime[i].link;
    y.appendChild(z);
    list.appendChild(y);
  }
}

function getWidth() {
  document.getElementById("width").innerHTML = window.innerWidth;
}

function createMessage() {
  var parent = document.getElementById("custom");
  var newMessage = document.getElementById("newBreak");
  var button = document.getElementById("messageButton");
  var message = document.createElement("div");
  message.id = "message";
  message.innerHTML = newMessage.value;
  parent.removeChild(document.getElementById("instructions"));
  parent.removeChild(newMessage);
  parent.removeChild(button);
  parent.appendChild(message);
}

var input = document.getElementById("newBreak");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    createMessage();
  }
});
