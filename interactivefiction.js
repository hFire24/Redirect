var input = $("newBreak");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submit();
  }
});

var d = new Date();

function finalTest(inputText,site)
{
  if (inputText.indexOf("sick") >= 0 && inputText.indexOf("sick of") < 0) {
    $("question").innerHTML = "Your health matters. If you have some kind of disease, it's best to rest, drink plenty of fluids, and give your eyes a break.";
    $("link").innerHTML = "Go to Soundwise, followed by \"Improve Your Physical Health\", and listen to \"" + generateHealthLink() + "\"";
  }
  else if(inputText.indexOf("struggl") >= 0)
    location.href = "struggle.html";
  else if (inputText === 'custom task' || inputText.indexOf("something") >= 0 && inputText.indexOf("do") >= 0 && (found(required,inputText) || inputText.indexOf("specific") >= 0))
    location.href = "custom.html";
  else if(inputText.indexOf("busy") >= 0)
    location.href = "busy.html";
  else if (found(["do something","take a break"],inputText))
    location.href = "time.html";
  else if(inputText.indexOf("music") >= 0 && !(site === "google" && found(knowledge,inputText))) {
    if(inputText.indexOf("listening") >= 0)
      location.href = "cyoa/9.html";
    else
      location.href = "musicSlider.html";
  }
  else if(found(["wait","patient"],inputText))
    location.href = "cyoa/12.html";
  else if (inputText.indexOf("tasks") >= 0) {
    $("question").innerHTML = "Just type in \"ta\" in your browser and press enter.";
    document.body.removeChild($("link"));
  }
  else if(found(['hunger', 'hungry', 'hangry', ' eat', 'food', 'famished', 'starving', 'stomach', 'devour', 'swallow', 'delicious', 'yummy', 'tasty'],inputText)) {
    if(d.getDay() === 0 && d.getHours() >= 1 && d.getHours() < 17 && (d.getDate() <= 7 && !generalConferenceMonth() || d.getDate() > 7 && d.getDate() <= 14 && generalConferenceMonth())) {
      $("question").innerHTML = "<img id='fast-sunday' style='max-width:95%; height:auto;' src='media/Fasting.png' alt='a bunch of text that persuades the reader to fast on fast sunday'>";
      document.body.removeChild($("link"));
    }
    else {
      $("question").innerHTML = "You need to eat some food right now.";
      if(d.getDay() === 0)
        document.body.removeChild($("link"));
      else
        $("link").innerHTML = "<a href='https://www.doordash.com/en-US'>Click here if you want to spend over $10 for food delivery.</a>";
    }
  }
  else if(found(['suicid', 'die ', 'be dead', 'kill', 'murder', 'kill me', 'kill myself', 'perish', 'get rid of myself', 'homicid', 'end my life', 'life to end', 'hang myself', 'destroy myself', 'destroy my life'],inputText)
  && !found(wasteTime,inputText) && !found(['die cast','diecast'],inputText) || found(negativity,inputText) && found(['live', 'living', 'exist', 'earth', 'planet', 'world'],inputText)
  || inputText.endsWith("die") && !found(['birdie','hoodie','indie','roll a die'],inputText)) {
    $("question").innerHTML = "This is very serious. Immediately call the national helpline, or talk to someone you absolutely trust about your issues.";
    document.body.removeChild($("message"));
    document.body.removeChild($("link"));
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
  }
  else if(found(['erection', 'boner'],inputText))
    erectionQuestion(1);
  else if(found(['relapse', 'fapped', 'ejaculated', 'orgasmed', 'masturbated', 'refractory'],inputText))
    location.href = 'relapse.html';
  else if(found(['peeked', 'already looked', 'already saw', 'too late', 'already watched', 'already viewed', 'already browsed', 'fantasiz'],inputText))
    location.href = 'kirby.html';
  else if(found(['fap', 'urbate', 'ejaculat', 'bust a nut', 'busting a nut', 'nutting', 'lust', 'horny', 'arous', 'sex', 'unclean', 'dirty', 'sinful'],inputText))
    location.href = 'whoa/index.html';
  else if(found(['whoa', 'nuke', 'emergency button'],inputText))
    location.href = 'whoa/old.html'
  else if(found(['check', 'new'],inputText) && !(site === "google" || site === "youtube2")) {
    if ($("message").innerHTML === "There's nothing beneficial to see there.")
      $("question").innerHTML = "I repeat: There's nothing beneficial to see there.";
    else
      $("question").innerHTML = "There's nothing beneficial to see there.";
    $("link").innerHTML = "<a href='cyoa/35.html'>Click here to continue.</a>";
  }
  else if(found(['focus', 'concentrate'],inputText)) {
    $("question").innerHTML = "Well there's your problem.";
    $("link").innerHTML = "<a href='cyoa/18.html'>Click here to continue.</a>";
  }
  else if(found(['poop', 'fart', 'defecat', 'feces', 'butt', 'turd', 'dung'],inputText) && !(inputText.indexOf('feel like') >= 0 && inputText.indexOf('poop') >= 0 && inputText.indexOf('pooping') < 0))
    location.href = 'crap.html';
  else if(inputText.indexOf("nanah") >= 0)
    location.href = "cyoa/28.html";
  else if(found(['hate myself', 'hate my life', 'worthless', 'i don\'t matter', 'i do not matter', 'give up in life', 'lost all hope'],inputText)) {
    $("question").innerHTML = "<a id='relax' href='relax2.html?mood=self+hate'>You need self-love.</a>";
    $("link").innerHTML = "<a href='stress.html'>No.</a>";
  }
  else if(found(['angry', 'anger', 'furi', 'rage', ' mad ', 'mad.', 'mad!', 'hate ', ' hate', 'despise', 'loathe', 'punch', 'attack', 'bully', 'hating', 'hated', 'shut up', 'frustrat', 'offended'],inputText)) {
    $("question").innerHTML = "<a id='relax' href='relax.html?mood=angry'>You need to calm down and relax.</a>";
    $("link").innerHTML = "<a href='stress.html'>I don't feel like it.</a>";
  }
  else if(found(['worr', 'anxi', 'scared', 'afraid', 'fear', 'bad memories', 'trigger', 'haunt', 'trauma', 'panic', 'nerv', 'fail in life',],inputText)) {
    $("question").innerHTML = "<a id='relax' href='relax.html?mood=worried'>Don't worry. Just calm down and relax.</a>";
    $("link").innerHTML = "<a href='stress.html'>I don't feel like it.</a>";
  }
  else if(found(['stressed','upset'],inputText)) {
    $("question").innerHTML = "<a id='relax' href='relax.html?mood=stressed'>You need to calm down and relax.</a>";
    $("link").innerHTML = "<a href='stress.html'>I don't feel like it.</a>";
  }
  else if(found(['sick of', 'sad', 'disappointed', 'miserable', 'depress', 'feel lost', 'fail in life', 'failure', 'waste', 'awful', 'stuck', 'hopeless'],inputText)) {
    $("question").innerHTML = "<a id='relax' href='relax.html?mood=sad'>It's time calm down and relax.</a>";
    $("link").innerHTML = "<a href='stress.html'>I don't feel like it.</a>";
  }
  else if (found(negativity,inputText))
    location.href = "cyoa/15.html";
  else if(found(['overwhelm', 'too much', 'too many', 'burnt out', 'burnout'],inputText))
    location.href = 'cyoa/48.html';
  else if(found(['calm', 'relax', 'peace', 'chill', 'fresh', 'reenergize', 'meditate', 'refresh'],inputText) || found(['clear', 'reset'],inputText) && inputText.indexOf('mind') >= 0)
    location.href = 'relax.html';
  else if(found(['tired', 'exhaust', 'sleep'],inputText)) {
    if(d.getHours() >= 6 && d.getHours() <= 12) {
      $("question").innerHTML = "You need to drink some water.";
      $("link").innerHTML = "<ins onclick='alreadyDrank()'>But I just drank some water.</ins>";
    }
    else if(d.getHours() < 17) {
      $("question").innerHTML = "You should take a power nap.";
      $("link").innerHTML = "<a href='https://www.youtube.com/watch?v=RXBG1-1zI_E'>Click here to continue.</a>";
    }
    else if(d.getHours() < 22) {
      $("question").innerHTML = "You should recharge yourself. But how?";
      $("link").innerHTML = "<a id='relax' href='relax2.html?mood=evening'>Click here to continue.</a>";
    }
    else
      location.href = "cyoa/14.html";
  }
  else if(found(['cirno','crino','cinro','ciron'],inputText))
    location.href = "cirno.html?q=" + inputText;
  else if(inputText.indexOf("lazy") >= 0 && (site !== "google" || site !== "youtube2")) {
    $("question").innerHTML = "Are you lazy, or are you just exhausted?";
    $("link").innerHTML = "<div class='two-list space'><a class='hfire-link' href='cyoa/15.html'>Lazy</a><a class='hfire-link' href='cyoa/20.html'>Exhausted</a></div>";
  }
  else if(site === "deviantart" && (found(love,inputText)) || found(['cute', 'aww', 'adorable', 'chino', 'rem', 'maid', 'dress', 'loli', 'onii-chan'],inputText))
    location.href = "animeslider.html";
  else if(inputText.indexOf("anime") >= 0) {
    $("question").innerHTML = "Remember what you said about quitting anime?";
    $("link").innerHTML = "<a href='cyoa/35.html'>Click here to continue.</a>";
  }
  else if(found(['play', 'game'],inputText)) {
    question.innerHTML = "How long have you been being productive?";
    link.innerHTML = "<div class='two-list space'><a class='hfire-link' href='index.html'>&lt;45 minutes</a><a class='hfire-link' href='cyoa/29.html'>At least 45 minutes</a></div>";
  }
  else if(found(['lost', 'lose', 'failed', 'pathetic', 'am defeat', 'feel defeat', 'defeated me', 'poop'],inputText)) {
    $("question").innerHTML = "You won't feel like a loser anymore after listening to one of those meditations.";
    $("link").innerHTML = "<a href='relax2.html'>Click here to continue.</a>";
  }
  else if(site === "google" || site === "youtube2") {
    if(count < 2 && !(inputText === "it's totally useless information")) {
      console.log(count);
      input.value = "";
      if(found(required,inputText) || count !== 1 && (found(knowledge,inputText) || inputText === '' || inputText.indexOf('save') >= 0)) {
        count = 1;
        $("question").innerHTML = "Just how important is that search term?";
        $("custom-reason").value = -1;
        $("dropdown").style.display = "none";
        input.style.display = "none";
        $("submit").style.display = "none";
        $("slider1").style.display = "block";
      }
      else {
        count = 2;
        $("question").innerHTML = "Would you like to save that search term for later?";
        $("custom-reason").value = -1;
        input.style.display = "none";
        $("submit").style.display = "none";
        $("dropdown").style.display = "none";
        $("slider1").style.display = "none";
        $("yesnomaybe").style.display = "grid";
      }
    }
    else {
      var messages = ['You really are bored.',
      'Stop typing in distracting search terms!',
      'Stop escaping from your problems!',
      'Forget that search term!',
      'You shouldn\'t search that term.',
      'Don\'t you have anything better to do with your time?',
      'Don\'t search for time-wasting things!',
      'Your mind must be wandering off, isn\'t it?',
      'You need to stop procrastinating.',
      'You just wanted to sidetrack. Not good.',
      'Nothing good will come out of searching that term.',
      'You are procrastinating and not getting things done.',
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
      'If you\'re bored, just try to do something productive.',
      'You want to go there, but you don\'t need to go there.',
      'Don\'t be addicted to the internet.',
      'Fun things are good, but they are distractions.'];
      if(site === "youtube2")
      messages.push('Don\'t waste time getting distracted on YouTube.',
      'You want to spend your life watching useless YouTube videos? 🤣');
      else {
        messages.push('Don\'t waste time getting distracted on Google.',
        'You want to spend your life Googling useless stuff? 🤣');
      }
      var replace = messages[Math.floor(Math.random() * messages.length)];
      if (replace === $("message").innerHTML)
        replace = messages[Math.floor(Math.random() * messages.length)];
      else
        document.getElementById("question").innerHTML = replace;
      document.getElementById("link").innerHTML = "<a href='cyoa/35.html'>Click here to continue.</a>";
    }
  }
  else if(found(['productive','to accomplish','get stuff done','work','to achieve'],inputText)) {
    $("question").innerHTML = "What sounds more appealing?";
    $("link").innerHTML = "";
    $("link").classList.add("two-list");
    var productiveActivities = ["Completing Tasks","Achieving Goals","Creating a Task","Doing Something"];
    var links = ["cyoa/2.html","goals.html","custom.html","time.html"];
    for (var i in links) {
      var element = document.createElement('a');
      element.classList.add('hfire-link');
      element.innerHTML = productiveActivities[i];
      element.href = links[i];
      $("link").appendChild(element);
    }
  }
  else if(found(['succe', 'accomplish',' win', ' won', 'champion','victor'],inputText)) {
    $("question").innerHTML = "Congratulations! Give yourself a pat on the back, and keep that winning streak alive!";
    $("link").innerHTML = "<a href='cyoa/35.html'>Click here to continue.</a>";
  }
  else if(inputText.indexOf("do stuff") >= 0)
    location.href = "time.html";
  else if(found(["unblock","access","bypass"],inputText)) {
    $("question").innerHTML = "If you unblock that website, you'll waste too much time.";
    $("link").innerHTML = "<a href='cyoa/35.html'>Click here to continue.</a>";
  }
  else if(inputText.indexOf("procrast") >= 0 || found(wasteTime,inputText)) {
    $("question").innerHTML = "Here. Read this article in the link below.";
    $("link").innerHTML = "<a href='https://alphaefficiency.com/4-types-procrastination-beat/'>Click here to continue.</a>";
  }
  else if(site === "busy") {
    $("question").innerHTML = "You need an energy boost.";
    $("link").innerHTML = "<a id='relax' href='relax.html'>Click here to continue.</a>";
  }
  else if(inputText.indexOf("research") >= 0) {
    $("question").innerHTML = "Aww, yes. \"Research.\" One of the most common excuses for procrastination.";
    $("link").innerHTML = "<a href='cyoa/35.html'>Click here to continue.</a>";
  }
  else if(found(['funny', 'laugh', 'hilarious', 'lol', 'xd'],inputText)) {
    $("message").innerHTML = "Šílený Ota";
    if(site === "hotanddry")
      $("message").classList.add("space");
    document.body.removeChild($("question"));
    var video = document.createElement("video");
    video.id = "silenyota";
    var source = document.createElement("source");
    source.src = "media/Sileny Ota.mp4";
    source.type = "video/mp4";
    video.appendChild(source);
    $("link").appendChild(video);
    $("link").removeChild(input);
    $("link").removeChild($("submit"));
    $("link").removeChild($("dropdown"));
    if(site === "youtube") {
      $("link").removeChild(document.getElementById("youtube-reasons"));
      $("link").removeChild(document.getElementById("other-reason"));
    }
    $("message").addEventListener("click",function(){$("silenyota").play();});
    $("link").addEventListener("click",function(){$("silenyota").play();});
    $("silenyota").play();
  }
  else if(inputText.indexOf("fun") >= 0) {
    $("question").innerHTML = "Fun things are good, but they are distractions.";
    $("link").innerHTML = "<a href='cyoa/35.html'>Click here to continue.</a>";
  }
  else if(inputText.indexOf("want") >= 0) {
    if(inputText.indexOf("nothing") >= 0)
      location.href = "cyoa/13.html";
    else {
      $("question").innerHTML = "You want to go there, but you don't need to go there.";
      $("link").innerHTML = "<a href='cyoa/35.html'>Click here to continue.</a>";
    }
  }
  else if(found(['need', 'live without', 'addict'],inputText)) {
    $("question").innerHTML = "Don't be addicted to the internet.";
    $("link").innerHTML = "<a href='cyoa/35.html'>Click here to continue.</a>";
  }
  else if(found(love,inputText) && site === "youtube")
    location.href = 'cyoa/38.html';
  else if(found(['really bored','very bored'],inputText))
    location.href = 'index.html';
  else if(inputText.indexOf("nothing") >= 0)
    location.href = 'multiple.html';
  else if(inputText.indexOf("habit") >= 0) {
    location.href = "atomic-habits.html";
  }
  else if(found(['bored', 'don\'t know', 'dunno', 'no idea', 'no reason', 'idk', 'feel like it', 'uhh', 'umm', 'hmm', 'meme'],inputText)) {
    var messages = ['You really are bored.',
    'Stop escaping from your problems!',
    'Don\'t you have anything better to do with your time?',
    'Your mind must be wandering off, isn\'t it?',
    'You need to stop procrastinating.',
    'You just wanted to sidetrack. Not good.',
    'You are procrastinating and not getting things done.',
    'You live to be entertained? 🤣',
    'You may seem bored or lazy, but you are fearful.',
    'You have more important things to do.',
    'Please stop being lazy, and stop wasting your time.',
    'Don\'t have a lazy, unproductive day.',
    'Is what you\'re doing what you really want?',
    'It seems like you feel stuck.',
    'You need motivation.',
    'If you\'re bored, just try to do something productive.'];
    if(site !== 'hotanddry') {
      messages.push('Stop typing in addresses of distracting websites!',
      'Forget about that website!',
      'You shouldn\'t access that website now.',
      'Don\'t waste time getting distracted on blocked websites.',
      'Don\'t go to time-wasting websites!',
      'There\'s nothing beneficial to see there.',
      'Nothing good will come out of going to that website.',
      'Don\'t get dictated by your urges.',
      'Now is not the time to be doing that.',
      'You really don\'t want to go to that website anyway.');
      if(site === 'reddit') {
        var arrayLength = messages.length;
        for(var i = arrayLength; i < arrayLength * 2; i++)
          messages.push('Reddit is bad.');
      }
      else if(site === 'deviantart') {
        messages.push('You wish you are a cute anime girl? 🤣🤣',
        'Your ideal self is a cute little kid? 🤣🤣',
        'Life isn\'t about seeking cuteness.');
      }
    }
    else if(window.innerWidth <= 812) {
      messages.push('Stop sporadically checking your phone!',
      'Your phone is like a prison. Break out of it.',
      'You shouldn\'t use your phone just because you\'re bored.',
      'Don\'t waste time getting distracted on your phone.',
      'You want to be on your phone all the time? 🤣',
      'Now is not the time to be doing that.',
      'You really don\'t want to use your phone to kill boredom anyway.',
      'There\'s e-books on your phone. Read them.',
      'You have a phone. Use it to call your grandparents.');
    }
    var replace = messages[Math.floor(Math.random() * messages.length)];
    if (replace === $("message").innerHTML)
      replace = messages[Math.floor(Math.random() * messages.length)];
    else
      document.getElementById("question").innerHTML = replace;
    document.getElementById("link").innerHTML = "<a href='cyoa/35.html'>Click here to continue.</a>";
  }
  else if(inputText.indexOf("i can") >= 0) {
    $("question").innerHTML = "You could, but you should be doing one of those four things instead.";
    $("link").innerHTML = "<a href='cyoa/35.html'>Click here to continue.</a>";
  }
  else if(site === "reddit") {
    $("question").innerHTML = "Reddit is bad.";
    $("link").innerHTML = "<a href='cyoa/35.html'>Click here to continue.</a>";
  }
  else {
    $("question").innerHTML = "I'm gonna assume that you should be more productive instead.";
    $("link").innerHTML = "<a href='cyoa/35.html'>Click here to continue.</a>";
  }
}

var required = ['need', 'have to', 'must', 'mean', 'required', 'force', 'urgent', 'emergency', 'immediate', 'important', 'critical', 'crucial', 'essential'];
var wasteTime = ['kill time', 'kill some time', 'killing time', 'killing some time', 'waste time', 'waste some time', 'wasting time', 'wasting some time'];
var love = ['love','adore','enjoy','favorite','best'];
var negativity = ['don\'t want', 'do not want', 'give up', 'stop', 'terminate', 'hate'];
var knowledge = ['learn','curious','to know','stud','educat','smart','knowledg'];

function generateHealthLink() {
  var healthMeditations = ["Symptom Control","Visualise Healing"];
  return healthMeditations[Math.floor(Math.random() * healthMeditations.length)];
}

function found(array,inputText) {
  for (var i in array)
    if (inputText.indexOf(array[i]) >= 0)
      return true;
  return false;
}

function areYouBored(site) {
  var random = Math.floor(Math.random() * 30)
  console.log("Random " + random);
  if(random < 16 && (site === 'youtube' || site === 'deviantart') && $("question")) {
    if(site === 'youtube')
      $("question").innerHTML = "Let me guess. You're bored and feel like going to YouTube.";
    else if(site === 'deviantart')
      $("question").innerHTML = "Let me guess. You're thinking about cute anime girls.";
    $("link").style.display = "none";
    $("yesno").style.display = "grid";
  }
}

function alreadyDrank() {
  $("question").innerHTML = "<a href='https://app.mysoundwise.com/mysoundcasts'>Listen to Morning Boost under Make the Most of Your Day.</a>";
  $("link").innerHTML = "<ins onclick='meditated()'>Continue</ins>";
}

function meditated() {
  $("question").innerHTML = "Change to approrpriate clothes.<br>Take a walk outside.";
  $("link").innerHTML = "<div class='two-list'><a href='stepmania.html'>But it's raining!</a><ins onclick='hurt()'>But I hurt my foot!</ins></div>";
}

function hurt() {
  $("question").innerHTML = "Sorry to hear about that! Make sure you take preventative measures so that your feet don't hurt next time.";
  $("link").innerHTML = "<a href='time.html'>In the meantime, just do something else.</a>";
}

function raining() {
  $("question").innerHTML = "<a href='stepmania.html'>Play Stepmania.</a>";
  $("link").innerHTML = "<ins onclick='noStepmania()'>The TV is occupied, or I can't be making noise downstairs.</a>";
}

/*function noStepmania() {
  $("question").innerHTML = "OK, fine. Just sleep in for longer. Your body will thank me later.";
  document.body.removeChild($("link"));
}*/

function generalConferenceMonth() {
  if (d.getMonth() === 3 || d.getMonth() === 9)
    return true;
  else {
    return false;
  }
}

function erectionQuestion(number) {
  switch(number) {
    case 1:
      $("question").innerHTML = "Was it caused by looking at things?";
      $("link").innerHTML = "<div class='two-list'><a class='hfire-link' onclick='erectionQuestion(2)'>Yes</a> <a class='hfire-link' onclick='erectionQuestion(3)'>No</a></div>";
      break;
    case 2:
      location.href = "kirby.html";
      break;
    default:
      location.href = "cyoa/20.html";
  }
}

function cantRelax(number) {
  switch(number) {
    case 1:
      $("question").innerHTML = "Are you alone?";
      $("link").innerHTML = "<div class='two-list'><a class='hfire-link' onclick='cantRelax(2)'>Yes</a> <a class='hfire-link' onclick='cantRelax(3)'>No</a></div>";
      break;
    case 2:
      $("question").innerHTML = "Just turn off you brain and enjoy some twintail action!";
      document.body.removeChild($("link"));
      break;
    case 3:
      $("question").innerHTML = "Do you have earbuds with you?";
      $("link").innerHTML = "<div class='two-list'><a class='hfire-link' onclick='cantRelax(4)'>Yes</a> <a class='hfire-link' onclick='cantRelax(5)'>No</a></div>";
      break;
    case 4:
      $("question").innerHTML = "Just shuffle all your liked videos on YouTube.";
      $("link").innerHTML = "Don't forget to unblock YouTube if possible.";
      break;
    default:
      $("question").innerHTML = "In this case, play a game like Minesweeper or I Love Hue";
      document.body.removeChild($("link"));
  }
}

function displayAdvice() {
  var hydrate = Math.floor(Math.random() * 10);
  console.log("Popup " + hydrate);
  if (hydrate < 1)
    $("hydrate").style.display = "block";
  else if (hydrate < 2)
    $("musictip").style.display = "block";
}

function disappear() {
  document.getElementById("hydrate").style.display = "none";
  document.getElementById("musictip").style.display = "none";
}

function $(x) {
  return document.getElementById(x);
}
