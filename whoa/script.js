var messages = [];
var message = document.getElementById("message");

function generateArray(age) {
  if (age === 'old') {
    messages.push ('DO NOT FAP',
    'ERADICATE THE SIN OF LUST',
    'DO NOT SIN ON CERTAIN WEBSITES',
    'DO NOT GO AGAINST THE TEACHINGS OF JESUS',
    'YOU NEED MORE JESUS',
    'DO NOT PROCRASTURBATE',
    'DO NOT SCREW UP YOUR DAY',
    'DO NOT DESTROY YOUR FUTURE',
    'DO NOT BE A SICK DEGENERATE',
    'DO NOT THROW YOUR LIFE AWAY',
    'DO NOT FURTHER CORRUPT YOURSELF',
    'DO NOT INDULGE IN TABOO PLEASURES',
    'DO NOT EVEN THINK ABOUT RELAPSING',
    'DO NOT THINK OF IMMORAL FANTASIES',
    'DO NOT LET YOUR URGES DICTATE YOU',
    'DO NOT SEEK FOR SEXUALLY PLEASING THINGS',
    'YOU WERE REDIRECTED FROM A DANGEROUS WEBSITE',
    'YOU WISH YOU ARE A CUTE ANIME GIRL? 🤣🤣',
    'YOU HAVE OTHER THINGS TO DO',
    '☢☢☢☢☢☢☢☢☢',
    'UNCLEAN WEBSITE HAS BEEN CONTAINED',
    'THAT UNSAFE WEBSITE IS BLOCKED',
    'PLAY TABERNACLE CHOIR MUSIC',
    '<i>PLAY FURY OF THE STORM </i>',
    'THINK OF SOMETHING ELSE',
    'ANYTHING SEXUALLY AROUSING IS TERRIBLE',
    'STOP TYPING IN ADDRESSES OF SINFUL WEBSITES',
    'NO MORE OF THIS BS.<br>YOU UNDERSTAND?',
    'RESIST SATAN\'S TEMPTATIONS',
    'OH MY FURTING GOO. SERIOUSLY!?');
  }
  else {
    for (var i = 1; i <= 29; i++)
      messages.push("IMMEDIATELY LEAVE");
    messages.push("PLAY TABERNACLE CHOIR MUSIC");
  }
  loadWebsite();
}

function loadWebsite() {
  var index = Math.floor(Math.random() * 30);
  var urlSearch = window.location.search;
  var parameter = new URLSearchParams(urlSearch);
  var newIndex = parameter.get('id');
  console.log(newIndex);
  if (newIndex !== null)
    if(newIndex > 0 && newIndex <= messages.length)
      index = newIndex - 1;
  if(messages[index] === "YOU WISH YOU ARE A CUTE ANIME GIRL? 🤣🤣")
  {
    message.removeAttribute("onClick");
    message.innerHTML = messages[index];
  }
  else if(messages[index] === "PLAY TABERNACLE CHOIR MUSIC")
  {
    message.innerHTML = '✝' + messages[index] + '✝';
    message.removeAttribute("onClick");
  }
  else
    message.innerHTML = '☢' + messages[index] + '☢';
  if(messages[index] === "PLAY TABERNACLE CHOIR MUSIC")
    link = "https://www.thetabernaclechoir.org/listen.html";
  else if (messages[index] === "<i>PLAY FURY OF THE STORM </i>")
    link = "https://youtu.be/5i7qZxICwgQ";
  else if(index >= messages.indexOf("ERADICATE THE SIN OF LUST") && index <= messages.indexOf("YOU NEED MORE JESUS"))
    link = "../repent2.html";
  else if(messages[index] === "IMMEDIATELY LEAVE")
    //document.getElementById("lower-message").innerHTML = "Do not bring your phone with you.";
    location.href = "old.html";
  else
    link = "https://emergency.nofap.com/redirect?religious=true&cat=em";
}

function setLink(song) {
  if(song === "furyOfTheStorm")
    link = "https://youtu.be/5i7qZxICwgQ";
}

createAdvice();

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
      alert("Here's a tip: Some music can help you focus.\n\nPress OK and then \"Ctrl + M\" for more info.");
      window.addEventListener("keyup", function (event) {
        if (event.keyCode === 77 && event.ctrlKey) {
          event.preventDefault();
          location.href = "https://youtu.be/myeAMU_CP-g";
        }
      });
    }
  }
}

async function nuke()
{
  document.getElementById("nuke").play();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function pushTheButton()
{
  document.getElementById("nuke").pause();
  document.getElementById("press").play();
  document.getElementById("link").style.color = 'white';
  await sleep(1750);
  location.href = link;
}
