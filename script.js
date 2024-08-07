var number = 0;
var d = new Date();
var messageComplete = true;
var ignoreStorage = false;

function loadWebsite(number) {
  if(number === 9) {
    redirectMessages.splice(redirectMessages.indexOf('YouTube. Twitter. Reddit. Image boards. Facebook.<br><span id="stress">FORGET ABOUT \'EM ALL!</span>'),1,'Forget about Googling distracting stuff!');
    redirectMessages.splice(redirectMessages.indexOf('Cute or fun things are good, but they are distractions.'),1,'Fun things are good, but they are distractions.');
    redirectMessages.splice(redirectMessages.indexOf('Life isn\'t about seeking cuteness.'),1);
  }
  //1, 7-12, 55
  if(number === 1 || number >= 7 && number <= 12 || number === 55) {
    if(number === 1)
      addBigMessages();
    randomMessage(-1,number);
  }
  else
    randomLink(-1,number);
  if (number < 7 || number > 12)
    randomTheme(number);
  //If the number is 1, then the homework iframe may pop up.
  if(number === 1) {
    var homework = 1;
    /*console.log(homework);
    if(homework === 0)
    {
      var homeworkFrame = document.createElement("IFRAME");
      homeworkFrame.width = 0.75 * window.innerWidth;
      homeworkFrame.height = 768;
      homeworkFrame.src = "homework.html";
      homeworkFrame.id = "homework";
      $("theme").classList.add("space");
      $("hideable").appendChild(homeworkFrame);
    }*/
  }
  if(number >= 7 && number <= 12)
    messageComplete = false;
}

function $(x) {
  return document.getElementById(x);
}

var redirectMessages = ['YouTube. Twitter. Reddit. Image boards. Facebook.<br><span id="stress">FORGET ABOUT \'EM ALL!</span>',
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
'Stop typing in addresses of distracting websites!',
'Stop escaping from your problems!',
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
'What other important things do you need to get done?',
'You\'re not bored, lazy, or procrastinating. You are fearful.',
'Quit running away from your problems.',
'Distractions: An ineffective way to cope fear. You should deal with your problems directly.',
'Life isn\'t about seeking cuteness.',
'😆You got redirected!😆'];
//This message is added when the website is launched on mobile.
if (window.innerWidth <= 812)
  redirectMessages.push('Use the forest app! Trust me.');

function addBigMessages() {
  redirectMessages.pop();
  redirectMessages.push(//Relaxation
  'Clearing your mind may help.',
  'Did you think to pray?',
  '<a href="https://www.google.com/search?q=2+minute+timer">Give your eyes a short 2 minute break.</a>',
  '<a href="https://www.google.com/search?q=breathing+exercise">Don\'t forget to take deep breaths.</a>',
  '<a href="https://music.youtube.com/channel/UC4r3AhGZWUGeh2AprrEJ_PA">Need help? Put on some relaxing music.</a>',
    //Task checking
  'Why don\'t you check your tasks for the day?',
  'How about you check your Dynalist?',
  'Just do your tasks!',
    //Day planning
  'Sometimes just managing your tasks can be motivating.',
  'If you\'re failing to plan, you\'re planning to fail.',
  'Why don\'t you <a href="https://youtu.be/r-dMhpgj0PA">think about things</a> you want and need to do?',
  'You may want to form a routine.',
    //Homework
  /*'How about you do your homework?',
  'Why don\'t you get assignments done?',
  'I get that homework can be a struggle.<br>Try to change your mindset.',
  'Why don\'t you check Brightspace?',
  'Why not get an assignment done early? You\'ll get a head start!',*/
    //Jobs
  /*'Why don\'t you apply for tech jobs?',
  'I get that applying for tech jobs can be a struggle.<br>Try to change your mindset.',
  'How about you check job searching websites for tech jobs?',
  'Why not apply for a job at a company you look up to? You might get the job!',
  'How about you build a portfolio? You did a lot of things on this website.',*/
    //Anime
  '<a href="nextanime">If you need some happiness, watch at least 30 seconds of anime!</a>',
  '<a href="nextanime">Why don\'t you watch some anime?</a>',
  '<a href="nextanime">You love anime. Right? Why don\'t you watch some?</a>',
  '<a href="https://www.amazon.com/gp/video/detail/B011FPJLGW">How about you watch some Pokemon?</a>',
    //Music
  'Sometimes just browsing your music library could be fun.',
  '<a href="musicflow/1">Why don\'t you put on some music to help you focus?</a>',
  '<a href="musicflow/1.html">Put on music. If the music isn\'t making you productive, just ramp up the intensity.</a>',
  '<a href="https://music.youtube.com/channel/UC7PFOj9JRgpSQjxTxGINpmw">If things aren\'t going your way, put on some epic music!</a>',
  '<a href="https://www.churchofjesuschrist.org/media/radio?lang=eng">How about you listen to some heavenly Tabernacle Choir music?</a>',
    //Games
  '<a href="cyoa/46.html">Why not play one of these short games?</a>',
  'How about you drive fast?... in Need for Speed?',
  'How about you drive?... in Euro Truck Simulator 2?',
  '<a href="https://sudoku.com/">Why don\'t you play Sudoku?</a>',
    //Miscellaneous
  'Try saying out loud the thing you need to get done.',
  '<a href="https://www.churchofjesuschrist.org/study/ensign/1999/03/ten-ideas-to-increase-your-spirituality?lang=eng">How about you increase your spirituality?</a>',
  'Why not read your patriarchal blessing? It could put you on a better path in life.',
  'Why don\'t you read your journal entries?',
  //'Reading <u>Atomic Habits</u> could lead you towards a better life.',
    //Goals
  'How about you learn social skills?',
  'Learning programming is a good idea.',
  /*'<a href="chiptunelessons.html">How about you learn how to make chiptunes?</a>',
  'Want to earn money via Fiverr? Learn Godot.',
  'Remember that Python games book? You may get something out of it by reading it.',
  '<a href="art.html">Why don\'t you practice drawing anime?</a>',
  '<a href="https://blog.udemy.com/c-sharp-projects/">How about you code one of those projects?</a>',
  'Why don\'t you read that book you bought on Amazon?',
  '<a href="https://www.duolingo.com/">Learn a new language at Duolingo, because why not?</a>',
  'Why not make some progress on the Brilliant app?',*/
  '<a href="goals.html">Check out the goals page for the big things you want to do!</a>',
  //'Try solving a Rubik\'s cube.',
  //'Those Purdue e-mails aren\'t going to read themselves.',
  '<a href="https://dynalist.io/d/PQDJvhu4f3DRlgGhkcMQA32T">How about you listen to a General Conference talk?</a>',
  'Are there any goals in life you have?',
    //Health and fitness
  'Try standing up and walking for a bit. Look away from the screen.',
  'Why not get on the treadmill if you feel like it?',
  'Have you been searching for food terms lately? You should eat some food.',
  'Consider tidying up your room.',
  '<a href="stepmania.html">How about you play some Stepmania?</a>',
  '<a href="https://www.youtube.com/watch?v=z6KKo85V9Ew">Why don\'t you do planks for one minute?</a>',
  'Did you know you have a gym in your apartment? Why don\'t you use it?',
    //From the whoa webpage
  '<a href="repent2.html">You need more Jesus.</a>',
  'Do not screw up your day.',
  'Do not ruin, darken, or destroy your future.',
  'Do not throw your life away.',
  'Don\'t be dictated by your urges.',
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
  'Be sure you get important things done.',
  'Freedom from addictions. That should be a goal.',
  'Do you really want to look at pics of cute anime girls?',
  'You are capable of doing great things.',
  'Freedom is not falling into Satan\'s temptations.',
    //Rejected relapse messages
  'Become a better person.',
  'Expunge that bad habit.',
  'Why did you do that? <span style="font-family: Futura Md BT, sans-serif;">:(</span>',
  'To win in life, you must endure trials. It won\'t necessarily be fun, but it will make you better.',
  'Escape from temptation.',
  'Is what you\'re doing what you really want?',
  'Break out of this cycle of internet addiction.',
    //From the repent webpage
  "Keep repenting. Pray and ask for forgiveness.",
  "The Lord knows you have weaknesses.",
  "You do not want to be weak in spirit.",
  "Pray always to conquer Satan.",
    //From the quotes webpage
  "Make your future brighter! Don't walk on the path of darkness!",
  "Get important things done! You will feel a sense of accomplishment!",
  "I know you can become a better person! Just don't rush it.",
  "Freedom is not being dictated by your urges. Show those urges who's boss.",
  "Life is a game. Know the rules. Use strategies, and you'll win.",
  "When you get things done, you feel happy and accomplished!",
  "You are a really good person. Did you know that?",
  "If you keep doing great things, you'll get your dream car!",
  "Win a million dollars! It's harder to do than earning $1000000.",
  "The road to productivity. Take it, and you'll be successful.",
  "Be a productive human being! Do something good!",
  //"Make John Purdue proud! Be a <u>successful</u> student!",
  "Make your mama proud! Be a <u>successful</u> worker!",
  "What will it take for you to become successful? Imagine the iceberg of success.",
  "Would you rather live in a large house with a rich and happy life with people who love you? Or would you rather live all alone, poor and miserable, with nobody to support you? Your choices determine the consequences.",
  "Don't let the lazy part of you define your lifestyle.",
  "Given the huge amount of creature comforts available today, it's so difficult to resist laziness.",
  "There are so many legitimate opportunities to make lots of money online.",
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
  'Your dream car is a midsize luxury sedan! Would you like one?',
  'Your mind must be like a carnival inside!',
  'You\'re the type of person who values fun things!',
    //Rejected negative messages
  'Break unhealthy habits.',
  'Drop all your distracting habits.',
  'All distracting thoughts need to go away.',
  'You thought about something you shouldn\'t think of.',
  'Don\'t procrastinate and lose your job.',
  'Do you want to lose your job or not?',
  'Control yourself, or else you will lose in life.',
  'Forget about things that are currently distracting you.',
  'Why would you do this? You stupid idiot!',
  'Mindlessness is a bad thing.',
  'Don\'t be a <span style="font-weight:bold;">⑨</span>',
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
  //"<a href='hi'>This is <span id='stress'>SPARTA!</span></a>",
  'Grow up and get a life!',
  'If you prioritize comfort and self-indulgence over freedom and achievement, you will live a life of regret.');

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
  /*if(d.getDay() === 0 && d.getHours() >= 6 && d.getHours() < 10 && Math.floor(Math.random() * 3))
  {
    $("message").innerHTML = "Get ready for church!";
    index = redirectMessages.length + 2;
  }*/
  //If it's late at night, the website may prompt you to go to sleep.
  var sleepTime = Math.floor(Math.random() * 5);
  if ((d.getHours() <= 4 || d.getHours() >= 22) && !sleepTime)
  {
    $("message").innerHTML = 'You should be asleep by now.';
    index = redirectMessages.length;
    console.log("Sleep " + sleepTime);
  }
  //Put index value to the console
  console.log("Message " + index);
  var message = $("message").innerHTML;
  randomLink(index,number);
}

function randomLink(index,number) {
  //For pages with a number from 7-12 (e.g., youtube.html)
  var removeQuestion = false;
  //Array for link messages below the heading text
  var linkMessages = ["Immediately close this tab."];
  for (var i = 1; i <= 30; i++)
    linkMessages.push("Got something you need to do?");
    //linkMessages.push("How are you feeling?");
  //Get random link from array
  var linkIndex = Math.floor(Math.random() * linkMessages.length);
  if(number === 9)
    linkIndex = 1;
  var message = $("message").innerHTML;
  //If the message tells you to leave, the linkIndex will be 0.
  if (index < 2 || message === 'Return to your previous task.' || message === 'Get out of here!')
    linkIndex = 0;
  if ((linkIndex === 0 || message === "May this page suggest you take a short break?" || message === "Time to take a break.") && number !== 7)
    removeQuestion = true;
  //Put link message and to screen using the index value of the array
  if(number < 7 || number > 12)
    var parent = $("hideable");
  var link = $("link");
  if(!link && (number < 7 || number > 12)) {
    link = document.createElement("div");
    link.id = "link";
    parent.appendChild(link);
  }
  //Sometimes, the link will change depending on the message.
  if (message === "Get ready for church!")
    link.innerHTML = "<a href='church.html'>Here's how to get ready.</a>";
  else if (message === "May this page suggest you take a short break?" && number !== 7 || message === "Time to take a break.")
    link.innerHTML = "<a href='breaktime.html'>Don't do nothing. Do something!</a> <strong onclick='rejectSomething(3)' style='color:white;'>No.</strong>";
  //Load preloaded message if it exists.
  else if (localStorage.getItem("customMessage") !== null && !ignoreStorage && (number < 7 || number > 12)) {
    loadTaskFromStorage(index,number);
  }
  else if (linkIndex > 0 && (number < 7 || number > 12) || ignoreStorage) {
    if(ignoreStorage)
      linkIndex = 1;
    link.innerHTML = "<a href='custom.html'>" + linkMessages[linkIndex] + "</a> <strong onclick='rejectSomething(1)' style='color:white;'>No.</strong>"
    /*link.innerHTML = linkMessages[linkIndex] + " <a href='hotanddry.html' style='color:white;'>...</a><br><select id='dropdownMenu' class='custom-select'></select> <button class='custom-button' onclick='okFeeling()'>OK</button>";
    var feelings = [{text:"Select an emotion",value:"lazy"},
    {text:"I got something I need to do",value:"custom"},
    {text:"I'm ready to do something else",value:"time"},
    {text:"I want to watch anime",value:"anime"},
    {text:"I feel bored 🥱",value:"bored"},
    {text:"I feel really bored 🥱🥱",value:"really bored"},
    {text:"I feel lazy 😪",value:"lazy"},
    {text:"I feel tired 😴",value:"tired"},
    {text:"I feel stressed 😫",value:"stressed"},
    {text:"I feel worried 😟",value:"worried"},
    {text:"I feel busy 🏢",value:"busy"},
    {text:"I feel disappointed 😞",value:"sad"},
    {text:"I feel unconfident 😩",value:"unconfident"},
    {text:"I feel overwhelmed 😵",value:"overwhelmed"},
    {text:"I feel impatient 😠",value:"impatient"},
    {text:"I feel angry 😡",value:"angry"},
    {text:"I feel unmotivated 😐",value:"motivate"},
    {text:"I got nothing to do",value:"really bored"},
    {text:"I can't focus 😕",value:"no focus"},
    {text:"I am hungry <span id='food-emoji'>🍔</span>",value:"hungry"},
    {text:"I am procrastinating",value:"procrastinate"},
    {text:"I am struggling in life 😣",value:"struggle"},
    {text:"I am waiting for something ⌚",value:"impatient"},
    {text:"I already looked at bad stuff 🙁",value:"disappointed"},
    {text:"I relapsed ☹️",value:"relapse"},
    {text:"I really want to do nothing",value:"nothing"},
    {text:"I want to do someting bad 😈",value:"whoa"},
    {text:"I want to relax 🧘‍♂️",value:"relax"},
    {text:"I want to get motivated 🔥",value:"motivate"},
    {text:"I want to accomplish goals 🏅",value:"tasks"},
    {text:"I want to complete tasks ✅",value:"tasks"},
    {text:"I want to listen to music 🎶",value:"music"},
    {text:"I want to browse YouTube",value:"youtube"},
    {text:"I want to look at cute anime girls",value:"anime girls"},
    {text:"I feel like playing a game 🎮",value:"game"}];
    for(var i = 0; i < feelings.length; i++) {
      var option = document.createElement("option");
      option.innerHTML = feelings[i].text;
      option.value = feelings[i].value;
      $("dropdownMenu").appendChild(option);
    }
    if (d.getHours() > 4 && (d.getHours() < 10 || d.getHours() === 10 && d.getMinutes() < 30))
      $("food-emoji").innerHTML = "🥓";*/
  }
  else if(number < 7 || number > 12 || removeQuestion)
    link.innerHTML = linkMessages[linkIndex];
  if(number >= 7 && number <= 12 && removeQuestion) {
    document.body.removeChild($("question"));
    if(number === 7)
      $("link").classList.remove("small");
  }
  //Put index value to the console
  console.log("Link " + linkIndex);
  //This only shows up if certain pages are loaded.
  if(number >= 5)
    createAdvice();
  //If the message is too long, this fires up.
  if(actualLength() > 200) {
    $("message").classList.add("tiny");
    $("message").classList.remove("small");
  }
  else if(actualLength() > 90) {
    $("message").classList.add("small");
    $("message").classList.remove("tiny");
  }
  else {
    document.getElementById("message").classList.remove("small");
    document.getElementById("message").classList.remove("tiny");
  }
}

function okFeeling() {
  $("message").classList.remove("small");
  $("message").classList.remove("tiny");
  switch(dropdownMenu.value)
  {
    case "custom":
      location.href = "custom.html";
      break;
    case "time":
      location.href = "time.html";
      break;
    case "anime":
      message.innerHTML = "This is a sign that you need to watch some anime.";
      link.innerHTML = "<a href=nextanime.html>Click here to continue.</a>";
      break;
    case "bored":
      location.href = "cyoa/54.html";
      break;
    case "really bored":
      message.innerHTML = "You must be so bored, that you don't feel like doing anything. Right?";
      link.innerHTML = "<div class='two-list'><a class='hfire-link' href='cyoa/13.html'>Right.</a><a class='hfire-link' href='cyoa/54.html'>Wrong.</a></div>";
      break;
    case "lazy":
      message.innerHTML = "Are you lazy, or are you just exhausted?";
      link.innerHTML = "<div class='two-list space'><a class='hfire-link' href='cyoa/15.html?mood=lazy'>Lazy</a><a class='hfire-link' href='cyoa/20.html'>Exhausted</a></div>";
      break;
    case "tired":
      if(d.getHours() >= 6 && d.getHours() <= 12)
        location.href = "morning/checklist.html";
      else if(d.getHours() < 17) {
        message.innerHTML = "You should take a power nap.";
        link.innerHTML = "<a href='https://www.youtube.com/watch?v=RXBG1-1zI_E'>Click here to continue.</a>";
      }
      else if(d.getHours() < 22) {
        message.innerHTML = "You should recharge yourself. But how?";
        link.innerHTML = "<a id='relax' href='relax2.html?mood=evening'>Click here to continue.</a>";
      }
      else
        location.href = "cyoa/14.html";
      break;
    case "angry":
      message.innerHTML = "<a href='https://www.notion.so/cb8aa85e9b8e4ad98d432242a771288e?v=bd04689cae5b4de5b416435d93748323'>You need to calm down and relax.</a>";
      link.innerHTML = "<a href='stress.html'>I don't feel like it.</a>";
      break;
    case "worried":
      message.innerHTML = "<a href='https://www.notion.so/cb8aa85e9b8e4ad98d432242a771288e?v=bd04689cae5b4de5b416435d93748323'>Don't worry. Just calm down and relax.</a>";
      link.innerHTML = "<a href='stress.html'>I don't feel like it.</a>";
      break;
    case "stressed":
      message.innerHTML = "<a href='https://www.notion.so/cb8aa85e9b8e4ad98d432242a771288e?v=bd04689cae5b4de5b416435d93748323'>You need to calm down and relax.</a>";
      link.innerHTML = "<a href='stress.html'>I don't feel like it.</a>";
      break;
    case "sad":
      message.innerHTML = "<a href=relax2.html?mood=sad'>It's time to calm down and relax.</a>";
      link.innerHTML = "<a href='stress.html'>I don't feel like it.</a>";
      break;
    case "busy":
      location.href = "busy.html";
      break;
    case "unconfident":
      message.innerHTML = "You need a confidence boost.";
      link.innerHTML = "If you have plenty of time, listen to <a href='https://app.mysoundwise.com/mysoundcasts'>Confidence</a> under Healthy Mind. Otherwise, <a href='https://www.notion.so/cb8aa85e9b8e4ad98d432242a771288e?v=d68c527c66b24334843c784f47aaa5af'>click here.</a>";
      break;
    case "overwhelmed":
      location.href = "cyoa/48.html";
      break;
    case "impatient":
      message.innerHTML = "You may want to check your goals page while you wait.";
      link.innerHTML = "<div class='two-list'><a class='hfire-link' href='goals.html'>Check Goals Page</a><a class='hfire-link' href='cyoa/12.html'>I don't feel like it</a></div>";
      break;
    case "no focus":
      location.href = "cyoa/18.html";
      break;
    case "hungry":
      if(d.getDay() === 0 && d.getHours() >= 1 && d.getHours() < 17 && (d.getDate() <= 7 && !generalConferenceMonth() || d.getDate() > 7 && d.getDate() <= 14 && generalConferenceMonth()))
      {
        message.innerHTML = "<img src='media/Fasting.png' alt='a bunch of text that persuades the reader to fast on fast sunday'>";
        $("hideable").removeChild(link);
      }
      else
      {
        message.innerHTML = "You need to eat some food right now.";
        if(d.getDay() === 0)
          $("hideable").removeChild(link);
        else
          link.innerHTML = "<a href='https://www.doordash.com/en-US'>Click here if you want to spend over $10 for food delivery.</a>";
      }
      break;
    case "procrastinate":
      location.href = "cyoa/15.html?mood=procrastination";
      break;
    case "struggle":
      location.href = "struggle.html";
      break;
    case "disappointed":
      location.href = "kirby.html";
      break;
    case "relapse":
      location.href = "relapse.html";
      break;
    case "nothing":
      location.href = "cyoa/13.html";
      break;
    case "whoa":
      location.href = "whoa/index.html";
      break;
    case "relax":
      location.href = "https://www.notion.so/cb8aa85e9b8e4ad98d432242a771288e?v=612e0d0470f34ff4bb722f1177531b4e";
      break;
    case "motivate":
      location.href = "cyoa/15.html?mood=motivation";
      break;
    case "tasks":
      location.href = "cyoa/2.html";
      break;
    case "music":
      location.href = "musicflow/1.html";
      break;
    case "youtube":
      location.href = "cyoa/37.html";
      break;
    case "anime girls":
      location.href = "cyoa/21.html";
      break;
    case "game":
      message.innerHTML = "How long have you been being productive?";
      link.innerHTML = "<div class='two-list space'><a class='hfire-link' href=''>&lt;45 minutes</a><a class='hfire-link' href='gameflow/29.html'>At least 45 minutes</a></div>";
      break;
    default:
      location.href = "cyoa/1.html";
  }
}

function actualLength() {
  var text = $("message");
  var txt = text.innerText || text.textContent;
  console.log("Shortened message: " + txt);
  return txt.length;
}

async function createAdvice() {
  var hydrate = Math.floor(Math.random() * 30);
  console.log("Hydrate " + hydrate);
  if(hydrate < 3) {
    await sleep(100);
    if (hydrate < 1)
      alert("Just a reminder to stay hydrated.\nYou may need to stand up and stretch.");
    else {
      alert("Here's a tip: Some music can help you focus.\n\nPress OK and then \"Ctrl + M\" for focus music.");
      window.addEventListener("keyup", function (event) {
        if (event.keyCode === 77 && event.ctrlKey) {
          event.preventDefault();
          location.href = "musicflow/1";
        }
      });
    }
  }
}

function rejectSomething(time) {
  if (time === 0)
    link.innerHTML = "<a href='custom.html'>Got something else you need to do?</a> <strong onclick='rejectSomething(5)' style='color:red;'>No.</strong>";
  else if(time === 1)
    link.innerHTML = "<a href='time.html'>Don't do nothing. Do something!</a> <strong onclick='rejectSomething(2)' style='color:white;'>No.</strong>";
  else if(time === 3)
    link.innerHTML = "<a href='custom.html'>Got something you need to do?</a> <strong onclick='rejectSomething(2)' style='color:white;'>No.</strong>";
  else if(time === 5)
    link.innerHTML = "<a href='time.html'>Don't do nothing. Do something!</a> <strong onclick='rejectSomething(2)' style='color:red;'>No.</strong>";
  else if (time === 6) {
    var d = new Date();
    if(d.getDay() === 0)
      link.innerHTML = "It's a Sunday! <a href='https://dynalist.io/d/PQDJvhu4f3DRlgGhkcMQA32T'>Be more religious instead!</a> <strong onclick='rejectSomething(7)' style='color:white;'>No.</strong>";
    else
      link.innerHTML = "<a href='stepmania.html'>Play Stepmania instead!</a> <strong onclick='rejectSomething(7)' style='color:white;'>No.</strong>";
  }
  else if (time === 7)
    link.innerHTML = "<a class='hfire-link' href='cyoa/5.html'>You are procrastinating on two of your goals. Not good.</a>";
  else if(time === 9)
    link.innerHTML = "<a href='custom.html'>Got something you need to do?</a> <strong onclick='rejectSomething(10)' style='color:white;'>No.</strong>";
  else if(time === 10)
    link.innerHTML = "<a class='hfire-link' href='cyoa/1.html'>You really are bored.</a>";
  else
    //location.href = "cyoa/1.html";
    location.href = "hotanddry.html";
}

function randomTheme(number) {
  //Pick a random theme
  var theme;
  var parent = $("hideable");
  console.log(parent);
  var themeText = document.createElement("strong");
  themeText.id = "theme";
  themeText.style.display = "block";
  /*if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 0;
    document.documentElement.style.backgroundColor = "black";
  }*/
  if(number === 101)
    theme = Math.floor(Math.random() * 5) + 5;
  else
    theme = Math.floor(Math.random() * 5) + 1;
  switch (theme) {
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
      themeText.innerHTML = "Brought to you by the <a style='text-decoration:none;' href='https://youtu.be/GZpMy-pW7_8' target='_blank'>sand</a> theme.";
      break;
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
      themeText.innerHTML = "Brought to you by the yellow-green theme.";
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
  if($("width"))
    $("width").innerHTML = window.innerWidth;
  if($("homework"))
    $("homework").width = 0.75 * window.innerWidth;
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

function found(array,reason) {
  for (var i in array)
    if (reason.indexOf(array[i]) >= 0)
      return true;
  return false;
}

async function pushTheButton() {
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

function generalConferenceMonth() {
  if (d.getMonth() === 3 || d.getMonth() === 9)
    return true;
  else {
    return false;
  }
}

function loadTaskFromStorage(index,number) {
  var task = localStorage.getItem("customMessage");
  const punctuationPattern = /[.,?!]$/;
  if (!punctuationPattern.test(task)) {
    task = task.concat(".").replace("my","your");
  }
  link.innerHTML = "Remember: " + task + " <button class=custom-button onclick=completeTask(" + index + "," + number + ")>Done</button> <button class=custom-button onclick=ignoreTask()>Ignore</button>";
}

function completeTask(index,number) {
  clearTask();
  ignoreStorage = true;
  randomLink(index,number);
}

function ignoreTask() {
  location.href = "hotanddry.html";
}

function clearTask() {
  localStorage.removeItem("customMessage");
}