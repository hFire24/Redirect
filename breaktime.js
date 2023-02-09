var messages = [];
var standup = [];

var putOff = [];
var putOffStand = [];

var globalIndex = -1;
var globalStand = -1;

var bedtimeRemoved = false;

class Breaktime {
  constructor(text,link,category,importance,stand,lazy) {
    this.text = text;
    this.link = link;
    this.category = category;
    this.importance = importance;
    this.stand = stand;
    this.lazy = lazy;
  }
}

function loadBreak(number) {
  if(number === 2) {
    messages = messages.concat(smallBreak);
    standup = standup.concat(smallStand);
  }
  else if(number === 3 || number === 4) {
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
    messages.push(new Breaktime('Stand up and stretch if you can.',"pass",standup[i].category,standup[i].importance,true,standup[i].lazy));
  if(d.getHours() < 3 || d.getHours() > 19) {
    messages.push(new Breaktime('Stand up and stretch if you can.',"pass","health",3,true,"lazy"));
    standup.push(new Breaktime('Change to your pajamas. No socks.',"pass","health",3,true,"lazy"));
  }
  if(d.getHours() <= 4 || d.getHours() >= 22) {
    messages.push(new Breaktime('Stand up and stretch if you can.',"pass","sleep",3,true,"lazy"));
    standup.push(new Breaktime('Wear your pajamas and go to bed.',"pass","sleep",3,true,"lazy"));
  }
  if(number === 4) {
    messages = messages.filter(item => item.lazy === "lazy");
    standup = standup.filter(item => item.lazy === "lazy");
  }
  console.log(messages);
  console.log(standup);
  displayBreak(-1);
}

var smallBreak = [//Relaxation
//new Breaktime('Listen to this.',"https://app.diagrams.net/#G1UCqHtj3kuSZ1UPVXut0o7vF1XV9e0J8b","meditate",3,false,"lazy"),
//new Breaktime('Clear your mind.',"https://app.diagrams.net/#G1UCqHtj3kuSZ1UPVXut0o7vF1XV9e0J8b","meditate",3,false,"lazy"),
new Breaktime('Pray a short prayer.',"pass","religion",3,false,"lazy"),
new Breaktime('Look away from the screen for about 2 minutes.',"pass","relax",3,false,"lazy"),
new Breaktime('Take a deep breath.',"https://www.google.com/search?q=take+a+deep+breath","relax",3,false,"lazy"),
new Breaktime('Put on some focus/relaxation music.',"https://music.youtube.com/channel/UC4r3AhGZWUGeh2AprrEJ_PA","music",2,false,"lazy"),
  //Task checking
new Breaktime('Check your Dynalist, please.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',"pass","task",3,false,"active"),
  //Day planning
new Breaktime('List everything you\'re currently doing, and order them by priority.',"pass","plan",3,false,"active"),
new Breaktime('List all the things you want to do, and order them by priority.',"pass","plan",3,false,"active"),
new Breaktime('Make an objective for today.',"objective.html","task",2,false,"lazy"),
  //Music
new Breaktime('Add a song to your iTunes library.',"pass","misc",1,false,"active"),
new Breaktime('Remove a song from your iTunes library. You may also need to delete it off your iOS devices.',"pass","misc",1,false,"active"),
new Breaktime('Analyze a song in your iTunes library.',"pass","misc",1,false,"active"),
new Breaktime('Put on some music to help you focus.',"musicflow/1","music",2,false,"lazy"),
  //Miscellaneous
new Breaktime('Watch anime for 30 seconds.',"nextanime","anime",1,false,"lazy"),
new Breaktime('Say out loud the thing you need to get done.',"pass","plan",2,false,"lazy"),
new Breaktime('Do one thing to increase your spirituality.',"https://www.churchofjesuschrist.org/study/ensign/1999/03/ten-ideas-to-increase-your-spirituality?lang=eng","religion",3,false),
new Breaktime('Try answering this question.',"question.html","misc",1,false,"lazy"),
new Breaktime('Play one of these short games.',"cyoa/46.html","game",1,false,"lazy"),
new Breaktime('Read your journal entries.<br>Start from June 2014.',"pass","read",1,false,"active"),
new Breaktime('Answer this questionnaire.',"cyoa/17.html","misc",2,false,"lazy"),
new Breaktime('Do some mouth exercises.',"https://www.notion.so/54bf9b8021da453a8eda76bd1d39a23d?v=2af1f2bd5d154c2dbd78444d115eb653","exercise",2,false,"lazy"),
new Breaktime('Read the verse of the day.',"pass","religion",2,false,"lazy"),
new Breaktime('Explore the world through StreetView.',"https://randomstreetview.com/","misc",1,false,"lazy"),
  //Goals
new Breaktime('Click here.',"pushTheButton","misc",2,false,"lazy"),
//'How can you build an everlasting romantic relationship from scratch?',
new Breaktime('Use the Mutual app. Swipe up or down.',"pass","social",2,false,"lazy"),
//new Breaktime('Find a way to learn job interview skills.',"pass","job",3,false),
//new Breaktime('Read just one page of <u>Atomic Habits</u>.',"pass","read",3,false,"lazy"),
new Breaktime('Think of a goal. Any one. Set that as your break message.',"pass","misc",2,false,"active"),
//new Breaktime('Check in with yourself using the Finch app.',"pass","misc",2,false,"lazy"),
new Breaktime('Check Deepstash.',"https://deepstash.com/","read",2,false,"lazy"),
new Breaktime('Use the Brillaint app.',"https://brilliant.org/home/","coding",3,false,"lazy")];
//new Breaktime('Write down one thing you are grateful for in the Finch app and thank God for it.',"pass","misc",2,false,"lazy")];

var smallStand = [//Health and fitness
new Breaktime('Refill your bottle and drink water.',"pass","health",3,true,"lazy"),
new Breaktime('Walk up to the sixth floor of your apartment and walk down to the first floor.',"pass","exercise",3,true,"active"),
new Breaktime('Stare at an object 20 feet away for 20 seconds.',"pass","relax",3,true,"lazy"),
new Breaktime('Eat a snack if it has been 3 hours since you ate something.',"pass","food",2,true,"active"),
new Breaktime('Do planks for one minute.',"https://www.youtube.com/watch?v=z6KKo85V9Ew","exercise-heavy",3,true,"active"),
new Breaktime('Brush your teeth if you haven\'t done so this morning or this evening after dinner',"pass","health",3,true,"lazy")];
//new Breaktime('Do this drawing exercise with a drawing tablet.',"https://youtu.be/35rju_APLqQ","art",2,true)];

var bigBreak = [//relaxation
//new Breaktime('Listen to one of these long guided meditations. Don\'t forget about <a href="https://app.diagrams.net/#G1UCqHtj3kuSZ1UPVXut0o7vF1XV9e0J8b">the flowchart</a>.',"relax2.html?mood=random","meditate2",3,false,"lazy"),
  //Task checking
new Breaktime('Check your Dynalist, please.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',"pass","task",3,false,"active"),
new Breaktime('Check your Notion Habits database, please.<br>Update it and do one of the habits not done today.',"https://www.notion.so/1904690de3a94161838e9601222ebe87?v=0e6af5bbaf3844ceb8ef75e64e2f83c7","task",3,false,"active"),
  //Job hunting
/*new Breaktime('Apply for a job.',"pass","job",4,false),
new Breaktime('Find a way to learn job interview skills.',"pass","job",3,false),*/
  //Anime watching
new Breaktime('Watch anime.',"nextanime","anime",1,false,"lazy"),
new Breaktime('Watch Dragon Ball.',"https://beta.crunchyroll.com/series/G8DHV7W21/dragon-ball","anime",1,false,"lazy"),
new Breaktime('Watch Sgt. Frog.',"https://www.crunchyroll.com/series/GG5H5XMEP/sgt-frog","anime",1,false),
new Breaktime('Read the Slime Killer manga.',"pass","anime",1,false),
  //Games
new Breaktime('Drive around how you want in Need for Speed: Hot Pursuit.',"pass","game",1,false,"actve"),
new Breaktime('Drive around how you want in BeamNG.drive.',"pass","game",1,false,"active"),
new Breaktime('Drive around safely in American Truck Simulator.',"pass","game",1,false,"active"),
new Breaktime('Play Sudoku (Medium).',"https://sudoku.com/medium","game",1,false,"active"),
new Breaktime('Play 100% Orange Juice.',"pass","game",1,false,"active"),
new Breaktime('Grind levels in 200% Mixed Juice.',"pass","game",1,false,"active"),
new Breaktime('Play games on Flashpoint.',"pass","game",1,false,"active"),
  //Miscellaneous
//new Breaktime('No routine? Form one.',"pass","plan",2,false,"active"),
new Breaktime('How about multiple ways to take a break?',"multiple.html","misc",2,false,"active"),
new Breaktime('Read your patriarchal blessing.',"pass","religion",2,false,"active"),
new Breaktime('Read the scriptures. Don\'t forget about your study plan.',"https://www.churchofjesuschrist.org/study/scriptures/bofm?lang=eng","religion",2,false,"active"),
new Breaktime('Make a new blog post.',"https://dynalist.io/d/T2n7Rgvw-Q0NjTv5isXg1Dsz","misc",1,false,"active"),
new Breaktime('Review your break messages. Add, edit, or remove them when needed.',"pass",3,false,"active"),
new Breaktime('Tackle your search terms list.',"pass",2,false,"active"),
new Breaktime('Clear your watch later list.',"https://www.youtube.com/playlist?list=WL",2,false,"lazy"),
new Breaktime('Call one of your family members.',"pass","misc",2,false,"active"),
  //Goals
//'Learn how to make chiptune music.',
//'Learn how to use FL Studio.',
//'Make some friends in real life. Institute is the best starting point.',
new Breaktime('Learn social skills.',"https://skl.sh/3TAd4w9","social",2,false,"active"),
new Breaktime('Listen to a General Conference talk.',"https://dynalist.io/d/PQDJvhu4f3DRlgGhkcMQA32T","religion",3,false,"lazy"),
new Breaktime('Write in journal.',"pass","misc",3,false,"active"),
//'Learn a new programming language. Try to code Card Battle Stadium in that language.'
//'Try to code Card Battle Stadium in C#.',
//'Try one of these C# coding projects.',
//new Breaktime('Read the book <u>Atomic Habits</u>.',"pass","read",3,false,"lazy"),
//new Breaktime('Start learning Godot.',"pass","gamedev",2,false),
new Breaktime('Learn coding skills on Skillshare.',"https://skl.sh/3kUGEj8","coding",3,false,"active"),
//new Breaktime('Use your money to buy a programming e-book.',"https://www.amazon.com","coding",3,false,"active"),
/*new Breaktime('Learn PHP on Skillshare.',"pass","coding",3,false),
new Breaktime('Learn C++ on Skillshare.',"pass","coding",3,false),
new Breaktime('Learn WPF on Skillshare.',"pass","coding",3,false),*/
//'Learn a language with Duolingo.',
new Breaktime('Check your goals page. Try to knock out one of your goals.',"goals.html","task",3,false,"active"),
new Breaktime('Watch at least one video in the "Get Life Advice" playlist.',"https://youtube.com/playlist?list=PLofW9_KJmwwrCjoaKj2cZ57KwEQYZDioX","misc",2,false,"lazy")];
//new Breaktime('Learn C# on Lex on your work laptop.',"pass","coding",3,false,"active")];
//new Breaktime('Take this quiz, and draw the result.',"quiz.html","art",1,true),
//new Breaktime('Read stuff for Institute.',"https://myinstitute.churchofjesuschrist.org/classes","religion",2,false),;
//Do not upload traced art.

var bigStand = [//Health and fitness
new Breaktime('Eat a meal if it has been 3 hours since you ate something.',"pass","food",2,true,"active"),
  //Personal hygiene
new Breaktime('Take a shower if you hadn\'t today, even if it\'s cold in your room.',"pass","health",3,true,"active"),
  //Miscellaneous Part 2
new Breaktime('Declutter your room.',"pass","misc",2,true,"active"),
new Breaktime('Play some Stepmania.',"stepmania.html","exercise-heavy",3,true,"lazy"),
new Breaktime('Back up your hard drive.',"pass","misc",2,true,"active"),
new Breaktime('Do the dishes and make rice. You\'ll thank me later.',"pass","misc",3,true,"active"),
new Breaktime('Clean your apartment, especially your kitchen and bathroom.',"https://dynalist.io/d/Prf8EawMGjjO6qiA8xo_-2ED","misc",3,true,"active"),
new Breaktime('Go to the gym and use the gym equipment.',"pass","exercise-heavy",3,true,"active")];
//new Breaktime('Draw some stuff using an iPad or a drawing tablet.',"pass","art",2,true),
//new Breaktime('Learn how to use Pygame by reading that book.',"pass","read",2,true),
//new Breaktime('Read one chapter of that green book.',"pass","read",4,true),
//new Breaktime('Solve a Rubik\'s cube.',"pass","game",1,true),
/*new Breaktime('Draw anime with a drawing tablet.',"art.html","art",2,true),
new Breaktime('Clear your workspace and draw anime with a sketchpad.',"art.html","art",2,true),
new Breaktime('Make progress on this drawing course.',"drawing-progress.html","art",2,true),*/

var mobileBreak = [//Relaxation
//new Breaktime('Listen to this.',"https://app.diagrams.net/#G1UCqHtj3kuSZ1UPVXut0o7vF1XV9e0J8b","meditate",3,false),
//new Breaktime('Clear your mind.',"https://app.diagrams.net/#G1UCqHtj3kuSZ1UPVXut0o7vF1XV9e0J8b","meditate",3,false),
// new Breaktime('Make progress on your Advanced Plan on Balance.',"pass","meditate2",3,false,"lazy"),
// new Breaktime('Make progress on a non-Advanced Plan on Balance.',"pass","meditate2",3,false,"lazy"),
new Breaktime('Pray a short prayer.',"pass","religion",3,false),
new Breaktime('Look away from the screen for about 2 minutes.',"pass","relax",3,false),
new Breaktime('Take a deep breath.',"https://www.google.com/search?q=take+a+deep+breath","relax",3,false),
new Breaktime('Put on some focus/relaxation music.',"https://music.youtube.com/channel/UC4r3AhGZWUGeh2AprrEJ_PA","music",2,false),
  //Task checking
new Breaktime('Check your Dynalist, please.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',"pass","task",3,false),
new Breaktime('Check your Notion Habits database, please.<br>Update it and do one of the habits not done today.',"https://www.notion.so/1904690de3a94161838e9601222ebe87?v=0e6af5bbaf3844ceb8ef75e64e2f83c7","task",3,false),
  //Day planning
new Breaktime('List everything you\'re currently doing, and order them by priority.',"pass","plan",3,false),
new Breaktime('List all the things you want to do, and order them by priority.',"pass","plan",3,false),
new Breaktime('Make an objective for today.',"objective.html","task",2,false),
  //Music
new Breaktime('Put on some music to help you focus.',"musicflow/1","music",2,false),
  //Games
new Breaktime('Play one of these short games.',"cyoa/46.html","game",1,false),
new Breaktime('Use the Brillaint app.',"https://brilliant.org/home/","coding",3,false),
  //Anime
new Breaktime('Watch anime for 30 seconds.',"nextanime","anime",1,false),
new Breaktime('Watch anime.',"nextanime","anime",1,false),
new Breaktime('Watch Dragon Ball.',"https://beta.crunchyroll.com/series/G8DHV7W21/dragon-ball","anime",1,false),
new Breaktime('Watch Sgt. Frog.',"https://www.crunchyroll.com/series/GG5H5XMEP/sgt-frog","anime",1,false),
  //Miscellaneous
new Breaktime('Say out loud the thing you need to get done.',"pass","plan",2,false),
new Breaktime('Do one thing to increase your spirituality.',"https://www.churchofjesuschrist.org/study/ensign/1999/03/ten-ideas-to-increase-your-spirituality?lang=eng","religion",3,false),
new Breaktime('Read your patriarchal blessing.',"pass","religion",2,false),
new Breaktime('Read the verse of the day in Gospel Library app.',"pass","religion",2,false),
new Breaktime('Try answering this question.',"question.html","misc",1,false),
new Breaktime('Read your journal entries.<br>Start from June 2014.',"pass","read",1,false),
new Breaktime('Answer this questionnaire.',"cyoa/17.html","misc",2,false),
new Breaktime('Do some mouth exercises.',"https://www.notion.so/54bf9b8021da453a8eda76bd1d39a23d?v=2af1f2bd5d154c2dbd78444d115eb653","exercise",2,false),
new Breaktime('Make a new blog post.',"https://dynalist.io/d/T2n7Rgvw-Q0NjTv5isXg1Dsz","misc",1,false),
new Breaktime('Read the scriptures. Don\'t forget about your study plan.',"https://www.churchofjesuschrist.org/study/scriptures/bofm?lang=eng","religion",2,false),
new Breaktime('Tackle your search terms list.',"pass",2,false),
new Breaktime('Clear your watch later list.',"https://www.youtube.com/playlist?list=WL",2,false),
new Breaktime('Call one of your family members.',"pass","misc",2,false),
  //Goals
new Breaktime('Click here.',"pushTheButton","misc",2,false),
new Breaktime('Listen to a General Conference talk.',"https://dynalist.io/d/PQDJvhu4f3DRlgGhkcMQA32T","religion",3,false),
//new Breaktime('Read the book <u>Atomic Habits</u>.',"pass","read",2,false),
new Breaktime('Use the Mutual app. Swipe up or down.',"pass","social",2,false),
new Breaktime('Learn social skills.',"https://skl.sh/3TAd4w9","social",2,false),
//new Breaktime('Find a way to learn job interview skills.',"pass","job",3,false),
//'Learn a language with Duolingo.',
new Breaktime('Check your goals page. Try to knock out one of your goals.',"goals.html","task",3,false),
new Breaktime('Watch at least one video in the "Get Life Advice" playlist.',"https://youtube.com/playlist?list=PLofW9_KJmwwrCjoaKj2cZ57KwEQYZDioX","misc",2,false),
//new Breaktime('Check in with yourself using the Finch app.',"pass","misc",2,false),
new Breaktime('Check Deepstash.',"https://deepstash.com/","read",2,false),
new Breaktime('Draw some stuff using an iPad.',"pass","art",2,false)];
//new Breaktime('Write down one thing you are grateful for in the Finch app and thank God for it.',"pass","misc",2,false,"lazy")];

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
      if(putOffStand.length > 0) {
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
  if(messages[index].category === "job" && messages[index].link === "pass")
    message.addEventListener("click",noooo);
  else
    message.removeEventListener("click",noooo);
  if($("vader")) {
    document.body.removeChild($("vader"));
    console.log("removed darth vader :)");
  }

  var parent = $("hideable");
  var child = $("link");
  if(!child) {
    child = document.createElement("div");
    child.id = "link";
    parent.appendChild(child);
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
  else if (messages[globalIndex].category === "plan")
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
  if(category === "plan" || category === "meditate" || category === "homework" || category === "food" || category === "music")
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
  }
  if(confirm("Got something you need to do?")) {
    var custom = prompt("Type in a task, and press \"Submit\" or Enter when done.");
    if(!filtered(custom)) {
      messages.unshift(new Breaktime(custom,"pass","custom",3,false,"lazy"));
      displayBreak(0);
    }
  }
  else
    displayBreak(-1);
}

function filtered(newBreak) {
  let rValue = true;
  let newBreakLC = newBreak.toLowerCase();
  if (newBreakLC.indexOf("cirno") >= 0)
    location.href = "https://hfire24.github.io/Redirect/cirno.html";
  else if (found(['fap', 'urbate', 'ejaculat', 'bust a nut', 'to nut', 'lust', 'horny', 'arous', 'sex', 'unclean', 'dirty', 'sinful', 'make love'], newBreakLC))
    location.href = "https://hfire24.github.io/Redirect/whoa/old.html";
  else if (found(["loli", "flandre", "chino", "koishi", " rem ", " rem.", " rem!", "little girl", "anime girl", "booru", "deviantart", "pixiv", "waifu", 
    "cute", "attractive", "regress", "shrink", "adorable"], newBreakLC) || newBreakLC.endsWith(" rem")) {
    alert("That should not be a priority.");
    displayBreak(-1);
  }
  else if (found(['suicid', 'to die ', 'be dead', ' kill ', 'murder', 'kill me', 'kill myself', 'perish', 'get rid of myself', 'homicid', 'end my life', 'life to end', 'hang myself', 'destroy myself', 'destroy my life', 'noose'], newBreakLC)
    && !found(wasteTime, newBreakLC) && !found(["watch", "listen", "read", "play"],newBreakLC) || found(['don\'t want', 'do not want', 'give up', 'stop', 'terminate', 'hate'], newBreakLC) && found(['myself', 'life', 'live', 'living', 'exist', 'earth', 'planet', 'world'], newBreakLC)
    || newBreakLC.endsWith("die") && !found(['birdie', 'hoodie', 'indie'], newBreakLC) || newBreakLC.startsWith("kill") && !found(wasteTime,newBreakLC) || newBreakLC.endsWith(" kill") && !found(["watch", "listen", "read", "play"],newBreakLC)) {
    $("break").innerHTML = "This is very serious. Immediately call the national helpline, or talk to someone you absolutely trust about your issues.";
    document.body.removeChild($("hideable"));
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
  }
  else if (found(['bored', 'bore', 'nothing', 'don\'t feel like doing', 'uhh', 'umm', 'hmm', 'lack of interest', 'don\'t know', 'dunno', 'no idea', 'no reason', 'idk'], newBreakLC)
    || found(wasteTime,newBreakLC) || newBreak.length === 0)
    displayBreak(-1);
  else {
    rValue = false;
  }
  return rValue;
}

var wasteTime = ['kill time', 'kill some time', 'killing time', 'killing some time', 'waste time', 'waste some time', 'wasting time', 'wasting some time'];

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
}

function submitReason() {
  if (messages[globalIndex].importance < 4)
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
