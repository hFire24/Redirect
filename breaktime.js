var messages = [];
var standup = [];
var changeclothes = [];

function loadBreak(number) {
  if(number < 4) {
    if(Math.floor(Math.random() * 2) && number !== 2)
      loadBigBreak();
    else
      loadSmallBreak();
  }
  else if(number === 4)
    loadYouTubeBreak();
  else if(number === 5)
    loadMobileBreak();
  else if(number === 6)
    loadStandBreak();
  displayBreak(-1,number);
}

function loadSmallBreak() {
  breakArray = 'small';
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
    //Day planning
  'Create tasks for today and tomorrow.',
  'Determine what you need to do and what you want to do today.',
  'List everything you\'re currently doing, and order them by priority.',
  'List all the things you want to do, and order them by priority.',
    //Music
  'Add a new song to your iTunes library.',
  'Put on some music to help you focus.',
    //Miscellaneous
  'Say out loud the thing you need to get done.',
  //'Remember what happened on January 13? Don\'t drive around just for fun. Install a racing game on your Windows server.',
  'Increase your spirituality.',
  'Try answering this question.',
  'Play one of these short games.',
  'Read your journal entries.<br>Start from June 2012.',
    //Goals
  'Click here.',
  //'How can you build an everlasting romantic relationship from scratch?',
  'Double your social skills.',
  'Read just one page of <u>Atomic Habits</u>.',
  'Think of a goal. Any one. Set that as your break message.'];
  loadStandBreak();
}

function loadStandBreak() {
  standup = [//Health and fitness
  'Refill your bottle and drink water.',
  'Go up and down the stairs for one minute.',
  'Stare at an object 20 feet away for 20 seconds.',
  'Eat a snack if it has been 3 hours since you ate something.',
  'Listen to your own music, and don\'t be afraid to dance to it.',
  'Do planks for one minute.',
    //Personal hygiene
  'Change to your pajamas. No socks.',
    //Miscellaneous Part 2
  'Digitize at least one paragraph from your journal.'];
}

function loadBigBreak() {
  breakArray = 'big';
  messages = [//relaxation
  'Listen to one of these long guided meditations.',
  //Task checking
  'Check your gTasks list, please.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',
    //Day planning
  'Make a plan for today and tomorrow.',
  'Make an objective for today.',
    //Homework
  /*'Do homework.<br>You may need to stand up and stretch and change clothes.',
  'Get assignments done.<br>You may need to stand up and stretch and change clothes.',
  'If you\'re struggling with homework, do a different assignment.',
  'Check Brightspace for assignments, then do one of them.',
  //'Make progress on a big project.',
  'Finish a piece of homework, even if the deadline is far.',
  'Put on some epic music, and<br><span id="stress">GET HOMEWORK DONE!</span>',
  'Don\'t suck at group projects.',*/
    //Games
  'Drive around how you want in Need for Speed: Hot Pursuit.',
  'Play Sudoku (Medium).',
  'Solve a Rubik\'s cube.',
  'Play 100% Orange Juice.',
  'Solve a Minesweeper board on Expert.',
  'Grind levels in 200% Mixed Juice.',
  //'Play Super Smash Bros. Ultimate for about 30 minutes.',
    //Miscellaneous
  'No routine? Form one.',
  'How about multiple ways to take a break?',
  'Read your patriarchal blessing.',
    //Goals
  //'Learn how to make chiptune music.',
  //'Learn how to use FL Studio.',
  //'Make some friends in real life. Institute is the best starting point.',
  'Go to Skillshare, and learn programming.',
  'Learn Full Stack so that you can host a website for free that supports FileZilla.',
  'Draw anime.',
  'Listen to a General Conference talk.',
  //'Learn a new programming language. Try to code Card Battle Stadium in that language.'
  //'Try to code Card Battle Stadium in C#.',
  //'Try one of these C# coding projects.',
  'Read the book <u>Atomic Habits</u>.',
  'Practice your piano. Using SimplyPiano is recommended.',
  //'Learn a language with Duolingo.',
  'Check your goals page. Try to knock out one of your goals.'];
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

function loadMobileBreak() {
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
    //Day planning
  'Create tasks for today and tomorrow.',
  'Make an objective for today.',
    //Music
  'Put on some music to help you focus.',
    //Homework
  /*'Do your homework, but don\'t get overwhelmed by it.',
  'Check your homework page and see if you can do a passive assignment.',*/
    //Games
  'Solve a Minesweeper board on Expert.',
  'Play one of these short games.',
    //Miscellaneous
  'Say out loud the thing you need to get done.',
  'Increase your spirituality.',
  'Read your patriarchal blessing.',
  'Try answering this question.',
  'Read your journal entries on Dropbox.<br>Start from June 2012.',
    //Goals
  'Click here.',
  'Listen to a General Conference talk.',
  'Double your social skills.',
  'Train your communication skills.',
  'Increase your conversation skills.',
  'Read the book <u>Atomic Habits</u>.',
  //'Learn a language with Duolingo.',
  'Take this productivity course on Skillshare.',
  'Take that anti-procrastination course on Skillshare.',
  'Check your goals page. Try to knock out one of your goals.'];

  var standup = [//Health and fitness
  'That\'s all there is to it. Sit back down.',
  'Drink some water.',
  'Stare at an object 20 feet away for 20 seconds.',
  'Eat a snack if it has been 3 hours since you ate something.'];
}

function loadYouTubeBreak() {
  breakArray = 'YouTube';
  messages = ['Double your social skills.',
  'Learn how to make chiptune music.',
  'Learn how to use FL Studio.',
  'Go to Skillshare, and learn programming.',
  'Learn Full Stack so that you can host a website for free that supports FileZilla.',
  'Draw anime.'];
}

function displayBreak(index,number) {
  for(var i = 0; i < changeclothes.length; i++)
    standup.push("Change to appropriate clothes if necessary.");
  for(i = 0; i < standup.length; i++)
    messages.push('Stand up and stretch if you can.');
  //Get random message index from messages array
  if (index < 0 || index >= messages.length)
    do
      index = Math.floor(Math.random() * messages.length);
    while (index - (messages.length - standup.length) === standup.indexOf("Change to your pajamas. No socks.") && (d.getHours() > 3 && d.getHours() < 20 || d.getMonth() >= 4 && d.getMonth() < 9));
  var message = $("break");
  var standupMessage = $("standup");
  var changeMessage = $("changeclothes");
  var standIndex = index - (messages.length - standup.length);
  var changeIndex = standIndex - (standup.length - changeclothes.length);
  if((d.getHours() <= 4 || d.getHours() >= 22) && !Math.floor(Math.random() * 4)) {
    index = messages.length;
    messages.push('Stand up and stretch if you can.');
    message.removeAttribute("href");
    standIndex = standup.length;
    standup.push('Wear your pajamas and go to bed.');
    standupMessage.removeAttribute("href");
  }
  console.log("Message " + index);
  message.innerHTML = messages[index];
  if(number !== 6)
    switch(message.innerHTML) {
      case "Listen to this.":
      case "Clear your mind.":
        message.href = "relax.html";
        break;
      case "Listen to one of these long guided meditations.":
        message.href = "relax2.html";
        break;
      case "Look away from the screen for about 2 minutes.":
        message.href = "https://www.google.com/search?q=2+minute+timer";
        break;
      case "Take a deep breath.":
        message.href = "https://www.google.com/search?q=take+a+deep+breath";
        break;
      case "Put on some focus/relaxation music.":
        message.href = "https://music.youtube.com/channel/UC4r3AhGZWUGeh2AprrEJ_PA";
        break;
      case "Put on some music to help you focus.":
        message.href = "musicSlider.html";
        break;
      case "Make an objective for today.":
        message.href = "objective.html";
        break;
      case "Play one of these short games.":
        message.href = "cyoa/46.html";
        break;
      case "Put on some epic music, and<br><span id=\"stress\">GET HOMEWORK DONE!</span>":
        message.href = "https://music.youtube.com/channel/UC7PFOj9JRgpSQjxTxGINpmw";
        break;
      case "Increase your spirituality.":
        message.href = "https://www.churchofjesuschrist.org/study/ensign/1999/03/ten-ideas-to-increase-your-spirituality?lang=eng";
        break;
      case "Try answering this question.":
        message.href = "question.html";
        break;
      case "How about multiple ways to take a break?":
        message.href = "multiple.html";
        break;
      case "Learn how to make chiptune music.":
      case "Learn how to use FL Studio.":
        message.href = "chiptunelessons.html";
        break;
      case "Click here.":
        message.addEventListener("click",pushTheButton);
        break;
      case "Play Sudoku (Medium).":
        message.href = "https://www.websudoku.com/";
        break;
      case "Go to Skillshare, and learn programming.":
      case "Learn Full Stack so that you can host a website for free that supports FileZilla.":
        message.href = "https://skl.sh/38rV6DT";
        break;
      case "Double your social skills.":
        message.href = "https://skl.sh/37ueYoA";
        break;
      case "Train your communication skills.":
        message.href = "https://skl.sh/33mrvdU";
        break;
      case "Increase your conversation skills.":
        message.href = "https://skl.sh/35tGtBl";
        break;
      case "Take this productivity course on Skillshare.":
        message.href = "https://skl.sh/3hiV3Ow";
        break;
      case "Take that anti-procrastination course on Skillshare.":
        message.href = "https://skl.sh/3kb5Goj";
        break;
      case "Don't suck at group projects.":
        message.href = "groupprojects.html";
        break;
      case "Draw anime.":
        message.href = "art.html";
        break;
      case "Listen to a General Conference talk.":
        messages.href = "gcprogress.html";
        break;
      case "Try one of these C# coding projects.":
        message.href = "https://blog.udemy.com/c-sharp-projects/";
        break;
      case "Learn a language with Duolingo.":
        message.href = "https://www.duolingo.com/";
        break;
      case "Check your goals page. Try to knock out one of your goals.":
        message.href = "goals.html";
        break;
      default:
        message.removeAttribute("href");
    }
  if (standIndex === standup.indexOf("Play some Stepmania."))
    standupMessage.href = "stepmania.html";
  else if (standIndex === standup.indexOf("Do planks for one minute."))
    standupMessage.href = "https://www.youtube.com/watch?v=z6KKo85V9Ew";
  else
    standupMessage.removeAttribute("href");
  if(message.innerHTML === 'Stand up and stretch if you can.') {
    console.log("Standup " + standIndex);
    message.addEventListener("click",function() {$("standup").style.display = 'block'; $("link").style.display = 'block';});
    standupMessage.innerHTML = standup[standIndex];
    if(standupMessage.innerHTML === 'Change to appropriate clothes if necessary.' || standupMessage.innerHTML === 'Strip, even if it\'s cold.') {
      console.log("Change Clothes " + changeIndex);
      changeMessage.innerHTML = changeclothes[changeIndex];
      standupMessage.addEventListener("click",function() {$("changeclothes").style.display = 'block';});
    }
  }
  if(messages.indexOf("Listen to this.") === -1 && number !== 6 && index >= messages.indexOf("Do homework.<br>You may need to stand up and stretch and change clothes.") && index <= messages.indexOf("Finish a piece of homework, even if the deadline is far.") + 1)
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
  var parent = $("hideable");
  var link = $("link");
  if(!link) {
    link = document.createElement("div");
    link.id = "link";
    parent.appendChild(link);
  }
  link.innerHTML = "<div class='two-list'><u onclick='reload()'>I already did.</u><u onclick='whyNot()'>It's impossible.</u></div>";
  if(standIndex >= 0)
    $("link").style.display = 'none';
}

function reload() {
  location.reload();
}

function whyNot() {
  messageComplete = false;
  link.innerHTML = "<div class='space'>Let me guess. You don't want to do it.</div> <div class='two-list space'><u onclick='submitReason()'>I don't want to do it.</u><u onclick='cancel()'>Actually, I'll do it.</u></div><u onclick='reload()'>Circumstances out of my control prevent me from doing it.</u>";
  /*var textField = document.createElement("span");
  textField.id = "reason";
  var input = document.createElement("input");
  input.id = "excuse";
  input.type = "text";
  input.classList.add('custom-select');
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      submitReason();
    }
  });
  textField.appendChild(input);
  var submit = document.createElement("button");
  submit.id = "submit";
  submit.classList.add('custom-button');
  submit.addEventListener("click", submitReason);
  submit.innerHTML = "Submit";
  textField.appendChild(submit);
  link.appendChild(textField);*/
  //<input id="newBreak" type="text"><button id="submit" onClick="submit()">Submit</button>
}

function submitReason() {
  //var reason = $("excuse").value.toLowerCase();
  var reason = "blah";
  if(found(["already","finish","done","did","next","complete"],reason) && !found(["many"],reason) || reason.endsWith("today"))
    location.reload();
  else if(found(["class","lecture","church"],reason))
    location.href = "cyoa/50.html";
  else if(reason.indexOf("something") >= 0 && reason.indexOf("watch") < 0)
    location.href = "custom.html";
  else if(found(["watch","i need to"],reason))
    window.open("cyoa/47.html", '_blank');
  //If a task seems impossible for the moment, then the user can just play some games.
  else if(found(["don't have","sn't with me","not with me","not here","away","forgot my","not home","not at my home","not in my home","not inside my home","college","Purdue"],reason))
    location.href = "cyoa/46.html";
  else if(reason.indexOf("nothing") >= 0)
    location.href = "multiple.html";
  else {
    if(Math.floor(Math.random() * 2) === 0)
      window.open("2minuterule.html", '_blank');
    else
      window.open("brave.html", '_blank');
  }
}

function cancel() {
  link.innerHTML = "<div class='two-list'><u onclick='reload()'>I already did.</u><u onclick='whyNot()'>It's impossible.</u></div>";
}

function $(x) {
  return document.getElementById(x);
}
