var input = $("newBreak");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submit();
  }
});
var count = 0;

function finalTest(inputText,site)
{
  if (inputText === 'custom task' || inputText.indexOf("something") >= 0 && inputText.indexOf("do") >= 0 && (found(required,inputText) || inputText.indexOf("specific") >= 0))
    location.href = "custom.html";
  else if(inputText.indexOf("busy") >= 0)
    location.href = "busy.html";
  else if (inputText.indexOf("do something") >= 0 || inputText.indexOf("take a break") >= 0)
    location.href = "time.html";
  else if(inputText.indexOf("music") >= 0)
    location.href = "cyoa/58.html";
  else if (inputText.indexOf("tasks") >= 0) {
    $("message").innerHTML = "Just type in \"ta\" in your browser and press enter.";
    document.body.removeChild($("link"));
  }
  else if(found(news,inputText) && site !== "google") {
    $("message").innerHTML = "There's nothing beneficial to see there.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(found(hunger,inputText)) {
    $("message").innerHTML = "You need to eat some food right now.";
    $("link").innerHTML = "<a href='https://www.doordash.com/en-US'>Click here if you want to spend over $10 for food delivery.</a>";
  }
  else if(found(relapse,inputText))
    location.href = 'relapse.html';
  else if(found(whoa,inputText))
    location.href = 'whoa/index.html';
  else if(found(seriousWorries,inputText) && !found(wasteTime,inputText) || found(negativity,inputText) && found(life,inputText) || inputText.endsWith("die")) {
    $("message").innerHTML = "This sounds super serious. Immediately call the national helpline, or talk to someone you absolutely trust about your issues.";
    document.body.removeChild($("link"));
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
  }
  else if(found(focus,inputText)) {
    $("message").innerHTML = "Well there's your problem.";
    $("link").innerHTML = "<a href='cyoa/18.html'>Click here to coninue.</a>";
  }
  else if(inputText.indexOf("nanah") >= 0)
    location.href = "cyoa/28.html";
  else if (found(negativity,inputText))
    location.href = "cyoa/15.html";
  else if(found(worries,inputText)) {
    $("message").innerHTML = "You need to calm down and relax.";
    $("link").innerHTML = "<a id='relax' href=" + generateAndrewJohnsonLink() + ">Click here to continue.</a>";
  }
  else if(found(overwhelming,inputText))
    location.href = 'cyoa/48.html';
  else if(found(relaxing,inputText) || inputText.indexOf('clear') >= 0 && inputText.indexOf('mind') >= 0) {
    location.href = generateAndrewJohnsonLink();
  }
  else if(found(sleepy,inputText)) {
    var d = new Date();
    if(d.getHours() >= 6 && d.getHours() <= 11) {
      $("message").innerHTML = "You need to drink some water.";
      $("link").innerHTML = "<ins onclick='alreadyDrank()'>But I just drank some water.</ins>";
    }
    else if(d.getHours() < 22) {
      $("message").innerHTML = "You should take a power nap.";
      $("link").innerHTML = "<a href='https://insighttimer.com/andrewjohnson/guided-meditations/power-nap'>Click here to continue.</a>";
    }
    else
      location.href = "cyoa/14.html";
  }
  else if(inputText.indexOf("unblock") >= 0) {
    $("message").innerHTML = "If you unblock that website, you'll waste too much time.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(inputText.indexOf("lazy") >= 0 && site !== "google" || inputText.indexOf("anime") >= 0 && site !== "deviantart") {
    $("message").innerHTML = "Be like Anzu Futaba, and watch more anime.";
    $("link").innerHTML = "<a href='nextanime.html'>Click here to coninue.</a>";
  }
  else if(inputText.indexOf("research") >= 0) {
    $("message").innerHTML = "Aww, yes. \"Research.\" One of the most common excuses for procrastination.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(site === "google") {
    if(count === 0) {
      if(found(required,inputText) || inputText.indexOf("learn") >= 0)
      {
        count = 1;
        $("message").innerHTML = "What kind of emotions did you have while searching that term?";
      }
      else
      {
        count = 2;
        $("message").innerHTML = "Would you like to save that search term for later?";
      }
      $("newBreak").value = "";
    }
    else if (count === 1 && found(determined,inputText)) {
      $("message").innerHTML = "Hopefully your search will lead to learning new things or passing assignments.<br>Don't forget to block Google soon.";
      document.body.removeChild($("link"));
    }
    else if (count === 2 && found(yes,inputText)) {
      document.getElementById("message").innerHTML = "OK! Add that your \"Search Terms\" list to search for later!";
      document.body.removeChild(document.getElementById("link"));
    }
    else {
      var messages = ['You really are bored.',
      'Stop typing in distracting search terms!',
      'Stop escaping from your problems!',
      'Forget that search term!',
      'You shouldn\'t search that term.',
      'Don\'t waste time getting distracted on Google.',
      'Don\'t you have anything better to do with your time?',
      'Don\'t search for time-wasting things!',
      'Your mind must be wandering off, isn\'t it?',
      'You need to stop procrastinating.',
      'You just wanted to sidetrack. Not good.',
      'Nothing good will come out of searching that term.',
      'You are procrastinating and not getting things done.',
      'You want to spend your life Googling useless stuff? 🤣',
      'You may seem bored or lazy, but you are fearful.',
      'Don\'t get dictated by your urges.',
      'You have more important things to do.',
      'Now is not the time to be doing that.',
      'Please stop being lazy, and stop wasting your time.',
      'You really don\'t want to search that term anyway.',
      'Don\'t have a lazy, unproductive day.',
      'It seems like you feel stuck.',
      'You need motivation.',
      'Why not use that search energy to make some progress on a task?',
      'If you\'re bored, just try to do your tasks.',
      'You want to go there, but you don\'t need to go there.',
      'Don\'t be addicted to the internet.',
      'Fun things are good, but they are distractions.'];
      document.getElementById("message").innerHTML = messages[Math.floor(Math.random() * messages.length)];
      document.getElementById("message").classList.remove("small");
      document.getElementById("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
    }
  }
  else if(inputText.indexOf("procrast") >= 0 || found(wasteTime,inputText)) {
    $("message").innerHTML = "Here. Read this article in the link below.";
    $("link").innerHTML = "<a href='https://alphaefficiency.com/4-types-procrastination-beat/'>Click here to coninue.</a>";
  }
  else if(site === "busy") {
    $("message").innerHTML = "You need an energy boost.";
    $("link").innerHTML = "<a id='relax' href=" + generateAndrewJohnsonLink() + ">Click here to continue.</a>";
  }
  else if(found(humor,inputText)) {
    $("message").innerHTML = "Šílený Ota";
    $("message").classList.remove("small");
    var video = document.createElement("video");
    video.id = "silenyota";
    var source = document.createElement("source");
    source.src = "media/Sileny Ota.mp4";
    source.type = "video/mp4";
    video.appendChild(source);
    $("link").appendChild(video);
    $("link").removeChild($("newBreak"));
    $("link").removeChild($("submit"));
    $("link").removeChild($("dropdown"));
    $("message").addEventListener("click",function(){$("silenyota").play();});
    $("link").addEventListener("click",function(){$("silenyota").play();});
    $("silenyota").play();
  }
  else if(inputText.indexOf("fun") >= 0) {
    $("message").innerHTML = "Fun things are good, but they are distractions.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(inputText.indexOf("want") >= 0 && inputText.indexOf("anime") < 0) {
    $("message").innerHTML = "You want to go there, but you don't need to go there.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(found(addicts,inputText) && inputText.indexOf("anime") < 0) {
    $("message").innerHTML = "Don't be addicted to the internet.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(found(love,inputText) && site === "youtube") {
    $("message").innerHTML = "If you love YouTube so much, then you must love online videos in general.";
    $("link").innerHTML = "<a href='nextanime.html'>Click here to continue.</a>";
  }
  else if(site === "deviantart" && (found(love,inputText) || found(cuteness,inputText))) {
    $("message").innerHTML = "If you love cute anime girls so much, then why don't you see them in action?";
    $("link").innerHTML = "<a href='nextanime.html'>Click here to continue.</a>";
  }
  else if(site === "reddit") {
    $("message").innerHTML = "Reddit is bad.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(found(bored,inputText)) {
    $("message").innerHTML = "If you're bored, just try to do your tasks.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(inputText.indexOf("i can") >= 0) {
    $("message").innerHTML = "You could, but you're better off doing tasks.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(inputText.indexOf("anime") >= 0) {
    $("message").innerHTML = "Watch some anime instead.";
    $("link").innerHTML = "<a href='nextanime.html'>Click here to coninue.</a>";
  }
  else {
    $("message").innerHTML = "I gonna assume that you should do your tasks instead.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
}

var required = ['need', 'have to', 'must', 'mean', 'required', 'force'];
var news = ['check', 'new'];
var whoa = ['fap', 'urbate', 'ejaculat', 'bust a nut', 'busting a nut', 'nutting', 'fantasy', 'fantasi', 'lust', 'horny', 'arous', 'sex', 'unclean', 'dirty', 'sinful',
'whoa', 'nuke'];
var wasteTime = ['kill time', 'kill some time', 'killing time', 'killing some time', 'waste time', 'waste some time', 'wasting time', 'wasting some time'];
var worries = ['worr', 'anxi', 'scared', 'afraid', 'fear', 'bad memories', 'trigger', 'haunt', 'trauma', 'panic',
'stress', 'angry', 'anger', 'furious', ' mad ', 'mad.', 'mad!', 'hate', 'despise', 'loathe', 'punch', 'attack', 'bully', 'hating', 'hated', 'shut up',
'sad', 'upset', 'disappointed', 'offended', 'miserable', 'lost all hope'];
var seriousWorries = ['suicid', 'die ', 'be dead', 'kill', 'perish', 'get rid of myself', 'waste', 'depressed', 'homicid',
'give up in life', 'end my life', 'life to end', 'i don\'t matter', 'i do not matter', 'hang', 'destroy', 'hate my'];
var life = ['live', 'living', 'exist', 'earth', 'planet', 'world'];
var overwhelming = ['overwhelm', 'too much', 'too many'];
var relaxing = ['calm', 'relax', 'peace', 'chill', 'refresh', 'reenergize'];
var humor = ['funny', 'laugh', 'hilarious'];
var addicts = ['need', 'live without', 'addict'];
var love = ['love','adore','enjoy','favorite','best','awesome','great','cool','good'];
var bored = ['bored', 'nothing', 'don\'t know', 'no idea', 'no reason', 'idk', 'uhh', 'umm', 'hmm', 'cirno', 'flandre', 'meme'];
var negativity = ['don\'t want', 'do not want', 'give up', 'stop'];
var sleepy = ['tired','exhaust','sleep'];
var hunger = ['hunger', 'hungry', ' eat', 'food', 'famished', 'starving', 'stomach', 'devour', 'swallow', 'delicious', 'yummy', 'tasty'];
var yes = ['yeah', 'yes', 'sure', 'absolute', 'positive', 'definitely', 'ok', 'why', 'to do'];
var cuteness = ['cute','aww','chino','rem'];
var focus = ['focus', 'concentrate'];
var determined = ['determin', 'urgen', 'importan'];
var relapse = ['relapse', 'fapped', 'ejaculated', 'orgasmed', 'masturbated', 'refractory'];

function generateAndrewJohnsonLink() {
  var meditationLinks = ['https://insighttimer.com/andrewjohnson/guided-meditations/quick-confidence',
  'https://insighttimer.com/andrewjohnson/guided-meditations/body-scan-relaxation',
  'https://insighttimer.com/andrewjohnson/guided-meditations/energy-boost',
  'https://insighttimer.com/andrewjohnson/guided-meditations/favourite-place-of-relaxation',
  'https://insighttimer.com/andrewjohnson/guided-meditations/grounding-relaxation',
  'https://insighttimer.com/andrewjohnson/guided-meditations/stomach-relaxation',
  'https://insighttimer.com/andrewjohnson/guided-meditations/smiling-relaxation',
  'https://insighttimer.com/andrewjohnson/guided-meditations/breathing-relaxation-1',
  'https://insighttimer.com/andrewjohnson/guided-meditations/heaviness-relaxation',
  'https://insighttimer.com/andrewjohnson/guided-meditations/breathing-relaxation-3',
  'https://insighttimer.com/andrewjohnson/guided-meditations/breathing-relaxation-2',
  'https://insighttimer.com/andrewjohnson/guided-meditations/energy-ear-massage',
  'https://insighttimer.com/andrewjohnson/guided-meditations/stretch-relaxation',
  'https://insighttimer.com/andrewjohnson/guided-meditations/head-massage',
  'https://insighttimer.com/andrewjohnson/guided-meditations/eye-relaxation'];
  var index = Math.floor(Math.random() * meditationLinks.length);
  return meditationLinks[index];
}

function found(array,inputText) {
  for (var i in array)
    if (inputText.indexOf(array[i]) >= 0)
      return true;
  return false;
}

function getBack()
{
  var random = Math.floor(Math.random() * 30)
  console.log("Random " + random);
  if(random === 0)
  {
    $("message").innerHTML = "Get back to whatever you should be doing!";
    $("message").classList.remove("small");
    $("link").innerHTML = "Immediately close this tab.";
  }
}

function alreadyDrank() {
  $("message").innerHTML = "Change to approrpriate clothes.<br>Take a walk outside.";
  $("link").innerHTML = "<ins onclick='raining()'>But it's raining!</ins>";
}

function raining() {
  $("message").innerHTML = "<a href='stepmania.html'>Play Stepmania.</a>";
  $("link").innerHTML = "<ins onclick='noStepmania()'>The TV is occupied, or I can't be making noise downstairs.</a>";
}

function noStepmania() {
  $("message").innerHTML = "OK, fine. Just sleep in for longer. Your body will thank me later.";
  document.body.removeChild($("link"));
}

function $(x) {
  return document.getElementById(x);
}
