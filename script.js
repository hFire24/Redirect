var number = 0;
var d = new Date();

function loadWebsite(number) {
  if (number === 2)
    loadBreak(-1);
  else if (number === 3)
    randomMessage(-2);
  else if (number === 4)
    randomQuestion(-1);
  else
    randomMessage(-1);
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
  'Declutter your room.',
  'Close tabs and programs.',
  'Listen to your own music.',
  'Add a new song to your iTunes library.',
  'Say out loud the thing you need to get done.',
  'Digitize at least two days of events from your journal.',
  //'Remember what happened on January 13? Don\'t drive around just for fun. Install a racing game on your Windows server.',
  'Drive around how you want in Need for Speed: Hot Pursuit.',
    //Goals
  'Learn how to make chiptune music.',
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
      messages.push('Lie in bed and play something soothing.');
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
  else if (index === messages.indexOf("Learn how to make chiptune music.") || index === messages.indexOf("Learn how to use FL Studio."))
    message.href = "chiptunelessons.html";
  else if (index === messages.indexOf("Learn how to make chiptune music.") + 1)
    message.href = "https://emergency.nofap.com/redirect?religious=true&cat=em";
  else if (index === messages.indexOf("Don't suck at group projects."))
    message.href = "groupprojects.html";
  else if (index === messages.indexOf("Finish a piece of homework, even if the deadline is far.") + 1)
    message.href = "https://play.google.com/music/m/Aym2r2mohqm3rio4gwqnsjjzfdm?t=Two_Steps_from_Hell";
  else if (index >= messages.indexOf("Watch anime.") && index <= messages.lastIndexOf("Watch anime."))
    message.href = "nextanime.html";
  else if (index === messages.indexOf("Now play some Stepmania."))
    message.href = "stepmania.html";
  else
    message.removeAttribute("href");
  if (index >= messages.indexOf("Walk around for about 1-2 minutes."))
    message.innerHTML = "Change to appropriate clothes if necessary.<br>" + messages[index];
  else
    message.innerHTML = messages[index];
  console.log("Message " + index);
  if(index >= messages.indexOf("Do homework.") && index <= messages.indexOf("Finish a piece of homework, even if the deadline is far.") + 1)
    message.addEventListener("click",function() {var exists = document.getElementById("vader");
      if (!exists) {
        var video = document.createElement("video");
        video.id = "vader";
        var source = document.createElement("source");
        source.src = "media/NOOOO!.mp4";
        source.type = "video/mp4";
        video.appendChild(source);
        document.body.appendChild(video);
      }
    document.getElementById("vader").play();});
}

var redirectMessages = ['You were redirected from a blacklisted website.',
'You shouldn\'t access that website now.',
'This website is blocked.',
'Return to your previous task.',
'You might regret visiting that blocked website.',
'Time to take a break.',
'Your mind must be wandering off, isn\'t it?',
'That website could have hurt you emotionally.',
'This is a webpage. And it intercepted your internet access!',
'You won\'t complete your tasks quickly if you sidetrack.',
'There\'s nothing beneficial to see there.',
'Please get things done. I mean it.',
'Time is a precious resource. Don\'t waste it.',
'Get out of the drift, and get on the road to productivity.',
'Make sure you stay on task.',
'Cute or fun things are good, but they are distractions.',
'You were about to be distracted, but please stay on track.',
'Be productive! Do something good!',
'Life is hard. Distractions are everywhere. God will help you.',
'Tempted? That\'s normal.<br>Tasks? They\'re tasks.<br>Hotel? Trivago.',
'No routine? Form one.',
'Put on some music to help you do things.'];

function randomMessage(index) {
  var father = true;
  if (index === -2)
    father = false;
  if (father)
    redirectMessages.push('Today will be a great day to catch up with your schedule and tasks.',
    'May this page suggest you take a short break?',
    'It is a good idea to get things done.',
    'I hope you have a good day today.',
    'There sure are so many other fun things to do.',
    'I know you got a desire to do better, and that\'s OK.',
    'I know you can become a better person! Just don\'t rush it.',
    'With God, nothing is impossible.',
    'There are so many happy thoughts in your mind right now!',
    'Make John Purdue proud!',
    'When you get things done, you feel happy and accomplished!',
    'You like YouTube, games, Cirno, and pictures of cute anime girls, but you also like anime, creating tasks, learning, and music.',
    'Feel free to do things you want and need to do.',
    'Go do something you want to do the most.',
    'You are a really good person. Did you know that?',
    'Aren\'t distractions supposed to be fun?',
    'Isn\'t laziness supposed to feel good?',
    'Having a waifu is great. She will never get mad at you.',
    'You\'ve made it this far to code this webpage.',
    'You figured out a way to redirect away from distracting websites.',
    'If you keep doing great things, you\'ll eventually get a Tesla!',
    'What makes you very happy? Think about it for a bit.',
    'Your mind must be like a carnival inside!',
    'You\'re the type of person who values fun things!',
    'Win a million dollars! It\'s harder to do than earning $1000000.',
    'Some music can help you focus.');
  else
    redirectMessages.push('Don\'t waste time getting distracted on blocked websites.',
    'Hey! You aren\'t supposed to do that!',
    'Don\'t you have anything better to do with your time?',
    'Get back to whatever you should be doing!',
    'Be productive! Don\'t go to time-wasting websites!',
    'No going to blocked websites. You understand?',
    'Stop typing in addresses of distracting websites!',
    'Break unhealthy habits.',
    'You\'re wasting your time! Come on!',
    'Ehem. You need to stop procrastinating.',
    'YouTube. DeviantArt. Reddit. Newgrounds. Image boards. Cute. Cirno. Rem. Chino. Tiny. Blonde. Pink. Top hats.<br><span id="stress">FORGET ABOUT \'EM ALL!</span>',
    'Drop all your distracting habits.',
    'All distracting thoughts need to go away.',
    'You thought about something you shouldn\'t think of.',
    'Don\'t procrastinate and fail the semester.',
    'Do you want to fail your classes or not?',
    'Control yourself, or else you will lose in life.',
    'Forget about things that are currently distracting you.',
    'Why would you do this? You stupid idiot!',
    'Seriously? You got stuff to do!',
    'You need to do something else to become better.',
    'Mindlessness is a bad thing.',
    'I get that Cirno is your waifu, but <span id="stress">DO NOT be like her!</span>',
    'Don\'t have a lazy, unproductive day.',
    'You\'re behind on your schedule and tasks! Hurry up!',
    'Temptations aren\'t good things.',
    'Erase a distracting habit, and find a new one.',
    'You need to suppress those thoughts.');
  //This message is added when the website is launched on mobile.
  if (window.innerWidth <= 812)
    redirectMessages.push('Use the forest app! Trust me.');
  if (d.getHours() <= 6 || d.getHours() >= 22)
    for(var i = 0; i < redirectMessages.length / 5; i ++)
      redirectMessages.push('You should be asleep by now.');
  //Get random message index from messages array
  if (index < 0 || index >= redirectMessages.length)
    index = Math.floor(Math.random() * redirectMessages.length);
  //Put message to screen using the index value of the array
  document.getElementById("message").innerHTML = redirectMessages[index];
  //Put index value to the console
  console.log("Message " + index);
  randomLink(redirectMessages[index]);
}

function randomLink(message) {
  var linkMessages = ["Immediately close this tab."];
  for (i = 1; i <= 3; i++)
    linkMessages.push("Got something you need to do?");
  for (i = 4; i <= 23; i++)
    linkMessages.push("Ready to do something else?");
  for (i = 24; i <= 33; i++)
    linkMessages.push("How about multiple ways to take a break?");
  //Get random link from array
  var linkIndex = Math.floor(Math.random() * linkMessages.length);
  if (message === "Return to your previous task." || message === "Get back to whatever you should be doing!")
    linkIndex = 0;
  else if (message === "May this page suggest you take a short break?" || message === "Time to take a break." || message == "What is a good way to take a break?")
    linkIndex = 21;
  //Put link message and to screen using the index value of the array
  var parent = document.getElementById("hideable");
  var link = document.getElementById("link");
  if(!link) {
    link = document.createElement("div");
    link.id = "link";
    link.className = "space";
    parent.appendChild(link);
  }
  if (linkIndex >= 4) {
    var advice = document.createElement("div");
    advice.id = "advice";
    advice.innerHTML = "Get your laptop off your lap, stand up, and stretch.";
    advice.style.display = "none";
    parent.appendChild(advice);
    link.onmouseover = function() {mouseOver(1)};
    link.onmouseout = function() {mouseOut(1)};
    if (linkIndex >= 24)
      link.innerHTML = "<a href='multiple.html'>" + linkMessages[linkIndex] + "</a>";
    else
      link.innerHTML = "<a href='breaktime.html'>" + linkMessages[linkIndex] + "</a>";
  }
  else
  {
    if(document.getElementById("advice"))
    {
      parent.removeChild(document.getElementById("advice"));
      link.onmouseover = function() {mouseOver(0)};
      link.onmouseout = function() {mouseOut(0)};
    }
    if (linkIndex > 0)
      link.innerHTML = "<a href='custom.html'>" + linkMessages[linkIndex] + "</a>";
    else
      link.innerHTML = linkMessages[linkIndex];
  }
  //Put index value to the console
  console.log("Link " + linkIndex);
}

function randomQuestion(index) {
  var questions = ['How can you focus your mind?',
  'How can you replace a bad rabbit with a good one?',
  'What routines are the best for you?',
  'How can you do things you need to do?',
  'How can you catch up with your schedule and tasks?',
  'How can you stay on task?',
  'How can you get things done?',
  'How can you do the things you\'re supposed to do?',
  'How can you be productive?',
  'How can you have an active, productive day?',
  'Why is time so precious?',
  'How can you better spend your time?',
  'What can you do to become better?',
  'How can you maintain Purdue\'s good reputation?',
  'How can you pass the semester?',
  'How can you pass your college classes?',
  'What more website coding skills can be learned?',
  'How can you deal with temptations?',
  'Without fraud or pure luck, how can you become a millionaire?',
  'How can you make distracting thoughts go away? Humor?',
  'How can you pick up a new, good habit?',
  'What are some good things you can do?',
  'What are some fun things you can do?',
  'What are some better things you can do?',
  'How can you do great things?',
  'What is a good way to take a break?',
  'How can you choose which fun thing is most worth your time?',
  'How can you not let your mind wander off?',
  'How can you avoid mindlessness?',
  'How can you avoid thinking of something you shouldn\'t think of?',
  'How can you forget things that are currently distracting you?',
  'How can you drop distracting habits?',
  'How can you break unhealthy habits?',
  'How can you control yourself?',
  'When you are procrastinating, how can you get back?',
  'How can you stop procrastinating?',
  'How can you stop going to blocked websites when necessary?',
  'How do you not sidetrack?',
  'How can you have a good day?',
  'How can you not be like an idiot?'];
  if (index < 0 || index >= questions.length)
    index = Math.floor(Math.random() * questions.length);
  document.getElementById("question").innerHTML = questions[index];
  //Put index value to the console
  console.log("Question " + index);
}

function mouseOver(advice) {
  if (advice) {
    document.getElementById("advice").style.display = "block";
    document.getElementById("theme").style.display = "none";
  }
}

function mouseOut(advice) {
  if (advice) {
    document.getElementById("advice").style.display = "none";
    document.getElementById("theme").style.display = "block";
  }
}

var messageComplete = true;

function randomTheme(number) {
  //Pick a random theme
  var theme;
  var parent = document.getElementById("hideable");
  var themeText = document.createElement("div");
  themeText.id = "theme";
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
  parent.appendChild(themeText);
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
