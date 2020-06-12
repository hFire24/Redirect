var input = $("newBreak");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submit();
  }
});

function finalTest(inputText,site)
{
  if (inputText === 'custom task' || inputText.indexOf("something") >= 0 && inputText.indexOf("need") >= 0)
    location.href = "custom.html";
  else if(inputText.indexOf("busy") >= 0)
    location.href = "busy.html";
  else if (inputText.indexOf("do something") >= 0 || inputText.indexOf("take a break") >= 0)
    location.href = "time.html";
  else if(newFound(inputText)) {
    $("message").innerHTML = "There's nothing beneficial to see there.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(inputText.indexOf("lazy") >= 0) {
    $("message").innerHTML = "Be like Anzu Futaba, and watch more anime.";
    $("link").innerHTML = "<a href='nextanime.html'>Click here to coninue.</a>";
  }
  else if(inputText.indexOf("focus") >= 0) {
    $("message").innerHTML = "Well there's your problem.";
    $("link").innerHTML = "<a href='cyoa/18.html'>Click here to coninue.</a>";
  }
  else if(worriesFound(inputText)) {
    $("message").innerHTML = "You need to calm down and relax.";
    $("link").innerHTML = "<a id='relax' href=" + generateAndrewJohnsonLink() + ">Click here to continue.</a>";
  }
  else if(calmFound(inputText) || inputText.indexOf('clear') >= 0 && inputText.indexOf('mind') >= 0) {
    location.href = generateAndrewJohnsonLink();
  }
  else if(humorFound(inputText)) {
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
    $("message").addEventListener("click",function(){$("silenyota").play();});
    $("link").addEventListener("click",function(){$("silenyota").play();});
    $("silenyota").play();
  }
  else if(site === "busy") {
    $("message").innerHTML = "You need an energy boost.";
    $("link").innerHTML = "<a id='relax' href=" + generateAndrewJohnsonLink() + ">Click here to continue.</a>";
    ;
  }
  else if(inputText.indexOf("fun") >= 0) {
    $("message").innerHTML = "Fun things are good, but they are distractions.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(inputText.indexOf("unblock") >= 0) {
    $("message").innerHTML = "If you unblock that website, you'll waste too much time.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(inputText.indexOf("want") >= 0) {
    $("message").innerHTML = "You want to go there, but you don't need to go there.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(addictFound(inputText)) {
    $("message").innerHTML = "Don't be addicted to the internet.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else if(site === "reddit") {
    $("message").innerHTML = "Reddit is bad.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
  else {
    $("message").innerHTML = "If you're bored, just try to do your tasks.";
    $("link").innerHTML = "<a href='cyoa/2.html'>Click here to coninue.</a>";
  }
}

function newFound(inputText)
{
  var excuses = ['check', 'new'];
  return found(excuses,inputText);
}

function worriesFound(inputText)
{
  var worries = ['worr', 'anxi', 'scar', 'afraid', 'bad memories', 'trigger',
  'stress', 'angry', 'anger',
  'punch', 'destroy', 'kill', 'attack', 'bully'];
  return found(worries,inputText);
}

function calmFound(inputText)
{
  var relaxing = ['calm', 'relax', 'peace', 'chill'];
  return found(relaxing,inputText);
}

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

function humorFound(inputText)
{
  var humor = ['funny', 'laugh', 'hilarious'];
  return found(humor,inputText);
}

function addictFound(inputText)
{
  var excuses = ['need', 'live without', 'addict'];
  return found(excuses,inputText);
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

function $(x) {
  return document.getElementById(x);
}
