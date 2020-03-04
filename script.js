var number = 0;
var d = new Date();

function loadWebsite(number) {
  if(number >= 2 && number <= 3)
  {
  if (number === 2)
    loadSmallBreak();
  else if (number === 3)
    loadBigBreak();
  loadBreak(-1);
  }
  else if (number === 4)
    randomQuestion(-1);
  else if (number === 5)
    randomMessage(-1);
  else
    randomMessage(-3);
  randomTheme(number);
}

function $(x) {
  return document.getElementById(x);
}

var messages;
var standup;
var changeclothes = [];

function loadSmallBreak(index) {
  messages = [//Relaxation
  'Listen to this.',
  'Clear your mind.',
  'Pray a short prayer.',
  'Look away from the screen for about 30 seconds.',
  'Take a deep breath.',
  'Put on some focus/relaxation music.',
    //Task checking
  'Check your tasks for the day.',
  'Check your gTasks list, please.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',
  'Check your To Do spreadsheet.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',
    //Day planning
  'Create tasks for today and tomorrow.',
  'Make a plan for today and tomorrow.',
  'Determine what you need to do and what you want to do today.',
  'List everything you\'re currently doing, and order them by priority.',
    //Music
  'Add a new song to your iTunes library.',
  'Put on some music to help you focus.',
    //Miscellaneous
  'Close tabs and programs.',
  'Say out loud the thing you need to get done.',
  //'Remember what happened on January 13? Don\'t drive around just for fun. Install a racing game on your Windows server.',
  'Increase your spirituality.',
  'Try answering this question.',
    //Goals
  'Click here.',
  //'How can you build an everlasting romantic relationship from scratch?',
  'Double your social skills.',
  'Think of a goal. Any one. Set that as your break message.'];

  standup = [//Health and fitness
  'Refill your bottle and drink water.',
  'Go up and down the stairs for one minute.',
  'Stare at an object 20 feet away for 20 seconds.',
  'Eat a snack if it has been 3 hours since you ate something.',
  'Listen to your own music, and don\'t be afraid to dance to it.',
    //Personal hygiene
  'Change your clothes if they\'re dirty.',
  'Change to your pajamas. No socks.',
    //Miscellaneous Part 2
  'Digitize at least one paragraph from your journal.',
  'Get on the treadmill.'];
}

function loadBigBreak() {
  messages = [//Task checking
  'Check your gTasks list, please.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',
  'Check your To Do spreadsheet.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',
    //Day planning
  'Create tasks for today and tomorrow.',
  'Make a plan for today and tomorrow.',
    //Homework
  'Do homework.<br>You may need to stand up and stretch and change clothes.',
  'Get assignments done.<br>You may need to stand up and stretch and change clothes.',
  'If you\'re struggling with homework, do a different assignment.',
  'Check Blackboard for assignments, then do one of them.',
  //'Make progress on a big project.',
  'Finish a piece of homework, even if the deadline is far.',
  'Put on some epic music, and<br><span id="stress">GET HOMEWORK DONE!</span>',
  'Don\'t suck at group projects.',
    //Anime watching
  'Watch anime.',
  'If you\'re watching anime, watch a different anime.',
  'Watch anime.',
    //Miscellaneous
  'Drive around how you want in Need for Speed: Hot Pursuit.',
  'Play Island (Visual Novel).',
  'No routine? Form one.',
  'How about multiple ways to take a break?',
    //Goals
  'Learn how to make chiptune music.',
  'Learn how to use FL Studio.',
  'Make some friends in real life. Institute is the best starting point.',
  'Go to Skillshare, and learn programming.',
  'Host a website for free that supports FileZilla.'];

  standup = [//Health and fitness
  'Eat a meal if it has been 3 hours since you ate something.',
    //Personal hygiene
  'Take a shower if you hadn\'t today, even if it\'s cold in your room.',
    //Miscellaneous Part 2
  'Declutter your room.',
  'Digitize at least two days of events from your journal.',
  'Learn how to use Pygame by reading that book.',
  'Play some Stepmania.'];
}

function loadBreak(index) {
  for(var i = 0; i < changeclothes.length; i++)
    standup.push("Change to appropriate clothes if necessary.");
  for(i = 0; i < standup.length; i++)
    messages.push('Stand up and stretch if you can.');
  //Get random message index from messages array
  if (index < 0 || index >= messages.length)
    do
      index = Math.floor(Math.random() * messages.length);
    while (index - (messages.length - standup.length) === standup.indexOf("Change to your pajamas. No socks.") && d.getHours() > 3 && d.getHours() < 20);
  var message = $("break");
  var standupMessage = $("standup");
  var changeMessage = $("changeclothes");
  var standIndex = index - (messages.length - standup.length);
  var changeIndex = standIndex - (standup.length - changeclothes.length);
  switch(index)
  {
    case messages.indexOf("Listen to this."):
    case messages.indexOf("Clear your mind."):
      message.href = "https://www.dropbox.com/sh/6pw78gq1vty860o/AABxsvUAWPsWw29v7dxiSYT7a?dl=0";
      break;
    case messages.indexOf("Look away from the screen for about 30 seconds."):
      message.href = "https://www.google.com/search?q=30+second+timer";
      break;
    case messages.indexOf("Take a deep breath."):
      message.href = "https://www.google.com/search?q=breathing+exercise";
      break;
    case messages.indexOf("Put on some focus/relaxation music."):
      message.href = "https://play.google.com/music/listen?u=0#/wst/st/d9934a37-45b6-3997-a3f9-90d93a638451";
      break;
    case messages.indexOf("Finish a piece of homework, even if the deadline is far.") + 1:
      message.href = "https://play.google.com/music/m/Aym2r2mohqm3rio4gwqnsjjzfdm?t=Two_Steps_from_Hell";
      break;
    case messages.indexOf("Watch anime."):
    case messages.indexOf("Watch anime.") + 1:
    case messages.lastIndexOf("Watch anime."):
      message.href = "nextanime.html";
      break;
    case messages.indexOf("Increase your spirituality."):
      message.href = "https://www.churchofjesuschrist.org/study/ensign/1999/03/ten-ideas-to-increase-your-spirituality?lang=eng";
      break;
    case messages.indexOf("Try answering this question."):
      message.href = "question.html";
      break;
    case messages.indexOf("How about multiple ways to take a break?"):
      message.href = "multiple.html";
      break;
    case messages.indexOf("Learn how to make chiptune music."):
    case messages.indexOf("Learn how to use FL Studio."):
      message.href = "chiptunelessons.html";
      break;
    case messages.indexOf("Click here."):
      message.href = "https://emergency.nofap.com/redirect?religious=true&cat=em";
      break;
    case messages.indexOf("Go to Skillshare, and learn programming."):
      message.href = "https://skl.sh/38rV6DT";
      break;
    case messages.indexOf("Double your social skills."):
      message.href = "https://skl.sh/37ueYoA";
      break;
    case messages.indexOf("Don't suck at group projects."):
      message.href = "groupprojects.html";
      break;
    default:
      message.removeAttribute("href");
  }
  if (standIndex === standup.indexOf("Play some Stepmania."))
    standupMessage.href = "stepmania.html";
  else
    standupMessage.removeAttribute("href");
  if((d.getHours() <= 5 || d.getHours() >= 22) && !Math.floor(Math.random() * 4))
  {
    index = messages.length;
    messages.push('Stand up and stretch if you can.');
    message.removeAttribute("href");
    standIndex = standup.length;
    standup.push('Wear your pajamas and go to bed.');
    standupMessage.removeAttribute("href");
  }
  console.log("Message " + index);
  message.innerHTML = messages[index];
  if(message.innerHTML === 'Stand up and stretch if you can.')
  {
    console.log("Standup " + standIndex);
    message.addEventListener("click",function() {$("standup").style.display = 'block';});
    standupMessage.innerHTML = standup[standIndex];
    if(standupMessage.innerHTML === 'Change to appropriate clothes if necessary.' || standupMessage.innerHTML === 'Strip, even if it\'s cold.')
    {
      console.log("Change Clothes " + changeIndex);
      changeMessage.innerHTML = changeclothes[changeIndex];
      standupMessage.addEventListener("click",function() {$("changeclothes").style.display = 'block';});
    }
  }
  if(messages.indexOf("Listen to this.") === -1 && index >= messages.indexOf("Do homework.<br>You may need to stand up and stretch and change clothes.") && index <= messages.indexOf("Finish a piece of homework, even if the deadline is far.") + 1)
    message.addEventListener("click",function() {var exists = $("vader");
      if (!exists) {
        var video = document.createElement("video");
        video.id = "vader";
        var source = document.createElement("source");
        source.src = "media/NOOOO!.mp4";
        source.type = "video/mp4";
        video.appendChild(source);
        document.body.appendChild(video);
      }
    $("vader").play();});
}

function randomMessage(index) {
  var redirectMessages = ['Stop typing in addresses of distracting websites!',
  'YouTube. DeviantArt. Reddit. Newgrounds. Image boards. Cute. Cirno. Rem. Chino. Blonde. Pink. Top hats.<br><span id="stress">FORGET ABOUT \'EM ALL!</span>',
  'Get back to whatever you should be doing!',
  'You were redirected from a blacklisted website.',
  'You shouldn\'t access that website now.',
  'This website is blocked.',
  'Don\'t waste time getting distracted on blocked websites.',
  'Hey! You aren\'t supposed to do that!',
  'Don\'t you have anything better to do with your time?',
  'Today will be a great day to catch up with your schedule and tasks.',
  'You might regret visiting that blocked website.',
  'Don\'t go to time-wasting websites!',
  'No going to blocked websites. You understand?',
  'May this page suggest you take a short break?',
  'It is a good idea to get things done.',
  'Your mind must be wandering off, isn\'t it?',
  'This is a webpage. And it intercepted your internet access!',
  'You\'re wasting your time! Come on!',
  'Ehem. You need to stop procrastinating.',
  'You won\'t complete your tasks quickly if you sidetrack.',
  'There\'s nothing beneficial to see there.',
  'Please get things done. I mean it.',
  'Time is a precious resource. Don\'t waste it.',
  'Seriously? You got stuff to do!',
  'Make sure you stay on task.',
  'Cute or fun things are good, but they are distractions.',
  'You\'ve made it this far to code this webpage.',
  'Tempted? That\'s normal.<br>Tasks? They\'re tasks.<br>Hotel? Trivago.',
  'You may need to switch your thought patterns.',
  'What other important things do you need to get done?'];
  //This message is added when the website is launched on mobile.
  if (window.innerWidth <= 812)
    redirectMessages.push('Use the forest app! Trust me.');

  //Get random message index from messages array
  if (index < 0 || index >= redirectMessages.length)
    index = Math.floor(Math.random() * redirectMessages.length);
  //Put message to screen using the index value of the array
  $("message").innerHTML = redirectMessages[index];
  if(d.getDay() === 0 && d.getHours() >= 6 && d.getHours() < 9 && Math.floor(Math.random() * 3))
  {
    $("message").innerHTML = "Get ready for church!";
    index = redirectMessages.length + 2;
  }
  if ((d.getHours() <= 5 || d.getHours() >= 22) && !Math.floor(Math.random() * 5))
  {
    $("message").innerHTML = 'You should be asleep by now.';
    index = redirectMessages.length;
  }
  //Put index value to the console
  console.log("Message " + index);
  var message = $("message").innerHTML;
  var linkMessages = ["Immediately close this tab."];
  for (var i = 1; i <= 30; i++)
    linkMessages.push("Got something you need to do?");
  //Get random link from array
  var linkIndex = Math.floor(Math.random() * linkMessages.length);
  if (index < 3)
    linkIndex = 0;
  //Put link message and to screen using the index value of the array
  var parent = $("hideable");
  var link = $("link");
  if(!link) {
    link = document.createElement("div");
    link.id = "link";
    link.className = "space";
    parent.appendChild(link);
  }
  if (message === "Get ready for church!")
    link.innerHTML = "<a href='church.html'>Here's how to get ready.</a>";
  else if (message === "May this page suggest you take a short break?")
    link.innerHTML = "<a href='breaktime.html'>Ready to do something else?</a> <span onclick='rejectSomething(3)' style='color:white;'>No.</span>";
  else if (linkIndex > 0)
    link.innerHTML = "<a href='custom.html'>" + linkMessages[linkIndex] + "</a> <span onclick='rejectSomething(1)' style='color:white;'>No.</span>";
  else
    link.innerHTML = linkMessages[linkIndex];
  //Put index value to the console
  console.log("Link " + linkIndex);
}

function rejectSomething(time) {
  if(time === 1)
    link.innerHTML = "<a href='time.html'>Ready to do something else?</a> <span onclick='rejectSomething(2)' style='color:white;'>No.</span>";
  else if(time === 3)
    link.innerHTML = "<a href='custom.html'>Got something you need to do?</a> <span onclick='rejectSomething(2)' style='color:white;'>No.</span>";
  else
    location.href = "cyoa/1.html";
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
  'How can you not be like an idiot?',
  'What makes you very happy? Think about it for a bit.',
  'What compels you to look at anime pictures?',
  'How can you overcome addictions?',
  'Why do certain things appeal to you?',
  'Where do you see yourself in 2 years?',
  'Why do you love and seek out cute things?',
  'How can you be consistent with your moral values?',
  'What other important things do you need to get done?'];
  if (index < 0 || index >= questions.length)
    index = Math.floor(Math.random() * questions.length);
  $("question").innerHTML = questions[index];
  //Put index value to the console
  console.log("Question " + index);
}

var messageComplete = true;

function randomTheme(number) {
  //Pick a random theme
  var theme;
  var parent = $("hideable");
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
    var input = $("newBreak");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        createMessage();
      }
    });
  }
}

function getWidth() {
  $("width").innerHTML = window.innerWidth;
}

function createMessage() {
  var parent = $("custom");
  var newMessage = $("newBreak");
  var button = $("messageButton");
  var message = document.createElement("div");
  message.id = "break";
  message.className = "space";
  if($("size").checked)
    message.classList.add("big");
  message.innerHTML = newMessage.value;
  if(newMessage.value.indexOf("Cirno") >= 0)
    location.href = "cirno.html";
  parent.removeChild($("instructions"));
  parent.removeChild(newMessage);
  parent.removeChild(button);
  parent.removeChild(breaklink);
  parent.removeChild(sizeselecter);
  parent.appendChild(message);
  messageComplete = true;
}

var hide = $("hideable");
window.addEventListener("keyup", function (event) {
  if (event.keyCode === 66 && messageComplete) {
    event.preventDefault();
    if (hide.style.display !== "none")
      hide.style.display = "none";
    else
      hide.style.display = "inline";
  }
});
