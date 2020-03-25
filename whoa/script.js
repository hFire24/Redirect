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
'OPEN STEAM AND SHADOW☢<br>☢PLAY FURY OF THE STORM',
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

  if(index === messages.indexOf('YOU WISH YOU ARE A CUTE ANIME GIRL? 🤣🤣'))
  {
    message.innerHTML = messages[index];
    message.addEventListener("click",function(){
      var exists = document.getElementById("hakase");
        if (!exists) {
          message.innerHTML = message.innerHTML + "<br>";
          var video = document.createElement("video");
          video.id = "hakase";
          var source = document.createElement("source");
          source.src = "../media/ROFL.mp4";
          source.type = "video/mp4";
          video.appendChild(source);
          message.appendChild(video);
        }
      document.getElementById("hakase").play();});
  }
  else if(index === messages.indexOf("PLAY TABERNACLE CHOIR MUSIC"))
    message.innerHTML = '✝' + messages[index] + '✝';
  else
    message.innerHTML = '☢' + messages[index] + '☢';
  if (index === messages.indexOf("OPEN STEAM AND SHADOW☢<br>☢PLAY FURY OF THE STORM"))
    link = "https://play.google.com/music/listen?u=0#/wst/st/dd1bd673-f374-3831-adc1-f327aec1a6a8";
  else if(index >= messages.indexOf("ERADICATE THE SIN OF LUST") && index <= messages.indexOf("YOU NEED MORE JESUS"))
    link = "../repent2.html";
  else if(index === messages.indexOf("PLAY TABERNACLE CHOIR MUSIC"))
    link = "https://www.thetabernaclechoir.org/listen.html";
  else
    link = "https://emergency.nofap.com/redirect?religious=true&cat=em";
  var hydrate = Math.floor(Math.random() * 10);
  console.log(hydrate);
  if (hydrate < 1)
    alert("Just a reminder to stay hydrated.\nYou may need to stand up and stretch.");
  else if (hydrate < 3)
    alert("Here's a tip: Some music can help you focus.\n\nLazy? Play some trance music to energize.\nCan't focus? Play some chillout music to relax.");
}

async function nuke()
{
  var message = document.getElementById("message").innerHTML;
  var play = 0;
  for(var i = 0; i < message.length; i++)
    if(message.charAt(i) === '☢')
      play++;
  for(i = 0; i < play; i++)
  {
    document.getElementById("nuke").play();
    await sleep(2064);
    if(!document.getElementById("press").paused)
      break;
  }
  document.getElementById("nuke").pause();
  console.log(message.indexOf('☢'));
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
