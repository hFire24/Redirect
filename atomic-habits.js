const jcQuotes = ["1.01<sup>365</sup> = 37.8<br>0.99<sup>365</sup> = 0.03", //Page 15
"You do not rise to the level of your goals. You fall to the level of your systems.", //Page 27
"True behavior change is identity change.", //Page 34
"Every action you take is a vote for the type of person you wish to become.", //Page 38
"Decide the type of person you want to be. Prove it to yourself with small wins.", //Page 39
"The people who don’t have their habits handled are often the ones with the least amount of freedom.", //Page 46
"The process of building a habit can be divided into four simple steps: cue, craving, response, and reward.", //Page 47
"What you crave is not the habit itself but the change in state it delivers.", //Page 48
"Want to start a good habit? Make it obvious.", //First Law
"Become aware of your habits. Identify which habits are good, and which are bad.", //Page 62
"Check out <a href='https://s3.amazonaws.com/jamesclear/Atomic+Habits/The+Habits+Scorecard.pdf'>The Habits Scorecard</a>! RescueTime and iOS Screen Time can help you with that.", //Pages 62-64
"Plan your week using Implementation Intention.", //Page 70
"For good habits, determine where, when (day and time), and how you're going to do them.", //Implementation Intention
"I will [action] for [duration] at [time] in [location].", //Page 71
"If implementation intentions aren't working, add plans to ensure that these actions will be done.", //Coping plans
"I will [action] for [duration] at [time] in [location]. And if I can't do it, I'll do it at [time]/in [location].", //Implementation Intention 2
"I will [action] for [duration] at [time] in [location]. And if I don't feel like doing it, I'll do just a little.", //Implementation Intention 3
"One of the best ways to build a new habit is to identify a current habit you already have and then stack your new behavior on top.", //Page 74
"After I [current habit], I will [new habit].", //74
"Prime your environment by making cues of good habits obvious.", //Chapter 6
"If you want to make a habit a big part of your life, make the cue a big part of your environment.", //Page 86
"You can train yourself to link a particular habit with a particular context.", //Page 88
"Divide your room into activity zones. Every habit should have a home.", //Page 89
"Prime your environment to eliminate bad habits.",
"The people with the best self-control are typically the ones who need to use it the least.", //Page 93
"The way to improve [perseverance, grit, and determination] is by creating a more disciplined environment.", //Page 93
"You can break a habit, but you're unlikely to forget it.", //Page 94
"I have never seen someone consistently stick to positive habits in a negative environment.", //Page 94
"Want to resist a bad habit? Make it invisible.", //Inverse of the First Law
"One of the most practical ways to elimiate a bad habit is to reduce exposure to the cue that causes it.", //Page 95
"Want to keep a good habit alive? Make it attractive.", //Second Law
"If you want to increase the odds that a behavior will occur, then you need to make it attractive.", //Page 104
"Your brain has far more neural circuitry allocated for wanting rewards than for liking them.", //Page 108
"We need to make our habits attractive because it is the expectation of a rewarding experience that motivates us to act in the first place.", //Page 108
"Temptation bundling works by linking an action you want to do with an action you need to do.", //Page 109
"You’re more likely to find a behavior attractive if you get to do one of your favorite things at the same time.", //Page 109
"After I [CURRENT HABIT], I will [HABIT I NEED]. After [HABIT I NEED], I will [HABIT I WANT].", //Page 110
"Of course, peer pressure is bad only if you’re surrounded by bad influences.", //Page 117
"One of the most effective things you can do to build better habits is to join a culture where your desired behavior is the normal behavior.", //Page 117
"Nothing sustains motivation better than belonging to the tribe. It transforms a personal quest into a shared one.", //Page 118
"The normal behavior of the tribe often overpowers the desired behavior of the individual.", //Page 120
"Want to quit a bad habit? Make it unattractive.", //Inverse of the Second Law
"Want to make a good habit? Make it easy.", //Third Law
"Want to end a bad habit? Make it difficult.", //Inverse of the Third Law
"Want to enjoy a good habit? Make it satisfying.", //Fourth Law
"Want to get rid of a bad habit? Make it unsatisfying.", //Inverse of the Fourth Law
"Identify cues that cause bad habits.", //First Law Bonus Material
"Perform a habit early in the day rather than later in the day.", //Second Law Bonus Material
"Eliminate, automate, or streamline certain behaviors of a given habit.", //Third Law Bonus Material
"Rather than focusing on the results of a habit, focus on how it makes you feel." //Fourth Law Bonus Material
];

const jcPages = ["15", "27", "34", "38", "39", "46", "47", "48", "57", "62", "62-64", "70", "70", "71", "N/A", "N/A", "N/A", "74", "74", "N/A", "86", "88", "89", "N/A", "93", "93", "94", "94", "95", "95", "99", "104", "108", "108", "109", "109", "110", "117", "117", "118", "120", "126",
"TBD", "TBD", "TBD", "TBD", "N/A", "N/A", "N/A", "N/A"];

function jamesClearQuote(array,index) {
  if (index < 0 || index >= array.length)
    index = Math.floor(Math.random() * array.length)
  $("message").innerHTML = array[index];
  //Put index value to the console
  console.log("Quote " + index);
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
  messageComplete = false;
  var input = $("lifeAdvice");
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      submit();
    }
  });
}

function loadAllQuotes() {
  var i = 0;
  var parent = document.getElementById("atomhab-list");
  while(i < jcQuotes.length) {
    var brighten = false;
    if (i % 2 === 0)
      brighten = true;
    var quote = document.createElement("span");
    quote.innerHTML = jcQuotes[i];
    quote.className = "small";
    parent.appendChild(quote);
    var pageNum = document.createElement("span");
    pageNum.innerHTML = jcPages[i];
    pageNum.className = "small";
    parent.appendChild(pageNum);
    if(brighten) {
      quote.classList.add("brighter");
      pageNum.classList.add("brighter");
    }
    i++;
  }
}

randomTheme(7);

function submit()
{
  if(found(["cirno"],lifeAdvice.value.toLowerCase()))
    location.href = "cirno.html";
  $("form").innerHTML = $("lifeAdvice").value;
  messageComplete = true;
}
