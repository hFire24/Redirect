var number = 0;
var d = new Date();
var messages = [];
var standup = [];
var changeclothes = [];

function loadWebsite(number) {
  if(number === 1 || number === 55)
  {
    if(number === 1)
      addBigMessages();
    else
      randomIcon();
    randomMessage(-1,number);
  }
  else if(number > 1 && number < 5)
  {
    if(number > 1 && number < 4)
    {
    if(Math.floor(Math.random() * 2) && number !== 2)
      loadBigBreak();
    else
      loadSmallBreak();
    }
    else
      loadYouTubeBreak();
    loadBreak(-1);
  }
  else if(number === 5)
    randomQuestion(-1);
  else
    randomLink(-1,number);
  randomTheme(number);
}

function $(x) {
  return document.getElementById(x);
}

function loadSmallBreak() {
  messages = [//Relaxation
  'Listen to this.',
  'Clear your mind.',
  'Pray a short prayer.',
  'Look away from the screen for about 2 minutes.',
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
  'List all the things you want to do, and order them by priority.',
    //Music
  'Add a new song to your iTunes library.',
  'Put on some music to help you focus.',
  'Watch one Eurovision performance.',
    //Miscellaneous
  'Say out loud the thing you need to get done.',
  //'Remember what happened on January 13? Don\'t drive around just for fun. Install a racing game on your Windows server.',
  'Increase your spirituality.',
  'Try answering this question.',
  'Play one of these short games.',
  'Watch anime for 5 minutes (or 20% full length).',
  'Read your journal entries.<br>Start from March 2012.',
    //Goals
  'Click here.',
  //'How can you build an everlasting romantic relationship from scratch?',
  'Double your social skills.',
  'Think of a goal. Any one. Set that as your break message.'];

  standup = [//Health and fitness
  'Get on the treadmill.',
  'Refill your bottle and drink water.',
  'Go up and down the stairs for one minute.',
  'Stare at an object 20 feet away for 20 seconds.',
  'Eat a snack if it has been 3 hours since you ate something.',
  'Listen to your own music, and don\'t be afraid to dance to it.',
    //Personal hygiene
  'Change your clothes if they\'re dirty.',
  'Change to your pajamas. No socks.',
    //Miscellaneous Part 2
  'Digitize at least one paragraph from your journal.'];
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
  'Read your patriarchal blessing.',
  'Watch Eurovision.',
    //Goals
  'Learn how to make chiptune music.',
  'Learn how to use FL Studio.',
  'Make some friends in real life. Institute is the best starting point.',
  'Go to Skillshare, and learn programming.',
  'Host a website for free that supports FileZilla.',
  'Draw anime.'];
  //Do not upload traced art.

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

/*function getAnimeArtist() {
  var artists = ["Fujima Takuya's (c. 2011)",
  "Korie Riko's (c. 2014)",
  "Kobuichi's",
  "Tinkle's (c. 2009)",
  "Kira Inugami's",
  "Morinaga Korune's",]
}*/

function loadYouTubeBreak() {
  messages = ['Watch one Eurovision performance.',
  'Watch anime for 5 minutes (or 20% full length).',
  'Double your social skills.',
  'Watch anime.',
  'If you\'re watching anime, watch a different anime.',
  'Watch anime.',
  'Play Island (Visual Novel).',
  'Watch Eurovision.',
  'Learn how to make chiptune music.',
  'Learn how to use FL Studio.',
  'Go to Skillshare, and learn programming.'];
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
    case messages.indexOf("Look away from the screen for about 2 minutes."):
      message.href = "https://www.google.com/search?q=2+minute+timer";
      break;
    case messages.indexOf("Take a deep breath."):
      message.href = "https://www.google.com/search?q=breathing+exercise";
      break;
    case messages.indexOf("Put on some focus/relaxation music."):
      message.href = "https://play.google.com/music/listen?u=0#/wst/st/d9934a37-45b6-3997-a3f9-90d93a638451";
      break;
    case messages.indexOf("Put on some music to help you focus."):
      message.href = "cyoa/58.html";
      break;
    case messages.indexOf("Play one of these short games."):
      message.href = "cyoa/46.html";
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
      message.addEventListener("click",pushTheButton);
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
    case messages.indexOf("Draw anime."):
      message.href = "art.html";
      break;
    default:
      message.removeAttribute("href");
  }
  if (standIndex === standup.indexOf("Play some Stepmania."))
    standupMessage.href = "stepmania.html";
  else
    standupMessage.removeAttribute("href");
  if((d.getHours() <= 5 || d.getHours() >= 23) && !Math.floor(Math.random() * 4))
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

var redirectMessages = ['Stop typing in addresses of distracting websites!',
'YouTube. Twitter. DeviantArt. Reddit. Newgrounds. Image boards. Facebook.<br><span id="stress">FORGET ABOUT \'EM ALL!</span>',
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
'You live to be entertained? 🤣',
'What other important things do you need to get done?'];
//This message is added when the website is launched on mobile.
if (window.innerWidth <= 812)
  redirectMessages.push('Use the forest app! Trust me.');

function addBigMessages() {
  redirectMessages.push(//Relaxation
  'Clearing your mind may help.',
  'Did you think to pray?',
  '<a href="https://www.google.com/search?q=2+minute+timer">Give your eyes a short 2 minute break.</a>',
  '<a href="https://www.google.com/search?q=breathing+exercise">Don\'t forget to take deep breaths.</a>',
  '<a href="https://play.google.com/music/listen?u=0#/wst/st/d9934a37-45b6-3997-a3f9-90d93a638451">Need help? Put on some relaxing music.</a>',
    //Task checking
  'Why don\'t you check your tasks for the day?',
  'How about you check your gTasks list?',
  'Just do your tasks!',
    //Day planning
  'Sometimes just managing your tasks can be motivating.',
  'If you\'re failing to plan, you\'re planning to fail.',
  'Why don\'t you <a href="https://youtu.be/r-dMhpgj0PA">think about things</a> you want and need to do?',
  'You may want to form a routine.',
    //Homework
  'How about you do your homework?',
  'Why don\'t you get assignments done?',
  'I get that homework can be a struggle.<br>Try to change your mindset.',
  'Why don\'t you check Blackboard?',
  'Why not get an assignment done early? You\'ll get a head start!',
    //Music
  'Sometimes just browsing your music library could be fun.',
  '<a href="cyoa/58.html">Why don\'t you put on some music to help you focus?</a>',
  '<a href="cyoa/58.html">Put on music. If the music isn\'t making you productive, just ramp up the intensity.</a>',
  '<a href="https://play.google.com/music/m/Aym2r2mohqm3rio4gwqnsjjzfdm?t=Two_Steps_from_Hell">If things aren\'t going your way, put on some epic music!</a>',
  '<a href="https://www.thetabernaclechoir.org/listen.html">How about you listen to some heavenly Tabernacle Choir music?</a>',
  'Why not watch at least one Eurovision performance?',
  'Why not watch some Eurovision?',
    //Anime
  'If you need some happiness, watch 5 minutes of anime!',
  'Why don\'t you watch some anime?',
  'You love anime. Right? Why don\'t you watch some?',
    //Games
  '<a href="cyoa/46.html">Why not play one of these short games?</a>',
  'How about you drive fast?... in Need for Speed?',
  'Why not play Island (Visual Novel)?',
    //Miscellaneous
  'Try saying out loud the thing you need to get done.',
  '<a href="https://www.churchofjesuschrist.org/study/ensign/1999/03/ten-ideas-to-increase-your-spirituality?lang=eng">How about you increase your spirituality?</a>',
  'Why not read your patriarchal blessing?',
  'Why don\'t you read your journal entries?<br>Start from March 2012.',
  'How about you digitize a paragraph from your journal?',
  'Why not preserve some journal entries into a document?',
    //Goals
  '<a href="https://skl.sh/37ueYoA">How about going to Skillshare to double your social skills?</a>',
  '<a href="chiptunelessons.html">How about learning how to make chiptunes?</a>',
  '<a href="https://skl.sh/2Hq5hNy">Why not learn how to use FL Studio in Skillshare?</a>',
  '<a href="https://skl.sh/38rV6DT">Learning programming on Skillshare is a good idea.</a>',
  'Remember that Python games book? You may get something out of it by reading it.',
  '<a href="art.html">Why don\'t you practice drawing anime?</a>',
  'Are there any goals in life you have?',
    //Health and fitness
  'Try standing up and walking for a bit.<br>Look away from the screen.',
  'Why not get on the treadmill if you feel like it?',
  'Have you been searching for food terms lately? You should eat some food.',
  'Consider tidying up your room.',
  '<a href="stepmania.html">How about playing some Stepmania?</a>',
    //From the whoa webpage
  '<a href="repent2.html">You need more Jesus.</a>',
  'Do not screw up your day.',
  'Do not ruin, darken, or destroy your future.',
  'Do not throw you life away.',
  'Don\'t be dictated by your urges.',
  'YOU WISH YOU ARE A CUTE ANIME GIRL? 🤣🤣',
  'You have more important things to do than browse some websites.',
  'Think of something else.',
  'Resist temptations.',
    //Rejected whoa messages
  '<a href="repent2.html">Do not forsake God.</a>',
  'Don\'t procrasturbate and be a loser.',
  'Do not abandon goals.',
  'You must snap out of it!',
  'This is unacceptable.',
  'Stop it and get some help.',
  'Get out of here!',
    //From the relapse webpage
  'Now is not the time to be doing that.',
  'Please stop being lazy, and stop wasting your time.',
  'Make your future brighter before it\'s too late.',
  'Quitting indulgent activities is not easy, but worth it.',
  'Watch your thoughts; they become words.<br>Watch your words; they become actions.<br>Watch your actions; they become habits.<br>Watch your habits; they become character.<br>Watch your character; it becomes your destiny.',
  'You are stronger than you think.',
  'Your ideal self is a cute little kid? 🤣🤣',
  'Be sure you get important things done.',
  'Freedom from addictions. That should be a goal.',
  'Do you really want to look at pics of cute anime girls?',
  'You are capable of doing great things.',
  'Freedom is not falling into Satan\'s temptations.',
    //Rejected relapse messages
  'Become a better person.',
  'Expunge that bad habit.',
  'Why did you do that? <span style="font-family:\'Futura Md BT\',sans-serif;">:(</span>',
  'To win in life, you must endure trials. It won\'t necessarily be fun, but it will make you better.',
  'Escape from temptation.',
  'Is what you\'re doing what you really want?',
  'Break out of this cycle of internet addiction.',
    //From the repent2 webpage
  "The Lord knows you have weaknesses.",
  "You do not want to be weak in spirit.",
  "Pray always to conquer Satan.",
    //From the quotes webpage
  "Make your future brighter! Don't walk on the path of darkness!",
  "Get important things done! You will feel a sense of accomplishment!",
  "I know you can become a better person! Just don't rush it.",
  "Freedom is not being dictated by your urges. Show those urges who's boss.",
  "Life is a game. Know the rules and strategies. Apply them, and you'll win.",
  "When you get things done, you feel happy and accomplished!",
  "You are a really good person. Did you know that?",
  "If you keep doing great things, you'll get a Tesla!",
  "Win a million dollars! It's harder to do than earning $1000000.",
  "The road to productivity. Take it, and you'll be successful.",
  "Be a productive human being! Do something good!",
  "Make John Purdue proud! Be a <u>successful</u> student!",
  "What will it take for you to become successful? Imagine the iceberg of success.",
  "Would you rather live in a large house with a rich and happy life with people who love you? Or would you rather live all alone, poor and miserable, with nobody to support you? Your choices determine the consequences.",
  "Don't let the lazy part of you define your lifestyle.",
  "Given the huge amount of creature comforts available today, it's so difficult to resist laziness.",
  "There are so many legitimate opportunies to make lots of money online.",
  "Don't be like Anzu Futaba.",
    //Rejected neutral messages
  'Return to your previous task.',
  'Time to take a break.',
  'You were about to be distracted, but please stay on track.',
  'Life is hard. Distractions are everywhere. God will help you.',
  'Life is hard. Play hard to win.',
    //Rejected positive messages
  'I hope you have a good day today.',
  'There sure are so many other fun things to do.',
  'I know you got a desire to do better, and that\'s OK.',
  'With God, nothing is impossible.',
  'Feel free to do things you want and need to do.',
  'Go do something you want to do the most.',
  'You figured out a way to redirect away from distracting websites.',
  'Your dream car is a Tesla! Would you like one?',
  'Your mind must be like a carnival inside!',
  'You\'re the type of person who values fun things!',
    //Rejected negative messages
  'Break unhealthy habits.',
  'Drop all your distracting habits.',
  'All distracting thoughts need to go away.',
  'You thought about something you shouldn\'t think of.',
  'Don\'t procrastinate and fail the semester.',
  'Do you want to fail your classes or not?',
  'Control yourself, or else you will lose in life.',
  'Forget about things that are currently distracting you.',
  'Why would you do this? You stupid idiot!',
  'Mindlessness is a bad thing.',
  'I get that Cirno is your waifu, but <span id="stress">DO NOT be like her!</span>',
  'Don\'t have a lazy, unproductive day.',
  'You\'re behind on your schedule and tasks! Hurry up!',
  'Temptations aren\'t good things.',
  'Erase a distracting habit, and find a new one.',
  'You must suppress those thoughts.',
  'Do not be an idiot.',
  'You didn\'t come to Earth to be entertained.',
    //Other rejected messages
  'You need to do something else to become better.',
  'Get out of the drift, and get on the road to productivity.',
    //New messages
  'Finish whatever you\'re doing.',
  'If you have a lot of tabs and programs open, close them.',
  'Think about things that make you better.',
  'It looks like you feel stuck.',
  'It seems like you feel lost.',
  'Yeah, yeah. I restricted your freedom. <span id="stress">DEAL WITH IT.</span>',
  'Grow up and get a life!');

  /*for(var i = 0; i < questions.length; i++)
    redirectMessages.push(questions[i]);*/
}

function randomMessage(index,number) {
  //Get random message index from messages array
  if (index < 0 || index >= redirectMessages.length)
    index = Math.floor(Math.random() * redirectMessages.length);
  //Put message to screen using the index value of the array
  $("message").innerHTML = redirectMessages[index];
  //If it's Sunday morning, then the website may prompt you to go to church.
  if(d.getDay() === 0 && d.getHours() >= 6 && d.getHours() < 10 && Math.floor(Math.random() * 3))
  {
    $("message").innerHTML = "Get ready for church!";
    index = redirectMessages.length + 2;
  }
  //If it's late at night, the website may prompt you to go to sleep.
  var sleepTime = Math.floor(Math.random() * 5);
  if ((d.getHours() <= 5 || d.getHours() >= 23) && !sleepTime)
  {
    $("message").innerHTML = 'You should be asleep by now.';
    index = redirectMessages.length;
    console.log("Sleep " + sleepTime);
  }
  //Put index value to the console
  console.log("Message " + index);
  var message = $("message").innerHTML;
  //Adds a ROFL clip event listener if the message contains a 🤣
  if(message.indexOf('🤣') >= 0)
  {
    $("message").addEventListener("click",function(){
      var exists = $("hakase");
        if (!exists) {
          message = message + "<br>";
          var video = document.createElement("video");
          video.id = "hakase";
          var source = document.createElement("source");
          source.src = "https://hfire24.github.io/Redirect/media/ROFL.mp4";
          source.type = "video/mp4";
          video.appendChild(source);
          $("message").appendChild(video);
        }
      $("hakase").play();});
  }
  randomLink(index,number);
}

function randomLink(index,number) {
  //Array for link messages below the heading text
  var linkMessages = ["Immediately close this tab."];
  for (var i = 1; i <= 30; i++)
    linkMessages.push("Got something you need to do?");
  //Get random link from array
  var linkIndex = Math.floor(Math.random() * linkMessages.length);
  var message = $("message").innerHTML;
  //If the message tells you to leave, the linkIndex will be 0.
  if (index < 3 || message === 'Return to your previous task.' || message === 'Get out of here!')
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
  //Sometimes, the link will change depending on the message.
  if (message === "Get ready for church!")
    link.innerHTML = "<a href='church.html'>Here's how to get ready.</a>";
  else if (message === "May this page suggest you take a short break?" || message === "Time to take a break.")
    link.innerHTML = "<a href='breaktime.html'>Don't do nothing. Do something!</a> <span onclick='rejectSomething(3)' style='color:white;'>No.</span>";
  else if (linkIndex > 0)
    link.innerHTML = "<a href='custom.html'>" + linkMessages[linkIndex] + "</a> <span onclick='rejectSomething(1)' style='color:white;'>No.</span>";
  else
    link.innerHTML = linkMessages[linkIndex];
  //Put index value to the console
  console.log("Link " + linkIndex);
  //This only shows up if certain pages are loaded.
  if(number >= 5)
    createAdvice();
  //If the message is too long, this fires up.
  if(message.length > 200)
    $("message").classList.add("tiny");
  else if(message.length > 90)
    $("message").classList.add("small");
}

function randomIcon() {
  var icon = $("apple");
  var iconNumber = Math.floor(Math.random() * 5) + 1;
  if(iconNumber > 1)
    icon.href = "apple-touch-icon " + iconNumber + ".png";
}

function getBack()
{
  var random = Math.floor(Math.random() * 30)
  console.log("Random " + random);
  if(random === 0)
  {
    $("message").innerHTML = "Get back to whatever you should be doing!";
    $("link").innerHTML = "Immediately close this tab.";
  }
  var sleepTime = Math.floor(Math.random() * 5);
  if ((d.getHours() <= 5 || d.getHours() >= 23) && !sleepTime)
  {
    $("message").innerHTML = 'You should be asleep by now.';
    console.log("Sleep " + sleepTime);
  }
}

async function createAdvice()
{
  var hydrate = Math.floor(Math.random() * 30);
  console.log("Hydrate " + hydrate);
  if(hydrate < 3)
  {
    await sleep(100);
    if (hydrate < 1)
      alert("Just a reminder to stay hydrated.\nYou may need to stand up and stretch.");
    else
    {
      alert("Here's a tip: Some music can help you focus.\n\nPress OK and then the \"M\" key for more info.");
      window.addEventListener("keyup", function (event) {
        if (event.keyCode === 77) {
          event.preventDefault();
          location.href = "cyoa/58.html";
        }
      });
    }
  }
}

function rejectSomething(time) {
  if(time === 1)
    link.innerHTML = "<a href='time.html'>Don't do nothing. Do something!</a> <span onclick='rejectSomething(2)' style='color:white;'>No.</span>";
  else if(time === 3)
    link.innerHTML = "<a href='custom.html'>Got something you need to do?</a> <span onclick='rejectSomething(2)' style='color:white;'>No.</span>";
  else if(time === 4)
    link.innerHTML = "<a href='breakyt.html'>Don't do nothing. Do something!</a> <span onclick='rejectSomething(2)' style='color:white;'>No.</span>";
  else if(time === 6)
    link.innerHTML = "<a href='cyoa/21.html'>Do you really want to look at cute anime girls?</a> <span onclick='rejectSomething(1)' style='color:white;'>No</span>";
  else if(time === 7)
    link.innerHTML = "<a href='time.html'>Screw reddit. Do something else!</a> <span onclick='rejectSomething(2)' style='color:white;'>No.</span>";
  else if(time === 8)
    link.innerHTML = "<a href='cyoa/29.html'>You just wanted to play games. Right?</a> <span onclick='rejectSomething(1)' style='color:white;'>No.</span>";
  else if(time === 9)
    link.innerHTML = "<a href='custom.html'>Got something you need to do?</a> <span onclick='rejectSomething(10)' style='color:white;'>No.</span>";
  else if(time === 10)
    link.innerHTML = "<a class='anime-link' href='cyoa/2.html'>You really are bored.</a>";
  else
    location.href = "cyoa/1.html";
}

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
'What other important things do you need to get done?',
'What will it take for you to become successful?'];

function randomQuestion(index) {
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
  if(newMessage.value.toLowerCase().indexOf("cirno") >= 0)
    location.href = "cirno.html";
  else if(newMessage.value.toLowerCase().indexOf("nuke") >= 0)
    location.href = "whoa/index.html";
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

async function pushTheButton()
{
  var press = document.createElement("audio");
  var source = document.createElement("source");
  source.src = 'media/Button Push.mp3';
  source.type = 'audio/mpeg';
  press.appendChild(source);
  press.id = "press";
  document.body.appendChild(press);
  $("press").play();
  $("break").style.color = 'white';
  await sleep(1750);
  location.href = "https://emergency.nofap.com/redirect?religious=true&cat=em";;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
