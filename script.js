var number = 0;
var d = new Date();

function loadWebsite(number) {
  if (number === 2)
    loadBreak(-1);
  else
    randomMessage(-1);
  if(number !== 5)
    randomTheme(number);
}

function loadBreak(index) {
  var messages = [//Relaxation
  'Listen to this.',
  'Clear your mind.',
  'Pray a short prayer.',
  'Look away from the screen for about 30 seconds.',
  'Take a deep breath.',
  'Put on some focus/relaxation music.',
    //Task checking
  'Check your tasks for the day.',
  'Check your gTasks list, please.<br>Do the first unfinished task.',
  'Check your gTasks list, please.<br>Do the first unfinished task.',
  'Check your gTasks list, please.<br>Do the first unfinished task.',
  'Check your gTasks list, please.<br>Do the first unfinished task.',
  'Check your repeating tasks on To Do.<br>Do the first unfinished task.',
  'Check your repeating tasks on To Do.<br>Do the first unfinished task.',
  'Check your repeating tasks on To Do.<br>Do the first unfinished task.',
  'Check your repeating tasks on To Do.<br>Do the first unfinished task.',
    //Day planning
  'Create tasks for today and tomorrow.',
  'Make a plan for today and tomorrow.',
  'Determine what you need to do and what you want to do today.',
  'List everything you\'re currently doing, and order them by priority.',
  'Plan your day for today and tomorrow.',
    //Homework
  'Do homework.',
  'Get assignments done.',
  'If you\'re struggling with homework, do a different assignment.',
  'Check Blackboard for assignments, then do one of them.',
  //'Make progress on a big project.',
  'Finish a piece of homework, even if the deadline is far.',
  'Put on some epic music, and<br><span id="stress">GET HOMEWORK DONE!</span>',
    //Anime watching
  'Watch anime.',
  'If you\'re watching anime, watch a different anime.',
  'Watch anime.',
    //Miscellaneous
  'Close tabs and programs.',
  'Listen to your own music.',
  'Add a new song to your iTunes library.',
  'Say out loud the thing you need to get done.',
  'Remember what happened on January 13? Don\'t drive around just for fun. Install a racing game on your Windows server.',
    //Goals
  'Learn how to make trance music.',
  'Click here.',
  'Learn how to use FL Studio.',
  //'How can you build an everlasting romantic relationship from scratch?',
  'Make some friends in real life. Institute is the best starting point.',
  'Learn how to use Pygame.',
  'Go to Skillshare, and learn programming.',
  'Host a website for free that supports FileZilla.',
  'Don\'t suck at group projects.',
  'Think of a goal. Any one. Set that as your break message.',
    //Health and fitness
  'Stand up and stretch if you can.',
  'Refill your bottle and drink water.',
  'Go up and down the stairs for one minute.',
  'Stare at an object 20 feet away for 20 seconds.',
  'Eat something if it has been 3 hours since you ate something.',
  'Declutter your room.',
  'Digitize at least two days of events from your journal.',
  'Listen to your own music, and don\'t be afraid to dance to it.',
    //Personal hygiene
  'Change your clothes if they\'re dirty.',
  'Change to your pajamas. No socks.',
  'Strip, even if it\'s cold.<br>Take a shower if you hadn\'t today.',
    //Health and fitness part 2
  'Walk around for about 1-2 minutes.',
  'Now play some Stepmania.'];
  if(d.getHours() <= 6 || d.getHours() >= 22)
    for(var i = 0; i < messages.length / 4; i ++)
      messages.push('Go to bed.');
  //Get random message index from messages array
  if (index < 0 || index >= messages.length)
    do
      index = Math.floor(Math.random() * messages.length);
    while (index === messages.indexOf("Change to your pajamas. No socks.") && d.getHours() > 3 && d.getHours() < 20);
  var message = document.getElementById("break");
  if (index <= 1)
    message.href = "https://open.spotify.com/album/7Cff6vcc5DQ51FZ0DPLqXD";
  else if (index === messages.indexOf("Look away from the screen for about 30 seconds."))
    message.href = "https://www.google.com/search?q=30+second+timer";
  else if (index === messages.indexOf("Take a deep breath."))
    message.href = "https://www.google.com/search?q=breathing+exercise";
  else if (index === messages.indexOf("Put on some focus/relaxation music."))
    message.href = "https://play.google.com/music/listen?u=0#/wst/st/d9934a37-45b6-3997-a3f9-90d93a638451";
  else if (index === messages.indexOf("Learn how to make trance music.") || index === messages.indexOf("Learn how to use FL Studio."))
    message.href = "trancelessons";
  else if (index === messages.indexOf("Learn how to make trance music.") + 1)
    message.href = "https://emergency.nofap.com/redirect?religious=true&cat=em";
  else if (index === messages.indexOf("Don't suck at group projects."))
    message.href = "groupprojects";
  else if (index === messages.indexOf("Finish a piece of homework, even if the deadline is far.") + 1)
    message.href = "https://play.google.com/music/m/Aym2r2mohqm3rio4gwqnsjjzfdm?t=Two_Steps_from_Hell";
  else if (index >= messages.indexOf("Watch anime.") && index <= messages.lastIndexOf("Watch anime."))
    message.href = "nextanime";
  else if (index === messages.indexOf("Now play some Stepmania."))
    message.href = "stepmania";
  else
    message.removeAttribute("href");
  if (index >= messages.indexOf("Walk around for about 1-2 minutes."))
    message.innerHTML = "Stand up and stretch if you can.<br>Change to appropriate clothes if necessary.<br>" + messages[index];
  else if (index >= messages.indexOf("Refill your bottle and drink water."))
    message.innerHTML = "Stand up and stretch if you can.<br>" + messages[index];
  else
    message.innerHTML = messages[index];
  console.log("Message " + index);
}

var redirectMessages = ['You were redirected from a blacklisted website.',
'You shouldn\'t access that website now.',
'This website is blocked.',
'Don\'t waste time getting distracted on blocked websites.',
'Return to your previous task.',
'You might regret visiting that blocked website.',
'Time to take a break.',
'Your mind must be wandering off, isn\'t it?',
'That website could have hurt you emotionally.',
'This is a webpage. And it intercepted your internet access!',
'You won\'t complete your tasks quickly if you sidetrack.',
'There\'s nothing beneficial to see there.',
'Time is a precious resource. Don\'t waste it.',
'Get out of the drift, and get on the road to productivity.',
'Make sure you stay on task.',
'Cute or fun things are good, but they are distractions.',
'You were about to be distracted, but please stay on track.',
'You\'re the type of person who values fun things!',
'Be productive! Do something good!',
'Life is hard. Distractions are everywhere. God will help you.'];

function randomMessage(index) {
  var father = true;
  if (father)
    redirectMessages.push('Today will be a great day to catch up with your schedule and tasks.',
    'May this page suggest you take a short break?',
    'It is a good idea to get things done.',
    'I hope you have a good day today.',
    'There are so many other fun things to do.',
    'I know you got a desire to do better, and that\'s OK.',
    'I know you can become a better person! Just don\'t rush it.',
    'With God, nothing is impossible.',
    'There are so many happy thoughts in your mind right now!',
    'Make John Purdue proud!',
    'When you get things done, you feel happy and accomplished!',
    'You like YouTube, games, Cirno, and pictures of cute anime girls, but you also like watching anime, creating tasks, music, and learning.',
    'Feel free to do things you want and need to do.',
    'Go do something you want to do the most.',
    'You are a really good person. Did you know that?',
    'Aren\'t distractions supposed to be fun?',
    'Isn\'t laziness supposed to feel good?',
    'Having a waifu is great, because she won\'t get mad about anything you do.',
    'There sure are a lot of fun things to do.',
    'You\'ve made it this far to code this webpage.',
    'You figured out a way to redirect distracting websites. You\'re clever!',
    'If you keep doing great things, you\'ll eventually get a Tesla!',
    'What makes you very happy? Think about it for a bit.');
  else
    redirectMessages.push('Hey! You aren\'t supposed to do that!',
    'Don\'t you have anything better to do with your time?',
    'GET OUT OF HERE!',
    'Be productive! Don\'t go to time-wasting websites!',
    'No going to blocked websites. You understand?',
    'Stop typing in addresses of distracting websites!',
    'Break unhealthy habits.',
    'You\'re wasting your time! Come on!',
    'Ehem. You need to stop procrastinating.',
    'YouTube. DeviantArt. Reddit. Newgrounds. Image boards. Cute. Cirno. Rem. Nanahira. Chino. Blonde. Pink. Top hats.<br><span id="stress">FORGET ABOUT \'EM ALL!</span>',
    'Drop all your distracting habits.',
    'All distracting thoughts need to go away.',
    'You thought about something you shouldn\'t think of.',
    'Don\'t procrastinate and fail the semester.',
    'Do you want to fail your classes or not?',
    'Control yourself, or else you will lose in life.',
    'Forget about things that are currently distracting you.',
    'Please get things done. I mean it.',
    'Why would you do this? You stupid idiot!',
    'Seriously? You got stuff to do!',
    'You need to do something else to become better.',
    'Mindlessness is a bad thing.',
    'I get that Cirno is your waifu, but <span id="stress">DO NOT be like her!</span>',
    'Don\'t have a lazy, unproductive day.');
  //This message is added when the website is launched on mobile.
  if (window.innerWidth <= 812)
    redirectMessages.push('Use the forest app! Trust me.');
  if (d.getHours() <= 6 || d.getHours() >= 22)
    for(var i = 0; i < messages.length / 5; i ++)
      redirectMessages.push('You should be asleep by now.');
  //Get random message index from messages array
  if (index < 0 || index >= messages.length)
    index = Math.floor(Math.random() * messages.length);
  //Put message to screen using the index value of the array
  document.getElementById("message").innerHTML = redirectMessages[index];
  //Put index value to the console
  console.log("Message " + index);
  randomLink(redirectMessages[index]);
}

function randomLink(message) {
  var linkMessages = ["Immediately close this tab."];
  //These variables are needed so that the loop doesn't become an infinite loop.
  for (i = 1; i <= 10; i++)
    linkMessages.push("Ready to do something else?");
  for (i = 11; i <= 30; i++)
    linkMessages.push("Got something you need to do?");
  for (i = 31; i <= 33; i++)
    linkMessages.push("How about multiple ways to take a break?");
  //Get random link from array
  var index = Math.floor(Math.random() * linkMessages.length);
  if (message === "Return to your previous task." || message === "GET OUT OF HERE!")
    index = 0;
  else if (message === "May this page suggest you take a short break?" || message === "Time to take a break.")
    index = 1;
  //Put link message and to screen using the index value of the array
  var link = document.getElementById("link");
  if (index >= 31)
    link.innerHTML = "<a href='multiple'>" + linkMessages[index] + "</a>";
  else if (index >= 11)
    link.innerHTML = "<a href='custom'>" + linkMessages[index] + "</a>";
  else if (index > 0)
    link.innerHTML = "<a href='breaktime'>" + linkMessages[index] + "</a>";
  else
    link.innerHTML = linkMessages[index];
  //Put index value to the console
  console.log("Link " + index);
}

var messageComplete = true;

function randomTheme(number) {
  //Pick a random theme
  var theme;
  var themeText = document.getElementById("theme");
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
  document.body.className = "theme" + theme.toString();
  console.log("Theme " + theme);
  if(number === 80) {
    messageComplete = false;
    var input = document.getElementById("newBreak");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        createMessage();
      }
    });
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
  message.id = "break";
  message.className = "space";
  if(document.getElementById("size").checked)
    message.classList.add("big");
  message.innerHTML = newMessage.value;
  parent.removeChild(document.getElementById("instructions"));
  parent.removeChild(newMessage);
  parent.removeChild(button);
  parent.removeChild(breaklink);
  parent.removeChild(sizeselecter);
  parent.appendChild(message);
  messageComplete = true;
}

var hide = document.getElementById("hideable");
window.addEventListener("keyup", function (event) {
  if (event.keyCode === 66 && messageComplete) {
    event.preventDefault();
    if (hide.style.display !== "none")
      hide.style.display = "none";
    else
      hide.style.display = "inline";
  }
});
