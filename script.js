var number = 0;

function loadWebsite(number) {
  if (number === 2)
    document.getElementById("message").innerHTML = loadBreak();
  else if (number === 4)
    document.getElementById("message").innerHTML = "☢THAT UNSAFE WEBSITE IS BLOCKED!☢";
  else
    randomMessage();
  if(number === 4)
    document.body.className = "danger";
  else if(number < 4 || number > 5)
    randomTheme(number);
}

function loadBreak() {
  var messages = ['Listen to this.',
  'Check your gTasks list, please.',
  'Check your gTasks list, please.',
  'Check your gTasks list, please.',
  'Check your gTasks list, please.',
  'Check your repeating tasks on To-Do.',
  'Check your repeating tasks on To-Do.',
  'Check your repeating tasks on To-Do.',
  'Check your repeating tasks on To-Do.',
  'Check your anime queue spreadsheet.',
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
  'Drive for at least 20 minutes.'];
  for (var i = 0; i < 6; i++)
    messages.push("Watch anime.");
  //Get random message index from messages array
  var index = Math.floor(Math.random() * messages.length);
  if (index === 0)
    return "<a href=\"https://open.spotify.com/album/7Cff6vcc5DQ51FZ0DPLqXD\">" + messages[index] + "</a>";
  if (index === messages.indexOf("Look away from the screen for about 30 seconds."))
    return "<a href=\"https://www.google.com/search?q=30+second+timer\">" + messages[index] + "</a>";
  if (index === messages.indexOf("Take a deep breath."))
    return "<a href=\"https://www.google.com/search?q=breathing+exercise\">" + messages[index] + "</a>";
  if (index === messages.indexOf("Learn how to make trance music."))
    return "<a href=\"trancelessons.html\">" + messages[index] + "</a>";
  if (index === messages.indexOf("Learn how to make trance music.") + 1)
    return "<a href=\"https://emergency.nofap.com/redirect?religious=true&cat=em\">" + messages[index] + "</a>";
  if (index >= messages.indexOf("Watch anime."))
    return "<a href=\"nextanime.html\">" + messages[index] + "</a>";
  else if (index >= messages.indexOf("Walk around for about 1-2 minutes."))
    return "Get your laptop off your lap, and stand up.<br>Change to appropriate clothes if necessary.<br>" + messages[index];
  else if (index >= messages.indexOf("Refill your bottle and drink water."))
    return "Get your laptop off your lap, and stand up.<br>" + messages[index];
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
  'Your mind must be wandering off, isn\'t it?',
  'That website could have hurt you emotionally.',
  'This is a webpage. And it intercepted your internet access!',
  'Stop typing in addresses of distracting websites!',
  'Break unhealthy habits that aren\'t dietary.'];
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
  for (i = 1; i < 30; i++)
    linkMessages.push("Ready to do something else?");
  //Get random link from array
  var index = Math.floor(Math.random() * linkMessages.length);
  //Put link message and to screen using the index value of the array
  if (index > 0)
    document.getElementById("link").innerHTML = "<a href=\"breaktime.html\">" + linkMessages[index] + "</a>";
  else
    document.getElementById("link").innerHTML = linkMessages[index];
  //Put index value to the console
  console.log("Link " + index);
}

function randomTheme(number) {
  //Pick a random theme
  var theme;
  if (number !== 404) {
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
  } else {
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
  anime.push(new Anime(getTitle("24") + "Episode 23","https://www.funimation.com/shows/pani-poni-dash/misfortunes-never-come-one-by-one"));
  anime.push(new Anime(getTitle("145-2") + "Episode 11","https://vrv.co/watch/GY3VKMWZR/Saki:Hand-11-Threat"));
  anime.push(new Anime(getTitle("149") + "Episode 24","https://vrv.co/watch/GY4PXWX16/ReZERO-Starting-Life-in-Another-World-:The-Self-Proclaimed-Knight-and-the-Greatest-Knight"));
  anime.push(new Anime(getTitle("153") + "Episode 11","https://vrv.co/watch/GYJQVX336/Plastic-Memories:Rice-Omelette-Day"));
  anime.push(new Anime(getTitle("24") + "Episode 24","https://www.funimation.com/shows/pani-poni-dash/you-are-responsible-for-your-own-death"));
  anime.push(new Anime(getTitle("145-2") + "Episode 12","https://vrv.co/watch/G62P4E596/Saki:Hand-12-Truth"));
  anime.push(new Anime(getTitle("149") + "Episode 25","https://vrv.co/watch/GYJ0M4M26/ReZERO-Starting-Life-in-Another-World-:Thats-All-This-Story-Is-About"));
  anime.push(new Anime(getTitle("24") + "Episode 25","https://www.funimation.com/shows/pani-poni-dash/a-time-of-crisis"));
  anime.push(new Anime(getTitle("145-2") + "Episode 13","https://vrv.co/watch/G6ZXJD4MR/Saki:Hand-13-Old-Friends"));
  anime.push(new Anime(getTitle("153") + "Episode 12","https://vrv.co/watch/GYK534M8R/Plastic-Memories:Filling-Up-with-Memories"));
  anime.push(new Anime(getTitle("24") + "Episode 26","https://www.funimation.com/shows/pani-poni-dash/no-one-knows-what-may-happen-tomorrow"));
  anime.push(new Anime(getTitle("153") + "Episode 13","https://vrv.co/watch/G6VN35ZPR/Plastic-Memories:I-Hope-One-Day-Youll-be-Reunited"));
  anime.push(new Anime(getTitle("35") + "Episode 1","https://vrv.co/watch/GR8VMM18R/GJ-CLUB:I-am-the-GJ-Club"));
  anime.push(new Anime(getTitle("35") + "Episode 2","https://vrv.co/watch/G6DQVVDGR/GJ-CLUB:Friendship-Love-Her-Abnormality"));
  var x = document.getElementById("animelist");
  for (var i in anime)
    x.innerHTML = x.innerHTML + "<li><a href=\"" + anime[i].link + "\">" + anime[i].title + "</a></li>";
}

function getWidth() {
  document.getElementById("width").innerHTML = window.innerWidth;
}
