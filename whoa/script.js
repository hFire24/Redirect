var messages = ['DO NOT FAP',
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
'OH MY FURTING GOO. SERIOUSLY!?'];

function loadWebsite(index)
{
  if(index < 1 || index > messages.length)
    index = Math.floor(Math.random() * messages.length);
  else
    index = index - 1;
  var message = document.getElementById("message");
  if(index === messages.indexOf("YOU WISH YOU ARE A CUTE ANIME GIRL? 🤣🤣"))
  {
    message.innerHTML = messages[index];
    message.removeAttribute("onClick");
  }
  else if(index === messages.indexOf("PLAY TABERNACLE CHOIR MUSIC"))
  {
    message.innerHTML = '✝' + messages[index] + '✝';
    message.removeAttribute("onClick");
  }
  else
    message.innerHTML = '☢' + messages[index] + '☢';
  if (index === messages.indexOf("<i>PLAY FURY OF THE STORM </i>"))
    link = "https://youtu.be/5i7qZxICwgQ";
  else if(index >= messages.indexOf("ERADICATE THE SIN OF LUST") && index <= messages.indexOf("YOU NEED MORE JESUS"))
    link = "../repent2.html";
  else if(index === messages.indexOf("PLAY TABERNACLE CHOIR MUSIC"))
    link = "https://www.thetabernaclechoir.org/listen.html";
  else
    link = "https://emergency.nofap.com/redirect?religious=true&cat=em";
  createAdvice();
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
          location.href = "../musicSlider.html";
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
