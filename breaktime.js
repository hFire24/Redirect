var messages = [];
var standup = [];

var putOff = [];
var putOffStand = [];

var globalIndex = -1;
var globalStand = -1;

var bedtimeRemoved = false;

class Breaktime {
  constructor(text,link,category,importance,stand) {
    this.text = text;
    this.link = link;
    this.category = category;
    this.importance = importance;
    this.stand = stand;
  }
}

function loadBreak(number) {
  if(number === 2) {
    messages = messages.concat(smallBreak);
    standup = standup.concat(smallStand);
  }
  else if(number === 3) {
    messages = messages.concat(smallBreak,bigBreak);
    standup = standup.concat(smallStand,bigStand);
  }
  else if(number === 5) {
    messages = mobileBreak;
    standup = mobileStand;
  }
  else if(number === 6)
    standup = smallStand;
  for(i = 0; i < standup.length; i++)
    messages.push(new Breaktime('Stand up and stretch if you can.',"pass",standup[i].category,standup[i].importance,true));
  if(d.getHours() < 3 || d.getHours() > 19) {
    messages.push(new Breaktime('Stand up and stretch if you can.',"pass","health",3,true));
    standup.push(new Breaktime('Change to your pajamas. No socks.',"pass","health",3,true),);
  }
  if(d.getHours() <= 4 || d.getHours() >= 22) {
    messages.push(new Breaktime('Stand up and stretch if you can.',"pass","sleep",2,true));
    standup.push(new Breaktime('Wear your pajamas and go to bed.',"pass","sleep",2,true));
  }
  console.log(messages);
  console.log(standup);
  displayBreak(-1);
}

var smallBreak = [//Relaxation
new Breaktime('Listen to this.',"relax.html","meditate",3,false),
new Breaktime('Clear your mind.',"relax.html?mood=unclear","meditate",3,false),
new Breaktime('Pray a short prayer.',"pass","religion",3,false),
new Breaktime('Look away from the screen for about 2 minutes.',"https://www.google.com/search?q=2+minute+timer","relax",3,false),
new Breaktime('Take a deep breath.',"https://www.google.com/search?q=take+a+deep+breath","relax",3,false),
new Breaktime('Put on some focus/relaxation music.',"https://music.youtube.com/channel/UC4r3AhGZWUGeh2AprrEJ_PA","music",2,false),
  //Task checking
new Breaktime('Check your tasks for the day.',"pass","task",3,false),
new Breaktime('Check your gTasks list, please.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',"pass","task",3,false),
  //Day planning
new Breaktime('Create tasks for today and tomorrow.',"pass","plan",3,false),
new Breaktime('Determine what you need to do and what you want to do today.',"pass","plan",3,false),
new Breaktime('List everything you\'re currently doing, and order them by priority.',"pass","plan2",3,false),
new Breaktime('List all the things you want to do, and order them by priority.',"pass","plan2",3,false),
  //Music
new Breaktime('Add a new song to your iTunes library.',"pass","misc",1,false),
new Breaktime('Put on some music to help you focus.',"https://youtu.be/xOA0T8ZjpFQ","music",2,false),
  //Miscellaneous
new Breaktime('Say out loud the thing you need to get done.',"pass","task",2,false),
//new Breaktime('Do one thing to increase your spirituality.',"https://www.churchofjesuschrist.org/study/ensign/1999/03/ten-ideas-to-increase-your-spirituality?lang=eng","religion",3,false),
new Breaktime('Try answering this question.',"question.html","misc",1,false),
new Breaktime('Play one of these short games.',"cyoa/46.html","game",1,false),
new Breaktime('Read your journal entries.<br>Start from September 17, 2012.',"pass","read",1,false),
new Breaktime('Answer this questionnaire.',"cyoa/17.html","misc",2,false),
new Breaktime('Take this quiz just for fun.',"quiz.html","misc",2,false),
  //Goals
new Breaktime('Click here.',"pushTheButton","misc",2,false),
//'How can you build an everlasting romantic relationship from scratch?',
new Breaktime('Find a way to learn social skills.',"pass",2,false),
new Breaktime('Read just one page of <u>Atomic Habits</u>.',"pass","read",3,false),
new Breaktime('Think of a goal. Any one. Set that as your break message.',"pass","misc",2,false)];

var smallStand = [//Health and fitness
new Breaktime('Refill your bottle and drink water.',"pass","health",3,true),
new Breaktime('Go up and down the stairs for one minute.',"pass","exercise",3,true),
new Breaktime('Stare at an object 20 feet away for 20 seconds.',"pass","relax",3,true),
new Breaktime('Eat a snack if it has been 3 hours since you ate something.',"pass","food",2,true),
new Breaktime('Listen to your own music, and don\'t be afraid to dance to it.',"pass","music",1,true),
new Breaktime('Do planks for one minute.',"https://www.youtube.com/watch?v=z6KKo85V9Ew","exercise-heavy",3,true),
  //Miscellaneous Part 2
new Breaktime('Digitize at least one paragraph from your journal.',"pass","misc",3,true),
new Breaktime('Read just one page of <u>Maphead</u>.',"pass","read",2,true),
new Breaktime('Do this drawing exercise with a drawing tablet.',"https://youtu.be/35rju_APLqQ","art",2,true)];

var bigBreak = [//relaxation
new Breaktime('Listen to one of these long guided meditations.',"relax2.html?mood=random","meditate2",3,false),
new Breaktime('Make progress on your 8 Essential Life Skills Course.',"pass","meditate2",3,false),
//Task checking
new Breaktime('Check your gTasks list, please.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',"pass","task",3,false),
  //Day planning
new Breaktime('Make a plan for today and tomorrow.',"pass","plan",3,false),
new Breaktime('Make an objective for today.',"objective.html","task",2,false),
  //Homework
new Breaktime('Do homework.<br>You may need to stand up and stretch and change clothes.',"pass","homework",4,false),
new Breaktime('Get assignments done.<br>You may need to stand up and stretch and change clothes.',"pass","homework",4,false),
new Breaktime('If you\'re struggling with homework, do a different assignment.',"pass","homework",4,false),
new Breaktime('Check Brightspace/Loncapa for assignments, then do one of them.',"pass","homework",4,false),
new Breaktime('Make progress on a big project.',"pass","homework",4,false),
new Breaktime('Finish a piece of homework, even if the deadline is far.',"pass","homework",4,false),
new Breaktime('Put on some epic music, and<br><span id="stress">GET HOMEWORK DONE!</span>',"https://music.youtube.com/channel/UC7PFOj9JRgpSQjxTxGINpmw","homework",4,false),
  //Games
new Breaktime('Drive around how you want in Need for Speed: Hot Pursuit.',"pass","game",1,false),
new Breaktime('Play Sudoku (Medium).',"https://www.websudoku.com/?level=2","game",1,false),
new Breaktime('Play 100% Orange Juice.',"pass","game",1,false),
new Breaktime('Solve a Minesweeper board on Expert.',"https://minesweeper.online/start/3","game",1,false),
new Breaktime('Grind levels in 200% Mixed Juice.',"pass","game",1,false),
//'Play Super Smash Bros. Ultimate for about 30 minutes.',
  //Miscellaneous
new Breaktime('No routine? Form one.',"pass","plan",2,false),
new Breaktime('How about multiple ways to take a break?',"multiple.html","misc",2,false),
new Breaktime('Read your patriarchal blessing.',"pass","religion",2,false),
  //Goals
//'Learn how to make chiptune music.',
//'Learn how to use FL Studio.',
//'Make some friends in real life. Institute is the best starting point.',
new Breaktime('Find a way to learn social skills.',"pass",2,false),
new Breaktime('Listen to a General Conference talk.',"gcprogress.html","religion",3,false),
//'Learn a new programming language. Try to code Card Battle Stadium in that language.'
//'Try to code Card Battle Stadium in C#.',
//'Try one of these C# coding projects.',
new Breaktime('Read the book <u>Atomic Habits</u>.',"pass","read",3,false),
new Breaktime('Start learning Godot.',"pass","gamedev",2,false),
//'Learn a language with Duolingo.',
new Breaktime('Check your goals page. Try to knock out one of your goals.',"goals.html","task",3,false),
new Breaktime('Take this quiz, and draw the result.',"quiz.html","art",3,true),
new Breaktime('Read stuff for Institute.',"https://myinstitute.churchofjesuschrist.org/classes","religion",2,false)];
//Do not upload traced art.

var bigStand = [//Health and fitness
new Breaktime('Eat a meal if it has been 3 hours since you ate something.',"pass","food",2,true),
  //Personal hygiene
new Breaktime('Take a shower if you hadn\'t today, even if it\'s cold in your room.',"pass","health",3,true),
  //Miscellaneous Part 2
new Breaktime('Declutter your room.',"pass","misc",2,true),
new Breaktime('Digitize at least two days of events from your journal.',"pass","misc",3,true),
new Breaktime('Play some Stepmania.',"stepmania.html","exercise-heavy",3,true),
new Breaktime('Practice your piano.',"pass","misc",3,true),
new Breaktime('Learn how to use Pygame by reading that book.',"pass","read",2,true),
new Breaktime('Read the book <u>Maphead</u>.',"pass","read",2,true),
new Breaktime('Solve a Rubik\'s cube.',"pass","game",1,true),
/*new Breaktime('Draw anime with a drawing tablet.',"art.html","art",2,true),
new Breaktime('Clear your workspace and draw anime with a sketchpad.',"art.html","art",2,true),*/
new Breaktime('Make progress on this drawing course.',"drawing-progress.html","art",2,true)];

var mobileBreak = [//Relaxation
new Breaktime('Listen to this.',"relax.html","relax",3,false),
new Breaktime('Clear your mind.',"relax.html?mood=unclear","relax",3,false),
new Breaktime('Pray a short prayer.',"pass","religion",3,false),
new Breaktime('Look away from the screen for about 2 minutes.',"pass","relax",3,false),
new Breaktime('Take a deep breath.',"https://www.google.com/search?q=take+a+deep+breath","relax",3,false),
new Breaktime('Put on some focus/relaxation music.',"https://music.youtube.com/channel/UC4r3AhGZWUGeh2AprrEJ_PA","music",2,false),
  //Task checking
new Breaktime('Check your tasks for the day.',"pass","task",3,false),
new Breaktime('Check your gTasks list, please.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',"pass","task",3,false),
  //Day planning
new Breaktime('Create tasks for today and tomorrow.',"pass","plan",3,false),
new Breaktime('Make an objective for today.',"objective.html","task",2,false),
  //Music
new Breaktime('Put on some music to help you focus.',"https://youtu.be/xOA0T8ZjpFQ","music",2,false),
  //Homework
new Breaktime('Do your homework, but don\'t get overwhelmed by it.',"pass","homework",4,false),
new Breaktime('Check your homework page and see if you can do a passive assignment.',"pass","homework",4,false),
  //Games
new Breaktime('Solve a Minesweeper board on Expert.',"pass","game",1,false),
new Breaktime('Play one of these short games.',"cyoa/46.html","game",1,false),
  //Miscellaneous
new Breaktime('Say out loud the thing you need to get done.',"pass","task",2,false),
//new Breaktime('Do one thing to increase your spirituality.',"https://www.churchofjesuschrist.org/study/ensign/1999/03/ten-ideas-to-increase-your-spirituality?lang=eng","religion",3,false),
new Breaktime('Read your patriarchal blessing.',"pass","religion",2,false),
new Breaktime('Try answering this question.',"question.html","misc",1,false),
new Breaktime('Read your journal entries.<br>Start from September 17, 2012.',"pass","read",1,false),
new Breaktime('Answer this questionnaire.',"cyoa/17.html","misc",2,false),
  //Goals
new Breaktime('Click here.',"pushTheButton","misc",2,false),
new Breaktime('Listen to a General Conference talk.',"gcprogress.html","religion",3,false),
new Breaktime('Read the book <u>Atomic Habits</u>.',"pass","read",3,false),
//'Learn a language with Duolingo.',
new Breaktime('Check your goals page. Try to knock out one of your goals.',"goals.html","task",3,false),
new Breaktime('Read stuff for Institute.',"https://myinstitute.churchofjesuschrist.org/classes","religion",2,false)];

var mobileStand = [//Health and fitness
new Breaktime('That\'s all there is to it. Sit back down.',"pass","health",3,true),
new Breaktime('Drink some water.',"pass","health",3,true),
new Breaktime('Stare at an object 20 feet away for 20 seconds.',"pass","relax",3,true),
new Breaktime('Eat a snack if it has been 3 hours since you ate something.',"pass","food",2,true)];

function displayBreak(index) {
  if($("standup")) {
    $("standup").style.display = "none";
    $("standup").innerHTML = "";
  }
  if(messages.length === 0) {
    if(putOff.length > 0) {
      for(var i in putOff)
        messages.push(putOff[i]);
      putOff = [];
      if(putOffStand.length > 0)
      {
        for(var i in putOffStand)
          standup.push(putOffStand[i]);
        putOffStand = [];
      }
    }
    else {
      messages.push(new Breaktime("You're still here? Get back to whatever you should be doing!","pass","done",4,false))
    }
  }
  //Get random message index from messages array
  if (index < 0 || index >= messages.length)
    index = Math.floor(Math.random() * messages.length);
  var message = $("breakMessage");
  if(!$("breakMessage")) {
    message = document.createElement("a");
    message.id = "breakMessage";
    $("break").appendChild(message);
  }
  // There is at least a 1 in 4 chance of the sleep message appearing at night.
  if((d.getHours() <= 4 || d.getHours() >= 22) && !Math.floor(Math.random() * 4) && !bedtimeRemoved)
    index = messages.length - 1;
  console.log("Message " + index);
  message.innerHTML = messages[index].text;
  if(messages[index].link === "pushTheButton") {
    message.removeAttribute("href");
    message.onclick = pushTheButtonBR;
  }
  else {
    message.onclick = null;
    message.removeAttribute("target");
    if(messages[index].link === "pass")
      message.removeAttribute("href");
    else {
      message.href = messages[index].link;
      message.target = "_blank";
    }
  }
  globalIndex = index;
  if(message.innerHTML === 'Stand up and stretch if you can.') {
    var standupMessage = $("standup");
    if(!$("standup")) {
      standupMessage = document.createElement("a");
      standupMessage.id = "standup";
      $("break").appendChild(standupMessage);
    }
    var standIndex = index - (messages.length - standup.length);
    console.log("Standup " + standIndex);
    message.addEventListener("click",function() {$("standup").style.display = 'block'; $("link").style.display = 'block';});
    standupMessage.innerHTML = standup[standIndex].text;
    if (standup[standIndex].link !== "pass") {
      standupMessage.href = standup[standIndex].link;
      standupMessage.target = "_blank";
    }
    else
      standupMessage.removeAttribute("href");
    globalStand = standIndex;
  }
  if(messages[index].category === "homework" && messages[index].link === "pass")
    message.addEventListener("click",noooo);
  else
    message.removeEventListener("click",noooo);
  if($("vader")) {
    document.body.removeChild($("vader"));
    console.log("removed darth vader :)");
  }

  var parent = $("hideable");
  var link = $("link");
  if(!link) {
    link = document.createElement("div");
    link.id = "link";
    parent.appendChild(link);
  }
  displayLink();
  if(standIndex >= 0)
    $("link").style.display = 'none';
}

function displayLink() {
  if (messages[globalIndex].category === "done")
    link.innerHTML = "<div class='space'>Immediately close this tab.</div>";
  else if (messages[globalIndex].category === "task")
    link.innerHTML = "<div class='break-list space'><u onclick='finished()'>I already did.</u><a href='cyoa/64.html' target='_blank'>I have nothing to do.</a></div>";
  else if (messages[globalIndex].category === "plan2")
    link.innerHTML = "<div class='break-list space'><u onclick='finished()'>I already did.</u><u onclick='finished()'>I have nothing to do.</a></div>";
  else if(messages[globalIndex].category === "food")
    link.innerHTML = "<div class='break-list space'><u onclick='finished()'>I already did.</u><u onclick='whyNot()'>It's impossible.</u></div><u onclick=deleteCategory('food')>I am still full, even after 3 hours.</u>";
  else if(messages[globalIndex].category === "homework")
    link.innerHTML = "<div class='break-list space'><u onclick='finished()'>I already did.</u><u onclick='whyNot()'>It's impossible.</u></div><u onclick=deleteCategory('homework')>I am taking a break from homework.</u>";
  else if(messages[globalIndex].category === "exercise-heavy")
    link.innerHTML = "<div class='break-list space'><u onclick='finished()'>I already did.</u><u onclick='whyNot()'>It's impossible.</u></div><u onclick=deleteCategory('exercise-heavy')>It's been less than 30 minutes since I ate.</u>";
  else
    link.innerHTML = "<div class='break-list space'><u onclick='finished()'>I already did.</u><u onclick='whyNot()'>It's impossible.</u></div>";
}

function noooo() {
  var exists = $("vader");
  if (!exists) {
    var video = document.createElement("video");
    video.id = "vader";
    var source = document.createElement("source");
    source.src = "media/NOOOO!.mp4";
    source.type = "video/mp4";
    video.appendChild(source);
    document.body.appendChild(video);
  }
  $("vader").play();
}

function finished() {
  var category = messages[globalIndex].category;
  if(category === "plan" || category === "meditate" || category === "homework" || category === "food")
    deleteCategory(category);
  //Splice the break away from the array.
  else {
    if(category === "sleep")
      bedtimeRemoved = true;
    if(messages[globalIndex].stand)
      standup.splice(globalStand,1);
    messages.splice(globalIndex,1);
    console.log(messages);
    console.log(standup);
    displayBreak(-1);
  }
}

function whyNot() {
  link.innerHTML = "<div class='space'>Let me guess. You don't want to do it.</div> <div class='two-list space'><u onclick='submitReason()'>I don't want to do it.</u><u onclick='displayLink()'>Actually, I'll do it.</u></div><u onclick='finished()'>It is absolutely impossible to do it now.</u>";
}

function deleteCategory(category) {
  var i = 0;
  while(i < messages.length) {
    if(messages[i].category === category)
      messages.splice(i,1);
    else
      i++;
  }

  i = 0;
  while(i < standup.length) {
    if(standup[i].category === category)
      standup.splice(i,1);
    else
      i++;
  }
  console.log(messages);
  console.log(standup);
  displayBreak(-1);
}

function submitReason() {
  if (messages[globalIndex].importance < 3)
    putOffBreak();
  else {
    if(Math.floor(Math.random() * 2) === 0)
      window.open("2minuterule.html", '_blank');
    else
      window.open("brave.html", '_blank');
  }
}

function putOffBreak() {
  if(messages[globalIndex].stand)
    putOffStand.push(standup[globalStand]);
  putOff.push(messages[globalIndex]);
  finished();
}

function $(x) {
  return document.getElementById(x);
}

async function pushTheButtonBR() {
  var press = document.createElement("audio");
  var source = document.createElement("source");
  source.src = 'media/Button Push.mp3';
  source.type = 'audio/mpeg';
  press.appendChild(source);
  press.id = "press";
  document.body.appendChild(press);
  $("press").play();
  $("breakMessage").style.color = 'white';
  await sleep(1750);
  $("breakMessage").style.color = 'inherit';
  window.open("https://emergency.nofap.com/redirect?religious=true&cat=em");
}
